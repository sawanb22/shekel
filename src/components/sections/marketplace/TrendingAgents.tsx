"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";
import { motion, useReducedMotion } from "framer-motion";
import trendingAgentsBg from "../../../../new-images/page 2/trending ai agents.webp";

const CANVAS_W = 1280;
const CANVAS_H = 983;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const CARD_BG = "rgba(255,255,255,0.95)";
const CARD_BORDER = "rgba(255,255,255,0.1)";
const SUBTITLE_COLOR = "rgba(25,28,30,0.78)";
const BODY_COLOR = "#111827";

type AgentCard = {
  name: string;
  description: string;
  rating: string;
  runs: string;
  price: string;
  x: number;
  y: number;
  icon: string;
};

const CARDS: AgentCard[] = [
  { name: "MarketMuse", description: "Generates SEO strategy in seconds.\nAI-driven marketing and SEO\noptimization.", rating: "4.9", runs: "1.2k runs", price: "Free / $5 task", x: 45, y: 175, icon: "/section-2-marketplace/icon-marketmuse.svg" },
  { name: "GraphQ", description: "Data visualization specialist for\ncomplex analytical frameworks.", rating: "4.2", runs: "850 runs", price: "$5/month", x: 349, y: 175, icon: "/section-2-marketplace/icon-graphq.svg" },
  { name: "LegalEagle", description: "Automated contract reviewer\nfocusing on compliance risk.", rating: "4.9", runs: "920 runs", price: "Enterprise Pro", x: 653, y: 175, icon: "/section-2-marketplace/icon-legaleagle.svg" },
  { name: "SwiftCode", description: "Legacy code modernization through\nneural refactoring.", rating: "4.3", runs: "780 runs", price: "Free", x: 957, y: 175, icon: "/section-2-marketplace/icon-swiftcode.svg" },
  { name: "SocialSync", description: "Multi-platform post scheduler with\nviral forecasting.", rating: "4.1", runs: "1.1k runs", price: "$12/month", x: 54, y: 549, icon: "/section-2-marketplace/icon-socialsync.svg" },
  { name: "Finalyze", description: "AI stock trend analysis for technical\ntraders.", rating: "4.8", runs: "640 runs", price: "Free", x: 357, y: 549, icon: "/section-2-marketplace/icon-finalyze.svg" },
  { name: "GhostWriter", description: "Long-form essay assistant with\nsemantic memory.", rating: "4.8", runs: "1.2k runs", price: "Tier 2 Pro", x: 657, y: 549, icon: "/section-2-marketplace/icon-ghostwriter.svg" },
  { name: "PixelGen", description: "UI component generator for atomic\ndesign systems.", rating: "4.9", runs: "980 runs", price: "Free", x: 956, y: 549, icon: "/section-2-marketplace/icon-pixelgen.svg" },
];

export default function TrendingAgents() {
  return (
    <>
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          backgroundColor: colors.black,
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
        }}
      >
        <div
          className="absolute top-0 left-1/2 -ml-[640px]"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top center",
          }}
        >
          <BackgroundDecorations />
          <SectionHeader />
          <RevealStagger className="absolute inset-0">
            {CARDS.map((card) => (
              <RevealItem
                key={card.name}
                className="absolute"
                style={{ left: card.x, top: card.y }}
              >
                <AgentCard card={card} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="relative block w-full overflow-hidden bg-black md:hidden">
        <BackgroundDecorationsMobile />
        <div className="relative flex flex-col gap-6 px-6 py-16">
          <h2
            className="m-0"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(28px, 8vw, 40px)",
              lineHeight: "1.15",
              textTransform: "capitalize",
              color: colors.white,
            }}
          >
            Trending{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Agents
            </span>
          </h2>
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: SUBTITLE_COLOR,
            }}
          >
            Popular agents used by the community
          </p>
          <div className="grid grid-cols-1 gap-4">
            {CARDS.map((card) => (
              <AgentCardMobile key={`m-${card.name}`} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BackgroundDecorations() {
  return (
    <>
      <div
        className="absolute"
        style={{
          left: -340,
          top: -80,
          width: 1841,
          height: 1252,
        }}
      >
        <Image
          src={trendingAgentsBg}
          alt=""
          fill
          sizes="1841px"
          className="object-cover"
          style={{ filter: "blur(0px)", transform: "scale(1.03)" }}
        />
      </div>
      <div className="absolute rounded-full" style={{ left: -688, top: 146, width: 696, height: 696, background: BLUE_GRADIENT, opacity: 0.2 }} />
      <div className="absolute rounded-full" style={{ left: 1270, top: 148, width: 696, height: 696, background: BLUE_GRADIENT, opacity: 0.2 }} />
      <div className="absolute rounded-full" style={{ left: -187, top: -162, width: 1647, height: 163, background: BLUE_GRADIENT, opacity: 0.12 }} />
      <div className="absolute rounded-full" style={{ left: -187, top: 978, width: 1647, height: 163, background: BLUE_GRADIENT, opacity: 0.2 }} />
    </>
  );
}

function BackgroundDecorationsMobile() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(122,168,255,0.22) 0%, rgba(122,168,255,0) 50%)",
      }}
    />
  );
}

