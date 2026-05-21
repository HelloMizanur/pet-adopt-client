"use client";
import { Card, CardBody, Input, Textarea, Select, SelectItem, Button } from "@heroui/react";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { api, endpoints } from "@/lib/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SPECIES = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Other"];
const GENDERS = ["Male", "Female", "Unknown"];

export default function AddPetPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", species: "", breed: "", age: "", gender: "Unknown",
    image: "", healthStatus: "", vaccinated: "", location: "",
    fee: "", description: "",
  });
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.species || !form.image)
      return toast.error("Name, species and image are required");
    setBusy(true);
    try {
      await api.post(endpoints.pets, { ...form, fee: Number(form.fee) || 0 });
      toast.success("Pet added!");
      router.push("/dashboard/my-listings");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to add pet");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="bg-content1">
      <CardBody className="p-6 md:p-8">
        <h1 className="text-2xl font-extrabold">Add a Pet</h1>
        <p className="text-foreground/70 mt-1">Fill in pet details to list for adoption.</p>
        <form onSubmit={submit} className="mt-6 grid md:grid-cols-2 gap-4">
          <Input label="Pet Name" isRequired value={form.name} onValueChange={set("name")} variant="bordered" />
          <Select label="Species" isRequired selectedKeys={form.species ? [form.species] : []}
            onSelectionChange={(k) => set("species")(Array.from(k)[0] || "")} variant="bordered">
            {SPECIES.map((s) => <SelectItem key={s}>{s}</SelectItem>)}
          </Select>
          <Input label="Breed" value={form.breed} onValueChange={set("breed")} variant="bordered" />
          <Input label="Age" placeholder="e.g. 2 years" value={form.age} onValueChange={set("age")} variant="bordered" />
          <Select label="Gender" selectedKeys={[form.gender]}
            onSelectionChange={(k) => set("gender")(Array.from(k)[0])} variant="bordered">
            {GENDERS.map((g) => <SelectItem key={g}>{g}</SelectItem>)}
          </Select>
          <Input label="Image URL" placeholder="https://i.ibb.co/..." isRequired
            value={form.image} onValueChange={set("image")} variant="bordered" />
          <Input label="Health Status" value={form.healthStatus} onValueChange={set("healthStatus")} variant="bordered" />
          <Input label="Vaccination Status" value={form.vaccinated} onValueChange={set("vaccinated")} variant="bordered" />
          <Input label="Location" value={form.location} onValueChange={set("location")} variant="bordered" />
          <Input type="number" label="Adoption Fee ($)" value={form.fee} onValueChange={set("fee")} variant="bordered" />
          <Input label="Owner Email" value={user?.email || ""} isReadOnly variant="bordered" className="md:col-span-2" />
          <Textarea label="Description" value={form.description} onValueChange={set("description")}
            variant="bordered" className="md:col-span-2" minRows={4} />
          <div className="md:col-span-2">
            <Button type="submit" color="primary" size="lg" isLoading={busy}>Add Pet</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
