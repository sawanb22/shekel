"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// SectionDeepDiveNodeVisual.tsx
// Figma frame: 507:6559 "Section - Deep Dive: Node Visual"
//
// LAYOUT MAP (scaled canvas — coords are section-absolute, in Figma px):
//   Canvas             1280 × 704, bg white
//   Left Column        (24, 187) 600w, gap 24
//     Heading          "Design workflows visually"
//     Text             "Stop fighting spaghetti code..."
//     List             gap 16, items with icon-list.png
//   Right Column       (640, 96) 616w × 512h
//     Background       bg #f2f4f7, rounded 48, shadow 0px 30px 60px -12px rgba(25,28,30,0.08)
//     Accent Glow      bg rgba(0,90,182,0.05), blur 32px, 320x320 at bottom right
//     Container        pad 40, gap 32
//     Node 1           Input (User Request), white bg
//     Arrow 1          h 32
//     Node 2           Process (Content AI), blue bg #005ab6
//     Arrow 2          h 32
//     Node 3           Transform (Design AI), teal bg #006780
//     Arrow 3          h 32
//     Node 4           Output (Publish AI), white bg
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 704;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const TEXT_DARK = "#191c1e";
const TEXT_MUTED = "#414753";
const BG_LIGHT = "#f2f4f7";
const SHADOW_NODE = "0px 30px 60px -12px rgba(25, 28, 30, 0.08)";
const NODE_BORDER = "rgba(193, 198, 213, 0.1)";
const BLUE_ACCENT = "rgba(0, 90, 182, 0.05)";

