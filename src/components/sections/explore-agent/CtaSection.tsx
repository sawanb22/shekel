import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaSection.tsx  —  "Frame 2147225680"
// Figma frame: 506:4035
// Canvas: 1280 × 552 px   Page-y: ...   bg: #000000
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Background image (x: -385, y: -397) 1841x1252
//   Ellipse Blur (x: -549, y: -566) 696x696
//   Right Graphic (x: 682, y: 19) 870x870
//   Decorative SVG (x: 555, y: 1) 850x556
//   Heading "Start using AI..." (x: 109, y: 112) 612 wide
//   Buttons Row (x: 101, y: 315)
//     "Explore Agents"
//     "Start Building"
//   Bottom Text "Join thousands..." (x: 115, y: 426)
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = "linear-gradient(160deg, rgba(40, 100, 228, 1) 9%, rgba(30, 154, 255, 1) 72%, rgba(198, 248, 255, 1) 100%)";
const BORDER_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const BLUR_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const CTA_DECOR_SCALE = 1.6;
const CTA_DECOR_BASE_W = 760;
const CTA_DECOR_BASE_H = 552;

export default function CtaSection() {
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
        backgroundColor: colors.black,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        borderRadius: 24,
        marginTop: 48,
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top center",
          left: "50%",
          marginLeft: `calc(-${CANVAS_W}px / 2)`,
        }}
      >
        {/* Background Image */}
        <div className="absolute" style={{ left: -385, top: -397, width: 1841, height: 1252 }}>
          <Image src="/section-6-explore-agent/cta-bg.png" alt="" fill className="object-cover" />
        </div>

        {/* Ellipse Blur */}
        <div
          className="absolute"
          style={{
            left: -549,
            top: -566,
            width: 696,
            height: 696,
            background: BLUR_GRADIENT,
            filter: "blur(257.5px)",
            borderRadius: "50%",
          }}
        />

        {/* Decorative SVG - scaled +80% behind mascot */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: -160,
            top: -(CTA_DECOR_BASE_H * CTA_DECOR_SCALE - CANVAS_H) / 2,
            width: CTA_DECOR_BASE_W * CTA_DECOR_SCALE,
            height: CTA_DECOR_BASE_H * CTA_DECOR_SCALE,
          }}
        >
          <Image
            src="/section-6-explore-agent/cta-decor.svg"
            alt=""
            fill
            className="object-contain object-right"
          />
        </div>

        {/* Right Graphic Image */}
        <div className="absolute" style={{ left: 682, top: 19, width: 870, height: 870 }}>
          <Image src="/section-6-explore-agent/cta-graphic.png" alt="" fill className="object-cover" />
        </div>

        {/* Text Content */}
        <h2
          className="absolute m-0"
          style={{
            left: 109,
            top: 112,
            width: 612,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 72,
            lineHeight: "72px",
            letterSpacing: "-0.05em",
            color: colors.black,
          }}
        >
          Start using AI agents today
        </h2>

        {/* Buttons */}
        <div
          className="absolute flex flex-row items-center"
          style={{ left: 101, top: 315, gap: 16 }}
        >
          <button
            style={{
              background: BUTTON_GRADIENT,
              borderRadius: 10,
              padding: "20px 40px",
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
            style={{
              background: "transparent",
              border: "1px solid transparent",
              borderRadius: 10,
              padding: "20px 40px",
              position: "relative",
            }}
          >
            <div
              className="absolute inset-0 rounded-[10px] border border-transparent pointer-events-none"
              style={{
                background: `linear-gradient(${colors.white}, ${colors.white}) padding-box, ${BORDER_GRADIENT} border-box`,
              }}
            />
            <span
              className="relative z-10"
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

        {/* Bottom Text */}
        <p
          className="absolute m-0"
          style={{
            left: 115,
            top: 426,
            width: 423,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "16px",
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#1F2430",
          }}
        >
          Join thousands of users and developers
          <br />
          already using Shekel
        </p>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.black, borderRadius: 24, marginTop: 32 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image src="/section-6-explore-agent/cta-bg.png" alt="" fill className="object-cover object-center" />
      </div>

      {/* Graphic Image Overlay */}
      <div className="absolute right-0 top-1/4 w-3/4 aspect-square opacity-60 z-0" style={{ transform: "translateX(30%)" }}>
        <Image src="/section-6-explore-agent/cta-graphic.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-6 py-16">
        <h2
          className="m-0"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: "clamp(40px, 10vw, 56px)",
            lineHeight: "1.1",
            letterSpacing: "-0.05em",
            color: colors.white,
          }}
        >
          Start using AI agents today
        </h2>

        <div className="flex flex-col w-full gap-4 mt-4">
          <button
            className="w-full"
            style={{
              background: BUTTON_GRADIENT,
              borderRadius: 10,
              padding: "16px 24px",
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
            className="w-full relative"
            style={{
              background: "transparent",
              border: "1px solid transparent",
              borderRadius: 10,
              padding: "16px 24px",
            }}
          >
            <div
              className="absolute inset-0 rounded-[10px] border border-transparent pointer-events-none"
              style={{
                background: `linear-gradient(${colors.black}, ${colors.black}) padding-box, ${BORDER_GRADIENT} border-box`,
              }}
            />
            <span
              className="relative z-10"
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
          className="m-0 mt-8"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "16px",
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            color: colors.white,
            maxWidth: "80%",
          }}
        >
          Join thousands of users and developers already using Shekel
        </p>
      </div>
    </section>
  );
}