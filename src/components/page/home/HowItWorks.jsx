import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Find Your Match",
    desc: "Browse through our vast directory of lovely pets and select your ideal companion.",
  },
  {
    step: "02",
    title: "Submit Request",
    desc: "Fill out a straightforward questionnaire detailing your environment and experience.",
  },
  {
    step: "03",
    title: "Welcome Home",
    desc: "Meet up with the shelter coordinators, complete the verification, and bring your buddy home.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
          How It Works
        </h2>
        <p className="text-base-content/60 max-w-sm mx-auto">
          Our adoption pipeline is fast, structured, and entirely online.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="relative p-8 bg-base-100 border border-base-200 rounded-3xl flex flex-col items-center text-center space-y-3 shadow-sm"
          >
            <span className="text-6xl font-black text-orange-500/10 absolute top-4 right-6 tracking-tight select-none">
              {item.step}
            </span>
            <h3 className="font-bold text-xl mt-4">{item.title}</h3>
            <p className="text-sm text-base-content/60 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
