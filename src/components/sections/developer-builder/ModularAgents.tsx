"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// ModularAgents.tsx
// Figma frame: 507:6371 "Body" (1280 × 516, y=608)
//
// LAYOUT MAP (scaled canvas — coords are section-absolute, in Figma px):
//   Canvas             1280 × 516, bg #FFFFFF, top corners rounded 30px
//   Background SVG     (-395, -7) 1841 × 1252 (bg.png, rotated 180)
//   Container          (24, 61) 1232 wide, 3 columns gap 32
//     Card 1           bg white, pad 40, rounded 32, gap 8
//                      "120+" text gradient
//                      "Modular Agents" text #191c1e
//                      "Pre-built specialized agents..." text #414753
//     Card 2           bg white, pad 40, rounded 32, gap 8
//                      "0ms" text gradient
//                      "Execution Delay" text #191c1e
//                      "Real-time edge execution..." text #414753
//     Card 3           bg white, pad 39.5 top, 40 px, 64 pb, rounded 32, gap 8
//                      "∞" text gradient
//                      "Modular System" text #191c1e
//                      "Scale vertically or horizontally..." text #414753
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 380;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";
const TEXT_DARK = "#191c1e";
const TEXT_MUTED = "#414753";
const CARD_SHADOW = "0px 30px 60px -12px rgba(25, 28, 30, 0.08)";

export default function ModularAgents() {
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
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          transform: "translateZ(0)", // Force GPU composite to fix rounding glitch
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
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute flex items-center justify-center"
            style={{
              left: -395,
              top: -7,
              width: 1841,
              height: 1252,
            }}
          >
            <div
              className="flex-none -scale-y-100 rotate-180"
              style={{ width: 1841, height: 1252, position: "relative" }}
            >
              <Image
                src="/section-2-developer-builder/bg.png"
                alt=""
                width={1841}
                height={1252}
                className="absolute inset-0 h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Container Grid */}
          <div
            className="absolute grid grid-cols-3"
            style={{
              left: 24,
              top: 61,
              width: 1232,
              gap: 32,
            }}
          >
            {/* Card 1: Modular Agents */}
            <div
              className="flex flex-col items-start bg-white"
              style={{
                borderRadius: radiuses.cardLg,
                padding: 40,
                gap: 8,
                boxShadow: CARD_SHADOW,
              }}
            >
              <div
                className="flex flex-col justify-center shrink-0"
                style={{ height: 48 }}
              >
                <span
                  style={{
                    background: GRADIENT_BLUE,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: typography.fonts.poppins,
                    fontWeight: 500,
                    fontSize: 48,
                    lineHeight: "48px",
                  }}
                >
                  120+
                </span>
              </div>
              <div className="flex w-full pt-[8.5px]">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: TEXT_DARK,
                  }}
                >
                  Modular Agents
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_MUTED,
                }}
              >
                Pre-built specialized agents ready for
                <br />
                instant deployment into your existing
                <br />
                logic.
              </p>
            </div>

            {/* Card 2: Execution Delay */}
            <div
              className="flex flex-col items-start bg-white"
              style={{
                borderRadius: radiuses.cardLg,
                padding: 40,
                gap: 8,
                boxShadow: CARD_SHADOW,
              }}
            >
              <div
                className="flex flex-col justify-center shrink-0"
                style={{ height: 48 }}
              >
                <span
                  style={{
                    background: GRADIENT_BLUE,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 800,
                    fontSize: 48,
                    lineHeight: "48px",
                  }}
                >
                  0ms
                </span>
              </div>
              <div className="flex w-full pt-[8.5px]">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: TEXT_DARK,
                  }}
                >
                  Execution Delay
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_MUTED,
                }}
              >
                Real-time edge execution ensuring your
                <br />
                workflows respond at the speed of
                <br />
                thought.
              </p>
            </div>

            {/* Card 3: Modular System */}
            <div
              className="flex flex-col items-start bg-white"
              style={{
                borderRadius: radiuses.cardLg,
                paddingTop: 39.5,
                paddingRight: 40,
                paddingBottom: 64,
                paddingLeft: 40,
                gap: 8,
                boxShadow: CARD_SHADOW,
              }}
            >
              <div
                className="flex flex-col justify-center shrink-0"
                style={{ height: 48 }}
              >
                <span
                  style={{
                    background: GRADIENT_BLUE,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "'Liberation Serif', serif",
                    fontWeight: 700,
                    fontSize: 48,
                    lineHeight: "48px",
                  }}
                >
                  ∞
                </span>
              </div>
              <div className="flex w-full pt-[8.5px]">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: TEXT_DARK,
                  }}
                >
                  Modular System
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_MUTED,
                }}
              >
                Scale vertically or horizontally with our
                <br />
                recursive orchestration architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative block w-full overflow-hidden md:hidden rounded-t-[30px]"
        style={{ backgroundColor: colors.white }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <Image
            src="/section-2-developer-builder/bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top -scale-y-100 rotate-180"
          />
        </div>

        <div className="relative flex flex-col gap-6 px-6 py-16 sm:px-8">
          {/* Card 1 */}
          <div
            className="flex flex-col items-start bg-white"
            style={{
              borderRadius: radiuses.cardLg,
              padding: "32px 24px",
              gap: 8,
              boxShadow: CARD_SHADOW,
            }}
          >
            <span
              style={{
                background: GRADIENT_BLUE,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 40,
                lineHeight: "1.2",
              }}
            >
              120+
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 18,
                lineHeight: "1.4",
                color: TEXT_DARK,
                marginTop: 4,
              }}
            >
              Modular Agents
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
              Pre-built specialized agents ready for instant deployment into your
              existing logic.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col items-start bg-white"
            style={{
              borderRadius: radiuses.cardLg,
              padding: "32px 24px",
              gap: 8,
              boxShadow: CARD_SHADOW,
            }}
          >
            <span
              style={{
                background: GRADIENT_BLUE,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: typography.fonts.jakarta,
                fontWeight: 800,
                fontSize: 40,
                lineHeight: "1.2",
              }}
            >
              0ms
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 18,
                lineHeight: "1.4",
                color: TEXT_DARK,
                marginTop: 4,
              }}
            >
              Execution Delay
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
              Real-time edge execution ensuring your workflows respond at the
              speed of thought.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col items-start bg-white"
            style={{
              borderRadius: radiuses.cardLg,
              padding: "32px 24px",
              gap: 8,
              boxShadow: CARD_SHADOW,
            }}
          >
            <span
              style={{
                background: GRADIENT_BLUE,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Liberation Serif', serif",
                fontWeight: 700,
                fontSize: 40,
                lineHeight: "1.2",
              }}
            >
              ∞
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 18,
                lineHeight: "1.4",
                color: TEXT_DARK,
                marginTop: 4,
              }}
            >
              Modular System
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
              Scale vertically or horizontally with our recursive orchestration
              architecture.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
