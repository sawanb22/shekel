import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// TrendingNow.tsx  —  "Trending Now"
// Figma frame: 506:3697  "Body"
// Canvas: 1280 × 769 px   Page-y: ...   bg: #FFFFFF
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Background SVG (-543, 18) 2400.92×1830
//   Heading Area (0, 70) 1280 wide row, flex-end alignment
//     Heading 2 "Trending Now"
//     Text "The fastest growing agents this week"
//     Arrows SVG
//   Cards Area (12, 238) 1280 wide row, gap 24
//     Card 1 (MarketPulse Pro)
//     Card 2 (CopyArchitect)
//     Card 3 (DevFlow Automator)
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 769;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const CARD_BORDER = "rgba(248, 250, 252, 0.1)";
const CARD_SHADOW = "0px 8px 10px -6px rgba(15, 23, 42, 0.05), 0px 20px 25px -5px rgba(15, 23, 42, 0.05)";
const BADGE_BG = "#B7EAFF";
const BADGE_TEXT = "#001F28";

export default function TrendingNow() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: colors.white,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        borderRadius: 24,
        marginTop: 24,
      }}
    >
      <div
        className="absolute top-0"
        style={{
          left: "50%",
          marginLeft: `calc(-${CANVAS_W}px / 2)`,
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top center",
        }}
      >
        {/* Background SVG */}
        <Image
          src="/section-3-explore-agent/main-bg.svg"
          alt=""
          width={2400.92}
          height={1830}
          className="absolute pointer-events-none"
          style={{ left: -543, top: 18 }}
        />

        {/* Decorative Ellipses */}
        <div
          className="absolute"
          style={{
            left: -126,
            top: 638,
            width: 310,
            height: 131,
            background: BUTTON_GRADIENT,
            filter: "blur(203.4px)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1081,
            top: 655,
            width: 310,
            height: 131,
            background: BUTTON_GRADIENT,
            filter: "blur(203.4px)",
          }}
        />

        {/* Header Area */}
        <div
          className="absolute flex flex-row justify-between items-end"
          style={{ left: 0, top: 70, width: 1280, padding: "0 32px" }}
        >
          <div className="flex flex-col gap-[29px]">
            <SectionHeading fontSize={48} lineHeight="36px" />
            <SectionBody fontSize={16} lineHeight="24px" />
          </div>
          <Image src="/section-3-explore-agent/arrows.svg" alt="navigation arrows" width={80} height={40} />
        </div>

        {/* Cards Area */}
        <div
          className="absolute flex flex-row items-stretch"
          style={{ left: 12, top: 238, width: 1280, gap: 24, padding: "0 32px 32px 0" }}
        >
          {/* Card 1 */}
          <TrendingCard
            title="MarketPulse Pro"
            desc="Real-time financial sentiment analysis and\nautomated trading signals generator."
            rating="4.9"
            runs="12.4k runs"
            imageSrc="/section-3-explore-agent/card-1-bg.svg"
            isFeatured
            buttonStyle="gradient"
          />

          {/* Card 2 */}
          <TrendingCard
            title="CopyArchitect"
            desc="Autonomous brand voice engine that drafts\nhigh-conversion ad copy across 12…"
            rating="4.8"
            runs="8.1k runs"
            imageSrc="/section-3-explore-agent/card-2-bg.svg"
            buttonStyle="solid"
          />

          {/* Card 3 */}
          <TrendingCard
            title="DevFlow Automator"
            desc="Connects to GitHub to automatically review\nPRs and suggest security optimizations."
            rating="5.0"
            runs="25k runs"
            imageSrc="/section-3-explore-agent/card-3-bg.svg"
            buttonStyle="solid"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.white, borderRadius: 24, marginTop: 24 }}
    >
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <Image
          src="/section-3-explore-agent/main-bg.svg"
          alt=""
          width={2400.92}
          height={1830}
          className="max-w-none absolute"
          style={{ left: -543, top: 18 }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-4">
          <SectionHeading fontSize="clamp(32px, 8vw, 40px)" lineHeight="1.2" />
          <SectionBody fontSize="clamp(14px, 4vw, 16px)" lineHeight="1.5" />
        </div>

        <div className="flex flex-col gap-6">
          <TrendingCard
            title="MarketPulse Pro"
            desc="Real-time financial sentiment analysis and automated trading signals generator."
            rating="4.9"
            runs="12.4k runs"
            imageSrc="/section-3-explore-agent/card-1-bg.svg"
            isFeatured
            buttonStyle="gradient"
            mobile
          />
          <TrendingCard
            title="CopyArchitect"
            desc="Autonomous brand voice engine that drafts high-conversion ad copy across 12…"
            rating="4.8"
            runs="8.1k runs"
            imageSrc="/section-3-explore-agent/card-2-bg.svg"
            buttonStyle="solid"
            mobile
          />
          <TrendingCard
            title="DevFlow Automator"
            desc="Connects to GitHub to automatically review PRs and suggest security optimizations."
            rating="5.0"
            runs="25k runs"
            imageSrc="/section-3-explore-agent/card-3-bg.svg"
            buttonStyle="solid"
            mobile
          />
        </div>
      </div>
    </section>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function SectionHeading({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <h2
      className="m-0"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        letterSpacing: "-0.0156em",
        color: colors.black,
      }}
    >
      Trending Now
    </h2>
  );
}

