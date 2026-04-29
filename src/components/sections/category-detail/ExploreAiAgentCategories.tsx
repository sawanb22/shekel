import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// ExploreAiAgentCategories.tsx  —  "Explore AI agent categories"
// Figma frame: 500:13085  "Frame 2147225665"
// Canvas: 1280 × 717 px   bg: #000000
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 717
//   Ellipse 1          (-19, -49)   1343×211  bg blur 1000px  gradient linear
//   Ellipse 2          (-98, -139)  163×163   bg blur 203.4px gradient linear
//   Ellipse 3          (1252, -82)  163×163   bg blur 214.7px gradient linear
//   Partner strip      (-4, 627)    1291×89   bg black border 1px rgba(255,255,255,0.2)
//   Partner overlay L  (0, 626)     34×90     bg linear gradient to right black
//   Partner overlay R  (1240, 0)    34×90     bg linear gradient to left black
//   Heading            (57, 116)    866x144   Plus Jakarta Sans Bold 72/83
//   Body               (64, 322)    498×65    Inter 400 20/32.5
//   Button             (57, 457)              bg #2F80ED, shadow, Inter 600 18/28
//   Graphic Group      (536, 34)    850.85×556.86
//   Bg Decoration      (607, 96)    599×599
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_LINEAR_BRAND = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const BORDER_WHITE_20 = "rgba(255, 255, 255, 0.2)";
const HEADING_GRADIENT = "linear-gradient(193deg, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)";
const BODY_COLOR = "rgba(255, 255, 255, 0.6)";
const BUTTON_BG = "#2F80ED";
const BUTTON_SHADOW = "0px 4px 6px -4px rgba(47, 128, 237, 0.2), 0px 10px 15px -3px rgba(47, 128, 237, 0.2)";

