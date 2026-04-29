"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// EngineeredForIndustry.tsx
// Figma frame: 507:6653 (1280 × 820, y=1894)
//
// LAYOUT MAP (scaled canvas — coords are section-absolute, in Figma px):
//   Canvas             1280 × 820, rounded 24, bg svg gradient
//   Background Image   (-281, -268) 3030 × 2031 (bg.png)
//   Background Grid    (-531, 117) 2400.9 × 1830 (bg-grid.png)
//   Ellipse Left       (-126, 638) 310 × 131 (ellipse.png)
//   Ellipse Right      (1081, 655) 310 × 131 (ellipse.png)
//   Header             (0, 0) max 1440w, pt 66, px 48
//     Heading          "Engineered for every industry"
//     Link             "Explore pricing" + icon
//   Text               (60, 148) 672w, "Precision-built AI modules..."
//   Grid Container     (29, 312) 1184w, 4 cols, gap 24
//     Card 1           (0, 0) 278w 392.25h (calc: 1184 - 3*24 = 1112 / 4 = 278)
//                      "Marketing", "Drive lead generation...", "View Solution"
//                      Inner: "Campaign Metrics", green dot, bars
//     Card 2           (302, 0) 278w 392.25h
//                      "Content", "Advanced editorial UI...", "View Solution"
//                      Inner: "The future of enterprise...", "intelligent scaling..."
//     Card 3           (604, 0) 278w 392.25h
//                      "Social Media", "Omnichannel scheduling grid...", "View Solution"
//                      Inner: grid of blue blocks
//     Card 4           (906, 0) 278w 392.25h
//                      "Data Processing", "Visual node-based...", "View Solution"
//                      Inner: node connection diagram
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 820;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const TEXT_DARK = "#191c1e";
const TEXT_MUTED = "#94a3b8";
const LINK_COLOR = "#60a5fa";
const CARD_BG = "rgba(255,255,255,0.6)";
const CARD_BORDER = "rgba(255,255,255,0.05)";
const INNER_BOX_BG = "rgba(15,23,42,0.8)";
const INNER_BOX_BORDER = "rgba(30,41,59,0.5)";

