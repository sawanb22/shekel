import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaSection.tsx  —  "Ready to scale with AI?"
// Figma frame: 506:4925  "Frame 2147225687"
// Canvas: 1280 × 552 px   Page-y: 2730   bg: #000000
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (Figma 506:4925, section-absolute px):
//   bg            (x=-385, y=-397)  1841×1252
//   Ellipses      (-549,-566) (-536,523) (1147,-531) 696×696
//   Design A      (x=264, y=184) 663.5×665.5  rot 43.72°
//   Design B      (x=898.67, y=165) 463.8×474.5  rot 35.54°  blur
//   Design C      (x=-92, y=105) 360.4×421.1  rot -3.97°  blur
//   Heading       calc(50% - 372px) top 115  (744 wide, translateY -50%)
//   Body          (50% x), top 192
//   Buttons       calc(50% + 8.24px) top 291
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const TEXT_GRADIENT = `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`;
const BORDER_GRADIENT = `linear-gradient(188.63061178185168deg, rgb(40, 100, 228) 35.408%, rgb(30, 154, 255) 67.174%, rgb(198, 248, 255) 151.22%)`;

function CtaEllipse({
  left,
  top,
  flip,
  useEllipse2,
}: {
  left: number;
  top: number;
  flip?: boolean;
  useEllipse2?: boolean;
}) {
  const src = useEllipse2
    ? "/section-5-pricing/ellipse-2.png"
    : "/section-5-pricing/ellipse-1.png";
  return (
    <div
      aria-hidden
      className="absolute z-0 flex items-center justify-center"
      style={{
        left,
        top,
        width: 696,
        height: 696,
        transform: flip ? "scaleY(-1) rotate(180deg)" : undefined,
        pointerEvents: "none",
      }}
    >
      <div className="relative h-[696px] w-[696px] overflow-hidden">
        <div
          className="absolute"
          style={{ left: "-37%", top: "-37%", width: "174%", height: "174%" }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="800px"
          />
        </div>
      </div>
    </div>
  );
}

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
      className="relative hidden w-full overflow-hidden md:block rounded-[24px]"
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
        <div
          className="absolute z-0"
          style={{ left: -385, top: -397, width: 1841, height: 1252 }}
        >
          <Image
            src="/section-5-pricing/bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="1900px"
          />
        </div>

        {/* Ellipses — Figma 506:4925 */}
        <CtaEllipse
          left={-549}
          top={-566}
          flip
        />
        <CtaEllipse
          left={-536}
          top={523}
          flip
        />
        <CtaEllipse
          left={1147}
          top={-531}
          useEllipse2
        />

        {/* Design decors (below copy in stack order, z-1) */}
        <div
          aria-hidden
          className="absolute z-[1] flex items-center justify-center"
          style={{ left: 264, top: 184, width: 663.501, height: 665.527, transform: "rotate(43.72deg)" }}
        >
          <div className="relative overflow-hidden" style={{ width: 438, height: 502 }}>
            <div
              className="absolute"
              style={{ left: "-46.42%", top: 0, width: "203.78%", height: "100%" }}
            >
              <Image
                src="/section-5-pricing/design-1.png"
                alt=""
                fill
                className="object-cover"
                sizes="800px"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute z-[1] flex items-center justify-center"
          style={{
            left: 898.67,
            top: 165,
            width: 463.807,
            height: 474.461,
            transform: "rotate(35.54deg)",
            filter: "blur(6.2px)",
          }}
        >
          <div className="relative overflow-hidden" style={{ width: 313.382, height: 359.22 }}>
            <div
              className="absolute"
              style={{ left: "-46.42%", top: 0, width: "203.78%", height: "100%" }}
            >
              <Image
                src="/section-5-pricing/design-1.png"
                alt=""
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute z-[1] flex items-center justify-center"
          style={{
            left: -92,
            top: 105,
            width: 360.375,
            height: 421.136,
            transform: "rotate(-3.97deg)",
            filter: "blur(4.4px)",
          }}
        >
          <div className="relative overflow-hidden" style={{ width: 333.54, height: 398.992 }}>
            <div
              className="absolute"
              style={{ left: "-73.82%", top: "-9.34%", width: "248.85%", height: "117.01%" }}
            >
              <Image
                src="/section-5-pricing/design-2.png"
                alt=""
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute z-10 flex flex-col justify-center text-center"
          style={{
            left: "calc(50% - 372px)",
            top: 115,
            width: 744,
            height: 72,
            transform: "translateY(-50%)",
          }}
        >
          <SectionHeading fontSize={72} lineHeight="72px" />
        </div>

        <div
          className="absolute z-10 flex flex-col items-center"
          style={{ left: "50%", top: 192, width: 576, height: 56, transform: "translateX(-50%)" }}
        >
          <div style={{ width: 561.64 }}>
            <SectionBody fontSize={18} lineHeight="28px" />
          </div>
        </div>

        <div
          className="absolute z-10 flex items-center"
          style={{
            left: "50%",
            top: 291,
            gap: 16,
            transform: "translateX(-50%)",
          }}
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
      style={{ backgroundColor: colors.white }}
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