export default function ExploreAiAgentCategories() {
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
        {/* Glow Effects */}
        <div
          className="absolute"
          style={{
            left: -19,
            top: -49,
            width: 1343,
            height: 211,
            background: GRADIENT_LINEAR_BRAND,
            filter: "blur(1000px)",
            borderRadius: radiuses.full,
          }}
        />
        <div
          className="absolute"
          style={{
            left: -98,
            top: -139,
            width: 163,
            height: 163,
            background: GRADIENT_LINEAR_BRAND,
            filter: "blur(203.4px)",
            borderRadius: radiuses.full,
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1252,
            top: -82,
            width: 163,
            height: 163,
            background: GRADIENT_LINEAR_BRAND,
            filter: "blur(214.7px)",
            borderRadius: radiuses.full,
          }}
        />

        {/* Bg Decoration */}
        <Image
          src="/section-1-category-detail/bg-decoration.png"
          alt=""
          width={599}
          height={599}
          className="absolute object-cover"
          style={{ left: 607, top: 96 }}
        />

        {/* Graphic Group */}
        <div className="absolute" style={{ left: 536, top: 34, width: 850.85, height: 556.86 }}>
          <Image
            src="/section-1-category-detail/hero-vector.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Content Group */}
        <div className="absolute" style={{ left: 57, top: 116, width: 866 }}>
          <SectionHeading fontSize={72} lineHeight="83px" />
        </div>
        
        <div className="absolute" style={{ left: 64, top: 322, width: 498 }}>
          <SectionBody fontSize={20} lineHeight="32.5px" />
        </div>

        <div className="absolute" style={{ left: 57, top: 457 }}>
          <ExploreButton fontSize={18} lineHeight="28px" px={32} py={16} />
        </div>

        {/* Partner Strip */}
        <div
          className="absolute flex items-center justify-between"
          style={{
            left: -4,
            top: 627,
            width: 1291,
            height: 89,
            borderTop: `1px solid ${BORDER_WHITE_20}`,
            borderBottom: `1px solid ${BORDER_WHITE_20}`,
            backgroundColor: colors.black,
            overflow: "hidden",
          }}
        >
          {/* Fades */}
          <div
            className="absolute left-0 top-0 z-10 h-full w-[34px]"
            style={{
              background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 z-10 h-full w-[34px]"
            style={{
              background: "linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          {/* Logos */}
          <div className="flex w-full items-center justify-between px-16 relative z-0">
             <Image src="/section-1-category-detail/ellipse-2.png" alt="Partner" width={103} height={28} />
             <Image src="/section-1-category-detail/ellipse-3.png" alt="Partner" width={134} height={73} />
             <Image src="/section-1-category-detail/logo-anthropic.svg" alt="Anthropic" width={185} height={123} className="-mt-4" />
             <Image src="/section-1-category-detail/logo-meta.png" alt="Meta" width={102} height={72} />
             <Image src="/section-1-category-detail/logo-openai.png" alt="OpenAI" width={90} height={26} />
             <Image src="/section-1-category-detail/logo-google.png" alt="Google AI" width={95} height={19} />
             <Image src="/section-1-category-detail/logo-azure.png" alt="Azure" width={103} height={42} />
             <Image src="/section-1-category-detail/ellipse-1.png" alt="Partner" width={50} height={50} />
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
      style={{ backgroundColor: colors.black }}
    >
      {/* Background glow for mobile */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "150%",
          height: 200,
          background: GRADIENT_LINEAR_BRAND,
          filter: "blur(100px)",
          borderRadius: radiuses.full,
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 px-6 py-16 pb-8">
        <SectionHeading fontSize="clamp(40px, 10vw, 56px)" lineHeight="1.1" />
        <SectionBody fontSize="clamp(16px, 4vw, 20px)" lineHeight="1.6" />
        <div className="mt-2">
          <ExploreButton fontSize={16} lineHeight="24px" px={24} py={12} />
        </div>

        {/* Mobile Graphic */}
        <div className="relative mt-8 h-[300px] w-full">
           <Image
            src="/section-1-category-detail/bg-decoration.png"
            alt=""
            fill
            className="object-cover opacity-50"
          />
          <Image
            src="/section-1-category-detail/hero-vector.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Mobile Partner Strip (scrollable) */}
      <div
        className="relative flex h-[80px] w-full items-center overflow-x-auto whitespace-nowrap"
        style={{
          borderTop: `1px solid ${BORDER_WHITE_20}`,
          borderBottom: `1px solid ${BORDER_WHITE_20}`,
          backgroundColor: colors.black,
        }}
      >
        <div className="flex w-max items-center gap-12 px-6">
           <Image src="/section-1-category-detail/ellipse-2.png" alt="Partner" width={80} height={22} className="h-auto w-auto" />
           <Image src="/section-1-category-detail/ellipse-3.png" alt="Partner" width={100} height={55} className="h-auto w-auto" />
           <Image src="/section-1-category-detail/logo-anthropic.svg" alt="Anthropic" width={140} height={93} className="h-auto w-auto" />
           <Image src="/section-1-category-detail/logo-meta.png" alt="Meta" width={80} height={56} className="h-auto w-auto" />
           <Image src="/section-1-category-detail/logo-openai.png" alt="OpenAI" width={70} height={20} className="h-auto w-auto" />
           <Image src="/section-1-category-detail/logo-google.png" alt="Google AI" width={75} height={15} className="h-auto w-auto" />
           <Image src="/section-1-category-detail/logo-azure.png" alt="Azure" width={80} height={33} className="h-auto w-auto" />
           <Image src="/section-1-category-detail/ellipse-1.png" alt="Partner" width={40} height={40} className="h-auto w-auto" />
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
    <h1
      style={{
        margin: 0,
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize,
        lineHeight,
        letterSpacing: "-0.025em",
        background: HEADING_GRADIENT,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Explore AI agent{" "}
      <span
        style={{
          background: GRADIENT_LINEAR_BRAND,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        categories
      </span>
    </h1>
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
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: BODY_COLOR,
      }}
    >
      Browse different categories of AI agents and workflows designed to automate specific tasks within your organization.
    </p>
  );
}

function ExploreButton({
  fontSize,
  lineHeight,
  px,
  py,
}: {
  fontSize: number | string;
  lineHeight: string;
  px: number;
  py: number;
}) {
  return (
    <button
      className="group relative flex items-center justify-center gap-2 overflow-hidden transition-transform active:scale-95"
      style={{
        backgroundColor: BUTTON_BG,
        borderRadius: radiuses.inputIcon,
        padding: `${py}px ${px}px`,
        boxShadow: BUTTON_SHADOW,
        border: "none",
        cursor: "pointer",
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <span
        className="relative z-10"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize,
          lineHeight,
          color: colors.white,
        }}
      >
        Explore Agents
      </span>
      <Image
        src="/section-1-category-detail/hero-arrow.svg"
        alt=""
        width={12}
        height={12}
        className="relative z-10"
      />
    </button>
  );
}