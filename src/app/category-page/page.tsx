import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CategoryHero from "@/components/sections/category-page/CategoryHero";
import MarketingAgentCatalog from "@/components/sections/category-page/MarketingAgentCatalog";
import NextGenInfra from "@/components/sections/category-page/NextGenInfra";
import CategorySimilarAgents from "@/components/sections/category-page/CategorySimilarAgents";
import CategoryCta from "@/components/sections/category-page/CategoryCta";

export default function CategoryPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <main className="pt-[75px] flex flex-col">
        <CategoryHero />
        <MarketingAgentCatalog />
        <div className="mt-12 md:mt-16">
          <NextGenInfra />
        </div>
        <div className="mt-12 md:mt-16">
          <CategorySimilarAgents />
        </div>
        <div className="mt-12 md:mt-16">
          <CategoryCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
