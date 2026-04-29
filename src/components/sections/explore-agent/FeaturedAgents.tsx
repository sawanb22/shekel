import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// FeaturedAgents.tsx  —  "Featured Intelligence"
// Figma frame: 506:3583  "Group 2085662771"
// Canvas: 1216 × 1241 px   Page-y: 0   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1216px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Section 2 & 3: Sticky Navigation (x=0, y=0) 1216×...
//     Tabs Row + Filters Row
//   Section 4: Featured Agents (x=0, y=823) 1216×...
//     Header "Featured Intelligence" + "View Spotlight" button
//     3 Featured Cards (x=0, y=...) 1248 wide flex row
//       Card 1 "Lexis Legal Draftsman"
//       Card 2 "GrowthEngine Strategist"
//       Card 3 "FinScale Optimizer"
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1216;
const CANVAS_H = 1328;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const SECTION_INSET = 32;
const SECTION_CONTENT_W = CANVAS_W - SECTION_INSET * 2;
const FEATURED_INTELLIGENCE_ROW_H = 410;
const FEATURED_INTELLIGENCE_CARD_H = 354;

const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const TEXT_DARK = "#191C1E";
const TEXT_MUTED = "#414753";
const CARD_BG_LIGHT = "#F8F6F6";
const NAV_BG = "rgba(255, 255, 255, 0.8)";
const NAV_BORDER = "rgba(193, 198, 213, 0.15)";
const SEARCH_BG = "#F2F4F7";
const OVERLAY_BLACK = "rgba(0, 0, 0, 0.2)";
const OVERLAY_BLUE = "rgba(0, 90, 182, 0.1)";
const CARD_BLUR = "rgba(0, 92, 114, 0.1)";