function SectionBody({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <p
      className="m-0"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: colors.black,
      }}
    >
      The fastest growing agents this week
    </p>
  );
}

function TrendingCard({
  title,
  desc,
  rating,
  runs,
  imageSrc,
  isFeatured = false,
  buttonStyle,
  mobile = false,
}: {
  title: string;
  desc: string;
  rating: string;
  runs: string;
  imageSrc: string;
  isFeatured?: boolean;
  buttonStyle: "gradient" | "solid";
  mobile?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${mobile ? "w-full" : "flex-1"}`}
      style={{
        background: colors.white,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 32,
        padding: 32,
        boxShadow: CARD_SHADOW,
      }}
    >
      {/* Image / Header area */}
      {isFeatured ? (
        <div className="flex flex-row justify-between items-start w-full relative">
          <Image
            src={imageSrc}
            alt=""
            width={64}
            height={64}
            style={{ borderRadius: 16 }}
          />
          <div
            className="flex flex-row items-center gap-1"
            style={{
              background: BADGE_BG,
              borderRadius: 9999,
              padding: "4px 12px",
            }}
          >
            <Image src="/section-3-explore-agent/trending-icon.svg" alt="" width={9} height={12} />
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 700,
                fontSize: 12,
                lineHeight: "16px",
                color: BADGE_TEXT,
              }}
            >
              TRENDING
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between items-start w-full relative">
          <Image
            src={imageSrc}
            alt=""
            width={64}
            height={64}
            style={{ borderRadius: 16 }}
          />
        </div>
      )}

      {/* Title */}
      <h3
        className="m-0 pt-5"
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 24,
          lineHeight: "32px",
          color: colors.black,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="m-0 whitespace-pre-line"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.black,
          flex: 1, // pushes footer down
        }}
      >
        {desc.replace(/\\n/g, '\n')}
      </p>

      {/* Stats Row */}
      <div className="flex flex-row items-center gap-6 py-3">
        <div className="flex flex-row items-center gap-1">
          <Image src="/section-3-explore-agent/star-icon.svg" alt="rating" width={15} height={14} />
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: colors.black,
            }}
          >
            {rating}
          </span>
        </div>
        <div className="flex flex-row items-center gap-1">
          <Image src="/section-3-explore-agent/run-icon.svg" alt="runs" width={16} height={16} />
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: colors.black,
            }}
          >
            {runs}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        className="w-full flex items-center justify-center"
        style={{
          background: buttonStyle === "gradient" ? BUTTON_GRADIENT : "#2864E4",
          borderRadius: 12,
          padding: "16px 0",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: colors.white,
          }}
        >
          Run Agent
        </span>
      </button>
    </div>
  );
}