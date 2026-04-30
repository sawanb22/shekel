"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

// ─────────────────────────────────────────────────────────────────────────────
// Concept.tsx — "THE CONCEPT" section
// Figma frame: 500:22431 "Frame 2147225698"  (1280 × 639, y=787 on page)
//
// Responsive strategy (same pattern applied in Hero.tsx):
//   ≥ 768px   →  Scaled Figma canvas. A fixed 1280×639 canvas is uniformly
//                scaled via CSS container queries (100cqw), so every child
//                sits at its exact Figma pixel coordinate and the whole
//                composition matches Figma edge-to-edge at every width.
//   < 768px   →  Mobile-first stacked layout with readable, fluid font sizes.
//                The Figma composition would be too small to read when
//                uniformly scaled down to phone widths, so we reflow the
//                content into a single column instead.
// Both layouts render from the same data + use the same design tokens, so
// there's no content duplication drift — only the wrapping geometry differs.
//
// LAYOUT MAP (scaled canvas — coords are section-absolute, in Figma px):
//   Canvas             1280 × 639,   bg #FFFFFF
//   Background SVG     (-321, -168)  2400 × 1830 (grid + blurred blue circle)
//   ── LEFT column (starts at (24, 71.5), 648 wide, flex-col gap 24) ──
//     Badge "THE CONCEPT"   pad 4×12, rounded-full,
//                           bg rgba(186,158,255,0.1), border rgba(186,158,255,0.2)
//                           Inter 700 12/16 letter-spacing 5%, #BA9EFF
//     Heading               Poppins 500 48/68, #000000, max-width 752
//                           text: "The App Store for\nAutonomousIntelligence"
//     Body                  Inter 400 18/29.25, #000000
//     List (pt 16, gap 16)  20×20 gradient check icon + Inter 400 16/24, #000000
//   ── RIGHT column (starts at (672, 67), 560 wide, padding-top 117) ──
//     Row (gap 21, two cards, bottom-aligned)
//       Card 1 "Multi-Chain Sync" — 270 × 234
//         wrapper adds top padding 48 so it bottom-aligns with Card 2
//         shell: white bg, border rgba(68,72,84,0.1), rounded 16,
//                pad 16, gap 16, shadow-xl
//         image 236×160 (purple-gradient + network-graph icon)
//         title Inter 600 16/24, #4D4C4C
//       Card 2 "Secure Escrow"   — 270 × 282 (48px taller via extra bottom pad)
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 639;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const LIST_ITEMS = [
  "Decentralized node hosting",
  "Standardized Agent APIs",
  "Automated Revenue Splitting",
];

const CARD_BORDER = "rgba(68,72,84,0.1)";
const BADGE_BG = colors.gradient.purpleLight;
const BADGE_BORDER = "rgba(186,158,255,0.2)";
const BADGE_TEXT = colors.background.badgePurple;
const CARD_TITLE = "#4D4C4C";
const DARK_SECTION_BG = "#000000";
const DARK_CARD_BG = "#151926";
const DARK_CARD_BORDER = "rgba(68,72,84,0.1)";
const DARK_BADGE_BG = "rgba(186,158,255,0.1)";
const DARK_BADGE_TEXT = "#ba9eff";
const DARK_HEADING_GRADIENT =
  "linear-gradient(196.37deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)";