export default function FeaturedAgents() {
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
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        marginTop: 48,
        background: "#F2F4F7",
      }}
    >
      <div
        className="absolute top-0"
        style={{
          left: "50%",
          marginLeft: `calc(-${CANVAS_W}px / 2)`,
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top center",
        }}
      >
        {/* Sticky Navigation & Search */}
        <div
          className="absolute flex flex-col gap-4"
          style={{
            left: 0,
            top: 0,
            width: 1216,
            background: NAV_BG,
            borderRadius: 16,
            padding: 16,
            boxShadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.06)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="flex flex-row items-center gap-2 pb-4"
            style={{ borderBottom: `1px solid ${NAV_BORDER}` }}
          >
            <div style={{ background: BUTTON_GRADIENT, borderRadius: 9999, padding: "8px 20px" }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 14, color: colors.white }}>All Agents</span>
            </div>
            {["Marketing", "Design", "Development", "Finance", "Legal", "Automation"].map((tab) => (
              <div key={tab} style={{ padding: "8px 20px" }}>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 14, color: TEXT_MUTED }}>{tab}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-3">
            <div className="flex-1 relative" style={{ background: SEARCH_BG, borderRadius: 12 }}>
              <Image src="/section-2-explore-agent/search-icon.svg" alt="" width={18} height={18} className="absolute" style={{ left: 19, top: 13 }} />
              <input
                type="text"
                placeholder="Search specialized agents..."
                className="w-full bg-transparent outline-none"
                style={{
                  padding: "13px 16px 14px 48px",
                  fontFamily: typography.fonts.inter,
                  fontSize: 14,
                  color: "#727785",
                }}
              />
            </div>
            <div className="flex flex-row gap-3">
              <FilterDropdown icon="pricing" label="Pricing: All" width={104} />
              <FilterDropdown icon="rating" label="Rating: 4.5+" width={113} />
              <FilterDropdown icon="sort" label="Sort: Most Popular" width={157} />
            </div>
          </div>
        </div>

        {/* Featured Agents Section (Bento) */}
        <div
          className="absolute flex flex-col"
          style={{ left: SECTION_INSET, top: 193, width: SECTION_CONTENT_W, gap: 20 }}
        >
          <div className="flex flex-col gap-5">
            <SectionHeadingFeaturedAgents fontSize={48} lineHeight="36px" />
            <p
              className="m-0"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: TEXT_MUTED,
              }}
            >
              Staff-picked specialists for elite enterprise outcomes.
            </p>
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-8" style={{ height: 374 }}>
            <BentoPrimaryCard />
            <BentoSecondaryCard />
          </div>
        </div>

        {/* Featured Intelligence Section */}
        <div
          className="absolute relative flex flex-col items-center"
          style={{ left: SECTION_INSET, top: 823, width: SECTION_CONTENT_W, gap: 32 }}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <SectionHeadingFeaturedIntelligence fontSize={48} lineHeight="32px" />
            <div className="flex flex-row items-center gap-1 cursor-pointer">
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  color: colors.black,
                }}
              >
                View Spotlight
              </span>
              <Image src="/section-2-explore-agent/view-spotlight-arrow.svg" alt="" width={9} height={9} />
            </div>
          </div>

          <div
            className="absolute flex flex-row items-stretch"
            style={{
              left: 0,
              top: 64,
              width: SECTION_CONTENT_W,
              height: FEATURED_INTELLIGENCE_ROW_H,
              paddingLeft: 0,
              paddingRight: 0,
              paddingBottom: 24,
              gap: 24,
            }}
          >
            <Card
              title="Lexis Legal\nDraftsman"
              desc="Autonomous legal analysis and\ncontract synthesis with 99%\nprecision."
              badge="Trending"
              badgeBg={OVERLAY_BLACK}
              badgeText={colors.white}
              bg={CARD_BG_LIGHT}
              btnBg={colors.white}
              btnText={colors.black}
            />
            <Card
              title="GrowthEngine\nStrategist"
              desc="Real-time market sentiment analysis\nand automated ad generation."
              badge="New"
              badgeBg="rgba(0, 0, 0, 0.05)"
              badgeText={colors.black}
              bg={colors.white}
              btnBg={BUTTON_GRADIENT}
              btnText={colors.white}
              hasBlur
              blurBg={CARD_BLUR}
            />
            <Card
              title="FinScale\nOptimizer"
              desc="Recursive budget optimization and\npredictive revenue modeling."
              badge="Power User"
              badgeBg={OVERLAY_BLUE}
              badgeText="#005AB6"
              bg={CARD_BG_LIGHT}
              btnBg={colors.white}
              btnText={colors.black}
              hasBlur
              blurBg="rgba(0, 90, 182, 0.05)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section className="relative block w-full md:hidden">
      <div className="flex flex-col gap-8 px-6 py-16">
        {/* Navigation & Search Mobile */}
        <div
          className="flex flex-col gap-4 w-full"
          style={{
            background: NAV_BG,
            borderRadius: 16,
            padding: 16,
            boxShadow: "0px 20px 50px 0px rgba(0, 0, 0, 0.06)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex flex-row items-center gap-2 pb-4 overflow-x-auto no-scrollbar" style={{ borderBottom: `1px solid ${NAV_BORDER}` }}>
            <div className="flex-shrink-0" style={{ background: BUTTON_GRADIENT, borderRadius: 9999, padding: "8px 20px" }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 14, color: colors.white }}>All Agents</span>
            </div>
            {["Marketing", "Design", "Development", "Finance", "Legal", "Automation"].map((tab) => (
              <div key={tab} className="flex-shrink-0" style={{ padding: "8px 20px" }}>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 500, fontSize: 14, color: TEXT_MUTED }}>{tab}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="w-full relative" style={{ background: SEARCH_BG, borderRadius: 12 }}>
              <Image src="/section-2-explore-agent/search-icon.svg" alt="" width={18} height={18} className="absolute" style={{ left: 16, top: 13 }} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none"
                style={{ padding: "13px 16px 14px 44px", fontFamily: typography.fonts.inter, fontSize: 14, color: "#727785" }}
              />
            </div>
            <div className="flex flex-row overflow-x-auto gap-3 no-scrollbar pb-1">
              <FilterDropdown icon="pricing" label="Pricing" width={104} />
              <FilterDropdown icon="rating" label="Rating" width={113} />
              <FilterDropdown icon="sort" label="Sort" width={120} />
            </div>
          </div>
        </div>

        {/* Featured Agents Mobile */}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-4">
            <SectionHeadingFeaturedAgents fontSize="clamp(40px, 9vw, 48px)" lineHeight="1.1" />
            <p
              className="m-0"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: TEXT_MUTED,
              }}
            >
              Staff-picked specialists for elite enterprise outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <BentoPrimaryCard mobile />
            <BentoSecondaryCard mobile />
          </div>

          <div className="flex flex-row justify-between items-center w-full mt-6">
            <SectionHeadingFeaturedIntelligence fontSize="clamp(28px, 6vw, 40px)" lineHeight="1.2" />
          </div>

          <div className="flex flex-col gap-6">
            <Card
              title="Lexis Legal\nDraftsman"
              desc="Autonomous legal analysis and contract synthesis with 99% precision."
              badge="Trending"
              badgeBg={OVERLAY_BLACK}
              bg={CARD_BG_LIGHT}
              btnBg={colors.white}
              btnText={colors.black}
              mobile
            />
            <Card
              title="GrowthEngine\nStrategist"
              desc="Real-time market sentiment analysis and automated ad generation."
              badge="New"
              badgeBg="rgba(0, 0, 0, 0.05)"
              bg={colors.white}
              btnBg={BUTTON_GRADIENT}
              btnText={colors.white}
              mobile
            />
            <Card
              title="FinScale\nOptimizer"
              desc="Recursive budget optimization and predictive revenue modeling."
              badge="Power User"
              badgeBg={OVERLAY_BLUE}
              badgeText="#005AB6"
              bg={CARD_BG_LIGHT}
              btnBg={colors.white}
              btnText={colors.black}
              mobile
            />
          </div>
          
          <div className="flex flex-row items-center justify-center gap-1 mt-4">
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, color: colors.black }}>View Spotlight</span>
            <Image src="/section-2-explore-agent/view-spotlight-arrow.svg" alt="" width={9} height={9} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function SectionHeadingFeaturedAgents({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <h2
      className="m-0"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        letterSpacing: "-0.0125em",
        color: TEXT_DARK,
      }}
    >
      Featured Agents
    </h2>
  );
}

