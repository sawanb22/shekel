"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";
import { motion, useReducedMotion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// BrowseByCategory.tsx  —  "Browse By Category"
// Figma frame: 500:7533  "Frame 2147225679"
// Canvas: 1280 × 732 px   Page-y: unknown   bg: #FFFFFF
//
// Responsive strategy:
//   >= 768 px  ->  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px   ->  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP (all coords are section-absolute Figma px):
//   BG Grid          (x=-531, y=-188)  2400.92x1830
//   Header row       (x=40, y=48)      1201x52
//   Subtitle         (x=40, y=116)     227x20
//   3 cards wrapper  (x=40, y=231)     1216x~300
//   CTA button       (x=517, y=574)    246x56
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 732;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

type Category = {
  title: string;
  count: string;
  description: string;
  topText: string;
  icon: string;
  miniA?: string;
  miniB?: string;
  miniTint?: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Marketing",
    count: "120+ AGENTS",
    description: "SEO, Ad Copy, Social Media Management, and\nCampaign Automation.",
    topText: "Top: MarketMuse, SocialCraft",
    icon: "/section-4-marketplace/category-marketing-icon.svg",
    miniA: "/section-4-marketplace/category-marketing-mini-logo-1-56586a.png",
    miniB: "/section-4-marketplace/category-marketing-mini-logo-2-56586a.png",
  },
  {
    title: "Finance",
    count: "85+ AGENTS",
    description: "Portfolio tracking, tax analysis, and real-time\nexpense management.",
    topText: "Top: LedgerAI, FinTrack",
    icon: "/section-4-marketplace/category-finance-icon.svg",
    miniTint: "rgba(34, 197, 94, 0.1)",
  },
  {
    title: "Automation",
    count: "240+ AGENTS",
    description: "Workflow optimization, legacy system\nintegration, and RPA bots.",
    topText: "Top: TaskMaster, AutoFlow",
    icon: "/section-4-marketplace/category-automation-icon.svg",
    miniTint: "rgba(0, 90, 182, 0.1)",
  },
];

export default function BrowseByCategory() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

function Desktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: colors.white,
        borderRadius: radiuses.card,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
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
        <div className="absolute" style={{ left: -531, top: -188, width: 2400.92, height: 1830 }}>
          <Image
            src="/section-4-marketplace/browse-categories-bg-grid.svg"
            alt=""
            fill
            sizes="2401px"
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="absolute rounded-full" style={{ left: -688, top: -34, width: 696, height: 696, background: BLUE_GRADIENT, filter: "blur(257.5px)" }} />
        <div className="absolute rounded-full" style={{ left: 1274, top: 0, width: 696, height: 696, background: BLUE_GRADIENT, filter: "blur(257.5px)" }} />
        <div className="absolute rounded-full" style={{ left: -488, top: 726, width: 2161, height: 696, background: BLUE_GRADIENT, filter: "blur(257.5px)" }} />

        <div className="absolute flex items-end justify-between" style={{ left: 40, top: 48, width: 1201, height: 52 }}>
          <Reveal>
            <h2
              className="m-0"
              style={{
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 48,
                lineHeight: "52px",
                letterSpacing: "-0.0146em",
                color: "#000",
                textTransform: "capitalize",
              }}
            >
              Browse{" "}
              <span
                style={{
                  background: BLUE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                By Category
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="#"
              className="group m-0 inline-flex items-center transition-[opacity,filter] duration-200 ease-out hover:opacity-100 hover:[filter:drop-shadow(0_4px_10px_rgba(40,100,228,0.34))]"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 12,
                lineHeight: "16px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#000",
              }}
            >
              Explore Categories{" "}
              <span 
                className="ml-1 transition-transform duration-200 ease-out group-hover:translate-x-1" 
                style={{ background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                →
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p
            className="absolute m-0"
            style={{
              left: 40,
              top: 116,
              width: 227,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "20px",
              color: "#000",
            }}
          >
            Explore AI agents by category
          </p>
        </Reveal>

        <RevealStagger
          className="absolute grid"
          style={{
            left: 40,
            top: 231,
            width: 1216,
            gridTemplateColumns: "repeat(3, 384px)",
            columnGap: 32,
          }}
          stagger={0.15}
        >
          {CATEGORIES.map((cat) => (
            <RevealItem key={cat.title}>
              <CategoryCard category={cat} />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.3}>
          <button
            className="absolute border-2 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0px_10px_20px_-8px_rgba(40,100,228,0.4)]"
            style={{
              left: 517,
              top: 574,
              width: 246,
              height: 56,
              borderRadius: radiuses.icon,
              border: "2px solid transparent",
              background: `linear-gradient(${colors.white}, ${colors.white}) padding-box, ${BLUE_GRADIENT} border-box`,
            }}
          >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "24px",
              textTransform: "uppercase",
              background: BLUE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Load More Agents
          </span>
            </button>
        </Reveal>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      className="flex flex-col gap-2 border p-8"
      style={{
        borderRadius: radiuses.cardLg,
        borderColor: "rgba(255,255,255,0.1)",
        background: colors.white,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              boxShadow: "0px 20px 34px -20px rgba(53, 72, 109, 0.42)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <div className="relative h-14 w-14 rounded-2xl border border-white/10 bg-white/80">
          <div
            className="absolute"
            style={{ left: "50%", top: "50%", width: 28, height: 20, transform: "translate(-50%, -50%)" }}
          >
            <Image src={category.icon} alt="" fill sizes="28px" className="object-contain" unoptimized />
          </div>
        </div>
        <div className="rounded-full bg-[#F2F4F7] px-3 py-1">
          <span style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 12, lineHeight: "16px", color: "#191C1E" }}>{category.count}</span>
        </div>
      </div>

      <h3 className="m-0 pt-4" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: "#000" }}>
        {category.title}
      </h3>
      <p className="m-0 whitespace-pre-line" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#000" }}>
        {category.description}
      </p>
      <div className="flex items-center gap-2 pt-4">
        {category.miniA ? (
          <>
            <div className="relative h-6 w-6 overflow-hidden rounded-md">
              <Image src={category.miniA} alt="" fill sizes="24px" className="object-cover" />
            </div>
            <div className="relative h-6 w-6 overflow-hidden rounded-md">
              <Image src={category.miniB || category.miniA} alt="" fill sizes="24px" className="object-cover" />
            </div>
          </>
        ) : (
          <div className="h-6 w-6 rounded-md" style={{ background: category.miniTint || "rgba(0,0,0,0.05)" }} />
        )}
        <span style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 10, lineHeight: "15px", color: "#000" }}>
          {category.topText}
        </span>
      </div>
    </motion.article>
  );
}

