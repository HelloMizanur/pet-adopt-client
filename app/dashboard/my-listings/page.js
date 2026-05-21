"use client";
import { useEffect, useState, useCallback } from "react";
import { api, endpoints } from "@/lib/api";
import {
  Card, CardBody, Button, Image, Chip, Spinner,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
} from "@heroui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, Pencil, Trash2, Inbox } from "lucide-react";

export default function MyListingsPage() {
  const router = useRouter();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePet, setActivePet] = useState(null);
  const [requests, setRequests] = useState([]);
  const [reqLoading, setReqLoading] = useState(false);
  const reqModal = useDisclosure();
  const delModal = useDisclosure();
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get(endpoints.petsMine);
      setPets(data);
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const openRequests = async (pet) => {
    setActivePet(pet);
    reqModal.onOpen();
    setReqLoading(true);
    try {
      const { data } = await api.get(endpoints.requestsForPet(pet._id));
      setRequests(data);
    } catch { toast.error("Failed to load requests"); }
    finally { setReqLoading(false); }
  };

  const decide = async (id, status) => {
    try {
      await api.patch(endpoints.requestStatus(id), { status });
      toast.success(status === "approved" ? "Approved" : "Rejected");
      await openRequests(activePet);
      await load();
    } catch (e) { toast.error(e?.response?.data?.message || "Failed"); }
  };

  const remove = async () => {
    if (!activePet) return;
    setDeleting(true);
    try {
      await api.delete(endpoints.pet(activePet._id));
      toast.success("Pet deleted");
      delModal.onClose();
      setActivePet(null);
      await load();
    } catch (e) { toast.error(e?.response?.data?.message || "Failed"); }
    finally { setDeleting(false); }
  };

  const stats = {
    total: pets.length,
    available: pets.filter((p) => !p.adopted).length,
    adopted: pets.filter((p) => p.adopted).length,
  };

  return (
    <div>
      <div className="flex items-end justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-extrabold">My Listings</h1>
        <Button as={NextLink} href="/dashboard/add-pet" color="primary">Add new pet</Button>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        <Stat label="Total Listings" value={stats.total} />
        <Stat label="Available" value={stats.available} color="warning" />
        <Stat label="Adopted" value={stats.adopted} color="success" />
      </div>

      <div className="mt-8">
        {loading ? <Spinner color="primary" />
          : pets.length === 0 ? <p className="text-foreground/60">You haven't listed any pets yet.</p>
          : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pets.map((p) => (
                <Card key={p._id} className="bg-content1">
                  <CardBody className="p-0">
                    <Image removeWrapper src={p.image} alt={p.name} className="h-44 w-full object-cover" />
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">{p.name}</h3>
                        <span className="text-primary font-semibold">${p.fee}</span>
                      </div>
                      <Chip size="sm" color={p.adopted ? "success" : "warning"} className="mt-2">
                        {p.adopted ? "Adopted" : "Available"}
                      </Chip>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Button size="sm" variant="flat" startContent={<Inbox size={14}/>}
                          onPress={() => openRequests(p)}>Requests</Button>
                        <Button size="sm" variant="flat" startContent={<Pencil size={14}/>}
                          onPress={() => router.push(`/dashboard/edit-pet/${p._id}`)}>Edit</Button>
                        <Button size="sm" variant="flat" startContent={<Eye size={14}/>}
                          as={NextLink} href={`/pets/${p._id}`}>View</Button>
                        <Button size="sm" color="danger" variant="flat" startContent={<Trash2 size={14}/>}
                          onPress={() => { setActivePet(p); delModal.onOpen(); }}>Delete</Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
      </div>

      {/* Requests modal */}
      <Modal isOpen={reqModal.isOpen} onClose={reqModal.onClose} size="2xl" backdrop="blur" scrollBehavior="inside">
        <ModalContent>
          <ModalHeader>Adoption requests {activePet ? `· ${activePet.name}` : ""}</ModalHeader>
          <ModalBody>
            {reqLoading ? <Spinner color="primary" />
              : requests.length === 0 ? <p className="text-foreground/60">No requests yet.</p>
              : (
                <div className="space-y-3">
                  {requests.map((r) => (
                    <div key={r._id} className="p-4 rounded-xl border border-divider/40 bg-content2/40">
                      <div className="flex justify-between flex-wrap gap-2">
                        <div>
                          <div className="font-semibold">{r.requesterName}</div>
                          <div className="text-sm text-foreground/70">{r.requesterEmail}</div>
                          <div className="text-sm mt-1">Pickup: {new Date(r.pickupDate).toLocaleDateString()}</div>
                          {r.message && <p className="text-sm mt-2 text-foreground/80">"{r.message}"</p>}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Chip size="sm" color={r.status === "approved" ? "success" : r.status === "rejected" ? "danger" : "warning"}>
                            {r.status}
                          </Chip>
                          {r.status === "pending" && (
                            <div className="flex gap-2">
                              <Button size="sm" color="success" onPress={() => decide(r._id, "approved")}>Approve</Button>
                              <Button size="sm" color="danger" variant="flat" onPress={() => decide(r._id, "rejected")}>Reject</Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </ModalBody>
          <ModalFooter><Button variant="light" onPress={reqModal.onClose}>Close</Button></ModalFooter>
        </ModalContent>
      </Modal>

      {/* Delete confirm modal */}
      <Modal isOpen={delModal.isOpen} onClose={delModal.onClose} backdrop="blur">
        <ModalContent>
          <ModalHeader>Delete pet?</ModalHeader>
          <ModalBody>This will remove the listing and all its adoption requests. This cannot be undone.</ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={delModal.onClose}>Cancel</Button>
            <Button color="danger" onPress={remove} isLoading={deleting}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

function Stat({ label, value, color = "primary" }) {
  return (
    <Card className="bg-content1">
      <CardBody className="p-5">
        <div className="text-sm text-foreground/60">{label}</div>
        <div className={`text-3xl font-extrabold mt-1 text-${color}`}>{value}</div>
      </CardBody>
    </Card>
  );
}
