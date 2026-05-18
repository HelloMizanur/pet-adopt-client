import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroTextVariant, floatingElement } from "@/utils/animations";

export default function HeroSection() {
  return (
    <section className="relative hero min-h-[90vh] bg-linear-to-b from-base-200 to-base-100 px-4 md:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="text-center lg:text-left space-y-6 z-10"
        >
          <motion.div
            variants={heroTextVariant}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 font-bold text-xs uppercase tracking-wider"
          >
            ✨ Find Your Best Friend Today
          </motion.div>

          <motion.h1
            variants={heroTextVariant}
            className="text-5xl md:text-7xl font-serif font-black tracking-tight leading-tight"
          >
            Giving Homeless Pets a{" "}
            <span className="text-orange-500 block lg:inline">
              Second Chance
            </span>
          </motion.h1>

          <motion.p
            variants={heroTextVariant}
            className="text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Every year millions of companion animals end up in shelters. Bring
            unconditional love into your life and transform theirs by adopting
            today.
          </motion.p>

          <motion.div
            variants={heroTextVariant}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
          >
            <Link
              href="/pets"
              className="btn bg-orange-500 border-none text-white hover:bg-orange-600 shadow-xl shadow-orange-500/20 px-8 rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
            >
              Adopt Now
            </Link>
            <a
              href="#why-adopt"
              className="btn btn-outline border-base-content/20 hover:bg-base-300 rounded-xl px-6 font-semibold transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        <div className="flex justify-center relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          />

          <motion.div
            variants={floatingElement}
            animate="animate"
            whileHover={{ scale: 1.03, rotate: 0 }}
            className="w-80 h-80 md:w-[460px] md:h-[460px] rounded-[2.5rem] bg-orange-500 text-white flex items-center justify-center text-[130px] md:text-[200px] shadow-2xl relative z-10 select-none cursor-grab active:cursor-grabbing"
          >
            🐕‍🦺
          </motion.div>
        </div>
      </div>
    </section>
  );
}
