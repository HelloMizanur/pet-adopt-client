import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    quote:
      "Adopting Max changed my life. He fills our house with uncontainable happiness every single morning.",
    author: "Sarah M.",
    role: "Adopted Retriever",
  },
  {
    quote:
      "The process was seamless and incredibly rewarding. Tigger settled into his new environment right away.",
    author: "James L.",
    role: "Adopted Siamese Cat",
  },
  {
    quote:
      "Shelter pets aren't broken; they are just full of love waiting to be shared. Best choice I ever made.",
    author: "Emily R.",
    role: "Adopted Rabbit",
  },
];

export default function SuccessStories() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
          Happy Tails & Families
        </h2>
        <p className="text-base-content/60 max-w-sm mx-auto">
          Real stories from beautiful people who chose adoption over shopping.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="p-8 bg-base-100 border border-base-200 rounded-3xl shadow-sm relative flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-orange-500/20 font-serif text-6xl absolute top-4 left-4 select-none">
              “
            </div>
            <p className="italic text-base-content/80 leading-relaxed relative z-10 pt-4">
              "{story.quote}"
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-base-200/80 pt-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-xl shadow-inner">
                👤
              </div>
              <div>
                <h4 className="font-bold text-md">{story.author}</h4>
                <p className="text-xs text-orange-500 font-bold tracking-wide">
                  {story.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
