"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// EngineeredForPrecision.tsx
// Figma frame: 507:6395 (1280 × 1024, y=1148)
//
// LAYOUT MAP (scaled canvas — coords are section-absolute, in Figma px):
//   Canvas             1280 × 1024, bg black, rounded 24
//   Background SVG     (-219, -57) 1841 × 1252 (bg.png, rotated 180)
//   Ellipse Left       (-688, -34) 696 × 696 (ellipse.png)
//   Ellipse Right      (1274, 0) 696 × 696 (ellipse.png)
//   Container          (24, 124) 1280 wide (centered via left: 1/2, -translate-x-1/2, meaning left 0), height 838
//     Header           (0, 0) 1280 wide, height 80
//       Heading        "Engineered for precision", left 0, top 0, w 1280, h 40
//       Subheading     "Everything you need...", left 0, top 56, w 1280, h 24
//     Cards Grid       (0, 144) 1232 wide (centered, so left 24), h 746
//       Card 1         (0, 0) 600 wide, 388 high, bg black, border
//                      Title (40, 40) 498.75w 32h
//                      Text (40, 104) 520w 48h
//                      Inner Box (40, 188) 520w 160h
//       Card 2         (632, 0) 600 wide, 388 high
//                      Title (40, 40) 264.61w 32h
//                      Text (40, 104) 520w 48h
//                      Inner Grid (40, 184) 520w 80h
//       Card 3         (0, 420) 600 wide, 326 high
//                      Title (40, 40) 289w 32h
//                      Text (40, 104) 520w 48h
//                      Inner Box (40, 188) 520w 96h
//       Card 4         (632, 420) 600 wide, 326 high
//                      Title (40, 40) 288w 32h
//                      Text (40, 104) 520w 48h
//                      Inner Box (40, 188) 520w 98h
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 1024;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const TEXT_WHITE = "#ffffff";
const TEXT_MUTED = "#94a3b8";
const CARD_BG = "#000000";
const CARD_BORDER = "rgba(255, 255, 255, 0.2)";
const INNER_BOX_BG = "#020617";
const INNER_BOX_BORDER = "#1e293b";
const ICON_BG = "#1e293b";
const ACTIVE_ICON_BG = "rgba(22, 114, 223, 0.2)";
const ACTIVE_ICON_BORDER = "rgba(0, 90, 182, 0.3)";

