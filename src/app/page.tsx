import Header from "@/components/Header";
import Hero from "@/components/sections/home/Hero";
import AppStore from "@/components/sections/home/AppStore";
import Compare from "@/components/sections/home/Compare";
import HowItWorks from "@/components/sections/home/HowItWorks";
import FeaturesBento from "@/components/sections/home/FeaturesBento";

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
    </div>
  );
}
