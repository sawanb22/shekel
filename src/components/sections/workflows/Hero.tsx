// ─────────────────────────────────────────────────────────────────────────────
// Hero.tsx  —  "Build AI workflows"
// Figma frame: 507:5657  "Frame 2147225665"
// Canvas: 1280 × 826 px   Page-y: 66   bg: black
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Ellipse 43662   (x=-19, y=-49)   1343×211   bg image
//   Ellipse 43664   (x=-98, y=-139)   163×163   bg image
//   Ellipse 43665   (x=1252, y=-82)   163×163   bg image
//   Frame 2147225678   (x=-4, y=737)   1291×89   bottom bar with icons
//   Container   (x=55, y=294)   478×84   Subheading text
//   Button Container  (x=313, y=414)   478×78   Explore Workflows button
//   Group 1000005054   (x=-145, y=-163)   2400.91650390625×1830   Main background grid
//   Button   (x=47, y=432)   253.02999877929688×60   Start Building button
//   Frame 2147225689   (x=35, y=109)   617×116   Main heading
//   Container (Workflow Input)  (x=791, y=76)   448×582.5   Workflow input card
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger } from "@/components/shared/motion/RevealStagger";

const CANVAS_W = 1280;
const CANVAS_H = 826;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";
const HEADING_GRADIENT = "linear-gradient(195.61deg, #ffffff 55.625%, rgba(255, 255, 255, 0) 110.73%)";
const BLUE_TEXT = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";
const BUTTON_BG = "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)";
const EXPLORE_BTN_BG = "rgba(38, 38, 38, 0.4)";
const EXPLORE_BTN_BORDER = "rgba(0, 227, 253, 0.2)";

const CARD_OVERLAY = "linear-gradient(52.46deg, rgba(182, 160, 255, 0.2) 0%, rgba(182, 160, 255, 0) 50%, rgba(0, 227, 253, 0.2) 100%)";
const CARD_BG = "black";
const CARD_BORDER = "rgba(255, 255, 255, 0.05)";

const BADGE_BG = "rgba(0, 227, 253, 0.1)";
const ACTIVE_NODE_COLOR = "#00e3fd";
/** Frame 2147225689 — not on radiuses scale */
const HEADING_GLASS_R = "18px";

export default function Hero() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h1
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        /* style_ERYLUA letterSpacing −2.81% → em relative to font size */
        letterSpacing: "-0.0281em",
        color: colors.white,
      }}
    >
      <span
        style={{
          background: HEADING_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Build
      </span>{" "}
      <span
        style={{
          background: BLUE_TEXT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        AI workflows
      </span>
    </h1>
  );
}

function SectionSubheading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: colors.white,
      }}
    >
      Connect multiple AI agents, automate tasks, and execute workflows visually in seconds. Architect your intelligence with Shekel.
    </p>
  );
}

function StartBuildingButton({ width }: { width?: string | number }) {
  return (
    <button
      className="hover:opacity-90 transition-opacity"
      style={{
        width,
        background: BUTTON_BG,
        padding: "16px 32px",
        borderRadius: radiuses.cardSm,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 18,
          color: colors.white,
          lineHeight: "28px",
        }}
      >
        Start Building
      </span>
    </button>
  );
}

function ExploreWorkflowsButton({ width }: { width?: string | number }) {
  return (
    <button
      className="hover:bg-white/5 transition-colors"
      style={{
        width,
        background: EXPLORE_BTN_BG,
        /* effect_XOKM3Z — Explore Workflows backdrop */
        backdropFilter: "blur(12px)",
        border: `1px solid ${EXPLORE_BTN_BORDER}`,
        padding: "16px 32px",
        borderRadius: radiuses.cardSm,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 600,
          fontSize: 18,
          color: colors.white,
          lineHeight: "28px",
        }}
      >
        Explore Workflows
      </span>
    </button>
  );
}

