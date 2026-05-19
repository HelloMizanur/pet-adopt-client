"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AllPetsPage() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("All");

  useEffect(() => {
    const fetchAllPets = async () => {
      try {
        const res = await fetch("http://localhost:4000/pets");
        if (!res.ok) throw new Error("Failed to fetch pets");
        const data = await res.json();
        setPets(data);
        setFilteredPets(data); // শুরুতে সব ডাটা দেখাবে
      } catch (error) {
        console.error("Error loading pets:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPets();
  }, []);

  useEffect(() => {
    let result = pets;

    if (searchQuery.trim() !== "") {
      result = result.filter((pet) =>
        pet.petName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedSpecies !== "All") {
      result = result.filter(
        (pet) => pet.species.toLowerCase() === selectedSpecies.toLowerCase(),
      );
    }

    setFilteredPets(result);
  }, [searchQuery, selectedSpecies, pets]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral">
            Find Your New <span className="text-primary">Best Friend</span>
          </h1>
          <p className="text-base-content/70 max-w-md mx-auto">
            Browse through our beautiful list of pets available for adoption and
            find the perfect match for your home.
          </p>
        </div>

        <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="form-control w-full md:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search pets by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-full pl-10 rounded-xl focus:outline-primary"
              />
              <span className="absolute left-3 top-3.5 text-base-content/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="font-semibold text-sm hidden sm:inline text-base-content/70">
              Filter by Species:
            </span>
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="select select-bordered w-full md:w-48 rounded-xl focus:outline-primary font-medium"
            >
              <option value="All">All Species</option>
              <option value="Dog">Dogs</option>
              <option value="Cat">Cats</option>
              <option value="Rabbit">Rabbits</option>
              <option value="Bird">Birds</option>
            </select>
          </div>
        </div>

        <div className="mb-6 text-sm font-semibold text-base-content/60">
          Showing {filteredPets.length}{" "}
          {filteredPets.length === 1 ? "pet" : "pets"}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-20 bg-base-100 rounded-2xl border border-base-200">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-base-content/80">
              No Pets Found
            </h3>
            <p className="text-base-content/50 mt-1">
              Try changing your search query or filters.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredPets.map((pet) => (
            <div
              key={pet._id}
              className="card bg-base-100 border border-base-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <figure className="relative h-60 w-full overflow-hidden bg-base-200 rounded-t-3xl">
                <Image
                  fill
                  src={
                    pet.imageUrl || "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={pet.petName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 badge badge-primary font-bold text-xs py-3 px-4 shadow-sm">
                  {pet.species}
                </span>
              </figure>

              <div className="card-body p-6 flex flex-col grow justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h2 className="card-title text-2xl font-bold text-neutral">
                      {pet.petName}
                    </h2>
                    <span className="badge badge-ghost text-xs font-semibold py-2">
                      {pet.age}
                    </span>
                  </div>
                  <p className="text-sm text-base-content/60 font-medium mb-3">
                    Breed:{" "}
                    <span className="text-base-content font-semibold">
                      {pet.breed}
                    </span>
                  </p>
                  <p className="text-sm text-base-content/70 line-clamp-2">
                    {pet.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-base-200 text-xs text-base-content/70">
                  <div className="flex items-center gap-1 bg-base-200 px-2.5 py-1.5 rounded-lg">
                    📍 {pet.location || "Dhaka"}
                  </div>
                  <div className="flex items-center gap-1 bg-success/10 text-success px-2.5 py-1.5 rounded-lg font-semibold">
                    🛡️ {pet.vaccinationStatus || "Vaccinated"}
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Link
                    href={`/pets/${pet._id}`}
                    className="btn btn-outline btn-neutral rounded-xl font-bold transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
