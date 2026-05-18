"use client";

import React from "react";
import LoginForm from "@/components/page/loginPage/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-base-200/50 flex items-center justify-center p-4 selection:bg-orange-500 selection:text-white">
      <LoginForm />
    </div>
  );
}
