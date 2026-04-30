// UseCases.tsx — Figma node 500:22382 "Section - Use Cases" (1280 × ~660)
// Light background, center heading, 3 card grid (Marketing / Real Estate / Legal)
// Each card has a 3D product shot + title + description.

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const CANVAS_W = 1280;
const CANVAS_H = 668;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const DARK_GLOW =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

type Card = {
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
};

const CARDS: Card[] = [
  {
    title: "Marketing",
    desc: "Automated content strategy, hyper-personalized\nemails, and real-time social listening agents.",
    img: "/section-5/marketing.png",
    imgAlt: "Marketing",
  },
  {
    title: "Real Estate",
    desc: "Property valuation agents, virtual tour guides,\nand predictive market analysis bots.",
    img: "/section-5/real-estate.jpg",
    imgAlt: "Real Estate",
  },
  {
    title: "Legal",
    desc: "Contract analysis, compliance monitoring, and\ncase law research agents.",
    img: "/section-5/legal-overlay.png",
    imgAlt: "Legal",
  },
];

export default function UseCases() {
  return (
    <>
      <UseCasesDesktop />
      <UseCasesMobile />
    </>
  );
}

function UseCasesDesktop() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        backgroundColor: isDark ? colors.black : colors.background.section,
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {isDark ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full"
              style={{
                left: -688,
                top: -34,
                width: 696,
                height: 696,
                background: DARK_GLOW,
                filter: "blur(190px)",
                opacity: 0.46,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute rounded-full"
              style={{
                left: 1274,
                top: 0,
                width: 696,
                height: 696,
                background: DARK_GLOW,
                filter: "blur(190px)",
                opacity: 0.46,
              }}
            />
          </>
        ) : null}

        {/* padding 96 x 24 — inner container width = 1232 */}
        <div
          className="flex flex-col gap-16"
          style={{ padding: "96px 24px", width: "100%" }}
        >
          <Reveal>
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 48,
                lineHeight: "40px",
                textAlign: "center",
                color: isDark ? colors.white : "#1A1C1C",
                background: isDark
                  ? "linear-gradient(185.37deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
                  : "none",
                WebkitBackgroundClip: isDark ? "text" : "border-box",
                WebkitTextFillColor: isDark ? "transparent" : "unset",
              }}
            >
              Engineered for Every Vertical
            </h2>
          </Reveal>

          <RevealStagger className="grid grid-cols-3 gap-6" stagger={0.12}>
            {CARDS.map((c) => (
              <RevealItem key={c.title} className="h-full">
                <UseCaseCard card={c} isDark={isDark} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ card, isDark }: { card: Card; isDark: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      className="flex h-full flex-col gap-3 overflow-hidden"
      style={{
        padding: 32,
        borderRadius: 32,
        border: isDark ? "1px solid rgba(255,255,255,0.2)" : "none",
        backgroundColor: isDark ? colors.black : colors.white,
        boxShadow:
          isDark
            ? "0px 12px 16px rgba(0,0,0,0.04), 0px 4px 4px rgba(0,0,0,0.02)"
            : "0px 4px 8px 0px rgba(0, 0, 0, 0.02), 0px 12px 32px 0px rgba(0, 0, 0, 0.04)",
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              boxShadow:
                "0px 10px 20px 0px rgba(0, 0, 0, 0.05), 0px 22px 40px -8px rgba(0, 0, 0, 0.08)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 192, borderRadius: 24 }}
      >
        <Image
          src={card.img}
          alt={card.imgAlt}
          fill
          sizes="400px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="pt-5">
        <h3
          style={{
            margin: 0,
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: "28px",
            color: isDark ? colors.white : "#1A1C1C",
          }}
        >
          {card.title}
        </h3>
      </div>
      <p
        style={{
          margin: 0,
          whiteSpace: "pre-line",
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: isDark ? colors.white : "#414753",
        }}
      >
        {card.desc}
      </p>
    </motion.article>
  );
}

function UseCasesMobile() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="block w-full md:hidden"
      style={{ backgroundColor: isDark ? colors.black : colors.background.section }}
    >
      {isDark ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-56 -top-24 rounded-full"
            style={{
              width: 520,
              height: 520,
              background: DARK_GLOW,
              filter: "blur(140px)",
              opacity: 0.44,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-56 top-1/3 rounded-full"
            style={{
              width: 520,
              height: 520,
              background: DARK_GLOW,
              filter: "blur(140px)",
              opacity: 0.44,
            }}
          />
        </>
      ) : null}
      <div className="flex flex-col gap-10 px-6 py-16 sm:px-8">
        <Reveal>
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(28px, 8vw, 40px)",
              lineHeight: 1.1,
              textAlign: "center",
              color: isDark ? colors.white : "#1A1C1C",
              background: isDark
                ? "linear-gradient(185.37deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
                : "none",
              WebkitBackgroundClip: isDark ? "text" : "border-box",
              WebkitTextFillColor: isDark ? "transparent" : "unset",
            }}
          >
            Engineered for Every Vertical
          </h2>
        </Reveal>
        <RevealStagger className="flex flex-col gap-5" stagger={0.12}>
          {CARDS.map((c) => (
            <RevealItem key={c.title}>
              <UseCaseCard card={c} isDark={isDark} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
