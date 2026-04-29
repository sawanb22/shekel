import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/pricing/Hero";
import PricingGrid from "@/components/sections/pricing/PricingGrid";
import TrustedTeams from "@/components/sections/pricing/TrustedTeams";
import FaqSection from "@/components/sections/pricing/FaqSection";
import CtaSection from "@/components/sections/pricing/CtaSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <Hero />
      <div className="w-full bg-[#f9f9f9] py-[64px]">
        <div className="w-full px-3 md:px-4">
          <PricingGrid />
        </div>
      </div>
      <div className="bg-[#f9f9f9] w-full pt-[64px] pb-[64px]">
        <TrustedTeams />
      </div>
      <div className="w-full bg-white">
        <FaqSection />
      </div>
      <div className="w-full bg-white pb-16 pt-16">
        <div className="w-full">
          <CtaSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
