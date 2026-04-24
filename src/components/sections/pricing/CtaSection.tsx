import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaSection.tsx  —  "Ready to scale with AI?"
// Figma frame: 506:4925  "Frame 2147225687"
// Canvas: 1280 × 552 px   Page-y: 2730   bg: #000000
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   bg image      (x=-385, y=-397)  1841×1252
//   Ellipse 43668 (x=147, y=-566)   696×696
//   Ellipse 43670 (x=160, y=523)    696×696
//   Ellipse 43669 (x=1147, y=-531)  696×696
//   Design 1      (x=610.94, y=184) 663.50×665.53
//   Design 2      (x=-92, y=128.1)  360.37×421.14
//   Heading       (x=268, y=79)     744×72
//   Body          (x=352, y=192)    576×56
//   Buttons       (x=419, y=291)    458.49×62
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`;
const TEXT_GRADIENT = `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`;
const BORDER_GRADIENT = `linear-gradient(188.63061178185168deg, rgb(40, 100, 228) 35.408%, rgb(30, 154, 255) 67.174%, rgb(198, 248, 255) 151.22%)`;

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
      className="relative hidden w-full overflow-hidden md:block rounded-[24px] mx-auto"
      style={{
        backgroundColor: colors.black,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        maxWidth: 1280
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
          style={{ left: -385, top: -397, width: 1841, height: 1252 }}
        >
          <Image
            src="/section-5-pricing/bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{ left: 147, top: -566, width: 696, height: 696, transform: "scaleY(-1) rotate(180deg)" }}
        >
          <Image
            src="/section-5-pricing/ellipse-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{ left: 160, top: 523, width: 696, height: 696, transform: "scaleY(-1) rotate(180deg)" }}
        >
           <Image
            src="/section-5-pricing/ellipse-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{ left: 1147, top: -531, width: 696, height: 696 }}
        >
          <Image
            src="/section-5-pricing/ellipse-2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{ left: 610.94, top: 184, width: 663.50, height: 665.53, transform: "rotate(43.72deg)" }}
        >
           <Image
            src="/section-5-pricing/design-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{ left: -92, top: 128.1, width: 360.37, height: 421.14, transform: "rotate(-3.97deg)", filter: "blur(4.4px)" }}
        >
           <Image
            src="/section-5-pricing/design-2.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute flex flex-col justify-center text-center whitespace-nowrap"
          style={{ left: 268, top: 79, width: 744, height: 72 }}
        >
          <SectionHeading fontSize={72} lineHeight="72px" />
        </div>

        <div
          className="absolute flex flex-col items-center"
          style={{ left: 352, top: 192, width: 576, height: 56 }}
        >
          <div style={{ width: 561.64 }}>
             <SectionBody fontSize={18} lineHeight="28px" />
          </div>
        </div>

        <div
          className="absolute flex items-center justify-center gap-[16px]"
          style={{ left: 419, top: 291, width: 458.49, height: 62 }}
        >
          <PrimaryButton text="Explore Agents" />
          <SecondaryButton text="Start Building" />
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden rounded-[24px] py-16"
      style={{ backgroundColor: colors.black }}
    >
       <div
          className="absolute"
          style={{ left: "-50%", top: 0, width: "200%", height: "100%", opacity: 0.5 }}
        >
          <Image
            src="/section-5-pricing/bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      <div className="relative z-10 flex flex-col gap-8 px-6 sm:px-8 items-center text-center">
        <SectionHeading fontSize="clamp(32px, 8vw, 48px)" lineHeight="1.1" />
        <SectionBody fontSize="16px" lineHeight="24px" />

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full">
            <PrimaryButton text="Explore Agents" isMobile={true} />
            <SecondaryButton text="Start Building" isMobile={true} />
        </div>
      </div>
    </section>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h2
      className="m-0 text-[#161616] text-center"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        letterSpacing: "-3.6px",
        textTransform: "capitalize"
      }}
    >
      Ready to scale with AI?
    </h2>
  );
}

function SectionBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      className="m-0 text-[#94a3b8] text-center whitespace-normal md:whitespace-pre-wrap"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
      }}
    >
      Join 10,000+ teams using Shekel AI to automate their creative and{"\n"}technical workflows.
    </p>
  );
}

function PrimaryButton({ text, isMobile = false }: { text: string, isMobile?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer min-w-[200px] ${isMobile ? "w-full" : ""}`}
      style={{
        background: BORDER_GRADIENT,
        borderRadius: "10px",
        padding: "20px 40px",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "20px",
          color: colors.white,
          letterSpacing: "1.4px",
          textTransform: "uppercase"
        }}
      >
        {text}
      </span>
    </div>
  );
}

function SecondaryButton({ text, isMobile = false }: { text: string, isMobile?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer min-w-[200px] bg-white ${isMobile ? "w-full" : ""}`}
      style={{
        border: `1px solid ${colors.brand.blueStart}`,
        borderRadius: "10px",
        padding: "21px 41px",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          background: TEXT_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {text}
      </span>
    </div>
  );
}