function Mobile() {
  return (
    <section className="block w-full overflow-hidden rounded-3xl bg-white px-6 py-12 md:hidden">
      <h2
        className="m-0"
        style={{
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: "clamp(30px, 9vw, 48px)",
          lineHeight: "1.05",
          color: "#000",
        }}
      >
        Browse{" "}
        <span
          style={{
            background: BLUE_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          By Category
        </span>
      </h2>
      <p className="mt-2" style={{ fontFamily: typography.fonts.inter, fontSize: 16, lineHeight: "20px", color: "#000" }}>
        Explore AI agents by category
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4">
        {CATEGORIES.map((cat) => (
          <div key={`mobile-${cat.title}`} className="rounded-3xl border p-6" style={{ borderColor: "rgba(255,255,255,0.1)", background: colors.white }}>
            <div className="flex items-center justify-between">
              <div className="relative h-12 w-12 rounded-xl bg-[#F2F4F7]">
                <div
                  className="absolute"
                  style={{ left: "50%", top: "50%", width: 24, height: 18, transform: "translate(-50%, -50%)" }}
                >
                  <Image src={cat.icon} alt="" fill sizes="24px" className="object-contain" unoptimized />
                </div>
              </div>
              <span className="rounded-full bg-[#F2F4F7] px-3 py-1" style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 11, lineHeight: "16px", color: "#191C1E" }}>
                {cat.count}
              </span>
            </div>
            <h3 className="mb-0 mt-4" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 24, lineHeight: "28px", color: "#000" }}>
              {cat.title}
            </h3>
            <p className="mb-0 mt-2 whitespace-pre-line" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#000" }}>
              {cat.description}
            </p>
          </div>
        ))}
      </div>

      <button
        className="mt-8 w-full border-2 py-4"
        style={{
          border: "2px solid transparent",
          borderRadius: radiuses.icon,
          background: `linear-gradient(${colors.white}, ${colors.white}) padding-box, ${BLUE_GRADIENT} border-box`,
        }}
      >
        <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", textTransform: "uppercase", background: BLUE_GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Load More Agents
        </span>
      </button>
    </section>
  );
}
