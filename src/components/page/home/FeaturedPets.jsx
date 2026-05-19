"use client"; // ক্লায়েন্ট সাইড রেন্ডারিং নিশ্চিত করার জন্য

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardStaggerContainer, cardItemVariant } from "@/utils/animations";
import Image from "next/image";

export default function FeaturedPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPetsData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:4000/pets");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPetsData();
  }, []); // এই খালি ডিপেন্ডেন্সি অ্যারে ([]) নিশ্চিত করে লুপ থামানো

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-75">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
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
        {pets?.slice(0, 6).map((pet) => (
          <motion.div
            key={pet._id}
            variants={cardItemVariant}
            whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
            className="card bg-base-100 border border-base-200 rounded-3xl shadow-sm hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300"
          >
            <figure className="bg-base-200 h-52 flex items-center justify-center select-none relative overflow-hidden group">
              <span className="absolute top-4 right-4 badge bg-base-100/90 backdrop-blur-md border-none shadow-sm font-bold text-xs py-2 px-3 z-20">
                {pet.species}
              </span>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="z-10 w-full h-full relative"
              >
                <Image
                  src={pet.imageUrl}
                  alt={pet.petName}
                  fill
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </figure>

            <div className="card-body p-6 gap-3">
              <div>
                <h3 className="card-title text-2xl font-bold">{pet.petName}</h3>
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
                  {pet.vaccinationStatus}
                </span>
              </div>
              <div className="card-actions mt-2">
                <Link
                  href={`/pets/${pet._id}`}
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
