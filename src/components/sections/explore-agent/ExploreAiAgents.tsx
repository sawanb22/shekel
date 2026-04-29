import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// ExploreAiAgents.tsx  —  "Explore Ai Agents."
// Figma frame: 506:3493  "Frame 2147225685"
// Canvas: 1280 × 718 px   Page-y: -19   bg: #000000
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Main Content Canvas (x=10, y=-19) 1280×... SVG
//   Hero Content Section (x=10, y=109) 1231×...
//     Textual Hook (x=32, y=69.88)
//       Heading 1 "Explore Ai Agents." (Plus Jakarta Sans 800 72/69, #FFFFFF, "Agents" has gradient #2864E4 to #ECF2FF)
//       Text "Deploy hyper-specialized AI entities..." (Inter 400 18/29.25, #94A3B8)
//       Buttons
//         Launch Marketplace (bg gradient #2864E4 to #ECF2FF, Plus Jakarta Sans 700 16/24, #FFFFFF)
//         View Documentation (bg rgba(255,255,255,0.05), border rgba(255,255,255,0.1), Plus Jakarta Sans 700 16/24, #FFFFFF)
//     Visual Component (x=647.5, y=1.88)
//       Card 1 (Social Media Automation) (x=-4.97, y=-6.57) 265.96×...
//       Card 2 (Agent Performance) (x=200, y=48) 384×...
//       Card 3 (Supported Integrations) (x=115.04, y=384.22) 321.92×...
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 718;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const BUTTON_BG_SECONDARY = "rgba(255, 255, 255, 0.05)";
const BUTTON_BORDER_SECONDARY = "rgba(255, 255, 255, 0.1)";
const CARD_BG = "rgba(25, 28, 30, 0.4)";
const CARD_BORDER = "rgba(193, 198, 213, 0.1)";
const CARD_BORDER_ACTIVE = "rgba(255, 255, 255, 0.1)";
const TEXT_MUTED = "#94A3B8";
const TEXT_MUTED_ALT = "#64748B";
const BADGE_BG = "rgba(16, 185, 129, 0.1)";
const BADGE_TEXT = "#34D399";
const METRIC_BG = "rgba(255, 255, 255, 0.05)";

export default function ExploreAiAgents() {
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
        <Image
          src="/section-1-explore-agent/main-content-canvas.svg"
          alt=""
          width={1280}
          height={718}
          className="absolute"
          style={{ left: 10, top: -19 }}
        />

        <div
          className="absolute"
          style={{ left: 10, top: 109, width: 1231, height: 500 }}
        >
          {/* Textual Hook */}
          <div className="absolute flex flex-col" style={{ left: 32, top: 69.88, width: 512, gap: 32 }}>
            <SectionHeading fontSize={72} lineHeight="69px" />
            <SectionBody fontSize={18} lineHeight="29.25px" />
            <div className="flex flex-row gap-4 pt-4">
              <PrimaryButton />
              <SecondaryButton />
            </div>
          </div>

          {/* Visual Component */}
          <div className="absolute" style={{ left: 647.5, top: 1.88, width: 500, height: 500 }}>
            <Card1 />
            <Card2 />
            <Card3 />
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
      <div className="flex flex-col gap-8 px-6 py-16 relative z-10">
        <SectionHeading fontSize="clamp(40px, 10vw, 56px)" lineHeight="1.1" />
        <SectionBody fontSize="clamp(16px, 4vw, 18px)" lineHeight="1.6" />
        
        <div className="flex flex-col gap-4">
          <PrimaryButton fullWidth />
          <SecondaryButton fullWidth />
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col w-full">
            <Card2 mobile />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card1 mobile />
            <Card3 mobile />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function SectionHeading({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <h1
      className="m-0"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 800,
        fontSize,
        lineHeight,
        letterSpacing: "-0.05em",
        color: colors.white,
      }}
    >
      Explore Ai <br />
      <span
        style={{
          background: BUTTON_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Agents
      </span>
      .
    </h1>
  );
}

function SectionBody({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <p
      className="m-0"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: TEXT_MUTED,
      }}
    >
      Deploy hyper-specialized AI entities designed to architect your digital ecosystem. From automated workflows to deep predictive analytics.
    </p>
  );
}

