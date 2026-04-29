import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// TrendingAiAgents.tsx  —  "Trending AI Agents"
// Figma frames: 508-7709 & 508-7674
// Canvas: 1280 × 420 px   Page-y: 2063   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Header (x=48, y=0) 1184 wide row
//     "Trending AI Agents" (48px Poppins 400)
//     "Popular agents used by the community" (16px Inter 400)
//     "Explore Agents" (14px Inter 400)
//   Cards Container (x=24, y=100) 1232 wide gap 40
//     Card 1: CopyGenius Pro
//     Card 2: VideoCraft AI
//     Card 3: MetricMaster
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 420;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const HEADING_COLOR = "#000000";
const SUBTEXT_COLOR = "#000000";
const CARD_BG = "#F2F4F7";
const ICON_SHADOW = "0px 1px 2px 0px rgba(0,0,0,0.05)";
const CARD_TITLE_COLOR = "#191C1E";
const CARD_RATING_COLOR = "#727785";
const BUTTON_BORDER = "rgba(193, 198, 213, 0.1)";

export default function TrendingAiAgents() {
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
      className="relative hidden w-full overflow-hidden md:block py-16"
      style={{
        backgroundColor: colors.white,
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
        {/* Header */}
        <div
          className="absolute flex items-end justify-between"
          style={{ left: 48, top: 0, width: 1184 }}
        >
          <div className="flex flex-col gap-2">
            <h2
              className="m-0"
              style={{
                fontFamily: typography.fonts.poppins,
                fontWeight: 600,
                fontSize: 48,
                lineHeight: "48px",
                color: HEADING_COLOR,
              }}
            >
              Trending AI Agents
            </h2>
            <p
              className="m-0"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "-0.025em",
                color: SUBTEXT_COLOR,
              }}
            >
              Popular agents used by the community
            </p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer group pb-2">
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: HEADING_COLOR,
              }}
            >
              Explore Agents
            </span>
            <Image
              src="/section-4-connect-us/arrow-up-right.svg"
              alt=""
              width={9}
              height={9}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* Cards */}
        <div
          className="absolute flex flex-row items-stretch"
          style={{ left: 24, top: 120, width: 1232, gap: 40 }}
        >
          {/* Card 1 */}
          <div
            className="flex flex-col items-start w-full"
            style={{ backgroundColor: CARD_BG, borderRadius: 16, padding: 32, gap: 16, flex: "1 1 0" }}
          >
            <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
              <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                <Image src="/section-4-connect-us/icon-copygenius.svg" alt="" fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col justify-center shrink-0 w-full mt-1">
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: CARD_TITLE_COLOR }}>
                CopyGenius Pro
              </p>
            </div>
            <div className="flex items-center w-full" style={{ gap: 4 }}>
              <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                <Image src="/section-4-connect-us/icon-star.svg" alt="" fill className="object-contain" />
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: CARD_RATING_COLOR }}>
                4.7
              </p>
            </div>
            <button
              className="w-full cursor-pointer hover:bg-gray-50 transition-colors mt-auto"
              style={{ backgroundColor: colors.white, border: `1px solid ${BUTTON_BORDER}`, borderRadius: 8, boxShadow: ICON_SHADOW, height: 48 }}
            >
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: CARD_TITLE_COLOR }}>
                Run Agent
              </span>
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col items-start w-full"
            style={{ backgroundColor: CARD_BG, borderRadius: 16, padding: 32, gap: 16, flex: "1 1 0" }}
          >
            <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
              <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                <Image src="/section-4-connect-us/icon-videocraft.svg" alt="" fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col justify-center shrink-0 w-full mt-1">
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: CARD_TITLE_COLOR }}>
                VideoCraft AI
              </p>
            </div>
            <div className="flex items-center w-full" style={{ gap: 4 }}>
              <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                <Image src="/section-4-connect-us/icon-star.svg" alt="" fill className="object-contain" />
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: CARD_RATING_COLOR }}>
                4.9
              </p>
            </div>
            <button
              className="w-full cursor-pointer hover:bg-gray-50 transition-colors mt-auto"
              style={{ backgroundColor: colors.white, border: `1px solid ${BUTTON_BORDER}`, borderRadius: 8, boxShadow: ICON_SHADOW, height: 48 }}
            >
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: CARD_TITLE_COLOR }}>
                Run Agent
              </span>
            </button>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col items-start w-full"
            style={{ backgroundColor: CARD_BG, borderRadius: 16, padding: 32, gap: 16, flex: "1 1 0" }}
          >
            <div className="flex items-center justify-center overflow-clip relative shrink-0" style={{ width: 56, height: 56, backgroundColor: colors.white, borderRadius: 12, boxShadow: ICON_SHADOW }}>
              <div className="relative shrink-0" style={{ width: 16.67, height: 10 }}>
                <Image src="/section-4-connect-us/icon-metricmaster.svg" alt="" fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col justify-center shrink-0 w-full mt-1">
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: CARD_TITLE_COLOR }}>
                MetricMaster
              </p>
            </div>
            <div className="flex items-center w-full" style={{ gap: 4 }}>
              <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                <Image src="/section-4-connect-us/icon-star.svg" alt="" fill className="object-contain" />
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: CARD_RATING_COLOR }}>
                4.5
              </p>
            </div>
            <button
              className="w-full cursor-pointer hover:bg-gray-50 transition-colors mt-auto"
              style={{ backgroundColor: colors.white, border: `1px solid ${BUTTON_BORDER}`, borderRadius: 8, boxShadow: ICON_SHADOW, height: 48 }}
            >
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: CARD_TITLE_COLOR }}>
                Run Agent
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden px-6 py-16"
      style={{ backgroundColor: colors.white }}
    >
      <div className="flex flex-col items-start gap-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col gap-2 w-full">
          <h2
            className="m-0"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 600,
              fontSize: "clamp(32px, 8vw, 40px)",
              lineHeight: "1.2",
              color: HEADING_COLOR,
            }}
          >
            Trending AI Agents
          </h2>
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: SUBTEXT_COLOR,
            }}
          >
            Popular agents used by the community
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: CARD_BG, borderRadius: 16, padding: 24, gap: 16 }}>
            <div className="flex flex-row items-center gap-4">
              <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                  <Image src="/section-4-connect-us/icon-copygenius.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: CARD_TITLE_COLOR }}>
                  CopyGenius Pro
                </p>
                <div className="flex items-center gap-1">
                  <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                    <Image src="/section-4-connect-us/icon-star.svg" alt="" fill className="object-contain" />
                  </div>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: CARD_RATING_COLOR }}>
                    4.7
                  </p>
                </div>
              </div>
            </div>
            <button
              className="w-full cursor-pointer hover:bg-gray-50 transition-colors mt-auto"
              style={{ backgroundColor: colors.white, border: `1px solid ${BUTTON_BORDER}`, borderRadius: 8, boxShadow: ICON_SHADOW, height: 44 }}
            >
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: CARD_TITLE_COLOR }}>
                Run Agent
              </span>
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: CARD_BG, borderRadius: 16, padding: 24, gap: 16 }}>
            <div className="flex flex-row items-center gap-4">
              <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                  <Image src="/section-4-connect-us/icon-videocraft.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: CARD_TITLE_COLOR }}>
                  VideoCraft AI
                </p>
                <div className="flex items-center gap-1">
                  <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                    <Image src="/section-4-connect-us/icon-star.svg" alt="" fill className="object-contain" />
                  </div>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: CARD_RATING_COLOR }}>
                    4.9
                  </p>
                </div>
              </div>
            </div>
            <button
              className="w-full cursor-pointer hover:bg-gray-50 transition-colors mt-auto"
              style={{ backgroundColor: colors.white, border: `1px solid ${BUTTON_BORDER}`, borderRadius: 8, boxShadow: ICON_SHADOW, height: 44 }}
            >
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: CARD_TITLE_COLOR }}>
                Run Agent
              </span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: CARD_BG, borderRadius: 16, padding: 24, gap: 16 }}>
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center overflow-clip relative shrink-0" style={{ width: 56, height: 56, backgroundColor: colors.white, borderRadius: 12, boxShadow: ICON_SHADOW }}>
                <div className="relative shrink-0" style={{ width: 16.67, height: 10 }}>
                  <Image src="/section-4-connect-us/icon-metricmaster.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: CARD_TITLE_COLOR }}>
                  MetricMaster
                </p>
                <div className="flex items-center gap-1">
                  <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                    <Image src="/section-4-connect-us/icon-star.svg" alt="" fill className="object-contain" />
                  </div>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: CARD_RATING_COLOR }}>
                    4.5
                  </p>
                </div>
              </div>
            </div>
            <button
              className="w-full cursor-pointer hover:bg-gray-50 transition-colors mt-auto"
              style={{ backgroundColor: colors.white, border: `1px solid ${BUTTON_BORDER}`, borderRadius: 8, boxShadow: ICON_SHADOW, height: 44 }}
            >
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: CARD_TITLE_COLOR }}>
                Run Agent
              </span>
            </button>
          </div>
        </div>

        {/* Link Mobile */}
        <div className="flex items-center cursor-pointer group mt-2" style={{ gap: 7.99 }}>
          <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: HEADING_COLOR, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Explore Agents
          </span>
          <div className="relative shrink-0" style={{ width: 8.75, height: 8.75 }}>
            <Image src="/section-4-connect-us/arrow-up-right.svg" alt="" fill className="object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

      </div>
    </section>
  );
}
