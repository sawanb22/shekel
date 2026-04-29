// ─────────────────────────────────────────────────────────────────────────────
// TheArchitectsCanvas.tsx  —  "The architect's canvas"
// Figma frame: 507:6830  "Section - Build Experience: Editor Preview"
// Canvas: 1280 × 951 px   Page-y: 5232   bg: #f7f9fc
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Heading Container (x=128, y=97)   1024×80
//   Heading 2   (x=225, y=0)   526×40   [text: The architect's canvas]
//   Subtext     (x=256, y=56)  462×24   [text: A minimal...]
//   Window Wrapper (x=88, y=241) 1104×613 [bg: white, radius: 40px]
//   Window Chrome (x=33, y=33)   1038×23
//     Dots      (x=16, y=5.5)  48×12
//     URL Bar   (x=366, y=0)   217×23
//   Editor Content (x=33, y=80) 1038×500
//     Sidebar   (x=0, y=0)     235×500  [border-right]
//     Canvas    (x=267, y=0)   770×500  [gradient bg]
//       Card 1  (x=257, y=128) 256×74   [API Gateway]
//       Divider (x=127, y=98)  1×48     [relative to container]
//       Card 2  (x=0, y=170)   256×74   [Logic Engine]
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 951;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

// Local consts
const URL_BAR_BG = "#eceef1";
const URL_TEXT = "#94a3b8";
const RED_DOT = "#f87171";
const YELLOW_DOT = "#fbbf24";
const GREEN_DOT = "#34d399";
const BORDER_LIGHT = "#f8fafc";
const SIDEBAR_BG_1 = "#f8fafc";
const DIVIDER_BLUE = "#005ab6";
const ICON_API_BG = "rgba(22,114,223,0.2)";
const ICON_LOGIC_BG = "rgba(99,215,254,0.2)";
const WINDOW_SHADOW = "0px 30px 60px -12px rgba(25,28,30,0.08)";
const CARD_SHADOW = "0px 30px 60px -12px rgba(25,28,30,0.08)";
const EDITOR_BG_GRADIENT = "linear-gradient(90deg, rgba(128, 128, 128, 0.07) 4.1667%, rgba(128, 128, 128, 0) 4.1667%), linear-gradient(180deg, rgba(128, 128, 128, 0.07) 4.1667%, rgba(128, 128, 128, 0) 4.1667%)";

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2
        style={{
          margin: 0,
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize,
          lineHeight,
          letterSpacing: "-0.9px",
          color: colors.text.dark,
        }}
      >
        The architect's canvas
      </h2>
      <p
        style={{
          marginTop: 16,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: "16px", // Same on both per typical patterns, or fluid on mobile
          lineHeight: "24px",
          color: colors.text.body,
        }}
      >
        A minimal, distraction-free environment for pure engineering.
      </p>
    </div>
  );
}

