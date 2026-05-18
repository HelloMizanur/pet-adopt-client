"use client";

import React from "react";
import HeroSection from "@/components/page/home/HeroSection";
import FeaturedPets from "@/components/page/home/FeaturedPets";
import WhyAdopt from "@/components/page/home/WhyAdopt";
import SuccessStories from "@/components/page/home/SuccessStories";
import PetCareTips from "@/components/page/home/PetCareTips";
import HowItWorks from "@/components/page/home/HowItWorks";
import SupportCTA from "@/components/page/home/SupportCTA";

export default function HomePage() {
  return (
    <div className="space-y-32 pb-32 overflow-hidden bg-base-100 text-base-content selection:bg-orange-500 selection:text-white">
      <HeroSection />
      <FeaturedPets />
      <WhyAdopt />
      <SuccessStories />
      <PetCareTips />
      <HowItWorks />
      <SupportCTA />
    </div>
  );
}