export default function EngineeredForPrecision() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          backgroundColor: colors.black,
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
          borderRadius: 24,
          transform: "translateZ(0)",
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
          {/* Backgrounds */}
          <div
            aria-hidden
            className="pointer-events-none absolute flex items-center justify-center"
            style={{ left: -219, top: -57, width: 1841, height: 1252 }}
          >
            <div
              className="flex-none -scale-y-100 rotate-180"
              style={{ width: 1841, height: 1252, position: "relative" }}
            >
              <Image
                src="/section-4-developer-builder/bg.png"
                alt=""
                width={1841}
                height={1252}
                className="absolute inset-0 h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ left: -688, top: -34, width: 696, height: 696 }}
          >
            <Image
              src="/section-4-developer-builder/ellipse.svg"
              alt=""
              fill
              className="object-cover scale-[1.74]"
              unoptimized
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ left: 1274, top: 0, width: 696, height: 696 }}
          >
            <Image
              src="/section-4-developer-builder/ellipse.svg"
              alt=""
              fill
              className="object-cover scale-[1.74]"
              unoptimized
            />
          </div>

          {/* Header Container */}
          <div className="absolute" style={{ left: 0, top: 124, width: 1280, height: 80 }}>
            <h2
              className="absolute"
              style={{
                left: 0,
                top: 0,
                width: 1280,
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 400,
                fontSize: 48,
                lineHeight: "40px",
                letterSpacing: "-0.9px",
                color: TEXT_WHITE,
                textAlign: "center",
              }}
            >
              Engineered for precision
            </h2>
            <p
              className="absolute"
              style={{
                left: 0,
                top: 56,
                width: 1280,
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: TEXT_MUTED,
                textAlign: "center",
              }}
            >
              Everything you need to orchestrate complex intelligence.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="absolute" style={{ left: 24, top: 268, width: 1232, height: 746 }}>
            {/* Card 1: Visual Workflow Builder */}
            <div
              className="absolute"
              style={{
                left: 0,
                top: 0,
                width: 600,
                height: 388,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
              }}
            >
              <h3
                className="absolute"
                style={{
                  left: 40,
                  top: 40,
                  margin: 0,
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 500,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: TEXT_WHITE,
                }}
              >
                Visual Workflow Builder
              </h3>
              <div className="absolute" style={{ right: 40, top: 40, width: 21.25, height: 27.5 }}>
                <Image src="/section-4-developer-builder/icon-1.svg" alt="" fill />
              </div>
              <p
                className="absolute"
                style={{
                  left: 40,
                  top: 104,
                  width: 520,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_MUTED,
                }}
              >
                Drag-and-drop orchestration that compiles to high-performance
                <br />
                logic under the hood.
              </p>
              <div
                className="absolute overflow-hidden"
                style={{
                  left: 40,
                  top: 188,
                  width: 520,
                  height: 160,
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 12,
                }}
              >
                <div className="absolute" style={{ left: 25, top: 25, width: 48, height: 48, backgroundColor: ICON_BG, borderRadius: 8 }} />
                <div className="absolute" style={{ left: 89, top: 29, width: 304.5, height: 16, backgroundColor: ICON_BG, borderRadius: 4 }} />
                <div className="absolute" style={{ left: 89, top: 53, width: 203, height: 16, backgroundColor: ICON_BG, borderRadius: 4 }} />
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(0,90,182,1) 0%, rgba(0,90,182,0) 50%, rgba(0,90,182,0) 100%)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>

            {/* Card 2: Modular Agent System */}
            <div
              className="absolute"
              style={{
                left: 632,
                top: 0,
                width: 600,
                height: 388,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
              }}
            >
              <h3
                className="absolute"
                style={{
                  left: 40,
                  top: 40,
                  width: 264.61,
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: TEXT_WHITE,
                }}
              >
                Modular Agent System
              </h3>
              <div className="absolute" style={{ right: 40, top: 40, width: 24.375, height: 24.375 }}>
                <Image src="/section-4-developer-builder/icon-2.svg" alt="" fill />
              </div>
              <p
                className="absolute"
                style={{
                  left: 40,
                  top: 104,
                  width: 520,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_MUTED,
                }}
              >
                Swap LLMs, memory modules, and tool-sets without rewriting a
                <br />
                single line of logic.
              </p>
              <div className="absolute flex" style={{ left: 40, top: 184, width: 520, height: 80, gap: 8 }}>
                <div
                  className="flex h-full flex-1 items-center justify-center"
                  style={{ backgroundColor: ICON_BG, borderRadius: 8 }}
                >
                  <div style={{ width: 20, height: 16, position: "relative" }}>
                    <Image src="/section-4-developer-builder/container-1.svg" alt="" fill />
                  </div>
                </div>
                <div
                  className="flex h-full flex-1 items-center justify-center"
                  style={{
                    backgroundColor: ACTIVE_ICON_BG,
                    border: `1px solid ${ACTIVE_ICON_BORDER}`,
                    borderRadius: 8,
                  }}
                >
                  <div style={{ width: 19.01, height: 20, position: "relative" }}>
                    <Image src="/section-4-developer-builder/container-2.svg" alt="" fill />
                  </div>
                </div>
                <div
                  className="flex h-full flex-1 items-center justify-center"
                  style={{ backgroundColor: ICON_BG, borderRadius: 8 }}
                >
                  <div style={{ width: 18, height: 16, position: "relative" }}>
                    <Image src="/section-4-developer-builder/container-3.svg" alt="" fill />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Real-time Execution */}
            <div
              className="absolute"
              style={{
                left: 0,
                top: 420,
                width: 600,
                height: 326,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
              }}
            >
              <h3
                className="absolute"
                style={{
                  left: 40,
                  top: 40,
                  width: 289,
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: TEXT_WHITE,
                }}
              >
                Real-time Execution
              </h3>
              <div className="absolute" style={{ right: 40, top: 40, width: 25, height: 20 }}>
                <Image src="/section-4-developer-builder/icon-3.svg" alt="" fill />
              </div>
              <p
                className="absolute"
                style={{
                  left: 40,
                  top: 104,
                  width: 520,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_MUTED,
                }}
              >
                Sub-second latencies for conversational UI and industrial
                <br />
                automation triggers.
              </p>
              <div className="absolute flex items-center justify-center" style={{ left: 40, top: 188, width: 520, height: 96 }}>
                <div
                  className="w-full relative"
                  style={{ height: 1, backgroundColor: ICON_BG }}
                >
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 blur-[2px] rounded-full"
                    style={{
                      width: 16,
                      height: 16,
                      background: "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Card 4: Flexible Configuration */}
            <div
              className="absolute"
              style={{
                left: 632,
                top: 420,
                width: 600,
                height: 326,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
              }}
            >
              <h3
                className="absolute"
                style={{
                  left: 40,
                  top: 40,
                  width: 288,
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: TEXT_WHITE,
                }}
              >
                Flexible Configuration
              </h3>
              <div className="absolute" style={{ right: 40, top: 40, width: 27.5, height: 27.5 }}>
                <Image src="/section-4-developer-builder/icon-4.svg" alt="" fill />
              </div>
              <p
                className="absolute"
                style={{
                  left: 40,
                  top: 104,
                  width: 520,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_MUTED,
                }}
              >
                Infrastructure as code. Export your entire workflow as JSON for
                <br />
                version control.
              </p>
              <div
                className="absolute opacity-60"
                style={{
                  left: 40,
                  top: 188,
                  width: 520,
                  height: 98,
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 12,
                  padding: 17,
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.mono,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: "#005ab6",
                  }}
                >
                  {`{\n`}
                  <span style={{ color: TEXT_WHITE }}>{`  "agent": "content-writer-v1",\n`}</span>
                  <span style={{ color: TEXT_WHITE }}>{`  "config": { "temp": 0.7 }\n`}</span>
                  {`}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative block w-full overflow-hidden md:hidden rounded-[24px]"
        style={{ backgroundColor: colors.black }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <Image
            src="/section-4-developer-builder/bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top -scale-y-100 rotate-180"
          />
        </div>

        <div className="relative flex flex-col gap-12 px-6 py-16 sm:px-8">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center">
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 400,
                fontSize: 32,
                lineHeight: "1.2",
                letterSpacing: "-0.5px",
                color: TEXT_WHITE,
              }}
            >
              Engineered for precision
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "1.5",
                color: TEXT_MUTED,
              }}
            >
              Everything you need to orchestrate complex intelligence.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
                padding: 24,
                gap: 24,
              }}
            >
              <div className="flex items-start justify-between">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.poppins,
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_WHITE,
                  }}
                >
                  Visual Workflow Builder
                </h3>
                <div style={{ width: 21.25, height: 27.5, position: "relative", flexShrink: 0 }}>
                  <Image src="/section-4-developer-builder/icon-1.svg" alt="" fill />
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "1.6",
                  color: TEXT_MUTED,
                }}
              >
                Drag-and-drop orchestration that compiles to high-performance logic
                under the hood.
              </p>
              <div
                className="flex flex-col overflow-hidden relative"
                style={{
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 12,
                  padding: 20,
                  height: 120,
                }}
              >
                <div className="flex gap-4 relative z-10">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: ICON_BG,
                      borderRadius: 8,
                      flexShrink: 0,
                    }}
                  />
                  <div className="flex flex-col gap-2 w-full pt-1">
                    <div
                      style={{
                        width: "80%",
                        height: 12,
                        backgroundColor: ICON_BG,
                        borderRadius: 4,
                      }}
                    />
                    <div
                      style={{
                        width: "50%",
                        height: 12,
                        backgroundColor: ICON_BG,
                        borderRadius: 4,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
                padding: 24,
                gap: 24,
              }}
            >
              <div className="flex items-start justify-between">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_WHITE,
                  }}
                >
                  Modular Agent System
                </h3>
                <div style={{ width: 24.375, height: 24.375, position: "relative", flexShrink: 0 }}>
                  <Image src="/section-4-developer-builder/icon-2.svg" alt="" fill />
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "1.6",
                  color: TEXT_MUTED,
                }}
              >
                Swap LLMs, memory modules, and tool-sets without rewriting a
                single line of logic.
              </p>
              <div className="grid grid-cols-3 gap-2 h-16">
                <div
                  className="flex h-full items-center justify-center"
                  style={{ backgroundColor: ICON_BG, borderRadius: 8 }}
                >
                  <div style={{ width: 20, height: 16, position: "relative" }}>
                    <Image src="/section-4-developer-builder/container-1.svg" alt="" fill />
                  </div>
                </div>
                <div
                  className="flex h-full items-center justify-center"
                  style={{
                    backgroundColor: ACTIVE_ICON_BG,
                    border: `1px solid ${ACTIVE_ICON_BORDER}`,
                    borderRadius: 8,
                  }}
                >
                  <div style={{ width: 19.01, height: 20, position: "relative" }}>
                    <Image src="/section-4-developer-builder/container-2.svg" alt="" fill />
                  </div>
                </div>
                <div
                  className="flex h-full items-center justify-center"
                  style={{ backgroundColor: ICON_BG, borderRadius: 8 }}
                >
                  <div style={{ width: 18, height: 16, position: "relative" }}>
                    <Image src="/section-4-developer-builder/container-3.svg" alt="" fill />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
                padding: 24,
                gap: 24,
              }}
            >
              <div className="flex items-start justify-between">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_WHITE,
                  }}
                >
                  Real-time Execution
                </h3>
                <div style={{ width: 25, height: 20, position: "relative", flexShrink: 0 }}>
                  <Image src="/section-4-developer-builder/icon-3.svg" alt="" fill />
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "1.6",
                  color: TEXT_MUTED,
                }}
              >
                Sub-second latencies for conversational UI and industrial
                automation triggers.
              </p>
              <div className="flex h-16 items-center relative">
                <div
                  className="w-full relative"
                  style={{ height: 1, backgroundColor: ICON_BG }}
                >
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 blur-[2px] rounded-full"
                    style={{
                      width: 16,
                      height: 16,
                      background: "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardLg,
                padding: 24,
                gap: 24,
              }}
            >
              <div className="flex items-start justify-between">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_WHITE,
                  }}
                >
                  Flexible Configuration
                </h3>
                <div style={{ width: 27.5, height: 27.5, position: "relative", flexShrink: 0 }}>
                  <Image src="/section-4-developer-builder/icon-4.svg" alt="" fill />
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "1.6",
                  color: TEXT_MUTED,
                }}
              >
                Infrastructure as code. Export your entire workflow as JSON for
                version control.
              </p>
              <div
                className="flex opacity-60"
                style={{
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <pre
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.mono,
                    fontSize: 12,
                    lineHeight: "1.5",
                    color: "#005ab6",
                    overflowX: "auto",
                  }}
                >
                  {`{\n`}
                  <span style={{ color: TEXT_WHITE }}>{`  "agent": "content-writer-v1",\n`}</span>
                  <span style={{ color: TEXT_WHITE }}>{`  "config": { "temp": 0.7 }\n`}</span>
                  {`}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}