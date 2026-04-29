import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const TITLE_GRADIENT =
  "linear-gradient(202.17deg, #FFFFFF 55.63%, rgba(255,255,255,0) 110.73%)";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-6 pb-20 pt-28 md:px-16 md:pb-28 md:pt-36">
      <Image src="/section-1-about/hero-vector.svg" alt="" width={905} height={909} className="pointer-events-none absolute -left-64 -top-96 opacity-60" />
      <Image src="/section-1-about/hero-ellipse-top.svg" alt="" width={1343} height={211} className="pointer-events-none absolute -top-12 left-0 opacity-40" />
      <Image src="/section-1-about/hero-ellipse-left.svg" alt="" width={163} height={163} className="pointer-events-none absolute -left-10 -top-10" />
      <Image src="/section-1-about/hero-ellipse-right.svg" alt="" width={163} height={163} className="pointer-events-none absolute -right-10 -top-10" />
      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[590px]">
          <h1
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(44px, 7vw, 64px)",
              lineHeight: "1.08",
              letterSpacing: "-0.056em",
              background: TITLE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Where AI agents
            <br />
            become systems
          </h1>
          <p
            className="mt-8 max-w-[520px]"
            style={{
              marginBottom: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "32.5px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Shekel brings multiple AI agents together into a unified architecture.
            It&apos;s not just about one task; it&apos;s about building resilient, automated
            production lines.
          </p>
          <button
            className="mt-10 inline-flex items-center gap-3 px-8 py-4"
            style={{
              borderRadius: radiuses.cardSm,
              background: "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)",
              boxShadow: "0px 20px 25px rgba(25,28,30,0.06)",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 18,
                lineHeight: "28px",
                color: colors.white,
              }}
            >
              Explore Agents
            </span>
            <Image src="/section-1-about/hero-arrow.svg" alt="" width={16} height={16} />
          </button>
        </div>
        <div className="relative mx-auto h-[360px] w-[360px] md:mx-0 md:h-[560px] md:w-[560px]">
          <div className="absolute inset-0 rounded-[20px] border border-[#B557FA]/30" />
          <div className="absolute inset-3 rounded-[20px] border border-[#B557FA]/20" />
          <div className="absolute inset-6 rounded-[20px] border border-[#B557FA]/15" />
          <Image src="/section-1-about/hero-glow.svg" alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}
