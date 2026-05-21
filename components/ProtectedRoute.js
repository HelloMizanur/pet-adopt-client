"use client";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@heroui/react";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);
  if (loading || !user)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner size="lg" color="primary" />
      </div>
    );
  return children;
}
