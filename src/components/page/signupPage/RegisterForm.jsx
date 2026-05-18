import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterForm() {
  // Pure Entry Animation Layout Configs
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06,
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
      className="w-full max-w-lg bg-base-100 border border-base-200 rounded-[2.5rem] shadow-xl p-8 md:p-10 relative overflow-hidden"
    >
      {/* Decorative Icon */}
      <div className="absolute -top-10 -right-10 text-7xl opacity-5 select-none pointer-events-none">
        🐈
      </div>

      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 text-2xl font-bold mx-auto mb-2"
        >
          ✨
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-serif font-black tracking-tight text-base-content"
        >
          Create an Account
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-sm text-base-content/60"
        >
          Join our family and begin your adoption journey.
        </motion.p>
      </div>

      {/* Form Fields */}
      <form className="space-y-4">
        {/* Full Name Field */}
        <motion.div variants={itemVariants} className="form-control w-full">
          <label className="label mb-1">
            <span className="label-text font-bold text-xs uppercase tracking-wider text-base-content/70">
              Full Name
            </span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-bordered w-full rounded-xl bg-base-200/50 border-base-300 focus:border-orange-500 focus:outline-none transition-all p-3.5 text-sm"
          />
        </motion.div>

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
            className="input input-bordered w-full rounded-xl bg-base-200/50 border-base-300 focus:border-orange-500 focus:outline-none transition-all p-3.5 text-sm"
          />
        </motion.div>

        {/* Photo URL Field */}
        <motion.div variants={itemVariants} className="form-control w-full">
          <label className="label mb-1">
            <span className="label-text font-bold text-xs uppercase tracking-wider text-base-content/70">
              Profile Photo URL
            </span>
          </label>
          <input
            type="url"
            placeholder="https://example.com/avatar.jpg"
            className="input input-bordered w-full rounded-xl bg-base-200/50 border-base-300 focus:border-orange-500 focus:outline-none transition-all p-3.5 text-sm"
          />
        </motion.div>

        {/* Responsive Grid for Password fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Password Field */}
          <motion.div variants={itemVariants} className="form-control w-full">
            <label className="label mb-1">
              <span className="label-text font-bold text-xs uppercase tracking-wider text-base-content/70">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full rounded-xl bg-base-200/50 border-base-300 focus:border-orange-500 focus:outline-none transition-all p-3.5 text-sm"
            />
          </motion.div>

          {/* Confirm Password Field */}
          <motion.div variants={itemVariants} className="form-control w-full">
            <label className="label mb-1">
              <span className="label-text font-bold text-xs uppercase tracking-wider text-base-content/70">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full rounded-xl bg-base-200/50 border-base-300 focus:border-orange-500 focus:outline-none transition-all p-3.5 text-sm"
            />
          </motion.div>
        </div>

        {/* Disclaimer terms copy */}
        <motion.p
          variants={itemVariants}
          className="text-xs text-base-content/50 pt-1 leading-relaxed"
        >
          By signing up, you agree to secure your profile and safely browse our
          database of companion shelters responsibly.
        </motion.p>

        {/* Submit Button */}
        <motion.div variants={itemVariants} className="pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn bg-orange-500 border-none text-white hover:bg-orange-600 btn-block rounded-xl font-bold text-sm shadow-lg shadow-orange-500/10 h-12"
          >
            Register Account
          </motion.button>
        </motion.div>
      </form>

      {/* Footer Login Redirect */}
      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-base-content/60 mt-8"
      >
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-orange-500 font-bold hover:underline transition-all"
        >
          Login Here
        </Link>
      </motion.p>
    </motion.div>
  );
}