function InputField({
  label,
  placeholder,
  isPassword = false,
  inputPadding = "14px 16px",
}: {
  label: string;
  placeholder: string;
  isPassword?: boolean;
  /** Goal / API key rows use different padding from Figma */
  inputPadding?: string;
}) {
  return (
    <div className="flex flex-col gap-[8.5px] w-full relative z-10">
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 12,
          color: "#adaaaa",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          lineHeight: "16px",
        }}
      >
        {label}
      </span>
      <div
        style={{
          background: CARD_BG,
          border: "1px solid rgba(72, 72, 71, 0.3)",
          borderRadius: radiuses.cardSm,
          padding: inputPadding,
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            color: isPassword ? colors.white : "rgba(255, 255, 255, 0.2)",
            lineHeight: "24px",
          }}
        >
          {placeholder}
        </span>
        {isPassword && (
          <div
            className="absolute right-[17px] top-1/2 -translate-y-1/2"
            style={{ width: 22, height: 15 }}
          >
            <Image src="/section-1-workflows/icon-eye.svg" alt="Show password" fill className="object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}

function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[8.5px] w-full relative z-10">
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 12,
          color: "#adaaaa",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
          lineHeight: "16px",
        }}
      >
        {label}
      </span>
      <div
        style={{
          background: CARD_BG,
          border: "1px solid rgba(72, 72, 71, 0.3)",
          borderRadius: radiuses.cardSm,
          height: 50,
          display: "flex",
          alignItems: "center",
          position: "relative",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            color: colors.white,
            lineHeight: "24px",
          }}
        >
          {value}
        </span>
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          style={{ width: 24, height: 24 }}
        >
          <Image src="/section-1-workflows/icon-dropdown.svg" alt="Select" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}

function TemperatureSlider() {
  return (
    <div className="flex flex-col gap-4 w-full relative z-10">
      <div className="flex items-center justify-between w-full">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 12,
            color: "#adaaaa",
            textTransform: "uppercase",
            letterSpacing: "0.6px",
            lineHeight: "16px",
          }}
        >
          Creativity (Temp)
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 14,
            color: ACTIVE_NODE_COLOR,
            lineHeight: "20px",
          }}
        >
          0.7
        </span>
      </div>
      <div
        style={{
          background: CARD_BG,
          border: "1px solid rgba(72, 72, 71, 0.1)",
          borderRadius: radiuses.full,
          height: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #00e3fd 0%, #57bcff 100%)",
            position: "absolute",
            left: 1,
            top: 1,
            bottom: 1,
            width: "70%",
            borderRadius: radiuses.full,
          }}
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 10,
            color: "#777575",
            lineHeight: "15px",
          }}
        >
          PRECISE
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 10,
            color: "#777575",
            lineHeight: "15px",
          }}
        >
          BALANCED
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 10,
            color: "#777575",
            lineHeight: "15px",
          }}
        >
          CREATIVE
        </span>
      </div>
    </div>
  );
}

function ExecutionModeToggle() {
  return (
    <div
      className="flex items-center justify-between w-full relative z-10 pt-[17px]"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 14,
          color: "rgba(255, 255, 255, 0.6)",
          lineHeight: "20px",
        }}
      >
        Execution Mode
      </span>
      <div
        style={{
          background: CARD_BG,
          border: "1px solid rgba(72, 72, 71, 0.2)",
          borderRadius: radiuses.full,
          padding: 5,
          display: "flex",
          gap: 0,
        }}
      >
        <button
          style={{
            background: "#262626",
            borderRadius: radiuses.full,
            padding: "6px 16px",
            border: "none",
            color: colors.white,
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "16px",
            cursor: "pointer",
          }}
        >
          Precise
        </button>
        <button
          style={{
            background: "transparent",
            borderRadius: radiuses.full,
            padding: "6px 16px",
            border: "none",
            color: "rgba(255, 255, 255, 0.4)",
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "16px",
            cursor: "pointer",
          }}
        >
          Creative
        </button>
      </div>
    </div>
  );
}

function WorkflowCard() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-start gap-8"
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: "22.4px",
        padding: 32,
      }}
    >
      <div className="flex items-center justify-between w-full relative z-10">
        <div className="flex items-center gap-2">
          <div className="relative w-[20px] h-[16px]">
            <Image src="/section-1-workflows/icon-container.svg" alt="Container" fill className="object-contain" />
          </div>
          <span
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 20,
              color: colors.white,
              lineHeight: "28px",
            }}
          >
            Workflow Input
          </span>
        </div>
        <div
          style={{
            background: BADGE_BG,
            borderRadius: radiuses.tag,
            padding: "4px 8px",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 10,
              color: ACTIVE_NODE_COLOR,
              letterSpacing: "1px",
              textTransform: "uppercase",
              lineHeight: "15px",
            }}
          >
            ACTIVE NODE
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full relative z-10">
        <InputField label="Prompt Goal" placeholder="Type your workflow goal..." />
        <SelectField label="Select AI Agent" value="Content AI" />
                        <InputField
                          label="Integration Key"
                          placeholder="••••••••••••••••"
                          isPassword
                          inputPadding="12px 16px"
                        />
        <TemperatureSlider />
        <ExecutionModeToggle />
      </div>
    </div>
  );
}

