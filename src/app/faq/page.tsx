import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FaqHero from "@/components/sections/faq/FaqHero";
import SearchFilter from "@/components/sections/faq/SearchFilter";
import FaqCategories from "@/components/sections/faq/FaqCategories";
import CtaFaq from "@/components/sections/faq/CtaFaq";

export default function FaqPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <main className="pt-[75px]">
        <FaqHero />
        <SearchFilter />
        <FaqCategories />
        <CtaFaq />
      </main>
      <Footer />
    </div>
  );
}
