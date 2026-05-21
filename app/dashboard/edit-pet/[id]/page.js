"use client";
import { Card, CardBody, Input, Textarea, Select, SelectItem, Button, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";
import { api, endpoints } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SPECIES = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Other"];
const GENDERS = ["Male", "Female", "Unknown"];

export default function EditPetPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api.get(endpoints.pet(id)).then((r) => setForm(r.data))
      .catch(() => toast.error("Not found"));
  }, [id]);

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.put(endpoints.pet(id), { ...form, fee: Number(form.fee) || 0 });
      toast.success("Pet updated");
      router.push("/dashboard/my-listings");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed");
    } finally { setBusy(false); }
  };

  if (!form) return <Spinner color="primary" />;
  return (
    <Card className="bg-content1">
      <CardBody className="p-6 md:p-8">
        <h1 className="text-2xl font-extrabold">Edit Pet</h1>
        <form onSubmit={submit} className="mt-6 grid md:grid-cols-2 gap-4">
          <Input label="Pet Name" value={form.name} onValueChange={set("name")} variant="bordered" />
          <Select label="Species" selectedKeys={[form.species]}
            onSelectionChange={(k) => set("species")(Array.from(k)[0])} variant="bordered">
            {SPECIES.map((s) => <SelectItem key={s}>{s}</SelectItem>)}
          </Select>
          <Input label="Breed" value={form.breed || ""} onValueChange={set("breed")} variant="bordered" />
          <Input label="Age" value={form.age || ""} onValueChange={set("age")} variant="bordered" />
          <Select label="Gender" selectedKeys={[form.gender]}
            onSelectionChange={(k) => set("gender")(Array.from(k)[0])} variant="bordered">
            {GENDERS.map((g) => <SelectItem key={g}>{g}</SelectItem>)}
          </Select>
          <Input label="Image URL" value={form.image} onValueChange={set("image")} variant="bordered" />
          <Input label="Health Status" value={form.healthStatus || ""} onValueChange={set("healthStatus")} variant="bordered" />
          <Input label="Vaccination Status" value={form.vaccinated || ""} onValueChange={set("vaccinated")} variant="bordered" />
          <Input label="Location" value={form.location || ""} onValueChange={set("location")} variant="bordered" />
          <Input type="number" label="Adoption Fee ($)" value={String(form.fee || 0)} onValueChange={set("fee")} variant="bordered" />
          <Textarea label="Description" value={form.description || ""} onValueChange={set("description")}
            variant="bordered" className="md:col-span-2" minRows={4} />
          <div className="md:col-span-2 flex gap-3">
            <Button type="submit" color="primary" size="lg" isLoading={busy}>Save Changes</Button>
            <Button variant="flat" onPress={() => router.push("/dashboard/my-listings")}>Cancel</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
