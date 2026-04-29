import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaCategory.tsx  —  "Start exploring AI agents"
// Figma frame: 500:13477  "Frame 2147225681"
// Canvas: 1280 × 552 px   bg: #000000, radius 24px
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 552, bg black, radius 24px
//   Background Image   (-385, -397) 1841×1252
//   Heading            (467, 123) w:668 h:144 Inter 400 72/72 #000000 (Wait, Figma says black on black background? This is a known Figma anomaly often seen with masks. The text should be white based on context.)
//   Blur Ellipse       (1269, -111) 696×696 bg gradient, blur 500px
//   Buttons Container  (587, 307) flex row, gap 16px
//     Button 1         bg gradient, pad 20x40, radius 10px, text white Inter 600 14/20
//     Button 2         border gradient 1px, pad 20x40, radius 10px, text gradient Inter 600 14/20
//   Footer Text        (602, 425) w:423 Inter 400 10/16 uppercase #303030
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BG_COLOR = "#000000";
// The text color in the figma output says #000000, but on a black background and looking at similar sections, it should be white.
const TEXT_HEADING = colors.white;
const TEXT_MUTED = "#303030";
const BUTTON_GRADIENT = "linear-gradient(160deg, rgba(40, 100, 228, 1) 9%, rgba(30, 154, 255, 1) 72%, rgba(198, 248, 255, 1) 100%)";
const BORDER_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

export default function CtaCategory() {
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
        borderRadius: 24, // Keep section radius as per Figma
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        marginBottom: 80, // adding margin to visually separate from footer
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
        {/* Background Image */}
        <div
          className="absolute"
          style={{ left: -385, top: -397, width: 1841, height: 1252 }}
        >
          <Image
            src="/section-6-category-detail/cta-bg.png"
            alt=""
            fill
            className="object-cover opacity-80"
          />
        </div>

        {/* Glow Ellipse */}
        <div
          className="absolute"
          style={{
            left: 1269,
            top: -111,
            width: 696,
            height: 696,
            background: BORDER_GRADIENT,
            filter: "blur(500px)",
            borderRadius: radiuses.full,
          }}
        />

        {/* Content */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center relative z-10" style={{ gap: "40px" }}>
            <h2
              className="text-center"
              style={{
                margin: 0,
                width: 668,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 72,
                lineHeight: "72px",
                letterSpacing: "-0.05em",
                color: TEXT_HEADING,
              }}
            >
              Start exploring AI agents
            </h2>

            <div className="flex items-center gap-[16px]">
              {/* Primary Button */}
              <button
                className="transition-transform active:scale-95"
                style={{
                  background: BUTTON_GRADIENT,
                  borderRadius: 10,
                  padding: "20px 40px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: colors.white,
                  }}
                >
                  Explore Agents
                </span>
              </button>

              {/* Secondary Button */}
              <button
                className="transition-transform active:scale-95 relative"
                style={{
                  backgroundColor: "transparent",
                  borderRadius: 10,
                  padding: "20px 40px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {/* Border via pseudo-element pattern since border-image doesn't support radius well */}
                <div
                  className="absolute inset-0 rounded-[10px]"
                  style={{
                    padding: "1px",
                    background: BORDER_GRADIENT,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: BORDER_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Start Building
                </span>
              </button>
            </div>

            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "16px",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
                marginTop: "16px",
              }}
            >
              Join thousands of users and developers already using Shekel
            </p>
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
      className="relative block w-full overflow-hidden md:hidden mb-12"
      style={{ backgroundColor: BG_COLOR, borderRadius: 24 }}
    >
      <div className="absolute inset-0">
        <Image
          src="/section-6-category-detail/cta-bg.png"
          alt=""
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 300,
          height: 300,
          background: BORDER_GRADIENT,
          filter: "blur(150px)",
          borderRadius: radiuses.full,
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-20 text-center">
        <h2
          style={{
            margin: 0,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: "clamp(36px, 10vw, 48px)",
            lineHeight: "1.1",
            letterSpacing: "-0.05em",
            color: TEXT_HEADING,
          }}
        >
          Start exploring AI agents
        </h2>

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            className="w-full active:scale-95 sm:w-auto"
            style={{
              background: BUTTON_GRADIENT,
              borderRadius: 10,
              padding: "16px 32px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: colors.white,
              }}
            >
              Explore Agents
            </span>
          </button>

          <button
            className="relative w-full active:scale-95 sm:w-auto"
            style={{
              backgroundColor: "transparent",
              borderRadius: 10,
              padding: "16px 32px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <div
              className="absolute inset-0 rounded-[10px]"
              style={{
                padding: "1px",
                background: BORDER_GRADIENT,
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: BORDER_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Start Building
            </span>
          </button>
        </div>

        <p
          style={{
            margin: 0,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "16px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: TEXT_MUTED,
            marginTop: "8px",
          }}
        >
          Join thousands of users and developers already using Shekel
        </p>
      </div>
    </section>
  );
}
