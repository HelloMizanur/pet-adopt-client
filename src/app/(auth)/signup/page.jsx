"use client";

import React from "react";
import RegisterForm from "@/components/page/signupPage/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-base-200/50 flex items-center justify-center p-4 md:p-8 selection:bg-orange-500 selection:text-white">
      <RegisterForm />
    </div>
  );
}
