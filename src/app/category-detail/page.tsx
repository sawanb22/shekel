import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ExploreAiAgentCategories from "@/components/sections/category-detail/ExploreAiAgentCategories";
import BrowseByCategory from "@/components/sections/category-detail/BrowseByCategory";
import FeaturedCategories from "@/components/sections/category-detail/FeaturedCategories";
import PopularAgents from "@/components/sections/category-detail/PopularAgents";
import HowItWorks from "@/components/sections/category-detail/HowItWorks";
import CtaCategory from "@/components/sections/category-detail/CtaCategory";

export default function CategoryDetailPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <ExploreAiAgentCategories />
      <BrowseByCategory />
      <FeaturedCategories />
      <PopularAgents />
      <HowItWorks />
      <CtaCategory />
      <Footer />
    </div>
  );
}