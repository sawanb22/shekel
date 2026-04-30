// TrustReliability.tsx — Figma node 500:22234 "Trust & Reliability Section"
// 1280 × ~640. 4-column grid (Verified / Community / Secure / Scalable).

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";
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
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        background: isDark
          ? "#101420"
          : "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 244, 247, 1) 100%)",
      }}
    >
      {isDark ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-56px] h-[190px]"
            style={{
              background:
                "radial-gradient(120% 95% at 50% 100%, rgba(124,166,255,0.22) 0%, rgba(66,117,232,0.14) 36%, rgba(40,100,228,0.06) 58%, rgba(40,100,228,0) 100%)",
              filter: "blur(18px)",
            }}
          />
        </>
      ) : null}
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
          <TrustHeading isDark={isDark} />
        </Reveal>
        <RevealStagger className="grid w-full grid-cols-4" stagger={0.1}>
          {CARDS.map((c) => (
            <RevealItem key={c.title} className="h-full">
              <TrustCard card={c} isDark={isDark} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function TrustHeading({ isDark }: { isDark: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <h2
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize: 48,
        lineHeight: "48px",
        letterSpacing: "-0.025em",
        color: isDark ? colors.white : "#191C1E",
        background: isDark
          ? "linear-gradient(186.05deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
          : "none",
        WebkitBackgroundClip: isDark ? "text" : "border-box",
        WebkitTextFillColor: isDark ? "transparent" : "unset",
      }}
    >
      Built for{" "}
      <span
        style={{
          color: isDark ? undefined : colors.brand.blueStart,
          background:
            isDark || isHovered
              ? `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`
              : "none",
          WebkitBackgroundClip: isDark || isHovered ? "text" : "border-box",
          WebkitTextFillColor: isDark || isHovered ? "transparent" : "unset",
          backgroundClip: isDark || isHovered ? "text" : "border-box",
          transition: "color 180ms ease, background 180ms ease",
        }}
      >
        reliability
      </span>{" "}
      and{" "}
      <span
        style={{
          color: isDark ? undefined : colors.brand.blueStart,
          background:
            isDark || isHovered
              ? `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`
              : "none",
          WebkitBackgroundClip: isDark || isHovered ? "text" : "border-box",
          WebkitTextFillColor: isDark || isHovered ? "transparent" : "unset",
          backgroundClip: isDark || isHovered ? "text" : "border-box",
          transition: "color 180ms ease, background 180ms ease",
        }}
      >
        trust
      </span>
    </h2>
  );
}

function TrustCard({ card, isDark }: { card: Card; isDark: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.article
      className="flex h-full flex-col"
      style={{ padding: 32 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
          className="flex items-center justify-center rounded-[12px]"
          style={{
            width: 56,
            height: 56,
            backgroundColor: isHovered ? (isDark ? "#060b16" : "#ffffff") : "transparent",
            boxShadow: isHovered
              ? isDark
                ? "0 0 0 1px rgba(120, 139, 196, 0.2), 0 8px 22px -14px rgba(36, 54, 86, 0.45)"
                : "0 8px 22px -14px rgba(36, 54, 86, 0.35)"
              : "none",
          }}
        >
          <Image
            src={card.icon}
            alt=""
            width={card.iconW}
            height={card.iconH}
            style={
              isHovered
                ? undefined
                : {
                    // Force a stronger single-blue icon tone before hover.
                    filter:
                      "brightness(0) saturate(100%) invert(32%) sepia(95%) saturate(1900%) hue-rotate(213deg) brightness(95%) contrast(94%)",
                  }
            }
          />
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
            color: isDark ? colors.white : "#191C1E",
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
          color: isDark ? "#e5e7f6" : "#414753",
        }}
      >
        {card.desc}
      </p>
    </motion.article>
  );
}

function TrustMobile() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{
        background: isDark
          ? "#101420"
          : "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(242, 244, 247, 1) 100%)",
      }}
    >
      {isDark ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-44px] h-[160px]"
            style={{
              background:
                "radial-gradient(130% 95% at 50% 100%, rgba(124,166,255,0.2) 0%, rgba(66,117,232,0.12) 36%, rgba(40,100,228,0.05) 58%, rgba(40,100,228,0) 100%)",
              filter: "blur(16px)",
            }}
          />
        </>
      ) : null}
      <div className="flex flex-col gap-12 px-6 py-20 sm:px-8">
        <Reveal className="text-center">
          <TrustHeading isDark={isDark} />
        </Reveal>
        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.1}>
          {CARDS.map((c) => (
            <RevealItem key={c.title}>
              <TrustCard card={c} isDark={isDark} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
