import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

export default function WhatYouCanDo() {
  return (
    <section className="bg-[#F7F9FC] px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-[1216px] items-center gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 36, lineHeight: "45px", color: "#0B0B0B" }}>
            What you can do with Shekel
          </h2>
          <p className="mt-6" style={{ marginBottom: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18, lineHeight: "29.25px", color: "rgba(25,28,30,0.6)" }}>
            A complete system to discover world-class agents, create custom logic strings, and run them at scale.
            From SEO factories to fully autonomous customer support, the possibilities are defined by your architectural vision.
          </p>
          <Feature icon="/section-5-about/feature-check.svg" title="Build Agent Chains" body="Sequence multiple AI models into a single API endpoint." />
          <Feature icon="/section-5-about/feature-check.svg" title="Real-time Debugging" body="Watch logic flows execute with live step-by-step logs." />
          <button className="mt-8 rounded-xl bg-[#005AB6] px-8 py-4 text-white shadow-lg" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px" }}>
            Explore Agents
          </button>
        </div>
        <div className="rounded-2xl border bg-[#F8FAFC] p-4 shadow-2xl" style={{ borderColor: "rgba(193,198,213,0.3)" }}>
          <div className="overflow-hidden rounded-xl border bg-white" style={{ borderColor: "rgba(193,198,213,0.1)" }}>
            <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "rgba(193,198,213,0.1)" }}>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-300" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 10, lineHeight: "15px", letterSpacing: "0.1em", color: "rgba(25,28,30,0.3)" }}>WORKFLOW BUILDER V1.0</span>
            </div>
            <div className="flex min-h-[300px]">
              <aside className="flex w-16 flex-col items-center gap-6 border-r pt-6" style={{ borderColor: "rgba(193,198,213,0.1)" }}>
                <Image src="/section-5-about/dashboard-icon-1.svg" alt="" width={18} height={18} />
                <Image src="/section-5-about/dashboard-icon-2.svg" alt="" width={20} height={16} />
                <Image src="/section-5-about/dashboard-icon-3.svg" alt="" width={20} height={20} />
              </aside>
              <div className="relative flex-1 bg-slate-50/40 p-10">
                <div className="w-40 rounded-lg border bg-white p-4 shadow" style={{ borderColor: "rgba(0,90,182,0.1)", borderRadius: radiuses.inputIcon }} />
                <div className="ml-20 mt-16 w-40 rounded-lg border bg-white p-4 shadow" style={{ borderColor: "rgba(0,103,128,0.2)", borderRadius: radiuses.inputIcon }} />
                <Image src="/section-5-about/dashboard-link.svg" alt="" width={470} height={336} className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="mt-6 flex gap-4">
      <div className="rounded-full bg-[#005AB61A] p-2.5">
        <Image src={icon} alt="" width={20} height={20} />
      </div>
      <div>
        <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#191C1E" }}>{title}</h3>
        <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "rgba(25,28,30,0.6)" }}>{body}</p>
      </div>
    </div>
  );
}
