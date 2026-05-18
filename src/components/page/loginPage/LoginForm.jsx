import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Add your login logic here
  };

  // Entry Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md bg-base-100 border border-base-200 rounded-[2.5rem] shadow-xl p-8 md:p-10 relative overflow-hidden"
    >
      {/* Decorative Subtle Background Shapes */}
      <div className="absolute -top-10 -left-10 text-7xl opacity-5 select-none pointer-events-none">
        🐾
      </div>

      {/* Header Section */}
      <div className="text-center space-y-2 mb-8">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 text-2xl font-bold mx-auto mb-2"
        >
          🏡
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-serif font-black tracking-tight text-base-content"
        >
          Welcome Back
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-sm text-base-content/60"
        >
          Your furry friends are waiting for you!
        </motion.p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <motion.div variants={itemVariants} className="form-control w-full">
          <label className="label mb-1">
            <span className="label-text font-bold text-xs uppercase tracking-wider text-base-content/70">
              Email Address
            </span>
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full rounded-xl bg-base-200/50 border-base-300 focus:border-orange-500 focus:outline-none transition-all p-3.5 text-sm"
            required
          />
        </motion.div>

        {/* Password Field */}
        <motion.div variants={itemVariants} className="form-control w-full">
          <div className="flex justify-between items-center mb-1">
            <label className="label">
              <span className="label-text font-bold text-xs uppercase tracking-wider text-base-content/70">
                Password
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-orange-500 font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full rounded-xl bg-base-200/50 border-base-300 focus:border-orange-500 focus:outline-none transition-all p-3.5 text-sm"
            required
          />
        </motion.div>

        {/* Standard Email Login Button */}
        <motion.div variants={itemVariants} className="pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn bg-orange-500 border-none text-white hover:bg-orange-600 btn-block rounded-xl font-bold text-sm shadow-lg shadow-orange-500/10 h-12"
          >
            Login
          </motion.button>
        </motion.div>
      </form>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="divider my-6 text-xs text-base-content/40 uppercase tracking-widest"
      >
        or continue with
      </motion.div>

      {/* Google Sign-In Button */}
      <motion.div variants={itemVariants}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => console.log("Google Login Triggered")}
          className="btn btn-outline border-base-300 hover:bg-base-200 text-base-content btn-block rounded-xl font-semibold text-sm flex items-center justify-center gap-3 h-12 transition-all"
        >
          {/* Custom inline Google SVG Icon */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3A11.913 11.913 0 0 0 12 0C7.322 0 3.25 2.505 1 6.205l4.266 3.56z"
            />
            <path
              fill="#4285F4"
              d="M24 12.24c0-.796-.078-1.59-.227-2.373H12v4.51h6.736A5.766 5.766 0 0 1 16.24 18.2l4.086 3.164c2.39-2.205 3.674-5.455 3.674-9.124z"
            />
            <path
              fill="#FBBC05"
              d="M5.266 14.235L1 17.795A11.915 11.915 0 0 0 12 24c3.045 0 5.864-1.01 8.082-2.714l-4.086-3.164a7.127 7.127 0 0 1-3.996 1.132 7.077 7.077 0 0 1-6.734-5.02z"
            />
            <path
              fill="#34A853"
              d="M12 19.255a7.127 7.127 0 0 1-3.996-1.131l-4.086 3.163A11.915 11.915 0 0 0 12 24c3.045 0 5.864-1.01 8.082-2.714l-4.086-3.164z"
              display="none" /* Handled overlap correction */
            />
            <path
              fill="#34A853"
              d="M5.266 9.765L1 6.205C2.18 4.232 3.868 2.585 5.89 1.442l3.86 3.22c-1.785.99-3.21 2.518-4.484 5.103z"
              display="none"
            />
            <path
              fill="#34A853"
              d="M5.266 9.765A7.054 7.054 0 0 1 5.266 14.235l-4.266 3.56A11.942 11.942 0 0 1 0 12c0-2.09.537-4.054 1-5.795l4.266 3.56z"
            />
          </svg>
          Continue with Google
        </motion.button>
      </motion.div>

      {/* Footer Registration Link */}
      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-base-content/60 mt-8"
      >
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-orange-500 font-bold hover:underline transition-all"
        >
          Register Here
        </Link>
      </motion.p>
    </motion.div>
  );
}
