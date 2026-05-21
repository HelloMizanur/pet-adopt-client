"use client";
import { Button } from "@heroui/react";
import NextLink from "next/link";
import { PawPrint, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md">
        <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }}
          className="inline-flex p-6 rounded-full bg-primary/15 mb-6">
          <PawPrint size={48} className="text-primary" />
        </motion.div>
        <h1 className="text-7xl font-extrabold gradient-text">404</h1>
        <h2 className="text-2xl font-bold mt-2">Page not found</h2>
        <p className="text-foreground/70 mt-3">
          Looks like this pet wandered off. Let's get you back home.
        </p>
        <Button as={NextLink} href="/" color="primary" size="lg" className="mt-8"
          startContent={<Home size={16}/>}>
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
