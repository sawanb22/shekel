"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const CARDS = [
  { icon: "/section-5-create-ai-agent-page/card-icon-1.svg", title: "Clear Instructions", body: "Define specific prompts and expected outputs to ensure consistent and accurate results." },
  { icon: "/section-5-create-ai-agent-page/card-icon-2.svg", title: "High-quality Outputs", body: "Add strong example outputs to improve user trust and engagement." },
  { icon: "/section-5-create-ai-agent-page/card-icon-3.svg", title: "Smart Pricing", body: "Choose the right pricing model to balance user growth and revenue generation." },
];

export default function PerformanceBestPractices() {
  return (
    <section className="w-full rounded-[31px] bg-[#f2f4f7] px-4 py-10 md:px-12">
      <div className="grid w-full gap-8 lg:grid-cols-[409px_minmax(0,1fr)]">
        <div>
          <h2 style={{ margin: 0, color: "#000", fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.05 }}>
            Build high performing <span style={{ color: "#60a5fa" }}>AI agents</span>
          </h2>
          <p style={{ margin: "20px 0 0", color: "#000", fontFamily: typography.fonts.inter, fontSize: 20, lineHeight: "28px" }}>
            Improve your agent quality, increase usage, and maximize earnings by following proven best practices.
          </p>
        </div>
        <div className="grid gap-5">
          {CARDS.map((card, i) => (
            <div key={card.title} className={`rounded-2xl border p-6 ${i === 1 ? "border-[#2f80ed4d] bg-[#2f80ed1a]" : "border-white/40 bg-white/60"}`}>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f80ed1a]">
                  <Image src={card.icon} alt="" width={22} height={20} />
                </div>
                <h3 style={{ margin: 0, color: "#000", fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 28 }}>{card.title}</h3>
              </div>
              <p style={{ margin: "10px 0 0", color: "#94a3b8", fontSize: 16, lineHeight: "24px" }}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
