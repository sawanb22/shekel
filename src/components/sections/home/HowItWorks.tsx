// HowItWorks.tsx — Figma node 500:22350 "Section - How It Works"
// Three-step architectural flow with scroll-reveal + staggered step cards.

"use client";

import StepCard from "@/components/shared/StepCard";
import { colors, typography } from "@/tokens/design-tokens";
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
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <Reveal className="mx-auto mb-20 flex w-full max-w-[768px] flex-col items-center gap-4 text-center">
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.05,
              color: colors.text.dark,
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
              color: colors.text.body,
            }}
          >
            From deployment to global scaling in record time.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-y-16 gap-x-12 md:grid-cols-3">
          <motion.div
            className="pointer-events-none absolute top-10 hidden h-[2px] md:block"
            style={{
              left: "25%",
              right: "25%",
              backgroundImage:
                "linear-gradient(to right, rgba(0,90,182,0.1), #005ab6 50%, rgba(0,90,182,0.1))",
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
