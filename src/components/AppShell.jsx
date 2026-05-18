import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import HeroSection from "./home/HeroSection";
import FeaturedPets from "./home/FeaturedPets";
import WhyAdoptSection from "./home/WhyAdoptSection";
import StatsSection from "./home/StatsSection";
import SuccessStories from "./home/SuccessStories";
import PetCareTips from "./home/PetCareTips";
import ProcessSection from "./home/ProcessSection";
import NewsletterSection from "./home/NewsletterSection";
import AllPetsPage from "./pets/AllPetsPage";
import DashboardLayout from "./dashboard/DashboardLayout";
import LoginPrompt from "./auth/LoginPrompt";

export default function AppShell() {
  // এখানে সব useState থাকবে
  // page অনুযায়ী render করবে

  return (
    <>
      <Navbar />

      {/* Home Page */}
      <main>
        <HeroSection />
        <FeaturedPets />
        <WhyAdoptSection />
        <StatsSection />
        <SuccessStories />
        <PetCareTips />
        <ProcessSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}