function PrimaryButton({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <button
      className={`flex items-center justify-center gap-3 relative ${fullWidth ? "w-full" : ""}`}
      style={{
        background: BUTTON_GRADIENT,
        borderRadius: 12,
        padding: "16.5px 32px 17px",
        boxShadow: "0px 25px 50px -12px rgba(0, 90, 182, 0.3)",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.white,
        }}
      >
        Launch Marketplace
      </span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.91699 7H11.0837M11.0837 7L6.91699 2.91667M11.0837 7L6.91699 11.0833" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function SecondaryButton({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <button
      className={`flex items-center justify-center ${fullWidth ? "w-full" : ""}`}
      style={{
        background: BUTTON_BG_SECONDARY,
        border: `1px solid ${BUTTON_BORDER_SECONDARY}`,
        borderRadius: 12,
        padding: "16px 32px",
        backdropFilter: "blur(12px)",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.white,
        }}
      >
        View Documentation
      </span>
    </button>
  );
}

function Card1({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`${mobile ? "w-full" : "absolute"} flex flex-col gap-2`}
      style={{
        ...(mobile
          ? {}
          : {
              left: -10,
              top: -18,
              width: 265.96,
              zIndex: 4,
              transform: "rotate(-5deg)",
              transformOrigin: "top left",
            }),
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 20,
        padding: 24,
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Image src="/section-1-explore-agent/card-1-overlay.svg" alt="" width={42} height={42} />
      <h3
        className="m-0 pt-2"
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.white,
        }}
      >
        Social Media Automation
      </h3>
      <p
        className="m-0"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "19.5px",
          color: TEXT_MUTED,
        }}
      >
        Generate and schedule content{mobile ? " " : <br />}across platforms automatically with{mobile ? " " : <br />}adaptive tonal learning.
      </p>
    </div>
  );
}

function Card2({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`${mobile ? "w-full" : "absolute"} flex flex-col gap-8`}
      style={{
        ...(mobile ? {} : { left: 200, top: 48, width: 384, zIndex: 3 }),
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER_ACTIVE}`,
        borderRadius: 24,
        padding: "32px 32px 10.5px",
        boxShadow: "0px 32px 64px 0px rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <h3
            className="m-0"
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 20,
              lineHeight: "28px",
              color: colors.white,
            }}
          >
            Agent Performance
          </h3>
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: TEXT_MUTED_ALT,
            }}
          >
            Real-time optimization
          </p>
        </div>
        <div
          className="flex items-center justify-center h-fit"
          style={{ background: BADGE_BG, borderRadius: 4, padding: "4px 8px" }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 700,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: BADGE_TEXT,
            }}
          >
            ACTIVE
          </span>
        </div>
      </div>

      <div className="flex flex-row w-full gap-4">
        <div
          className={`flex flex-col gap-1 w-full`}
          style={{ background: METRIC_BG, borderRadius: 12, padding: 16 }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: TEXT_MUTED_ALT,
            }}
          >
            RUNS
          </span>
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "32px",
              letterSpacing: "-0.025em",
              color: colors.white,
            }}
          >
            12.4K
          </span>
        </div>
        <div
          className={`flex flex-col gap-1 w-full`}
          style={{ background: METRIC_BG, borderRadius: 12, padding: 16 }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: TEXT_MUTED_ALT,
            }}
          >
            RATING
          </span>
          <div className="flex flex-row items-center gap-1">
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "32px",
                letterSpacing: "-0.025em",
                color: colors.white,
              }}
            >
              4.8
            </span>
            <Image src="/section-1-explore-agent/rating-star.svg" alt="" width={12} height={12} />
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-2 w-full mt-2 ${mobile ? "" : "h-[149.5px]"}`}>
        <Image src="/section-1-explore-agent/line-chart.svg" alt="" width={318} height={128} className={mobile ? "w-full h-auto" : "w-full"} />
        <div className="flex flex-row justify-between w-full pr-1">
          {["JAN", "MAR", "MAY", "JUL"].map((month) => (
            <span
              key={month}
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 700,
                fontSize: 9,
                lineHeight: "13.5px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: TEXT_MUTED_ALT,
              }}
            >
              {month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card3({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`${mobile ? "w-full" : "absolute"} flex flex-col gap-4 items-center justify-center text-center`}
      style={{
        ...(mobile
          ? {}
          : {
              left: 104,
              top: 350,
              width: 321.92,
              zIndex: 4,
              transform: "rotate(-2deg)",
              transformOrigin: "top left",
            }),
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 20,
        padding: 24,
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(16px)",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 700,
          fontSize: 10,
          lineHeight: "15px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: TEXT_MUTED_ALT,
        }}
      >
        SUPPORTED INTEGRATIONS
      </span>
      <Image src="/section-1-explore-agent/card-3-overlay.svg" alt="" width={306} height={41} className={`w-full ${mobile ? "max-w-[240px] h-auto" : ""}`} />
    </div>
  );
}