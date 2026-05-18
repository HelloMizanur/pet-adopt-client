import React from "react";
import { motion } from "framer-motion";

export default function SupportCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-neutral text-neutral-content p-8 md:p-20 rounded-[2.5rem] text-center space-y-8 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute -bottom-10 -left-10 text-9xl opacity-5 select-none animate-pulse">
          🐾
        </div>
        <div className="absolute -top-10 -right-10 text-9xl opacity-5 select-none animate-pulse">
          ❤️
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
            Can’t Adopt? Support Us
          </h2>
          <p className="text-neutral-content/80 max-w-xl mx-auto leading-relaxed text-sm md:text-md">
            Shelter running, veterinary assistance, medications, and meals
            require substantial investments. Your generous donations preserve
            our operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-b border-neutral-content/10 py-6 my-4">
          <div>
            <div className="text-2xl md:text-3xl font-black text-orange-500">
              1,200+
            </div>
            <div className="text-xs text-neutral-content/60 font-semibold tracking-wide uppercase mt-1">
              Rescued
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-orange-500">
              98%
            </div>
            <div className="text-xs text-neutral-content/60 font-semibold tracking-wide uppercase mt-1">
              Success Rate
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-orange-500">
              45+
            </div>
            <div className="text-xs text-neutral-content/60 font-semibold tracking-wide uppercase mt-1">
              Active Shelters
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-black text-orange-500">
              24/7
            </div>
            <div className="text-xs text-neutral-content/60 font-semibold tracking-wide uppercase mt-1">
              Vet Care
            </div>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white px-10 rounded-xl font-bold text-md shadow-lg shadow-orange-500/20">
            Make a Donation
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
