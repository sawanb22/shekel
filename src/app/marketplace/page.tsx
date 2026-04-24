import Hero from "@/components/sections/marketplace/Hero";
import TrendingAgents from "@/components/sections/marketplace/TrendingAgents";
import Workflow from "@/components/sections/marketplace/Workflow";
import BrowseByCategory from "@/components/sections/marketplace/BrowseByCategory";
import ExploreAgents from "@/components/sections/marketplace/ExploreAgents";
import Enterprise from "@/components/sections/marketplace/Enterprise";
import WhatYouCanDo from "@/components/sections/home/WhatYouCanDo";
import FlexibleMonetization from "@/components/sections/marketplace/FlexibleMonetization";
import DeveloperHub from "@/components/sections/marketplace/DeveloperHub";
import TrustReliability from "@/components/sections/marketplace/TrustReliability";
import CtaMarketplace from "@/components/sections/marketplace/CtaMarketplace";

export default function MarketplacePage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <main className="pt-[75px]">
        <Hero />
        <TrendingAgents />
        <Workflow />
        <BrowseByCategory />
        <ExploreAgents />
        <Enterprise />
        <WhatYouCanDo />
        <FlexibleMonetization />
        <DeveloperHub />
        <TrustReliability />
        <CtaMarketplace />
      </main>
    </div>
  );
}
