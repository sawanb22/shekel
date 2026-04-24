import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/pricing/Hero";
import PricingGrid from "@/components/sections/pricing/PricingGrid";
import TrustedTeams from "@/components/sections/pricing/TrustedTeams";
import FaqSection from "@/components/sections/pricing/FaqSection";
import CtaSection from "@/components/sections/pricing/CtaSection";
// Section imports will be added here as each section is completed

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <Hero />
      <div className="flex justify-center w-full bg-black">
        <div className="w-full max-w-[1280px] flex justify-center">
           <PricingGrid />
        </div>
      </div>
      <div className="bg-black w-full pt-[64px] pb-[64px]">
        <TrustedTeams />
      </div>
      <div className="w-full bg-white flex justify-center">
         <div className="w-full max-w-[1280px]">
            <FaqSection />
         </div>
      </div>
      <div className="w-full bg-black flex justify-center pt-[64px] pb-[64px] px-4 md:px-0">
         <div className="w-full max-w-[1280px]">
            <CtaSection />
         </div>
      </div>
      {/* Sections will be added here in order */}
      <Footer />
    </div>
  );
}