function SectionHeadingFeaturedIntelligence({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <h2
      className="m-0"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        letterSpacing: "-0.0125em",
        color: TEXT_DARK,
      }}
    >
      Featured Intelligence
    </h2>
  );
}

function BentoPrimaryCard({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: BUTTON_GRADIENT,
        borderRadius: 24,
        padding: mobile ? 28 : 40,
        minHeight: mobile ? 340 : 374,
      }}
    >
      <Image
        src="/section-2-explore-agent/ghostwriter-card-icon.svg"
        alt=""
        width={250}
        height={200}
        className="absolute"
        style={{ right: -25, bottom: 0 }}
      />

      <div className="relative z-10 flex h-full max-w-[448px] flex-col items-start gap-4">
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: 9999,
            padding: "4px 16px",
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 12,
              lineHeight: "16px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.white,
            }}
          >
            Premium Choice
          </span>
        </div>

        <h3
          className="m-0"
          style={{
            fontFamily: typography.fonts.jakarta,
            fontWeight: 800,
            fontSize: mobile ? "clamp(34px, 8vw, 44px)" : 36,
            lineHeight: mobile ? "1.1" : "45px",
            color: colors.white,
          }}
        >
          Social Media Ghostwriter
          <br />
          v4
        </h3>

        <p
          className="m-0 pb-4"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "28px",
            color: "#D7E3FF",
            opacity: 0.9,
          }}
        >
          An advanced agent that mimics your brand voice
          <br />
          across 6 platforms simultaneously.
        </p>

        <button
          className="mt-auto"
          style={{
            borderRadius: 9999,
            background: colors.white,
            border: "none",
            padding: "16px 32px",
            boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: "#005AB6",
            }}
          >
            Run Enterprise Agent
          </span>
        </button>
      </div>
    </div>
  );
}

