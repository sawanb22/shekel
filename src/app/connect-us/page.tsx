import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/connect-us/Hero";
import ContactMethods from "@/components/sections/connect-us/ContactMethods";
import ContactFormAndSupport from "@/components/sections/connect-us/ContactFormAndSupport";
import TrendingAiAgents from "@/components/sections/connect-us/TrendingAiAgents";
import CtaSection from "@/components/sections/explore-agent/CtaSection";

export default function ConnectUsPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <Hero />
      <ContactMethods />
      <ContactFormAndSupport />
      <TrendingAiAgents />
      <CtaSection />
      <Footer />
    </div>
  );
}