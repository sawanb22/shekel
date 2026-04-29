import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

const CARDS = [
  { icon: "/section-2-about/card-icon-1.svg", title: "Data Analyst", body: "Synthesizes market trends in real-time." },
  { icon: "/section-2-about/card-icon-2.svg", title: "DevOps Pilot", body: "Automates CI/CD pipelines effortlessly." },
  { icon: "/section-2-about/card-icon-3.svg", title: "Growth Agent", body: "Optimizes ad spend across channels." },
  { icon: "/section-2-about/card-icon-4.svg", title: "Customer Logic", body: "Resolves tier-1 tickets instantly." },
];

export default function WhatIsShekel() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-[1232px] gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(34px, 5vw, 48px)", lineHeight: "1.25", color: "#000" }}>
            Autonomous operations,
            <br />
            curated by you.
          </h2>
          <p className="mt-6" style={{ marginBottom: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18, lineHeight: "29.25px", color: "#000" }}>
            Shekel is more than a marketplace. It is the infrastructure for the next generation of labor.
            We provide a modular system where specialized AI agents don&apos;t just complete tasks, they integrate
            into precision-engineered workflows that run your business.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map((card) => (
            <article key={card.title} className="border p-6" style={{ borderRadius: radiuses.pill, borderColor: "rgba(65,71,83,0.15)", background: "linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.4))", backdropFilter: "blur(6px)" }}>
              <div className="mb-4 inline-flex rounded-lg p-3" style={{ backgroundColor: "rgba(171,199,255,0.2)" }}>
                <Image src={card.icon} alt="" width={20} height={20} />
              </div>
              <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 24, lineHeight: "32px", color: "#000" }}>{card.title}</h3>
              <p className="mt-2" style={{ marginBottom: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#000" }}>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
