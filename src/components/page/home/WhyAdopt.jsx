import React from "react";
import { motion } from "framer-motion";
import { revealFromLeft, revealFromRight } from "@/utils/animations";

export default function WhyAdopt() {
  return (
    <section
      id="why-adopt"
      className="bg-base-200/50 border-y border-base-200 py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealFromLeft}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Why Should You Adopt?
          </h2>
          <p className="text-base-content/70 leading-relaxed text-md">
            Buying pets supports commercial breeding operations that prioritize
            profit over animal welfare. When you adopt, you break that cycle and
            secure a lifetime friend.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex gap-4 items-start bg-base-100 p-4 rounded-2xl border border-base-200">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-lg">Save a Precious Life</h4>
                <p className="text-sm text-base-content/60">
                  Give shelter animals the loving home they truly deserve.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-base-100 p-4 rounded-2xl border border-base-200">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-lg">Fully Vet-Checked</h4>
                <p className="text-sm text-base-content/60">
                  All shelter animals are spayed, neutered, and fully
                  vaccinated.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealFromRight}
          className="w-full h-96 bg-base-100 rounded-[2.5rem] flex items-center justify-center text-[140px] shadow-xl border border-base-200 relative select-none"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            🏡
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
