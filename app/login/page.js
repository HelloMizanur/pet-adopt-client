"use client";
import { Card, CardBody, Input, Button, Link as HLink } from "@heroui/react";
import NextLink from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await login(email, password);
      toast.success("Welcome back!");
      router.push(next);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="bg-content1/90 backdrop-blur shadow-xl">
          <CardBody className="p-8">
            <h1 className="text-3xl font-extrabold">Welcome back</h1>
            <p className="text-foreground/70 mt-1">Login to continue your adoption journey.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <Input type="email" label="Email" value={email} onValueChange={setEmail}
                isRequired variant="bordered" />
              <Input
                label="Password" value={password} onValueChange={setPassword}
                type={show ? "text" : "password"} isRequired variant="bordered"
                endContent={
                  <button type="button" onClick={() => setShow((s) => !s)} aria-label="toggle">
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                }
              />
              <Button type="submit" color="primary" size="lg" fullWidth isLoading={busy}
                startContent={!busy && <LogIn size={16} />}>
                Login
              </Button>
            </form>
            <p className="text-sm text-foreground/70 mt-6 text-center">
              New to PawHaven?{" "}
              <HLink as={NextLink} href="/register" color="primary">Create an account</HLink>
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