export default function Concept() {
  const { isDark } = useThemeTokens();

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          backgroundColor: isDark ? DARK_SECTION_BG : colors.white,
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
          {/* Background decoration (500:22432) */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ left: -321, top: -168, width: 2400, height: 1830 }}
          >
            <Image
              src="/section-2/bg-decoration.svg"
              alt=""
              width={2400}
              height={1830}
              className="h-full w-full"
            />
          </div>

          {/* LEFT column: text content */}
          <div
            className="absolute flex flex-col"
            style={{ left: 24, top: 71.5, width: 648, gap: 24 }}
          >
            <ConceptBadge isDark={isDark} />
            <ConceptHeading fontSize={48} lineHeight="68px" isDark={isDark} />
            <ConceptBody fontSize={18} lineHeight="29.25px" isDark={isDark} />
            <ConceptList fontSize={16} lineHeight="24px" isDark={isDark} />
          </div>

          {/* RIGHT column: staggered cards */}
          <div
            className="absolute"
            style={{ left: 672, top: 67, width: 560, paddingTop: 117 }}
          >
            <div className="flex flex-row items-start" style={{ gap: 21 }}>
              <div style={{ flex: "1 1 0", paddingTop: 48 }}>
                <ConceptCard
                  bgSrc="/section-2/card-multichain-bg.svg"
                  bgAlt="Multi-Chain Sync illustration"
                  title="Multi-Chain Sync"
                  extraBottom={false}
                  isDark={isDark}
                />
              </div>
              <div style={{ flex: "1 1 0" }}>
                <ConceptCard
                  bgSrc="/section-2/card-escrow-bg.svg"
                  bgAlt="Secure Escrow illustration"
                  title="Secure Escrow"
                  extraBottom
                  isDark={isDark}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative block w-full overflow-hidden md:hidden"
        style={{ backgroundColor: isDark ? DARK_SECTION_BG : colors.white }}
      >
        {/* Same decorative background — covers the mobile section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
        >
          <Image
            src="/section-2/bg-decoration.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative flex flex-col gap-8 px-6 py-16 sm:px-8">
          <ConceptBadge isDark={isDark} />
          <ConceptHeading fontSize={32} lineHeight="1.15" isDark={isDark} />
          <ConceptBody fontSize={16} lineHeight="26px" isDark={isDark} />
          <ConceptList fontSize={15} lineHeight="22px" isDark={isDark} />

          {/* Cards: side-by-side if room, stacked on very narrow */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ConceptCard
              bgSrc="/section-2/card-multichain-bg.svg"
              bgAlt="Multi-Chain Sync illustration"
              title="Multi-Chain Sync"
              extraBottom={false}
              isDark={isDark}
            />
            <ConceptCard
              bgSrc="/section-2/card-escrow-bg.svg"
              bgAlt="Secure Escrow illustration"
              title="Secure Escrow"
              extraBottom={false}
              isDark={isDark}
            />
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared sub-components — used by both desktop and mobile layouts so text
// content and tokens never drift between the two.
// ─────────────────────────────────────────────────────────────────────────────

function ConceptBadge({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="inline-flex items-center self-start rounded-full border"
      style={{
        padding: "4px 12px",
        backgroundColor: isDark ? DARK_BADGE_BG : BADGE_BG,
        borderColor: BADGE_BORDER,
      }}
    >
      <span
        style={{
          color: isDark ? DARK_BADGE_TEXT : BADGE_TEXT,
          fontFamily: typography.fonts.inter,
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "16px",
          letterSpacing: "0.05em",
        }}
      >
        THE CONCEPT
      </span>
    </div>
  );
}

function ConceptHeading({
  fontSize,
  lineHeight,
  isDark,
}: {
  fontSize: number;
  lineHeight: string;
  isDark: boolean;
}) {
  return (
    <h2
      style={{
        margin: 0,
        maxWidth: 752,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        color: isDark ? colors.white : colors.black,
        background: isDark ? DARK_HEADING_GRADIENT : "none",
        WebkitBackgroundClip: isDark ? "text" : "border-box",
        WebkitTextFillColor: isDark ? "transparent" : "unset",
        backgroundClip: isDark ? "text" : "border-box",
      }}
    >
      The App Store for
      <br />
      Autonomous<wbr />Intelligence
    </h2>
  );
}

function ConceptBody({
  fontSize,
  lineHeight,
  isDark,
}: {
  fontSize: number;
  lineHeight: string;
  isDark: boolean;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: isDark ? colors.text.badgeUpcoming : colors.black,
      }}
    >
      Shekel is the bridge between raw compute and functional automation. We
      provide the infrastructure for developers to host agents and for
      businesses to consume intelligence on-demand without vendor lock-in.
    </p>
  );
}

function ConceptList({
  fontSize,
  lineHeight,
  isDark,
}: {
  fontSize: number;
  lineHeight: string;
  isDark: boolean;
}) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <ul
      className="m-0 list-none p-0"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        paddingTop: 16,
      }}
    >
      {LIST_ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center"
          style={{ gap: 12 }}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <motion.div
            animate={{
              scale: hoveredItem === item ? 1.08 : 1,
              filter:
                hoveredItem === item
                  ? "none"
                  : "brightness(0) saturate(100%) invert(32%) sepia(95%) saturate(1900%) hue-rotate(213deg) brightness(95%) contrast(94%)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Image src="/section-2/check-icon.svg" alt="" width={20} height={20} />
          </motion.div>
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize,
              lineHeight,
              color: isDark ? colors.text.badgePurple : colors.black,
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ConceptCard({
  bgSrc,
  bgAlt,
  title,
  extraBottom,
  isDark,
}: {
  bgSrc: string;
  bgAlt: string;
  title: string;
  extraBottom: boolean;
  isDark: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="flex flex-col border shadow-xl"
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              boxShadow: "0px 20px 34px -20px rgba(53, 72, 109, 0.42)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{
        backgroundColor: isDark ? DARK_CARD_BG : colors.white,
        borderColor: isDark ? DARK_CARD_BORDER : CARD_BORDER,
        borderRadius: 16,
        padding: 16,
        paddingBottom: extraBottom ? 64 : 16,
        gap: 16,
      }}
    >
      <Image
        src={bgSrc}
        alt={bgAlt}
        width={236}
        height={160}
        className="h-auto w-full"
        style={{ borderRadius: 12 }}
      />
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: isDark ? colors.text.badgePurple : CARD_TITLE,
        }}
      >
        {title}
      </span>
    </motion.div>
  );
}
