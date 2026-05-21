"use client";
import { useEffect, useState, useCallback } from "react";
import { api, endpoints } from "@/lib/api";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Chip, Button, Spinner,
} from "@heroui/react";
import NextLink from "next/link";
import toast from "react-hot-toast";
import { Eye, X } from "lucide-react";

const statusColor = (s) =>
  s === "approved" ? "success" : s === "rejected" ? "danger" : "warning";

export default function MyRequestsPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get(endpoints.requestsMine);
      setRows(data);
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const cancel = async (id) => {
    try {
      await api.delete(endpoints.request(id));
      toast.success("Request cancelled");
      await load();
    } catch (e) { toast.error(e?.response?.data?.message || "Failed"); }
  };

  return (
    <div>
      <h1 className="text-3xl font-extrabold">My Adoption Requests</h1>
      <p className="text-foreground/70 mt-1">Track and manage your requests.</p>

      <div className="mt-6 rounded-2xl border border-divider/40 bg-content1 overflow-x-auto">
        {loading ? (
          <div className="p-8 flex justify-center"><Spinner color="primary" /></div>
        ) : rows.length === 0 ? (
          <p className="p-8 text-center text-foreground/60">No requests yet.</p>
        ) : (
          <Table removeWrapper aria-label="My requests">
            <TableHeader>
              <TableColumn>PET</TableColumn>
              <TableColumn>REQUESTED</TableColumn>
              <TableColumn>PICKUP</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r._id}>
                  <TableCell className="font-semibold">{r.petName || r.pet?.name || "—"}</TableCell>
                  <TableCell>{new Date(r.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(r.pickupDate).toLocaleDateString()}</TableCell>
                  <TableCell><Chip size="sm" color={statusColor(r.status)}>{r.status}</Chip></TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="flat" as={NextLink}
                        href={`/pets/${r.pet?._id || r.pet}`} startContent={<Eye size={14}/>}>View</Button>
                      {r.status === "pending" && (
                        <Button size="sm" color="danger" variant="flat"
                          startContent={<X size={14}/>} onPress={() => cancel(r._id)}>Cancel</Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
