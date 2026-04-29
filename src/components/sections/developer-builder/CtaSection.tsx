import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaSection.tsx  —  "Start building your first AI agent"
// Figma frame: 507:6451  "Frame 2147225680"
// Canvas: 1280 × 552 px   Page-y: 6890   bg: black
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   bg.png                (x=-385, y=-397)  1841×1252  [absolute, max-w-none]
//   ellipse.png           (x=-549, y=-566)   696×696   [absolute]
//   Heading               (x=109, y=112)     612×159   [Inter 72px, black]
//   Container (Buttons)   (x=101, y=315)     458×62    [flex]
//   Get started           (x=0, y=1)         225×60    [linear-gradient bg]
//   Speak to Sales        (x=241, y=0)       218×62    [border #2864e4, gradient text]
//   Join thousands...     (x=115, y=426)     423×16    [Inter 10px, black]
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = "linear-gradient(188.63deg, #2864e4 35.41%, #1e9aff 67.17%, #c6f8ff 151.22%)";
const TEXT_GRADIENT = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";

export default function CtaSection() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function Heading({ fontSize, lineHeight }: { fontSize: string | number; lineHeight: string }) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        letterSpacing: "-0.05em",
        color: colors.black,
        textTransform: "capitalize",
      }}
    >
      Start building your first AI agent
    </h2>
  );
}

function Subtitle({ fontSize, lineHeight }: { fontSize: string | number; lineHeight: string }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        letterSpacing: "0.36em",
        color: colors.black,
        textTransform: "uppercase",
        textAlign: "center",
      }}
    >
      Join thousands of users and developers already using Shekel
    </p>
  );
}

function PrimaryButton({ width, height }: { width?: number | string; height?: number | string }) {
  return (
    <button
      className="flex items-center justify-center shrink-0 cursor-pointer border-none"
      style={{
        width: width || "auto",
        height: height || "auto",
        padding: "20px 40px",
        borderRadius: "10px",
        background: BUTTON_GRADIENT,
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.1em",
          color: colors.white,
          textTransform: "uppercase",
        }}
      >
        Get started
      </span>
    </button>
  );
}

function SecondaryButton({ width, height }: { width?: number | string; height?: number | string }) {
  return (
    <button
      className="flex items-center justify-center shrink-0 cursor-pointer bg-white"
      style={{
        width: width || "auto",
        height: height || "auto",
        padding: "21px 41px",
        borderRadius: "10px",
        border: `1px solid ${colors.brand.blueStart}`,
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.1em",
          background: TEXT_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textTransform: "uppercase",
        }}
      >
        Speak to Sales
      </span>
    </button>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block py-16"
      style={{ backgroundColor: colors.background.section }}
    >
      <div className="relative max-w-[1280px] mx-auto overflow-hidden"
        style={{
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
          backgroundColor: colors.black,
          borderRadius: radiuses.card,
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
          {/* bg.png */}
          <div
            className="absolute"
            style={{
              left: -385,
              top: -397,
              width: 1841,
              height: 1252,
            }}
          >
            <Image
              src="/section-9-developer-builder/bg.png"
              alt=""
              fill
              className="object-cover max-w-none pointer-events-none"
              unoptimized
            />
          </div>

          {/* ellipse.png */}
          <div
            className="absolute"
            style={{
              left: -549,
              top: -566,
              width: 696,
              height: 696,
              transform: "rotate(180deg) scaleY(-1)",
            }}
          >
            <Image
              src="/section-9-developer-builder/ellipse.svg"
              alt=""
              fill
              className="object-contain max-w-none pointer-events-none"
              unoptimized
            />
          </div>

          {/* Heading */}
          <div
            className="absolute flex flex-col justify-center"
            style={{ left: 109, top: 112, width: 612, height: 159 }}
          >
            <Heading fontSize={72} lineHeight="72px" />
          </div>

          {/* Buttons Container */}
          <div
            className="absolute flex items-center gap-[16px]"
            style={{ left: 101, top: 315 }}
          >
            <PrimaryButton width={224.83} height={60} />
            <SecondaryButton width={217.66} height={62} />
          </div>

          {/* Subtitle */}
          <div
            className="absolute flex flex-col justify-center"
            style={{ left: 115, top: 426, width: 423, height: 16 }}
          >
            <Subtitle fontSize={10} lineHeight="16px" />
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
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.background.section }}
    >
      <div className="px-6 py-16">
        <div
          className="relative w-full flex flex-col gap-8 px-6 py-12 overflow-hidden items-center text-center"
          style={{
            backgroundColor: colors.black,
            borderRadius: radiuses.card,
          }}
        >
          {/* bg.png */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/section-9-developer-builder/bg.png"
              alt=""
              fill
              className="object-cover max-w-none opacity-50"
              unoptimized
            />
          </div>

          {/* ellipse.png */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-50 pointer-events-none">
            <Image
              src="/section-9-developer-builder/ellipse.svg"
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="relative z-10 flex flex-col gap-8 items-center">
            <Heading fontSize="clamp(32px, 8vw, 48px)" lineHeight="1.1" />

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <div className="w-full sm:w-auto">
                <PrimaryButton width="100%" />
              </div>
              <div className="w-full sm:w-auto">
                <SecondaryButton width="100%" />
              </div>
            </div>

            <Subtitle fontSize="10px" lineHeight="1.6" />
          </div>
        </div>
      </div>
    </section>
  );
}
