import Header from "@/components/shared/Header";
import Hero from "@/components/sections/home/Hero";
import Concept from "@/components/sections/home/Concept";
import Compare from "@/components/sections/home/Compare";
import FeaturesBento from "@/components/sections/home/FeaturesBento";
import HowItWorks from "@/components/sections/home/HowItWorks";
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
      {/* 2. Concept – white bg with grid decoration (Figma y=787, frame 500:22431) */}
      <Concept />
      {/* 3. Fragmented vs Shekel Standard – pastel gradient bg */}
      <Compare />
      {/* 4. Three-Step Architectural Flow – white bg */}
      <HowItWorks />
      {/* 5. Features Bento Grid – pixel-perfect Figma 500:22045 */}
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
