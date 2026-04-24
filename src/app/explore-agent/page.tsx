import ExploreAiAgents from "@/components/sections/explore-agent/ExploreAiAgents";
import FeaturedAgents from "@/components/sections/explore-agent/FeaturedAgents";
import TrendingNow from "@/components/sections/explore-agent/TrendingNow";
import BrowseByCategory from "@/components/sections/explore-agent/BrowseByCategory";
import MainAgentGrid from "@/components/sections/explore-agent/MainAgentGrid";
import CtaSection from "@/components/sections/explore-agent/CtaSection";
// Section imports will be added here as each section is completed

export default function ExploreAgentPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <main className="pt-[75px]">
        <ExploreAiAgents />
        <FeaturedAgents />
        <TrendingNow />
        <BrowseByCategory />
        <MainAgentGrid />
        <CtaSection />
        {/* Sections will be added here in order */}
      </main>
    </div>
  );
}
