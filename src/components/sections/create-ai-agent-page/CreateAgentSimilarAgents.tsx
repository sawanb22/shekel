"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const CARDS = [
  { name: "CopyGenius Pro", rating: "4.7", icon: "/section-6-create-ai-agent-page/card-1-glow.svg" },
  { name: "VideoCraft AI", rating: "4.9", icon: "/section-6-create-ai-agent-page/card-2-glow.svg" },
  { name: "MetricMaster", rating: "4.5", icon: "/section-6-create-ai-agent-page/card-3-icon.svg" },
];

export default function CreateAgentSimilarAgents() {
  return (
    <section className="w-full">
      <div className="w-full px-4 md:px-8">
        <div className="flex items-end justify-between">
          <h2 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontSize: 48, fontWeight: 600, color: "#191c1e" }}>
            Similar <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)` }}>Agents</span>
          </h2>
          <a href="#" className="hidden items-center gap-1 uppercase md:flex" style={{ color: "#000", letterSpacing: "1.4px", fontSize: 14 }}>
            Explore More Agents
            <Image src="/section-6-create-ai-agent-page/link-arrow.svg" alt="" width={9} height={9} />
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-10">
          {CARDS.map((c) => (
            <div key={c.name} className="rounded-2xl p-8" style={{ background: "#f2f4f7" }}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white">
                <Image src={c.icon} alt="" width={40} height={40} />
              </div>
              <h3 style={{ margin: 0, color: "#191c1e", fontSize: 24 }}>{c.name}</h3>
              <p style={{ margin: "6px 0 18px", color: "#727785" }}>★ {c.rating}</p>
              <div className="rounded-xl bg-white py-3 text-center font-semibold" style={{ color: "#191c1e", border: "1px solid rgba(193,198,213,0.1)", borderRadius: radiuses.inputIcon }}>
                Run Agent
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
