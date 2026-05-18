import React from "react";
import { motion } from "framer-motion";

const tips = [
  {
    icon: "🥗",
    title: "Balanced Nutrition",
    desc: "Feed premium quality age-appropriate diet options daily.",
  },
  {
    icon: "🏃‍♂️",
    title: "Daily Exercise",
    desc: "Keep them fit, active and energized with regular playing sessions.",
  },
  {
    icon: "🩺",
    title: "Routine Checkups",
    desc: "Schedule vet checkups, vaccinations, and deworming routinely.",
  },
  {
    icon: "❤️",
    title: "Love & Patience",
    desc: "Give them comfortable time to adapt to new spaces calmly.",
  },
];

export default function PetCareTips() {
  return (
    <section className="bg-base-200 border border-base-300 py-20 px-4 md:px-8 rounded-[2.5rem] max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
          Essential Pet Care Tips
        </h2>
        <p className="text-base-content/60 max-w-md mx-auto">
          New to pet parenting? Follow these fundamental principles to ensure
          they thrive.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
            className="p-6 bg-base-100 rounded-2xl border border-base-300/80 text-center space-y-3 shadow-sm"
          >
            <div className="text-5xl select-none">{tip.icon}</div>
            <h3 className="font-bold text-lg">{tip.title}</h3>
            <p className="text-xs text-base-content/70 leading-relaxed">
              {tip.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
