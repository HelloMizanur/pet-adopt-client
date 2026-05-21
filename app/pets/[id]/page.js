"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api, endpoints } from "@/lib/api";
import { useAuth } from "@/lib/auth-context";
import {
  Button, Chip, Image, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Input, Textarea, useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";
import { MapPin, Heart, Calendar, Stethoscope, Shield } from "lucide-react";
import toast from "react-hot-toast";

export default function PetDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api.get(endpoints.pet(id)).then((r) => setPet(r.data))
      .catch(() => toast.error("Pet not found"))
      .finally(() => setLoading(false));
  }, [id]);

  const onAdopt = () => {
    if (!user) {
      toast.error("Please login to adopt");
      router.push("/login?next=/pets/" + id);
      return;
    }
    if (pet?.ownerEmail === user.email) {
      toast.error("You can't adopt your own pet");
      return;
    }
    onOpen();
  };

  const submit = async () => {
    if (!pickupDate) return toast.error("Pick a date");
    setSubmitting(true);
    try {
      await api.post(endpoints.requests, { petId: id, pickupDate, message });
      toast.success("Adoption request sent!");
      onClose();
      router.push("/dashboard/my-requests");
    } catch (e) {
      toast.error(e?.response?.data?.message || "Failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || authLoading)
    return <div className="flex justify-center py-20"><Spinner size="lg" color="primary" /></div>;
  if (!pet) return <div className="text-center py-20">Pet not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Image removeWrapper alt={pet.name} src={pet.image}
            className="w-full aspect-square object-cover rounded-3xl shadow-xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex gap-2 mb-3">
            <Chip color="primary">{pet.species}</Chip>
            {pet.adopted
              ? <Chip color="success">Adopted</Chip>
              : <Chip color="warning">Available</Chip>}
          </div>
          <h1 className="text-4xl font-extrabold">{pet.name}</h1>
          <p className="text-foreground/70 mt-2">{pet.breed || "—"} · {pet.age || "Age N/A"} · {pet.gender}</p>
          <div className="text-3xl font-bold text-primary mt-4">${pet.fee}</div>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {pet.location && <Info icon={MapPin} label="Location" value={pet.location} />}
            {pet.healthStatus && <Info icon={Stethoscope} label="Health" value={pet.healthStatus} />}
            {pet.vaccinated && <Info icon={Shield} label="Vaccinated" value={pet.vaccinated} />}
            <Info icon={Calendar} label="Listed" value={new Date(pet.createdAt).toLocaleDateString()} />
          </div>

          {pet.description && (
            <>
              <h3 className="font-semibold text-lg mt-8">About</h3>
              <p className="text-foreground/80 mt-2 leading-relaxed">{pet.description}</p>
            </>
          )}

          <div className="mt-8 flex gap-3">
            <Button color="primary" size="lg" variant="shadow" onPress={onAdopt}
              isDisabled={pet.adopted} startContent={<Heart size={18}/>}>
              {pet.adopted ? "Already Adopted" : "Adopt Now"}
            </Button>
          </div>
        </motion.div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="lg" backdrop="blur">
        <ModalContent>
          <ModalHeader>Adopt {pet.name}</ModalHeader>
          <ModalBody>
            <Input label="Pet" value={pet.name} isReadOnly variant="bordered" />
            <Input label="Your Name" value={user?.name || ""} isReadOnly variant="bordered" />
            <Input label="Your Email" value={user?.email || ""} isReadOnly variant="bordered" />
            <Input type="date" label="Pickup Date" value={pickupDate}
              onValueChange={setPickupDate} variant="bordered" isRequired />
            <Textarea label="Message" placeholder="Tell the owner why you'd be a great match…"
              value={message} onValueChange={setMessage} variant="bordered" />
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose}>Cancel</Button>
            <Button color="primary" onPress={submit} isLoading={submitting}>Send Request</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-content2/60 border border-divider/30">
      <Icon size={18} className="text-primary" />
      <div>
        <div className="text-xs text-foreground/60">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