export default function SectionDeepDiveNodeVisual() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
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
          {/* Left Column */}
          <div
            className="absolute flex flex-col"
            style={{
              left: 24,
              top: 187,
              width: 600,
              gap: 24,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 48,
                lineHeight: "58px",
                letterSpacing: "-0.9px",
                color: TEXT_DARK,
              }}
            >
              Design workflows visually
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 18,
                lineHeight: "29.25px",
                color: TEXT_MUTED,
              }}
            >
              Stop fighting spaghetti code. Our visual canvas lets you map out
              <br />
              agent reasoning steps, data transformations, and external API calls
              <br />
              in a clean, human-readable graph.
            </p>
            <ul
              className="flex flex-col m-0 p-0 list-none pt-2"
              style={{ gap: 16 }}
            >
              <li className="flex items-center gap-3">
                <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0 }}>
                  <Image src="/section-5-developer-builder/icon-list.svg" alt="" fill />
                </div>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: TEXT_DARK,
                  }}
                >
                  Infinite canvas with snap-to-grid logic
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0 }}>
                  <Image src="/section-5-developer-builder/icon-list.svg" alt="" fill />
                </div>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: TEXT_DARK,
                  }}
                >
                  Real-time variable injection and testing
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0 }}>
                  <Image src="/section-5-developer-builder/icon-list.svg" alt="" fill />
                </div>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: TEXT_DARK,
                  }}
                >
                  One-click cloud publishing
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column (Visual Node Graph) */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: 640,
              top: 96,
              width: 616,
              height: 512,
              backgroundColor: BG_LIGHT,
              borderRadius: 48,
              boxShadow: SHADOW_NODE,
            }}
          >
            {/* Background Accent */}
            <div
              className="absolute"
              style={{
                right: -80,
                bottom: -80,
                width: 320,
                height: 320,
                backgroundColor: BLUE_ACCENT,
                borderRadius: "50%",
                filter: "blur(32px)",
              }}
            />

            {/* Nodes Container */}
            <div
              className="absolute flex flex-col"
              style={{
                left: 40,
                top: 40,
                width: 536,
                gap: 0,
              }}
            >
              {/* Node 1 */}
              <div
                className="flex flex-col"
                style={{
                  width: 192,
                  backgroundColor: colors.white,
                  border: `1px solid ${NODE_BORDER}`,
                  borderRadius: 16,
                  padding: 21,
                  gap: 7.5,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    color: "#94a3b8",
                    textTransform: "uppercase",
                  }}
                >
                  Input
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 11.67, height: 9.33, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-1.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: TEXT_DARK,
                    }}
                  >
                    User Request
                  </span>
                </div>
              </div>

              {/* Arrow 1 */}
              <div style={{ marginLeft: 96, width: 1, height: 32, backgroundColor: "#cbd5e1" }} />

              {/* Node 2 */}
              <div
                className="flex flex-col"
                style={{
                  marginLeft: 48,
                  width: 224,
                  backgroundColor: "#005ab6",
                  borderRadius: 16,
                  padding: 20,
                  gap: 7.5,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    color: colors.white,
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  Process
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 12.83, height: 12.83, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-2.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: colors.white,
                    }}
                  >
                    Content AI
                  </span>
                </div>
              </div>

              {/* Arrow 2 */}
              <div style={{ marginLeft: 160, width: 1, height: 32, backgroundColor: "#cbd5e1" }} />

              {/* Node 3 */}
              <div
                className="flex flex-col"
                style={{
                  marginLeft: 96,
                  width: 224,
                  backgroundColor: "#006780",
                  borderRadius: 16,
                  padding: 20,
                  gap: 7.5,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    color: colors.white,
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  Transform
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 11.67, height: 11.67, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-3.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: colors.white,
                    }}
                  >
                    Design AI
                  </span>
                </div>
              </div>

              {/* Arrow 3 */}
              <div style={{ marginLeft: 208, width: 1, height: 32, backgroundColor: "#cbd5e1" }} />

              {/* Node 4 */}
              <div
                className="flex flex-col"
                style={{
                  marginLeft: 144,
                  width: 192,
                  backgroundColor: colors.white,
                  border: `1px solid ${NODE_BORDER}`,
                  borderRadius: 16,
                  padding: 21,
                  gap: 7.5,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    color: "#94a3b8",
                    textTransform: "uppercase",
                  }}
                >
                  Output
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 11.08, height: 9.33, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-4.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: TEXT_DARK,
                    }}
                  >
                    Publish AI
                  </span>
                </div>
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
        style={{ backgroundColor: colors.white }}
      >
        <div className="relative flex flex-col gap-12 px-6 py-16 sm:px-8">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 32,
                lineHeight: "1.2",
                letterSpacing: "-0.5px",
                color: TEXT_DARK,
              }}
            >
              Design workflows visually
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "1.6",
                color: TEXT_MUTED,
              }}
            >
              Stop fighting spaghetti code. Our visual canvas lets you map out
              agent reasoning steps, data transformations, and external API calls
              in a clean, human-readable graph.
            </p>
            <ul className="flex flex-col gap-4 m-0 p-0 list-none pt-2">
              <li className="flex items-start gap-3">
                <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0, marginTop: 2 }}>
                  <Image src="/section-5-developer-builder/icon-list.svg" alt="" fill />
                </div>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "1.5",
                    color: TEXT_DARK,
                  }}
                >
                  Infinite canvas with snap-to-grid logic
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0, marginTop: 2 }}>
                  <Image src="/section-5-developer-builder/icon-list.svg" alt="" fill />
                </div>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "1.5",
                    color: TEXT_DARK,
                  }}
                >
                  Real-time variable injection and testing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0, marginTop: 2 }}>
                  <Image src="/section-5-developer-builder/icon-list.svg" alt="" fill />
                </div>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "1.5",
                    color: TEXT_DARK,
                  }}
                >
                  One-click cloud publishing
                </span>
              </li>
            </ul>
          </div>

          {/* Visual Node Graph Container */}
          <div
            className="flex flex-col items-center justify-center overflow-hidden py-12 relative"
            style={{
              backgroundColor: BG_LIGHT,
              borderRadius: 32,
              boxShadow: SHADOW_NODE,
            }}
          >
            {/* Background Accent */}
            <div
              className="absolute"
              style={{
                right: -40,
                bottom: -40,
                width: 200,
                height: 200,
                backgroundColor: BLUE_ACCENT,
                borderRadius: "50%",
                filter: "blur(24px)",
              }}
            />

            <div className="flex flex-col relative z-10 w-full max-w-[280px] px-6">
              {/* Node 1 */}
              <div
                className="flex flex-col self-start w-4/5"
                style={{
                  backgroundColor: colors.white,
                  border: `1px solid ${NODE_BORDER}`,
                  borderRadius: 16,
                  padding: 16,
                  gap: 6,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                  }}
                >
                  Input
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 11.67, height: 9.33, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-1.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      color: TEXT_DARK,
                    }}
                  >
                    User Request
                  </span>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="self-center" style={{ width: 1, height: 24, backgroundColor: "#cbd5e1" }} />

              {/* Node 2 */}
              <div
                className="flex flex-col self-center w-4/5"
                style={{
                  backgroundColor: "#005ab6",
                  borderRadius: 16,
                  padding: 16,
                  gap: 6,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    color: colors.white,
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  Process
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 12.83, height: 12.83, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-2.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      color: colors.white,
                    }}
                  >
                    Content AI
                  </span>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="self-center" style={{ width: 1, height: 24, backgroundColor: "#cbd5e1", marginLeft: "10%" }} />

              {/* Node 3 */}
              <div
                className="flex flex-col self-end w-4/5"
                style={{
                  backgroundColor: "#006780",
                  borderRadius: 16,
                  padding: 16,
                  gap: 6,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    color: colors.white,
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  Transform
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 11.67, height: 11.67, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-3.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      color: colors.white,
                    }}
                  >
                    Design AI
                  </span>
                </div>
              </div>

              {/* Arrow 3 */}
              <div className="self-center" style={{ width: 1, height: 24, backgroundColor: "#cbd5e1", marginLeft: "20%" }} />

              {/* Node 4 */}
              <div
                className="flex flex-col self-center w-4/5"
                style={{
                  backgroundColor: colors.white,
                  border: `1px solid ${NODE_BORDER}`,
                  borderRadius: 16,
                  padding: 16,
                  gap: 6,
                  boxShadow: SHADOW_NODE,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                  }}
                >
                  Output
                </span>
                <div className="flex items-center gap-2">
                  <div style={{ width: 11.08, height: 9.33, position: "relative" }}>
                    <Image src="/section-5-developer-builder/icon-node-4.svg" alt="" fill />
                  </div>
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      color: TEXT_DARK,
                    }}
                  >
                    Publish AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}