"use client";
import { Card, CardBody, Input, Button, Link as HLink } from "@heroui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";

const validatePassword = (p) =>
  p.length >= 6 && /[A-Z]/.test(p) && /[a-z]/.test(p);

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", photoURL: "", password: "", confirm: "" });
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!validatePassword(form.password))
      return toast.error("Password needs 6+ chars, one uppercase, one lowercase letter");
    if (form.password !== form.confirm) return toast.error("Passwords don't match");
    setBusy(true);
    try {
      await register({
        name: form.name, email: form.email,
        password: form.password, photoURL: form.photoURL,
      });
      toast.success("Account created!");
      router.push("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="bg-content1/90 backdrop-blur shadow-xl">
          <CardBody className="p-8">
            <h1 className="text-3xl font-extrabold">Create account</h1>
            <p className="text-foreground/70 mt-1">Join PawHaven and start adopting.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <Input label="Name" value={form.name} onValueChange={set("name")} isRequired variant="bordered" />
              <Input type="email" label="Email" value={form.email} onValueChange={set("email")} isRequired variant="bordered" />
              <Input label="Photo URL (optional)" value={form.photoURL} onValueChange={set("photoURL")} variant="bordered" />
              <Input type="password" label="Password" value={form.password} onValueChange={set("password")}
                description="6+ chars, one uppercase, one lowercase" isRequired variant="bordered" />
              <Input type="password" label="Confirm Password" value={form.confirm} onValueChange={set("confirm")}
                isRequired variant="bordered" />
              <Button type="submit" color="primary" size="lg" fullWidth isLoading={busy}
                startContent={!busy && <UserPlus size={16} />}>
                Sign up
              </Button>
            </form>
            <p className="text-sm text-foreground/70 mt-6 text-center">
              Already have an account?{" "}
              <HLink as={NextLink} href="/login" color="primary">Login</HLink>
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