function PartnerLogos() {
  return (
    <>
      <div className="absolute" style={{ left: 1208, top: 19, width: 50, height: 50 }}>
        <Image src="/section-1-workflows/logo-1.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute" style={{ left: -22, top: 31, width: 103, height: 28 }}>
        <Image src="/section-1-workflows/logo-2.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute" style={{ left: 132, top: 3, width: 134, height: 73 }}>
        <Image src="/section-1-workflows/logo-3.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute" style={{ left: 302, top: -16, width: 185, height: 123 }}>
        <Image src="/section-1-workflows/logo-anthropic.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute" style={{ left: 893, top: 9, width: 102, height: 72 }}>
        <Image src="/section-1-workflows/logo-5.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute" style={{ left: 561, top: 27, width: 90, height: 26 }}>
        <Image src="/section-1-workflows/logo-6.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute" style={{ left: 724, top: 36, width: 95, height: 19 }}>
        <Image src="/section-1-workflows/logo-7.png" alt="" fill className="object-contain" />
      </div>
      <div className="absolute" style={{ left: 1050, top: 24, width: 103, height: 42 }}>
        <Image src="/section-1-workflows/logo-8.png" alt="" fill className="object-contain" />
      </div>
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
        {/* Background Grid */}
        <div
          className="absolute"
          style={{
            left: -145,
            top: -163,
            width: 2400.91650390625,
            height: 1830,
          }}
        >
          <Image src="/section-1-workflows/bg-grid.png" alt="" fill className="object-cover" priority />
        </div>

        {/* Ellipses */}
        <div
          className="absolute"
          style={{ left: -19, top: -49, width: 1343, height: 211 }}
        >
          <Image src="/section-1-workflows/ellipse-1.png" alt="" fill className="object-cover" priority />
        </div>
        <div
          className="absolute"
          style={{ left: -98, top: -139, width: 163, height: 163 }}
        >
          <Image src="/section-1-workflows/ellipse-2.png" alt="" fill className="object-cover" priority />
        </div>
        <div
          className="absolute"
          style={{ left: 1252, top: -82, width: 163, height: 163 }}
        >
          <Image src="/section-1-workflows/ellipse-3.png" alt="" fill className="object-cover" priority />
        </div>

        {/* Main Content */}
        <RevealStagger>
          <Reveal>
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: 35,
                top: 109,
                width: 617,
                /* layout_Q8SY9J / effect_W0H6RI */
                gap: 10,
                padding: 10,
                background: "rgba(0, 0, 0, 0.69)",
                backdropFilter: "blur(150.6px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: HEADING_GLASS_R,
              }}
            >
              <SectionHeading fontSize={64} lineHeight="72px" />
            </div>
          </Reveal>

          <Reveal>
            <div
              className="absolute"
              style={{ left: 55, top: 294, width: 478, height: 84 }}
            >
              <SectionSubheading fontSize={20} lineHeight="28px" />
            </div>
          </Reveal>

          <Reveal>
            <div
              className="absolute"
              style={{ left: 313, top: 414, width: 478, height: 78 }}
            >
              <ExploreWorkflowsButton />
            </div>
          </Reveal>

          <Reveal>
            <div
              className="absolute"
              style={{ left: 47, top: 432, width: 253, height: 60 }}
            >
              <StartBuildingButton width="100%" />
            </div>
          </Reveal>
        </RevealStagger>

        {/* Workflow Input Card */}
        <Float>
          <div
            className="absolute"
            style={{
              left: 791,
              top: 76,
              width: 448,
              height: 582.5,
              padding: 4,
              borderRadius: radiuses.card,
            }}
          >
            <div
              className="absolute inset-[-0.5px]"
              style={{
                borderRadius: radiuses.card,
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            />
            <div
              className="absolute inset-[-0.5px] opacity-50"
              style={{
                background: CARD_OVERLAY,
                borderRadius: radiuses.card,
                filter: "blur(24px)",
              }}
            />
            <WorkflowCard />
          </div>
        </Float>

        {/* Figma ornament — IMAGE-SVG 507:5752 */}
        <div
          className="pointer-events-none absolute z-[5]"
          style={{ left: 637, top: 161, width: 173.88, height: 149.25 }}
        >
          <Image src="/section-1-workflows/hero-decoration.svg" alt="" fill className="object-contain" />
        </div>

        {/* Bottom Logo Bar */}
        <div
          className="absolute"
          style={{
            left: -4,
            top: 737,
            width: 1291,
            height: 89,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            background: colors.black,
            overflow: "hidden",
          }}
        >
          <PartnerLogos />
          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-[74px] z-10" style={{ background: "linear-gradient(90deg, #000 0%, transparent 100%)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-[76px] z-10" style={{ background: "linear-gradient(270deg, #000 0%, transparent 100%)" }} />
        </div>
        
        {/* Left Edge Fade for content above bar */}
        <div className="absolute left-0 top-[626px] w-[34px] h-[90px] z-10" style={{ background: "linear-gradient(90deg, #000 0%, transparent 100%)" }} />
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.black }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-50">
        <Image src="/section-1-workflows/bg-grid.png" alt="" fill className="object-cover" priority />
      </div>

      <div className="relative flex flex-col gap-10 px-6 py-20 z-10">
        <RevealStagger>
          <Reveal>
            <div
              style={{
                background: "rgba(0, 0, 0, 0.69)",
                backdropFilter: "blur(150.6px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: radiuses.cardSm,
                padding: "16px",
                display: "inline-block",
              }}
            >
              <SectionHeading fontSize="clamp(32px, 8vw, 48px)" lineHeight="1.1" />
            </div>
          </Reveal>

          <Reveal>
            <SectionSubheading fontSize="clamp(16px, 4vw, 18px)" lineHeight="1.5" />
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-4 mt-4 w-full">
              <StartBuildingButton width="100%" />
              <ExploreWorkflowsButton width="100%" />
            </div>
          </Reveal>
        </RevealStagger>

        {/* Workflow Input Card - Mobile */}
        <Reveal>
          <div
            className="w-full relative mt-8"
            style={{
              padding: 4,
              borderRadius: radiuses.card,
            }}
          >
            <div
              className="absolute inset-[-0.5px]"
              style={{
                borderRadius: radiuses.card,
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            />
            <div
              className="absolute inset-[-0.5px] opacity-50"
              style={{
                background: CARD_OVERLAY,
                borderRadius: radiuses.card,
                filter: "blur(24px)",
              }}
            />
            <WorkflowCard />
          </div>
        </Reveal>

        {/* Logos Marquee - Mobile */}
        <div className="relative w-full h-[80px] mt-8 overflow-hidden rounded-xl border border-white/20 bg-black">
          <div className="flex items-center h-full animate-marquee whitespace-nowrap gap-12 px-6">
            <div className="relative w-[134px] h-[73px] shrink-0">
               <Image src="/section-1-workflows/logo-3.png" alt="Partner" fill className="object-contain" />
            </div>
            <div className="relative w-[185px] h-[123px] shrink-0">
               <Image src="/section-1-workflows/logo-anthropic.png" alt="Partner" fill className="object-contain" />
            </div>
            <div className="relative w-[102px] h-[72px] shrink-0">
               <Image src="/section-1-workflows/logo-5.png" alt="Partner" fill className="object-contain" />
            </div>
            <div className="relative w-[90px] h-[26px] shrink-0">
               <Image src="/section-1-workflows/logo-6.png" alt="Partner" fill className="object-contain" />
            </div>
            <div className="relative w-[95px] h-[19px] shrink-0">
               <Image src="/section-1-workflows/logo-7.png" alt="Partner" fill className="object-contain" />
            </div>
            <div className="relative w-[103px] h-[42px] shrink-0">
               <Image src="/section-1-workflows/logo-8.png" alt="Partner" fill className="object-contain" />
            </div>
          </div>
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-black to-transparent" />
        </div>

      </div>
    </section>
  );
}
