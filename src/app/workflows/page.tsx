import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/workflows/Hero";
import HowItWorks from "@/components/sections/workflows/HowItWorks";
import DragConnectRun from "@/components/sections/workflows/DragConnectRun";
import CoreWorkflowCanvas from "@/components/sections/workflows/CoreWorkflowCanvas";
import ExecutionPreview from "@/components/sections/workflows/ExecutionPreview";
import UseCases from "@/components/sections/workflows/UseCases";
import DeployAndEarn from "@/components/sections/workflows/DeployAndEarn";
import TrustReliability from "@/components/sections/workflows/TrustReliability";
import CtaSection from "@/components/sections/workflows/CtaSection";

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-white selection:bg-blue-500/30">
      <Header />
      <Hero />
      <HowItWorks />
      <DragConnectRun />
      <CoreWorkflowCanvas />
      <ExecutionPreview />
      <UseCases />
      <DeployAndEarn />
      <TrustReliability />
      <CtaSection />
      <Footer />
    </div>
  );
}
