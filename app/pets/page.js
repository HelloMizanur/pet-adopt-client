"use client";
import { useEffect, useMemo, useState } from "react";
import { api, endpoints } from "@/lib/api";
import PetCard from "@/components/PetCard";
import { Input, Select, SelectItem, Spinner } from "@heroui/react";
import { Search } from "lucide-react";

const SPECIES = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Other"];
const SORTS = [
  { key: "newest", label: "Newest" },
  { key: "oldest", label: "Oldest" },
  { key: "fee_asc", label: "Fee: Low to High" },
  { key: "fee_desc", label: "Fee: High to Low" },
];

export default function AllPetsPage() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState(new Set());
  const [sort, setSort] = useState(new Set(["newest"]));

  const speciesArr = useMemo(() => Array.from(species), [species]);
  const sortKey = useMemo(() => Array.from(sort)[0] || "newest", [sort]);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(true);
      const params = { sort: sortKey };
      if (search.trim()) params.search = search.trim();
      if (speciesArr.length) params.species = speciesArr.join(",");
      api
        .get(endpoints.pets, { params })
        .then((r) => setPets(r.data))
        .finally(() => setLoading(false));
    }, 300);
    return () => clearTimeout(t);
  }, [search, speciesArr, sortKey]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold">All Pets</h1>
      <p className="text-foreground/70 mt-2">Search, filter, and find the one.</p>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <Input
          startContent={<Search size={16} className="text-foreground/50" />}
          placeholder="Search by name…"
          value={search}
          onValueChange={setSearch}
          variant="bordered"
        />
        <Select
          label="Filter by species"
          selectionMode="multiple"
          selectedKeys={species}
          onSelectionChange={setSpecies}
          variant="bordered"
        >
          {SPECIES.map((s) => <SelectItem key={s}>{s}</SelectItem>)}
        </Select>
        <Select
          label="Sort"
          selectedKeys={sort}
          onSelectionChange={setSort}
          variant="bordered"
        >
          {SORTS.map((s) => <SelectItem key={s.key}>{s.label}</SelectItem>)}
        </Select>
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center py-20"><Spinner size="lg" color="primary" /></div>
        ) : pets.length === 0 ? (
          <p className="text-center text-foreground/60 py-20">No pets match your filters.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((p, i) => <PetCard key={p._id} pet={p} index={i} />)}
          </div>
        )}
      </div>
    </div>
  );
}
