import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

export default function Cta() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-black px-6 py-16 md:px-16 md:py-24">
      <Image src="/section-8-about/cta-bg.png" alt="" fill className="object-cover" />
      <Image src="/section-8-about/cta-ellipse.svg" alt="" width={696} height={696} className="pointer-events-none absolute -left-36 -top-72 opacity-60" />
      <div className="relative mx-auto max-w-[1080px]">
        <h2 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: "clamp(48px,7vw,72px)", lineHeight: "1", letterSpacing: "-0.05em", color: "#000", textTransform: "capitalize" }}>
          Start building with
          <br />
          Shekel
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="min-w-[200px] px-10 py-5" style={{ borderRadius: "10px", background: "linear-gradient(188.63deg, #2864E4 35.41%, #1E9AFF 67.17%, #C6F8FF 151.22%)" }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>Get Started</span>
          </button>
          <button className="min-w-[200px] border bg-white px-10 py-5" style={{ borderRadius: "10px", borderColor: "#2864E4" }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", letterSpacing: "0.1em", textTransform: "uppercase", background: "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Explore Agents</span>
          </button>
        </div>
        <p className="mt-12 max-w-[420px] text-center" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 10, lineHeight: "16px", letterSpacing: "0.36em", textTransform: "uppercase", color: "#0E0E0E" }}>
          Join thousands of users and developers already using Shekel
        </p>
      </div>
    </section>
  );
}
