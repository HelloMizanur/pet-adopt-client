import React from "react";
import Link from "next/link";
import Image from "next/image";

const DetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/pets/${id}`, {
    cache: "no-store",
  });

  const pet = await res.json();

  return (
    <div className="min-h-screen bg-base-200/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/pets"
            className="btn btn-ghost gap-2 pl-2 text-base-content/70 hover:text-primary"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to All Pets
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-base-100 rounded-3xl overflow-hidden shadow-xl border border-base-200">
          <div className="lg:col-span-5 relative h-87.5 lg:h-full min-h-100 bg-base-200">
            <Image
              fill
              src={pet.imageUrl}
              alt={pet.petName}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 badge badge-primary font-bold text-sm py-3 px-4 shadow-md">
              {pet.species}
            </span>
            {pet.adoptionFee === 0 && (
              <span className="absolute top-4 right-4 badge badge-success font-bold text-sm text-white py-3 px-4 shadow-md">
                Free Adoption
              </span>
            )}
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-neutral tracking-tight">
                  {pet.petName}
                </h1>
                <div className="badge badge-outline border-base-300 font-semibold px-3 py-3">
                  ID: {pet._id.slice(-6).toUpperCase()}
                </div>
              </div>
              <p className="text-xl text-primary font-medium tracking-wide">
                {pet.breed}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-base-200/40 p-4 rounded-2xl border border-base-200/60">
              <div className="flex flex-col p-3 bg-base-100 rounded-xl shadow-sm">
                <span className="text-xs font-semibold text-base-content/50 uppercase">
                  Age
                </span>
                <span className="text-base font-bold text-neutral mt-0.5">
                  {pet.age}
                </span>
              </div>
              <div className="flex flex-col p-3 bg-base-100 rounded-xl shadow-sm">
                <span className="text-xs font-semibold text-base-content/50 uppercase">
                  Gender
                </span>
                <span className="text-base font-bold text-neutral mt-0.5">
                  {pet.gender}
                </span>
              </div>
              <div className="flex flex-col p-3 bg-base-100 rounded-xl shadow-sm">
                <span className="text-xs font-semibold text-base-content/50 uppercase">
                  Health Status
                </span>
                <span className="text-base font-bold text-neutral mt-0.5">
                  {pet.healthStatus}
                </span>
              </div>
              <div className="flex flex-col p-3 bg-base-100 rounded-xl shadow-sm col-span-2 sm:col-span-1">
                <span className="text-xs font-semibold text-base-content/50 uppercase">
                  Adoption Fee
                </span>
                <span className="text-base font-bold text-neutral mt-0.5">
                  {pet.adoptionFee === 0 ? "Free" : `$${pet.adoptionFee}`}
                </span>
              </div>
              <div className="flex flex-col p-3 bg-base-100 rounded-xl shadow-sm col-span-2">
                <span className="text-xs font-semibold text-base-content/50 uppercase">
                  Vaccination
                </span>
                <span className="text-sm font-bold text-success flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  {pet.vaccinationStatus}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-neutral">
                About {pet.petName}
              </h3>
              <p className="text-base-content/80 leading-relaxed text-base">
                {pet.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-base-200 text-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-base-content/70 font-medium">
                  <span>📍</span> <strong>Location:</strong> {pet.location}
                </div>
                <div className="flex items-center gap-1.5 text-base-content/70 font-medium">
                  <span>✉️</span> <strong>Contact Shelter:</strong>{" "}
                  {pet.ownerEmail}
                </div>
              </div>

              <button className="btn btn-primary btn-block sm:btn-wide rounded-xl font-bold text-white shadow-lg shadow-primary/20 hover:shadow-xl transition-all text-lg">
                Adopt Now 🐾
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
