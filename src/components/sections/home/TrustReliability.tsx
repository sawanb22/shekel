// TrustReliability.tsx — Figma node 500:22234 "Trust & Reliability Section"
// 1280 × ~640. 4-column grid (Verified / Community / Secure / Scalable).

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const CANVAS_W = 1280;
const CANVAS_H = 640;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

type Card = {
  icon: string;
  iconW: number;
  iconH: number;
  title: string;
  desc: string;
};

const CARDS: Card[] = [
  {
    icon: "/section-9/icon-verified.svg",
    iconW: 30,
    iconH: 30,
    title: "Verified Agents",
    desc: "Every agent undergoes\nrigorous security and\nquality audit",
  },
  {
    icon: "/section-9/icon-community.svg",
    iconW: 30,
    iconH: 30,
    title: "Community Ratings",
    desc: "Transparent reviews and\nhistorical performance\ndata",
  },
  {
    icon: "/section-9/icon-secure.svg",
    iconW: 30,
    iconH: 30,
    title: "Secure Infrastructure",
    desc: "Enterprise-grade data\nencryption and privacy\ncontrols",
  },
  {
    icon: "/section-9/icon-scalable.svg",
    iconW: 30,
    iconH: 30,
    title: "Scalable Platform",
    desc: "Execute thousands of\ntasks simultaneously with\nlow latency",
  },
];

export default function TrustReliability() {
  return (
    <>
      <TrustDesktop />
      <TrustMobile />
    </>
  );
}

function TrustDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 244, 247, 1) 100%)",
      }}
    >
      <div
        className="absolute left-0 top-0 flex flex-col"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          padding: "128px 32px",
          gap: 96,
        }}
      >
        <Reveal className="w-full text-center">
          <TrustHeading />
        </Reveal>
        <RevealStagger className="grid w-full grid-cols-4" stagger={0.1}>
          {CARDS.map((c) => (
            <RevealItem key={c.title} className="h-full">
              <TrustCard card={c} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function TrustHeading() {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize: 48,
        lineHeight: "48px",
        letterSpacing: "-0.025em",
        color: "#191C1E",
      }}
    >
      Built for{" "}
      <span
        style={{
          background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        reliability
      </span>{" "}
      and{" "}
      <span
        style={{
          background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        trust
      </span>
    </h2>
  );
}

function TrustCard({ card }: { card: Card }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      className="flex h-full flex-col"
      style={{ padding: 32 }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              boxShadow: "0px 18px 34px -22px rgba(53, 72, 109, 0.4)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="pb-8">
        <div
          className="flex items-center justify-center rounded-[12px] bg-white"
          style={{
            width: 56,
            height: 56,
            boxShadow: "0 8px 22px -14px rgba(36, 54, 86, 0.35)",
          }}
        >
          <Image src={card.icon} alt="" width={card.iconW} height={card.iconH} />
        </div>
      </div>
      <h3
        className="pb-3"
        style={{
          margin: 0,
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 20,
          lineHeight: "28px",
          letterSpacing: "-0.025em",
          color: "#191C1E",
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          margin: 0,
          whiteSpace: "pre-line",
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "26px",
          color: "#414753",
        }}
      >
        {card.desc}
      </p>
    </motion.article>
  );
}

function TrustMobile() {
  return (
    <section
      className="block w-full md:hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 244, 247, 1) 100%)",
      }}
    >
      <div className="flex flex-col gap-12 px-6 py-20 sm:px-8">
        <Reveal className="text-center">
          <TrustHeading />
        </Reveal>
        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.1}>
          {CARDS.map((c) => (
            <RevealItem key={c.title}>
              <TrustCard card={c} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
