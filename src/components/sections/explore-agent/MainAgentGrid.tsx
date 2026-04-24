import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// MainAgentGrid.tsx  —  "All Agents"
// Figma frame: 506:3812  "Section - Main Agent Grid"
// Canvas: 1280 × 1241 px   Page-y: ...   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Heading "All Agents" (0, 0)
//   Grid Container (0, 84) 1280 wide, flex wrap or grid
//     Card 1: DataHarvester AI
//     Card 2: LingoMaster
//     Card 3: SentinalShield
//     Card 4: InboxManager
//     Card 5: TrendForecaster
//     Card 6: LegalSummarizer
//     Card 7: DataHarvester AI (Duplicate layout item)
//     Card 8: LingoMaster (Duplicate layout item)
//   Load More Button (0, 1193)
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 1241;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const TEXT_DARK = "#191C1E";
const TEXT_MUTED = "#414753";
const TEXT_LIGHT_MUTED = "#94A3B8";
const CARD_BG = "#FFFFFF";
const CARD_BORDER = "#F8FAFC";
const CARD_SHADOW = "0px 1px 2px 0px rgba(0, 0, 0, 0.05)";
const ICON_BG = "#ECEEF1";
const BADGE_TEXT = "#000000";
const BTN_DETAILS_BG = "#F2F4F7";

const AGENTS = [
  {
    title: "DataHarvester AI",
    desc: "Autonomous web scraping agent\nthat cleans and formats data for…",
    rating: "4.9",
    runs: "4.2k runs",
    price: "Free to start",
    icon: "icon-data-harvester.svg",
  },
  {
    title: "LingoMaster",
    desc: "Context-aware translation agent\nsupporting over 95 languages wi…",
    rating: "4.7",
    runs: "12k runs",
    price: "$0.05/run",
    icon: "icon-lingo-master.svg",
  },
  {
    title: "SentinalShield",
    desc: "Monitors infrastructure logs for\nanomalous patterns and active…",
    rating: "5.0",
    runs: "1.8k runs",
    price: "Enterprise",
    icon: "icon-sentinal-shield.svg",
  },
  {
    title: "InboxManager",
    desc: "Sorts, prioritizes, and drafts\nreplies for high-volume support…",
    rating: "4.5",
    runs: "6.7k runs",
    price: "Free Tier",
    icon: "icon-inbox-manager.svg",
  },
  {
    title: "TrendForecaster",
    desc: "Predicts consumer market trends\nusing multi-source social listenin…",
    rating: "4.8",
    runs: "8.9k runs",
    price: "$29/mo",
    icon: "icon-trend-forecaster.svg",
  },
  {
    title: "LegalSummarizer",
    desc: "Extracts key clauses and risks\nfrom 50+ page legal documents …",
    rating: "4.6",
    runs: "2.1k runs",
    price: "$1.50/doc",
    icon: "icon-legal-summarizer.svg",
  },
  {
    title: "DataHarvester AI",
    desc: "Autonomous web scraping agent\nthat cleans and formats data for…",
    rating: "4.9",
    runs: "4.2k runs",
    price: "Free to start",
    icon: "icon-data-harvester.svg",
  },
  {
    title: "LingoMaster",
    desc: "Context-aware translation agent\nsupporting over 95 languages wi…",
    rating: "4.7",
    runs: "12k runs",
    price: "$0.05/run",
    icon: "icon-lingo-master.svg",
  },
];

export default function MainAgentGrid() {
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
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          left: "50%",
          marginLeft: `calc(-${CANVAS_W}px / 2)`,
          padding: "0 32px",
        }}
      >
        <div className="absolute" style={{ left: 32, top: 0 }}>
          <SectionHeading fontSize={30} lineHeight="36px" />
        </div>

        <div
          className="absolute grid"
          style={{
            left: 32,
            top: 84,
            width: 1216, // 1280 - 64 padding
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {AGENTS.map((agent, index) => (
            <AgentCard key={`${agent.title}-${index}`} agent={agent} />
          ))}
        </div>

        <div className="absolute flex items-center justify-center w-full" style={{ left: 0, top: 1193 }}>
          <button
            className="flex items-center justify-center"
            style={{
              background: BUTTON_GRADIENT,
              borderRadius: 16,
              padding: "16px 40px",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "24px",
                color: colors.white,
              }}
            >
              Load more agents
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section className="relative block w-full overflow-hidden md:hidden">
      <div className="flex flex-col gap-8 px-6 py-12">
        <SectionHeading fontSize="clamp(24px, 6vw, 30px)" lineHeight="1.2" />

        <div className="flex flex-col gap-4">
          {AGENTS.map((agent, index) => (
            <AgentCard key={`mobile-${agent.title}-${index}`} agent={agent} mobile />
          ))}
        </div>

        <div className="flex w-full items-center justify-center pt-4">
          <button
            className="flex items-center justify-center w-full"
            style={{
              background: BUTTON_GRADIENT,
              borderRadius: 16,
              padding: "16px",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "24px",
                color: colors.white,
              }}
            >
              Load more agents
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function SectionHeading({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <h2
      className="m-0"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize,
        lineHeight,
        letterSpacing: "-0.025em",
        color: TEXT_DARK,
      }}
    >
      All Agents
    </h2>
  );
}

function AgentCard({ agent, mobile = false }: { agent: any; mobile?: boolean }) {
  return (
    <div
      className="flex flex-col relative"
      style={{
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 24,
        padding: 24,
        boxShadow: CARD_SHADOW,
        gap: 24,
        width: mobile ? "100%" : 280,
      }}
    >
      <div className="flex flex-row items-center gap-4 w-full">
        <div
          className="flex items-center justify-center"
          style={{ width: 56, height: 56, background: ICON_BG, borderRadius: 16 }}
        >
          <Image src={`/section-5-explore-agent/${agent.icon}`} alt="" width={18} height={18} />
        </div>
        <div className="flex flex-col gap-1">
          <h4
            className="m-0"
            style={{
              fontFamily: typography.fonts.jakarta,
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "28px",
              color: colors.black,
            }}
          >
            {agent.title}
          </h4>
          <div className="flex flex-row items-center gap-1">
            <Image src="/section-5-explore-agent/icon-star.svg" alt="" width={11.67} height={11} />
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 12,
                lineHeight: "16px",
                color: BADGE_TEXT,
              }}
            >
              {agent.rating}
            </span>
          </div>
        </div>
      </div>

      <p
        className="m-0 whitespace-pre-line"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: TEXT_MUTED,
          minHeight: mobile ? "auto" : 40,
        }}
      >
        {agent.desc.replace(/\\n/g, '\n')}
      </p>

      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center gap-1">
          <Image src="/section-5-explore-agent/icon-runs.svg" alt="" width={16} height={16} />
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "16px",
              color: TEXT_DARK,
            }}
          >
            {agent.runs}
          </span>
        </div>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "16px",
            color: colors.black,
          }}
        >
          {agent.price}
        </span>
      </div>

      <div className="flex flex-row gap-2 mt-auto">
        <button
          className="flex-1 flex justify-center items-center"
          style={{ background: "#005AB6", borderRadius: 12, padding: "12px" }}
        >
          <span style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 14, color: colors.white }}>Run Agent</span>
        </button>
        <button
          className="flex-1 flex justify-center items-center"
          style={{ background: BTN_DETAILS_BG, borderRadius: 12, padding: "12px" }}
        >
          <span style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 14, color: colors.black }}>Details</span>
        </button>
      </div>
    </div>
  );
}