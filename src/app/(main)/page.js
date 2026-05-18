"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// --- ADVANCED STRUCTURAL ANIMATIONS ---
const heroTextVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatingElement = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardItemVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const revealFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const revealFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HomePage() {
  const featuredPets = [
    {
      id: 1,
      name: "Luna",
      age: "2 Months",
      breed: "Golden Retriever",
      img: "🐶",
      type: "Dog",
    },
    {
      id: 2,
      name: "Milo",
      age: "1 Year",
      breed: "Siamese Cat",
      img: "🐱",
      type: "Cat",
    },
    {
      id: 3,
      name: "Bella",
      age: "3 Months",
      breed: "Holland Lop",
      img: "🐰",
      type: "Rabbit",
    },
    {
      id: 4,
      name: "Rocky",
      age: "2 Years",
      breed: "German Shepherd",
      img: "🐕",
      type: "Dog",
    },
    {
      id: 5,
      name: "Cleo",
      age: "6 Months",
      breed: "Persian Cat",
      img: "🐈",
      type: "Cat",
    },
    {
      id: 6,
      name: "Coco",
      age: "4 Months",
      breed: "Syrian Hamster",
      img: "🐹",
      type: "Other",
    },
  ];

  return (
    <div className="space-y-32 pb-32 overflow-hidden bg-base-100 text-base-content selection:bg-orange-500 selection:text-white">
      {/* 1. HERO BANNER SECTION (With Micro-staggers) */}
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
              className="flex flex-wrap justify-center lg:justify-start gap-4pt-2"
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
            {/* Dynamic Background Animated Blobs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 40, 0] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            ></motion.div>

            {/* Main Interactive Floating Image Frame */}
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

      {/* 2. DYNAMIC SECTION: FEATURED PETS (Stagger In View) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            Meet Our Featured Friends
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-base-content/60 max-w-md mx-auto pt-2">
            They are healthy, vaccinated, and waiting passionately for a family
            like yours.
          </p>
        </motion.div>

        <motion.div
          variants={cardStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPets.map((pet) => (
            <motion.div
              key={pet.id}
              variants={cardItemVariant}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="card bg-base-100 border border-base-200 rounded-3xl shadow-sm hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300"
            >
              <figure className="bg-base-200 h-52 flex items-center justify-center text-8xl select-none relative overflow-hidden group">
                <span className="absolute top-4 right-4 badge bg-base-100/90 backdrop-blur-md border-none shadow-sm font-bold text-xs py-2 px-3 z-20">
                  {pet.type}
                </span>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="z-10"
                >
                  {pet.img}
                </motion.div>
              </figure>
              <div className="card-body p-6 gap-3">
                <div>
                  <h3 className="card-title text-2xl font-bold">{pet.name}</h3>
                  <p className="text-sm text-base-content/60 font-semibold tracking-wide">
                    {pet.breed}
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm border-y border-base-200/80 py-3 my-1">
                  <span className="text-base-content/70">
                    Age:{" "}
                    <strong className="text-base-content font-bold">
                      {pet.age}
                    </strong>
                  </span>
                  <span className="text-success flex items-center gap-1.5 font-bold text-xs">
                    <span className="h-2 w-2 rounded-full bg-success animate-pulse"></span>{" "}
                    Vaccinated
                  </span>
                </div>
                <div className="card-actions mt-2">
                  <Link
                    href={`/pets/${pet.id}`}
                    className="btn btn-neutral btn-block rounded-xl font-bold btn-md shadow-md transition-all hover:bg-orange-500 hover:text-white hover:border-none"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. STATIC SECTION: WHY ADOPT PETS (Split Screen reveal) */}
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
              Buying pets supports commercial breeding operations that
              prioritize profit over animal welfare. When you adopt, you break
              that cycle and secure a lifetime friend.
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

      {/* 4. STATIC SECTION: SUCCESS STORIES */}
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
          {[
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
          ].map((story, idx) => (
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

      {/* 5. STATIC SECTION: PET CARE TIPS */}
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
          {[
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
          ].map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
              className="p-6 bg-base-100 rounded-2xl border border-base-300/80 text-center space-y-3 shadow-xs"
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

      {/* 6. EXTRA STATIC SECTION 1: ADOPTION PROCESS STEPS */}
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
          {[
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
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative p-8 bg-base-100 border border-base-200 rounded-3xl flex flex-col items-center text-center space-y-3 shadow-xs"
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

      {/* 7. EXTRA STATIC SECTION 2: DONATION CTA & METRICS */}
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
          <div className="absolute -top-10 -right-10 text-9xl opacity-5 select-none浏览 animate-pulse">
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

          {/* Micro animated metrics showcase */}
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
    </div>
  );
}
