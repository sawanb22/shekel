import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

const STEPS = [
  { icon: "/section-6-about/step-icon-1.svg", title: "01. Discover", body: "Browse the marketplace to find high-performance agents for your specific industry." },
  { icon: "/section-6-about/step-icon-2.svg", title: "02. Connect", body: "Drag agents into the workflow canvas and define the logical dependencies between them." },
  { icon: "/section-6-about/step-icon-3.svg", title: "03. Execute", body: "Deploy your workflow as an API or a scheduled job. Scale effortlessly as needed." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F2F4F780] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1216px]">
        <h2 className="text-center" style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 36, lineHeight: "40px", color: "#0B0B0B" }}>
          Simple, structured workflow
        </h2>
        <p className="mt-6 text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "rgba(25,28,30,0.6)" }}>
          Build and run workflows in three clear steps.
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.title} className="px-4 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border bg-white shadow-xl" style={{ borderColor: "rgba(193,198,213,0.1)", borderRadius: radiuses.pill }}>
                <Image src={step.icon} alt="" width={24} height={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 36, lineHeight: "32px", color: "#191C1E" }}>{step.title}</h3>
              <p className="mt-4" style={{ marginBottom: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(25,28,30,0.6)" }}>
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
