// HowItWorks.tsx — Figma node 500:22350 "Section - How It Works"
// Three-step architectural flow with scroll-reveal + staggered step cards.

"use client";

import StepCard from "@/components/shared/StepCard";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Build & Publish",
    description:
      "Develop your agent using our SDK and host it on\nour decentralized nodes.",
  },
  {
    number: "02",
    title: "Discover & Use",
    description:
      "Users and other agents find your services in the\nglobal registry.",
  },
  {
    number: "03",
    title: "Monetize & Scale",
    description:
      "Get paid automatically via smart contracts as your\nagent scales up.",
  },
];

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative w-full overflow-hidden py-24"
      style={{ backgroundColor: isDark ? "#000000" : colors.white }}
    >
      {isDark ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-52 -top-40 h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              filter: "blur(120px)",
              opacity: 0.5,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-52 -top-40 h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)",
              filter: "blur(120px)",
              opacity: 0.5,
            }}
          />
        </>
      ) : null}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-20 flex w-full max-w-[768px] flex-col items-center gap-4 text-center">
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "40px",
              color: isDark ? colors.white : colors.text.dark,
              background: isDark
                ? "linear-gradient(184.89deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
                : "none",
              WebkitBackgroundClip: isDark ? "text" : "border-box",
              WebkitTextFillColor: isDark ? "transparent" : "unset",
            }}
          >
            A Three-Step Architectural Flow
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: isDark ? colors.white : colors.text.body,
            }}
          >
            From deployment to global scaling in record time.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-y-16 gap-x-12 md:grid-cols-3">
          {/* Single continuous connector line (no center gap). */}
          <motion.div
            className="pointer-events-none absolute top-24 hidden h-[2px] md:block"
            style={{
              left: "25%",
              right: "25%",
              backgroundImage: isDark
                ? "linear-gradient(to right, rgba(0,90,182,0.1) 0%, #005ab6 50%, rgba(0,90,182,0.1) 100%)"
                : "linear-gradient(to right, rgba(0,90,182,0.05) 0%, #005ab6 18%, #005ab6 82%, rgba(0,90,182,0.05) 100%)",
              transformOrigin: "left center",
            }}
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={0.15 + i * 0.15}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
