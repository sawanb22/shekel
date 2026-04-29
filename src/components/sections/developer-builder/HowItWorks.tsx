"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// HowItWorks.tsx
// Figma frames: 507:6554 (Header) and 507:6526 (Cards)
// Combined Layout Map (scaled canvas — coords are section-absolute, in Figma px):
//   Canvas             1280 × 510, bg white
//   Header Container   (24, 80) 1232 wide, gap 16
//     Heading          "How it works", Poppins 500 48/40, #191c1e
//     Subheading       "Three steps from zero...", Inter 400 16/24, #414753
//   Cards Container    (24, 188) 1232 wide, 3 columns gap 24
//     Card 1           bg #f2f4f7, pad 32, rounded 32, gap 16
//                      icon box: 48x48, rounded 12, blue gradient
//                      "01. Create" text #191c1e
//                      "Select from our library..." text #414753
//     Card 2           bg #f2f4f7, pad 32, rounded 32, gap 16
//                      icon box: 48x48, rounded 12, blue gradient
//                      "02. Connect" text #191c1e
//                      "Link your agents..." text #414753
//     Card 3           bg #f2f4f7, pad 32, rounded 32, gap 16
//                      icon box: 48x48, rounded 12, blue gradient
//                      "03. Deploy" text #191c1e
//                      "Go live with a single..." text #414753
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 510;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";
const TEXT_DARK = "#191c1e";
const TEXT_MUTED = "#414753";
const CARD_BG = "#f2f4f7";

export default function HowItWorks() {
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
          {/* Header */}
          <div
            className="absolute flex flex-col items-center"
            style={{
              left: 24,
              top: 80,
              width: 1232,
              gap: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 48,
                lineHeight: "40px",
                letterSpacing: "-0.9px",
                color: TEXT_DARK,
                textAlign: "center",
              }}
            >
              How it works
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: TEXT_MUTED,
                textAlign: "center",
                width: 393.5,
              }}
            >
              Three steps from zero to an autonomous workforce.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            className="absolute grid grid-cols-3"
            style={{
              left: 24,
              top: 188,
              width: 1232,
              gap: 24,
            }}
          >
            {/* Card 1: Create */}
            <div
              className="flex flex-col items-start"
              style={{
                backgroundColor: CARD_BG,
                borderRadius: radiuses.cardLg,
                padding: 32,
                gap: 16,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: GRADIENT_BLUE,
                }}
              >
                <div style={{ width: 19, height: 18, position: "relative" }}>
                  <Image
                    src="/section-3-developer-builder/icon-1.svg"
                    alt="Create Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex w-full pt-[8px]">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: "32px",
                    color: TEXT_DARK,
                  }}
                >
                  01. Create
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: TEXT_MUTED,
                }}
              >
                Select from our library or build a custom
                <br />
                agent persona from scratch using natural
                <br />
                language or code.
              </p>
            </div>

            {/* Card 2: Connect */}
            <div
              className="flex flex-col items-start"
              style={{
                backgroundColor: CARD_BG,
                borderRadius: radiuses.cardLg,
                padding: 32,
                gap: 16,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: GRADIENT_BLUE,
                }}
              >
                <div style={{ width: 24, height: 23, position: "relative" }}>
                  <Image
                    src="/section-3-developer-builder/icon-2.svg"
                    alt="Connect Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex w-full pt-[8px]">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: "32px",
                    color: TEXT_DARK,
                  }}
                >
                  02. Connect
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: TEXT_MUTED,
                }}
              >
                Link your agents via visual pipes. Create
                <br />
                complex logical chains and conditional
                <br />
                branching effortlessly.
              </p>
            </div>

            {/* Card 3: Deploy */}
            <div
              className="flex flex-col items-start"
              style={{
                backgroundColor: CARD_BG,
                borderRadius: radiuses.cardLg,
                padding: 32,
                gap: 16,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: GRADIENT_BLUE,
                }}
              >
                <div style={{ width: 20.05, height: 20.07, position: "relative" }}>
                  <Image
                    src="/section-3-developer-builder/icon-3.svg"
                    alt="Deploy Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex w-full pt-[8px]">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: "32px",
                    color: TEXT_DARK,
                  }}
                >
                  03. Deploy
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: TEXT_MUTED,
                }}
              >
                Go live with a single API endpoint or web-
                <br />
                hook. Monitor execution and performance
                <br />
                in real-time.
              </p>
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
        <div className="relative flex flex-col items-center gap-12 px-6 py-16 sm:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
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
              How it works
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
              Three steps from zero to an autonomous workforce.
            </p>
          </div>

          {/* Cards */}
          <div className="flex w-full flex-col gap-6">
            {/* Card 1 */}
            <div
              className="flex flex-col items-start"
              style={{
                backgroundColor: CARD_BG,
                borderRadius: radiuses.cardLg,
                padding: "32px 24px",
                gap: 16,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: GRADIENT_BLUE,
                }}
              >
                <div style={{ width: 19, height: 18, position: "relative" }}>
                  <Image
                    src="/section-3-developer-builder/icon-1.svg"
                    alt="Create Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "1.4",
                  color: TEXT_DARK,
                  marginTop: 4,
                }}
              >
                01. Create
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
                Select from our library or build a custom agent persona from
                scratch using natural language or code.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col items-start"
              style={{
                backgroundColor: CARD_BG,
                borderRadius: radiuses.cardLg,
                padding: "32px 24px",
                gap: 16,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: GRADIENT_BLUE,
                }}
              >
                <div style={{ width: 24, height: 23, position: "relative" }}>
                  <Image
                    src="/section-3-developer-builder/icon-2.svg"
                    alt="Connect Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "1.4",
                  color: TEXT_DARK,
                  marginTop: 4,
                }}
              >
                02. Connect
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
                Link your agents via visual pipes. Create complex logical chains
                and conditional branching effortlessly.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col items-start"
              style={{
                backgroundColor: CARD_BG,
                borderRadius: radiuses.cardLg,
                padding: "32px 24px",
                gap: 16,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: GRADIENT_BLUE,
                }}
              >
                <div style={{ width: 20.05, height: 20.07, position: "relative" }}>
                  <Image
                    src="/section-3-developer-builder/icon-3.svg"
                    alt="Deploy Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "1.4",
                  color: TEXT_DARK,
                  marginTop: 4,
                }}
              >
                03. Deploy
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
                Go live with a single API endpoint or web-hook. Monitor
                execution and performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}