function EditorPreview() {
  return (
    <div
      className="relative flex flex-col w-full h-full bg-white border border-solid"
      style={{
        borderColor: colors.border.footer, // close to #f1f5f9
        borderRadius: "40px",
        boxShadow: WINDOW_SHADOW,
        padding: "33px",
      }}
    >
      {/* Window Chrome */}
      <div className="relative flex items-center w-full h-[23px] mb-[24px]">
        <div className="flex gap-[6px] absolute left-[16px]">
          <div className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: RED_DOT }} />
          <div className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: YELLOW_DOT }} />
          <div className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: GREEN_DOT }} />
        </div>
        <div className="mx-auto flex justify-center w-[218px]">
          <div
            className="flex items-center px-[16px] py-[4px] rounded-full"
            style={{ backgroundColor: URL_BAR_BG }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 10,
                lineHeight: "15px",
                color: URL_TEXT,
              }}
            >
              agentforge.app/editor/workflow-alpha
            </span>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="relative flex w-full h-[500px]">
        {/* Sidebar */}
        <div
          className="flex flex-col gap-[16px] pr-[17px] border-r border-solid h-full w-[235px] shrink-0"
          style={{ borderColor: BORDER_LIGHT }}
        >
          <div className="w-full h-[32px] rounded-[8px]" style={{ backgroundColor: SIDEBAR_BG_1 }} />
          <div className="w-full h-[128px]" style={{ backgroundColor: SIDEBAR_BG_1, borderRadius: radiuses.cardSm }} />
          <div className="flex flex-col gap-[8px] w-full mt-[16px]">
            <div className="w-[164px] h-[16px]" style={{ backgroundColor: SIDEBAR_BG_1, borderRadius: radiuses.tag }} />
            <div className="w-full h-[16px]" style={{ backgroundColor: SIDEBAR_BG_1, borderRadius: radiuses.tag }} />
            <div className="w-[109px] h-[16px]" style={{ backgroundColor: SIDEBAR_BG_1, borderRadius: radiuses.tag }} />
          </div>
        </div>

        {/* Canvas */}
        <div
          className="relative flex-1 h-full ml-[32px] flex items-center justify-center"
          style={{ backgroundImage: EDITOR_BG_GRADIENT, backgroundSize: "24px 24px" }}
        >
          <div className="relative w-[256px] h-[244px] flex flex-col items-center">
            {/* Card 1 */}
            <div
              className="relative flex items-center gap-[12px] p-[17px] w-full bg-white border border-solid"
              style={{
                borderColor: colors.border.footer,
                borderRadius: radiuses.cardSm,
                boxShadow: CARD_SHADOW,
                zIndex: 2,
              }}
            >
              <div
                className="flex items-center justify-center w-[40px] h-[40px] shrink-0"
                style={{ backgroundColor: ICON_API_BG, borderRadius: radiuses.inputIcon }}
              >
                <div className="relative w-[20px] h-[19px]">
                  <Image src="/section-7-developer-builder/icon-api-gateway.svg" alt="API Gateway" fill />
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    color: URL_TEXT,
                  }}
                >
                  Source
                </span>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: colors.text.dark,
                  }}
                >
                  API Gateway
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[48px]" style={{ backgroundColor: DIVIDER_BLUE }} />

            {/* Card 2 */}
            <div
              className="relative flex items-center gap-[12px] p-[17px] w-full bg-white border border-solid"
              style={{
                borderColor: colors.border.footer,
                borderRadius: radiuses.cardSm,
                boxShadow: CARD_SHADOW,
                zIndex: 2,
              }}
            >
              <div
                className="flex items-center justify-center w-[40px] h-[40px] shrink-0"
                style={{ backgroundColor: ICON_LOGIC_BG, borderRadius: radiuses.inputIcon }}
              >
                <div className="relative w-[19px] h-[20px]">
                  <Image src="/section-7-developer-builder/icon-logic-engine.svg" alt="Logic Engine" fill />
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className="uppercase"
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    color: URL_TEXT,
                  }}
                >
                  Agent
                </span>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: colors.text.dark,
                  }}
                >
                  Logic Engine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TheArchitectsCanvas() {
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
        backgroundColor: colors.background.sectionAlt, // #f7f9fc
        borderTop: `1px solid ${colors.border.footer}`,
        borderBottom: `1px solid ${colors.border.footer}`,
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
        <div
          className="absolute"
          style={{
            left: 128,
            top: 97,
            width: 1024,
            height: 80,
          }}
        >
          <SectionHeading fontSize={48} lineHeight="40px" />
        </div>

        <div
          className="absolute"
          style={{
            left: 88,
            top: 241,
            width: 1104,
            height: 613,
          }}
        >
          <EditorPreview />
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
      style={{
        backgroundColor: colors.background.sectionAlt,
        borderTop: `1px solid ${colors.border.footer}`,
        borderBottom: `1px solid ${colors.border.footer}`,
      }}
    >
      <div className="flex flex-col gap-10 px-6 py-16">
        <SectionHeading fontSize="clamp(28px, 8vw, 40px)" lineHeight="1.2" />
        
        <div className="w-full overflow-hidden rounded-[24px] shadow-lg">
           <div className="w-[1000px] origin-top-left" style={{ transform: "scale(0.35)" }}>
              <div className="w-[1104px] h-[613px]">
                 <EditorPreview />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
