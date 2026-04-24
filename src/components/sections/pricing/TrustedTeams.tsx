import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// TrustedTeams.tsx  —  "Trusted by creators and teams worldwide."
// Figma frame: 506:4849  "Frame 2147225678"
// Canvas: 1280 × 673 px   Page-y: 1238   bg: #ffffff
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Group 1000005054 (x=-563, y=78)   2400.91×1830
//   Heading        (x=137, y=85)   1016×36
//   Body           (x=378, y=147)   576×24
//   Ellipse 43668  (x=147, y=-566)   696×696
//   Ellipse 43669  (x=1103, y=-513)   696×696
//   Ellipse 43670  (x=-31, y=671)   1383×696
//   Logo 64        (x=112, y=275)   210×57
//   Logo 66        (x=740, y=268)   120×72
//   Logo 67        (x=984, y=228)   119×119
//   Logo 68        (x=1081, y=417)   85×89
//   Logo 70        (x=537, y=417)   223×57
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280; // Assuming standard canvas width, adjusting height slightly to match frame boundaries
const CANVAS_H = 673;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function TrustedTeams() {
  return (
    <div className="w-full flex justify-center">
        <div className="w-full max-w-[1280px] md:p-[24px]">
             <div className="relative overflow-hidden md:rounded-[56px] border border-[rgba(255,255,255,0.2)] bg-white">
                <SectionDesktop />
                <SectionMobile />
            </div>
        </div>
    </div>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  return (
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
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden pb-16 pt-16"
      style={{ backgroundColor: colors.white }}
    >
       <div
          className="absolute"
          style={{ left: "-50%", top: 0, width: "200%", height: "100%", opacity: 0.5 }}
        >
          <Image
            src="/section-3-pricing/bg-texture.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      <div className="relative z-10 flex flex-col gap-6 px-6 sm:px-8 items-center text-center">
        <SectionHeading fontSize="clamp(32px, 8vw, 48px)" lineHeight="1.1" />
        <SectionBody fontSize="16px" lineHeight="24px" />

        <div className="flex flex-wrap justify-center gap-8 mt-8 items-center">
            <div style={{ position: "relative", width: 150, height: 40 }}>
                <Image
                    src="/section-3-pricing/logo-1.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
            <div style={{ position: "relative", width: 100, height: 60 }}>
                <Image
                    src="/section-3-pricing/logo-2.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
            <div style={{ position: "relative", width: 100, height: 100 }}>
                <Image
                    src="/section-3-pricing/logo-3.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
             <div style={{ position: "relative", width: 70, height: 75 }}>
                <Image
                    src="/section-3-pricing/logo-4.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
            <div style={{ position: "relative", width: 160, height: 40 }}>
                <Image
                    src="/section-3-pricing/logo-5.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
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
      className="m-0 text-black text-center whitespace-normal md:whitespace-nowrap"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
      }}
    >
      Trusted by creators and teams worldwide.
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
      className="m-0 text-black text-center"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
      }}
    >
      Join thousands using AI agents to automate workflows.
    </p>
  );
}