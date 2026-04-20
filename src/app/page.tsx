import Header from "@/components/shared/Header";
import Hero from "@/components/sections/home/Hero";
import AppStore from "@/components/sections/home/AppStore";
import Compare from "@/components/sections/home/Compare";
import HowItWorks from "@/components/sections/home/HowItWorks";
import FeaturesBento from "@/components/sections/home/FeaturesBento";
import UseCases from "@/components/sections/home/UseCases";
import WhatYouCanDo from "@/components/sections/home/WhatYouCanDo";
import Roadmap from "@/components/sections/home/Roadmap";
import TrustReliability from "@/components/sections/home/TrustReliability";
import Faq from "@/components/sections/home/Faq";
import CtaWaitlist from "@/components/sections/home/CtaWaitlist";

export default function Home() {
  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30">
      <Header />
      {/* 1. Hero – dark bg */}
      <Hero />
      {/* 2. App Store / AI Concept – pastel gradient bg */}
      <AppStore />
      {/* 3. Fragmented vs Shekel Standard – pastel gradient bg */}
      <Compare />
      {/* 4. Three-Step Architectural Flow – white bg */}
      <HowItWorks />
      {/* 5. Features Bento Grid */}
      <FeaturesBento />
      {/* 6. Use Cases – Engineered for Every Vertical */}
      <UseCases />
      {/* 7. What You Can Do With Shekel */}
      <WhatYouCanDo />
      {/* 8. Development Roadmap */}
      <Roadmap />
      {/* 9. Trust & Reliability */}
      <TrustReliability />
      {/* 10. FAQ Section */}
      <Faq />
      {/* 11. CTA Waitlist */}
      <CtaWaitlist />
    </div>
  );
}