function SectionHeader() {
  return (
    <div className="absolute flex items-end justify-between" style={{ left: 52, top: 50, width: 1184, paddingBottom: 32 }}>
      <div className="flex flex-col gap-4">
        <Reveal>
          <h2
            className="m-0"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "48px",
              textTransform: "capitalize",
              color: "#191C1E",
            }}
          >
            Trending{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Agents
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: "-0.025em",
              color: SUBTITLE_COLOR,
            }}
          >
            Popular agents used by the community
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.2} className="flex items-center gap-2">
        <a href="#" className="group flex items-center gap-2 transition-[opacity,filter] duration-200 ease-out hover:opacity-100 hover:[filter:drop-shadow(0_4px_10px_rgba(40,100,228,0.34))]">
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: SUBTITLE_COLOR,
            }}
          >
            Explore Agents
          </span>
          <Image
            src="/section-2-marketplace/link-arrow.svg"
            alt=""
            width={9}
            height={9}
            className="transition-transform duration-200 ease-out group-hover:translate-x-1"
          />
        </a>
      </Reveal>
    </div>
  );
}

function AgentCard({ card }: { card: AgentCard }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      className="w-full h-full"
      style={{
        width: 286,
        height: 349,
        borderRadius: radiuses.inputIcon,
        border: `1px solid ${CARD_BORDER}`,
        background: CARD_BG,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              boxShadow: "0px 20px 34px -20px rgba(53, 72, 109, 0.42), 0 0 0 1px rgba(255,255,255,0.03) inset",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="absolute left-6 top-[33px] flex h-12 w-12 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.1)]">
        <Image src={card.icon} alt="" width={48} height={48} />
      </div>

      <div className="absolute" style={{ left: 24, top: 82, width: 247 }}>
        <h3
          className="m-0"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "28px",
            letterSpacing: "-0.025em",
            textTransform: "uppercase",
            color: BODY_COLOR,
          }}
        >
          {card.name}
        </h3>
        <p
          className="m-0 mt-2 whitespace-pre-line"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22.75px",
            color: BODY_COLOR,
          }}
        >
          {card.description}
        </p>
      </div>

      <div className="absolute flex items-center gap-1" style={{ left: 238, top: 52 }}>
        <Image src="/section-2-marketplace/star.svg" alt="" width={10} height={10} />
        <span style={{ fontFamily: typography.fonts.inter, fontSize: 12, lineHeight: "16px", color: BODY_COLOR }}>{card.rating}</span>
      </div>

      <div className="absolute" style={{ left: 24, top: 206, width: 247, paddingTop: 20 }}>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "15px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {card.runs}
            </span>
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
                color: BODY_COLOR,
              }}
            >
              {card.price}
            </span>
          </div>
        </div>
        <motion.button
          className="mt-6 w-full border-0 cursor-pointer"
          style={{
            borderRadius: "5px",
            padding: "12px 0",
            background: BLUE_GRADIENT,
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.white,
          }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : {
                  y: -3,
                  scale: 1.025,
                  boxShadow:
                    "0px 18px 34px -8px rgba(40,100,228,0.5), 0px 8px 18px -8px rgba(40,100,228,0.38)",
                }
          }
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          Run Agent
        </motion.button>
      </div>
    </motion.article>
  );
}

function AgentCardMobile({ card }: { card: AgentCard }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div
      className="rounded-lg border p-4"
      style={{ borderColor: CARD_BORDER, background: CARD_BG }}
    >
      <div className="flex items-start justify-between">
        <h3
          className="m-0"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "24px",
            textTransform: "uppercase",
            color: BODY_COLOR,
          }}
        >
          {card.name}
        </h3>
        <span className="flex items-center gap-1" style={{ color: BODY_COLOR, fontSize: 12 }}>
          <Image src="/section-2-marketplace/star.svg" alt="" width={10} height={10} />
          {card.rating}
        </span>
      </div>
      <p
        className="m-0 mt-2 whitespace-pre-line"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "22px",
          color: BODY_COLOR,
        }}
      >
        {card.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: BLUE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {card.runs}
          </span>
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 13,
              lineHeight: "18px",
              textTransform: "uppercase",
              color: BODY_COLOR,
            }}
          >
            {card.price}
          </span>
        </div>
      </div>
      <motion.button
        className="mt-4 w-full border-0 cursor-pointer"
        style={{
          borderRadius: "5px",
          padding: "12px 0",
          background: BLUE_GRADIENT,
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 12,
          lineHeight: "16px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.white,
        }}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                y: -3,
                scale: 1.025,
                boxShadow:
                  "0px 18px 34px -8px rgba(40,100,228,0.5), 0px 8px 18px -8px rgba(40,100,228,0.38)",
              }
        }
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        Run Agent
      </motion.button>
    </div>
  );
}
