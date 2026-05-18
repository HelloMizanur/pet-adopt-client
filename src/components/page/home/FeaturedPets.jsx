import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardStaggerContainer, cardItemVariant } from "@/utils/animations";

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

export default function FeaturedPets() {
  return (
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
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
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
            whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
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
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />{" "}
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
  );
}