function BentoSecondaryCard({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        background: "#E0E3E6",
        borderRadius: 24,
        padding: mobile ? 24 : 32,
        minHeight: mobile ? 300 : 374,
      }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: mobile ? 14 : 10.8,
          paddingBottom: mobile ? 16 : 24,
        }}
      >
        <div
          className="flex h-14 w-14 items-center justify-center"
          style={{
            borderRadius: 16,
            background: colors.white,
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Image src="/section-2-explore-agent/right-card-legal-icon.svg" alt="" width={18} height={19} />
        </div>

        <div className="flex flex-col" style={{ paddingTop: mobile ? 8 : 13.2, gap: 12 }}>
          <h3
            className="m-0"
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: mobile ? "clamp(28px, 6vw, 32px)" : 24,
              lineHeight: mobile ? "1.2" : "32px",
              color: TEXT_DARK,
            }}
          >
            Legal Scan Pro
          </h3>
          <p
            className="m-0 whitespace-pre-line"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "22.75px",
              color: TEXT_MUTED,
            }}
          >
            Instantly identifies liability risks in
            {"\n"}
            terms of service and commercial
            {"\n"}
            contracts.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "#005AB6",
          }}
        >
          Explore Agent
        </span>
        <Image src="/section-2-explore-agent/right-card-explore-arrow.svg" alt="" width={16} height={16} />
      </div>
    </div>
  );
}

function FilterDropdown({ icon, label, width }: { icon: string; label: string; width: number }) {
  return (
    <div
      className="flex flex-row items-center flex-shrink-0"
      style={{
        background: SEARCH_BG,
        borderRadius: 12,
        padding: "11.5px 16px",
        height: 44,
      }}
    >
      <Image src={`/section-2-explore-agent/filter-${icon}-icon.svg`} alt="" width={21} height={21} />
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: TEXT_MUTED,
          marginLeft: 8,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Card({
  title,
  desc,
  badge,
  badgeBg,
  badgeText = colors.black,
  bg,
  btnBg,
  btnText,
  hasBlur = false,
  blurBg = "",
  mobile = false,
}: {
  title: string;
  desc: string;
  badge: string;
  badgeBg: string;
  badgeText?: string;
  bg: string;
  btnBg: string;
  btnText: string;
  hasBlur?: boolean;
  blurBg?: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`flex flex-col relative ${mobile ? "w-full" : "flex-1"}`}
      style={{
        background: bg,
        borderRadius: 16,
        padding: 32,
        boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        ...(mobile ? {} : { height: FEATURED_INTELLIGENCE_CARD_H }),
      }}
    >
      {hasBlur && (
        <div
          className="absolute"
          style={{
            left: mobile ? "auto" : undefined,
            right: mobile ? -50 : -48,
            top: mobile ? 50 : undefined,
            bottom: mobile ? undefined : -48,
            width: 256,
            height: 256,
            background: blurBg,
            filter: "blur(64px)",
            borderRadius: 9999,
          }}
        />
      )}
      
      <div className="relative z-10 flex flex-col items-start h-full w-full">
        <div
          style={{
            background: badgeBg,
            backdropFilter: "blur(4px)",
            borderRadius: 9999,
            padding: "4px 12px",
            marginBottom: mobile ? 24 : 46.25,
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 700,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: badgeText,
            }}
          >
            {badge}
          </span>
        </div>
        
        <h3
          className="m-0 whitespace-pre-line"
          style={{
            fontFamily: typography.fonts.jakarta,
            fontWeight: 700,
            fontSize: mobile ? "clamp(20px, 5vw, 24px)" : 30,
            lineHeight: mobile ? 1.3 : "37.5px",
            color: colors.black,
            marginBottom: mobile ? 16 : 12,
            minHeight: mobile ? undefined : 75,
          }}
        >
          {title.replace(/\\n/g, '\n')}
        </h3>
        
        <p
          className="m-0 whitespace-pre-line pt-[12px]"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: hasBlur ? "rgba(0, 92, 114, 0.8)" : "rgba(0, 0, 0, 0.8)",
            marginBottom: mobile ? 32 : 32.5,
            minHeight: mobile ? undefined : 60,
          }}
        >
          {desc.replace(/\\n/g, '\n')}
        </p>
        
        <button
        className={`flex flex-row items-center justify-center mt-auto ${mobile ? "w-full" : ""}`}
          style={{
            background: btnBg,
            borderRadius: 9999,
            padding: "10px 24px",
            boxShadow: "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: btnText,
            }}
          >
            Launch Agent
          </span>
        </button>
      </div>
    </div>
  );
}