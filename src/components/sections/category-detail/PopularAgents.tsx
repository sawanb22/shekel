import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// PopularAgents.tsx  —  "Popular agents across categories"
// Figma frame: 500:13408  "Section 4: Popular Agents"
// Canvas: 1280 × 687 px   bg: #F7F9FC
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 687
//   Heading            (32, 100)  w:1216     Poppins 500 36/40
//   Body               (32, 156)  w:1216     Inter 400 18/28
//   Cards Container    (32, 248)  h:323
//   Card (each)        w:286 (calculated from 4 cards with 24px gap in 1216), h:291
//                      bg #FFFFFF, border 1px transparent, radius 16px, pad 32px
//     Icon Bg          56×56      bg #F6F3F2, radius 12px
//     Rating badge     bg #FFFFFF, border radius 4px, pad 4x8, icon + text "4.9"
//     Title            Inter 600 20/28
//     Desc             Inter 400 14/20
//     Horizontal Line  border-top 1px rgba(193, 198, 213, 0.1), pad-top 24px
//     Runs count       Inter 400 12/16, color #414753
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 687; // 100 + 40 + 16 + 28 + 64 + 291 + 148(bottom padding approx)
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BG_COLOR = "#F7F9FC";
const TEXT_HEADING = "#1C1B1B";
const TEXT_BODY = "#414753";
const CARD_BG = "#FFFFFF";
const CARD_BORDER = "transparent"; // Could use a subtle shadow instead based on design intent
const CARD_SHADOW = "0px 4px 24px -4px rgba(0, 0, 0, 0.05)"; // Recreating typical design system shadow
const ICON_BG = "#F6F3F2";
const RATING_TEXT = "#311300";
const TITLE_TEXT = "#1C1B1B";
const DESC_TEXT = "#414753";
const DIVIDER_COLOR = "rgba(193, 198, 213, 0.1)";

const AGENTS = [
  {
    title: "Content Weaver",
    desc: "High-performance copywriter that adapts to any brand voice and…",
    rating: "4.9",
    runs: "12.5k runs",
    icon: "/section-4-category-detail/icon-content-weaver.svg",
    x: 0,
  },
  {
    title: "Insight Engine",
    desc: "Autonomous data analyst for complex market research and sentiment…",
    rating: "4.8",
    runs: "8.2k runs",
    icon: "/section-4-category-detail/icon-insight-engine.svg",
    x: 310,
  },
  {
    title: "Cloud Sentinel",
    desc: "Real-time infrastructure monitoring and autonomous healing for…",
    rating: "5.0",
    runs: "5.1k runs",
    icon: "/section-4-category-detail/icon-cloud-sentinel.svg",
    x: 620,
  },
  {
    title: "Visionary Studio",
    desc: "Generates pixel-perfect UI kits and icon sets based on minimal text…",
    rating: "4.7",
    runs: "15.9k runs",
    icon: "/section-4-category-detail/icon-visionary-studio.svg",
    x: 930,
  },
];

export default function PopularAgents() {
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
        backgroundColor: BG_COLOR,
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
        {/* Header Section */}
        <div className="absolute" style={{ left: 32, top: 100, width: 1216 }}>
          <SectionHeading fontSize={36} lineHeight="40px" />
        </div>
        <div className="absolute" style={{ left: 32, top: 156, width: 1216 }}>
          <SectionBody fontSize={18} lineHeight="28px" />
        </div>

        {/* Cards Container */}
        <div className="absolute" style={{ left: 32, top: 248, width: 1216, height: 291 }}>
          {AGENTS.map((agent, i) => (
            <div
              key={i}
              className="absolute flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer"
              style={{
                left: agent.x,
                top: 0,
                width: 286,
                height: 291,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                boxShadow: CARD_SHADOW, // Added shadow for definition since border is transparent
                borderRadius: 16,
                padding: "32px",
                gap: "8px",
              }}
            >
              {/* Top row: Icon & Rating */}
              <div className="flex items-start justify-between pb-[16px]">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: ICON_BG,
                    borderRadius: radiuses.icon,
                  }}
                >
                  <Image src={agent.icon} alt="" width={24} height={24} className="object-contain" />
                </div>
                
                <div
                  className="flex items-center gap-[4px]"
                  style={{
                    backgroundColor: CARD_BG,
                    borderRadius: radiuses.tag,
                    padding: "4px 8px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)", // Slight shadow to lift rating badge
                  }}
                >
                  <Image src="/section-4-category-detail/icon-star.svg" alt="" width={12} height={12} />
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 700,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: RATING_TEXT,
                    }}
                  >
                    {agent.rating}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: TITLE_TEXT,
                }}
              >
                {agent.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: DESC_TEXT,
                  flexGrow: 1, // Pushes footer down
                  paddingRight: "27px",
                  paddingBottom: "16px",
                }}
              >
                {agent.desc}
              </p>

              {/* Footer: Runs */}
              <div
                className="flex items-center justify-between"
                style={{
                  paddingTop: "24px",
                  borderTop: `1px solid ${DIVIDER_COLOR}`,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: DESC_TEXT,
                  }}
                >
                  {agent.runs}
                </span>
              </div>
            </div>
          ))}
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
      style={{ backgroundColor: BG_COLOR }}
    >
      <div className="flex flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-4">
          <SectionHeading fontSize="clamp(28px, 8vw, 36px)" lineHeight="1.2" />
          <SectionBody fontSize="16px" lineHeight="1.6" />
        </div>

        {/* Scrollable Cards Container */}
        <div className="-mx-6 px-6 pb-4 flex overflow-x-auto snap-x snap-mandatory gap-4 hide-scrollbar">
          {AGENTS.map((agent, i) => (
            <div
              key={i}
              className="flex flex-col justify-between shrink-0 snap-start"
              style={{
                width: 280, // Fixed width for horizontal scrolling
                height: 290,
                backgroundColor: CARD_BG,
                boxShadow: CARD_SHADOW,
                borderRadius: 16,
                padding: "24px",
              }}
            >
              {/* Top row: Icon & Rating */}
              <div className="flex items-start justify-between pb-4">
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: ICON_BG,
                    borderRadius: radiuses.icon,
                  }}
                >
                  <Image src={agent.icon} alt="" width={20} height={20} className="object-contain" />
                </div>
                
                <div
                  className="flex items-center gap-1"
                  style={{
                    backgroundColor: CARD_BG,
                    borderRadius: radiuses.tag,
                    padding: "4px 8px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image src="/section-4-category-detail/icon-star.svg" alt="" width={12} height={12} />
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 700,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: RATING_TEXT,
                    }}
                  >
                    {agent.rating}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: "26px",
                  color: TITLE_TEXT,
                }}
              >
                {agent.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: DESC_TEXT,
                  flexGrow: 1,
                  paddingRight: "16px",
                  paddingBottom: "16px",
                  marginTop: "8px",
                }}
              >
                {agent.desc}
              </p>

              {/* Footer: Runs */}
              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: `1px solid ${DIVIDER_COLOR}` }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: DESC_TEXT,
                  }}
                >
                  {agent.runs}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        color: TEXT_HEADING,
      }}
    >
      Popular agents across categories
    </h2>
  );
}

function SectionBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: TEXT_BODY,
      }}
    >
      Discover some of the most used AI agents.
    </p>
  );
}