export default function EngineeredForIndustry() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
          borderRadius: 24,
          transform: "translateZ(0)",
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1280 820\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(186.11 0 0 112.96 1280 0)\"><stop stop-color=\"rgba(17,17,17,1)\" offset=\"0\"/><stop stop-color=\"rgba(11,11,11,1)\" offset=\"1\"/></radialGradient></defs></svg>')",
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
            className="pointer-events-none absolute"
            style={{ left: -281, top: -268, width: 3030, height: 2031 }}
          >
            <Image
              src="/section-6-developer-builder/bg.png"
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ left: -531, top: 117, width: 2400.92, height: 1830 }}
          >
            <Image
              src="/section-6-developer-builder/bg-grid.svg"
              alt=""
              fill
              unoptimized
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ left: -126, top: 638, width: 310, height: 131 }}
          >
            <Image
              src="/section-6-developer-builder/ellipse.svg"
              alt=""
              fill
              className="scale-[2.55]"
              unoptimized
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ left: 1081, top: 655, width: 310, height: 131 }}
          >
            <Image
              src="/section-6-developer-builder/ellipse.svg"
              alt=""
              fill
              className="scale-[2.55]"
              unoptimized
            />
          </div>

          {/* Header */}
          <div
            className="absolute flex items-end justify-between"
            style={{ left: 48, top: 66, width: 1184 }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 48,
                lineHeight: "60px",
                letterSpacing: "-1.5px",
                color: colors.white,
              }}
            >
              Engineered for every industry
            </h2>
            <div className="flex items-center gap-2 cursor-pointer group">
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: colors.white, // Updated to white for dark mode
                }}
              >
                Explore pricing
              </span>
              <div style={{ width: 16, height: 16, position: "relative", filter: "invert(1)" }}>
                <Image src="/section-6-developer-builder/icon-link.svg" alt="" fill />
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="absolute" style={{ left: 60, top: 148, width: 672 }}>
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 18,
                lineHeight: "29.25px",
                color: "rgba(255,255,255,0.7)", // Updated for dark mode
              }}
            >
              Precision-built AI modules designed to integrate seamlessly with your vertical.
              <br />
              Whether you&apos;re scaling a marketing powerhouse or architecting data flows,
              <br />
              Architect AI is your foundation.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="absolute" style={{ left: 29, top: 312, width: 1184, height: 392.25 }}>
            {/* Card 1: Marketing */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: 0,
                top: 0,
                width: 278,
                height: 392.25,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 12,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="absolute"
                style={{
                  left: 32,
                  top: 32,
                  width: 214,
                  height: 119.25,
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                  padding: 17,
                }}
              >
                <div className="flex w-full items-center justify-between pb-4">
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 500,
                      fontSize: 10,
                      lineHeight: "15px",
                      letterSpacing: "1px",
                      color: "#64748b",
                      textTransform: "uppercase",
                    }}
                  >
                    Campaign Metrics
                  </span>
                  <div style={{ width: 8, height: 8, backgroundColor: "#22c55e", borderRadius: "50%" }} />
                </div>
                <div className="flex w-full items-end justify-center gap-1 h-[22.25px] pb-4">
                  <div style={{ flex: "1 0 0", height: 8.89, backgroundColor: "rgba(59,130,246,0.2)", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 15.56, backgroundColor: "rgba(59,130,246,0.4)", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 11.13, backgroundColor: "#3b82f6", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 20.02, backgroundColor: "#2563eb", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 13.34, backgroundColor: "#60a5fa", borderRadius: 2 }} />
                </div>
                <div className="flex flex-col w-full gap-2 pt-2 border-t border-transparent">
                  <div style={{ width: "100%", height: 4, backgroundColor: "#1e293b", borderRadius: 9999 }} />
                  <div style={{ width: 118.66, height: 4, backgroundColor: "#1e293b", borderRadius: 9999 }} />
                </div>
              </div>
              <h3
                className="absolute"
                style={{
                  left: 32,
                  top: 183.25,
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: TEXT_DARK,
                }}
              >
                Marketing
              </h3>
              <p
                className="absolute"
                style={{
                  left: 32,
                  top: 223.25,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "22.75px",
                  color: TEXT_MUTED,
                }}
              >
                Drive lead generation with
                <br />
                integrated campaign analytics
                <br />
                and automated outreach
                <br />
                workflows.
              </p>
              <div className="absolute flex items-center gap-1" style={{ left: 32, bottom: 32, cursor: "pointer" }}>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
                </div>
              </div>
            </div>

            {/* Card 2: Content */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: 302,
                top: 0,
                width: 278,
                height: 392.25,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 12,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="absolute"
                style={{
                  left: 32,
                  top: 32,
                  width: 214,
                  height: 119.25,
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                }}
              >
                <div className="absolute flex items-center gap-2" style={{ left: 16, top: 16 }}>
                  <div style={{ width: 12, height: 12, backgroundColor: "#334155", borderRadius: "50%" }} />
                  <div style={{ width: 48, height: 4, backgroundColor: "#334155", borderRadius: 9999 }} />
                </div>
                <div className="absolute flex flex-col gap-3" style={{ left: 16, top: 44, width: 182 }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.mono,
                      fontSize: 10,
                      lineHeight: "15px",
                      color: "#cbd5e1",
                    }}
                  >
                    The future of enterprise
                    <br />
                    architecture relies on...
                  </p>
                  <div
                    className="flex items-center gap-1 w-fit"
                    style={{
                      backgroundColor: "rgba(59,130,246,0.2)",
                      border: "1px solid rgba(59,130,246,0.3)",
                      borderRadius: 4,
                      padding: "5px 14.95px 5px 9px",
                    }}
                  >
                    <div style={{ width: 11, height: 11, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card2.svg" alt="" fill />
                    </div>
                    <span
                      style={{
                        fontFamily: typography.fonts.mono,
                        fontSize: 10,
                        lineHeight: "15px",
                        color: "#93c5fd",
                      }}
                    >
                      intelligent scaling and
                      <br />
                      neural...
                    </span>
                  </div>
                </div>
              </div>
              <h3
                className="absolute"
                style={{
                  left: 32,
                  top: 183.25,
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: TEXT_DARK,
                }}
              >
                Content
              </h3>
              <p
                className="absolute"
                style={{
                  left: 32,
                  top: 223.25,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "22.75px",
                  color: TEXT_MUTED,
                }}
              >
                Advanced editorial UI with real-
                <br />
                time AI autocomplete to
                <br />
                streamline high-volume
                <br />
                production.
              </p>
              <div className="absolute flex items-center gap-1" style={{ left: 32, bottom: 32, cursor: "pointer" }}>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
                </div>
              </div>
            </div>

            {/* Card 3: Social Media */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: 604,
                top: 0,
                width: 278,
                height: 392.25,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 12,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="absolute"
                style={{
                  left: 32,
                  top: 32,
                  width: 214,
                  height: 119.25,
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                  padding: 9,
                }}
              >
                <div className="grid grid-cols-7 grid-rows-1 gap-1 w-full h-[101.25px] opacity-60">
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(37,99,235,0.3)] border border-[rgba(59,130,246,0.5)] rounded p-[5px]">
                    <div className="w-full h-2 pb-1"><div className="w-full h-1 bg-[#60a5fa]" /></div>
                    <div className="w-full h-4 bg-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1">
                    <div className="w-full h-2 pb-1"><div className="w-full h-1 bg-[#334155]" /></div>
                    <div className="w-full h-4 bg-[#475569]" />
                  </div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                </div>
              </div>
              <h3
                className="absolute"
                style={{
                  left: 32,
                  top: 183.25,
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: TEXT_DARK,
                }}
              >
                Social Media
              </h3>
              <p
                className="absolute"
                style={{
                  left: 32,
                  top: 223.25,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "22.75px",
                  color: TEXT_MUTED,
                }}
              >
                Omnichannel scheduling grid
                <br />
                with predictive engagement
                <br />
                insights for global brand reach.
              </p>
              <div className="absolute flex items-center gap-1" style={{ left: 32, bottom: 32, cursor: "pointer" }}>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
                </div>
              </div>
            </div>

            {/* Card 4: Data Processing */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: 906,
                top: 0,
                width: 278,
                height: 392.25,
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 12,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="absolute"
                style={{
                  left: 32,
                  top: 32,
                  width: 214,
                  height: 119.25,
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                  padding: 17,
                }}
              >
                <div className="relative w-full h-[85.25px]">
                  <div className="absolute left-2 top-2 flex items-center justify-center w-12 h-12 bg-[rgba(37,99,235,0.2)] border border-[rgba(59,130,246,0.3)] rounded z-10">
                    <div style={{ width: 10.5, height: 10.5, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card4-1.svg" alt="" fill />
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-[rgba(51,65,85,0.5)] border border-[#475569] rounded z-10">
                    <div style={{ width: 11.67, height: 10.5, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card4-2.svg" alt="" fill />
                    </div>
                  </div>
                  <div className="absolute right-2 bottom-2 flex items-center justify-center w-12 h-12 bg-[rgba(37,99,235,0.2)] border border-[rgba(59,130,246,0.3)] rounded z-10">
                    <div style={{ width: 11.67, height: 7, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card4-3.svg" alt="" fill />
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 w-full h-full">
                    <Image src="/section-6-developer-builder/card4-lines.svg" alt="" fill />
                  </div>
                </div>
              </div>
              <h3
                className="absolute"
                style={{
                  left: 32,
                  top: 183.25,
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: TEXT_DARK,
                }}
              >
                Data Processing
              </h3>
              <p
                className="absolute"
                style={{
                  left: 32,
                  top: 223.25,
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "22.75px",
                  color: TEXT_MUTED,
                }}
              >
                Visual node-based
                <br />
                orchestration for complex
                <br />
                datasets and high-speed JSON
                <br />
                transformations.
              </p>
              <div className="absolute flex items-center gap-1" style={{ left: 32, bottom: 32, cursor: "pointer" }}>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
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
        className="relative block w-full overflow-hidden md:hidden rounded-[24px]"
        style={{
          backgroundColor: "#0B0B0B", // Dark bg for mobile fallback based on desktop gradient
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <Image
            src="/section-6-developer-builder/bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Image
            src="/section-6-developer-builder/bg-grid.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="relative flex flex-col gap-12 px-6 py-16 sm:px-8">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 500,
                  fontSize: 28,
                  lineHeight: "1.2",
                  letterSpacing: "-1px",
                  color: colors.white,
                  maxWidth: "70%",
                }}
              >
                Engineered for every industry
              </h2>
              <div className="flex items-center gap-1 cursor-pointer">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    color: colors.white,
                  }}
                >
                  Pricing
                </span>
                <div style={{ width: 14, height: 14, position: "relative", filter: "invert(1)" }}>
                  <Image src="/section-6-developer-builder/icon-link.svg" alt="" fill />
                </div>
              </div>
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "1.5",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Precision-built AI modules designed to integrate seamlessly with your vertical.
              Whether you&apos;re scaling a marketing powerhouse or architecting data flows,
              Architect AI is your foundation.
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
                borderRadius: radiuses.cardSm,
                padding: 24,
                gap: 20,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="w-full relative"
                style={{
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                  padding: 16,
                  height: 120,
                }}
              >
                <div className="flex w-full items-center justify-between pb-3">
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 500,
                      fontSize: 10,
                      letterSpacing: "1px",
                      color: "#64748b",
                      textTransform: "uppercase",
                    }}
                  >
                    Campaign Metrics
                  </span>
                  <div style={{ width: 8, height: 8, backgroundColor: "#22c55e", borderRadius: "50%" }} />
                </div>
                <div className="flex w-full items-end justify-center gap-1 h-[22.25px] pb-3">
                  <div style={{ flex: "1 0 0", height: 8.89, backgroundColor: "rgba(59,130,246,0.2)", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 15.56, backgroundColor: "rgba(59,130,246,0.4)", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 11.13, backgroundColor: "#3b82f6", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 20.02, backgroundColor: "#2563eb", borderRadius: 2 }} />
                  <div style={{ flex: "1 0 0", height: 13.34, backgroundColor: "#60a5fa", borderRadius: 2 }} />
                </div>
                <div className="flex flex-col w-full gap-2 pt-2 border-t border-transparent">
                  <div style={{ width: "100%", height: 4, backgroundColor: "#1e293b", borderRadius: 9999 }} />
                  <div style={{ width: "60%", height: 4, backgroundColor: "#1e293b", borderRadius: 9999 }} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_DARK,
                  }}
                >
                  Marketing
                </h3>
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
                  Drive lead generation with integrated campaign analytics and automated outreach workflows.
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer pt-2">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardSm,
                padding: 24,
                gap: 20,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="w-full relative"
                style={{
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                  padding: 16,
                  height: 120,
                }}
              >
                <div className="flex items-center gap-2 pb-4">
                  <div style={{ width: 12, height: 12, backgroundColor: "#334155", borderRadius: "50%" }} />
                  <div style={{ width: 48, height: 4, backgroundColor: "#334155", borderRadius: 9999 }} />
                </div>
                <div className="flex flex-col gap-3">
                  <p
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.mono,
                      fontSize: 10,
                      color: "#cbd5e1",
                    }}
                  >
                    The future of enterprise architecture relies on...
                  </p>
                  <div
                    className="flex items-center gap-1 w-fit"
                    style={{
                      backgroundColor: "rgba(59,130,246,0.2)",
                      border: "1px solid rgba(59,130,246,0.3)",
                      borderRadius: 4,
                      padding: "5px 14.95px 5px 9px",
                    }}
                  >
                    <div style={{ width: 11, height: 11, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card2.svg" alt="" fill />
                    </div>
                    <span
                      style={{
                        fontFamily: typography.fonts.mono,
                        fontSize: 10,
                        color: "#93c5fd",
                      }}
                    >
                      intelligent scaling and neural...
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_DARK,
                  }}
                >
                  Content
                </h3>
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
                  Advanced editorial UI with real-time AI autocomplete to streamline high-volume production.
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer pt-2">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardSm,
                padding: 24,
                gap: 20,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="w-full relative"
                style={{
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                  padding: "16px 9px",
                  height: 120,
                }}
              >
                <div className="grid grid-cols-7 grid-rows-1 gap-1 w-full h-full opacity-60">
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(37,99,235,0.3)] border border-[rgba(59,130,246,0.5)] rounded p-[5px]">
                    <div className="w-full h-2 pb-1"><div className="w-full h-1 bg-[#60a5fa]" /></div>
                    <div className="w-full h-4 bg-[#3b82f6]" />
                  </div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1">
                    <div className="w-full h-2 pb-1"><div className="w-full h-1 bg-[#334155]" /></div>
                    <div className="w-full h-4 bg-[#475569]" />
                  </div>
                  <div className="flex flex-col bg-[rgba(30,41,59,0.5)] rounded p-1"><div className="w-full h-1 bg-[#334155]" /></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_DARK,
                  }}
                >
                  Social Media
                </h3>
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
                  Omnichannel scheduling grid with predictive engagement insights for global brand reach.
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer pt-2">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: radiuses.cardSm,
                padding: 24,
                gap: 20,
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="w-full relative flex items-center justify-center"
                style={{
                  backgroundColor: INNER_BOX_BG,
                  border: `1px solid ${INNER_BOX_BORDER}`,
                  borderRadius: 8,
                  padding: 16,
                  height: 120,
                }}
              >
                <div className="relative w-full max-w-[200px] aspect-[2/1]">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-[rgba(37,99,235,0.2)] border border-[rgba(59,130,246,0.3)] rounded z-10">
                    <div style={{ width: 10.5, height: 10.5, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card4-1.svg" alt="" fill />
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-[rgba(51,65,85,0.5)] border border-[#475569] rounded z-10">
                    <div style={{ width: 11.67, height: 10.5, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card4-2.svg" alt="" fill />
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-0 flex items-center justify-center w-10 h-10 bg-[rgba(37,99,235,0.2)] border border-[rgba(59,130,246,0.3)] rounded z-10">
                    <div style={{ width: 11.67, height: 7, position: "relative" }}>
                      <Image src="/section-6-developer-builder/icon-card4-3.svg" alt="" fill />
                    </div>
                  </div>
                  <div className="absolute inset-0">
                    <Image src="/section-6-developer-builder/card4-lines.svg" alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.4",
                    color: TEXT_DARK,
                  }}
                >
                  Data Processing
                </h3>
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
                  Visual node-based orchestration for complex datasets and high-speed JSON transformations.
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer pt-2">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    color: LINK_COLOR,
                  }}
                >
                  View Solution
                </span>
                <div style={{ width: 9.33, height: 9.33, position: "relative" }}>
                  <Image src="/section-6-developer-builder/icon-arrow.svg" alt="" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}