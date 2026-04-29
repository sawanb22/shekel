"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// Figma: 506:4233  Frame 2147225686
// Canvas: 1280 × 1077  bg: #f6f6f6

const CANVAS_W = 1280;
const CANVAS_H = 1077;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const PAGE_BG = "#f6f6f6";
const PANEL = "#f2f4f7";
const MUTED_400 = colors.text.body;
const INPUT_PLACEHOLDER = "#c1c6d5";
const TAB_MUTED = "#eceef1";
const BUTTON_TR = "#e6e8eb";
const LOAD_MORE_BG = "#e4e7eb";
const GRAD = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;
const TABS = [
  { id: "all", label: "All Agents", active: true },
  { id: "sm", label: "Social Media", active: false },
  { id: "ads", label: "Ads", active: false },
  { id: "seo", label: "SEO", active: false },
  { id: "em", label: "Email", active: false },
  { id: "an", label: "Analytics", active: false },
];

const AGENTS: {
  title: string;
  body: [string, string];
  rating: string;
  runs: string;
  price: string;
  priceGradient?: boolean;
  icon: string;
  iconBg: string;
}[] = [
  { title: "ViralGenie AI", body: ["Generates trend-aligned social", "media hooks and scripts optimiz…"], rating: "4.9", runs: "1.2k runs", price: "Free", priceGradient: true, icon: "card-icon-1.svg", iconBg: "#d7e3ff" },
  { title: "AdCopy Pro", body: ["High-converting ad copy for", "Facebook, Google, and LinkedIn…"], rating: "4.7", runs: "850 runs", price: "$12/mo", icon: "card-icon-2.svg", iconBg: "#b7eaff" },
  { title: "SEO Keyword Architect", body: ["Deep semantic keyword research", "and content clustering for organi…"], rating: "4.8", runs: "3.4k runs", price: "Free", priceGradient: true, icon: "card-icon-3.svg", iconBg: "#d7e3ff" },
  { title: "SmartMail Sequence", body: ["Automates personalized cold", "outreach and follow-up sequenc…"], rating: "4.6", runs: "920 runs", price: "$29/mo", icon: "card-icon-4.svg", iconBg: "#d7e3ff" },
  { title: "Insight Analytica", body: ["Transforms raw GA4 data into", "actionable executive summaries i…"], rating: "4.9", runs: "540 runs", price: "Free", priceGradient: true, icon: "card-icon-5.svg", iconBg: "#b7eaff" },
  { title: "Brand Storyteller", body: ["Crafts a cohesive brand voice", "across all digital channels using…"], rating: "4.7", runs: "2.1k runs", price: "$15/mo", icon: "card-icon-6.svg", iconBg: "#d7e3ff" },
  { title: "Reddit Rapport", body: ["Finds relevant Reddit threads and", "suggests authentic ways to…"], rating: "4.5", runs: "1.1k runs", price: "Free", priceGradient: true, icon: "card-icon-7.svg", iconBg: "#d7e3ff" },
  { title: "Shorts Master", body: ["Extracts viral short-form clips from", "long videos with auto-captions…"], rating: "4.8", runs: "4.2k runs", price: "$49/mo", icon: "card-icon-8.svg", iconBg: "#e2e8f0" },
];

const CARD_LOCS = [
  { l: 32, t: 251 },
  { l: 344, t: 251 },
  { l: 656, t: 251 },
  { l: 968, t: 251 },
  { l: 32, t: 603 },
  { l: 344, t: 603 },
  { l: 656, t: 603 },
  { l: 968, t: 603 },
] as const;

function SearchLabel() {
  return (
    <span
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "normal",
        color: INPUT_PLACEHOLDER,
      }}
    >
      Search marketing agents…
    </span>
  );
}

function CardShell({ agent, idx }: { agent: (typeof AGENTS)[0]; idx: number }) {
  return (
    <div
      className="absolute flex flex-col"
      style={{
        left: CARD_LOCS[idx].l,
        top: CARD_LOCS[idx].t,
        width: 280,
        height: 312,
        backgroundColor: colors.white,
        borderRadius: radiuses.cardLg,
        padding: 24,
        gap: 8,
        boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
        justifyContent: "flex-start",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 56,
          height: 56,
          backgroundColor: agent.iconBg,
          borderRadius: radiuses.pill,
        }}
      >
        <Image
          src={`/section-2-category-page/${agent.icon}`}
          alt=""
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div className="pt-4" style={{ width: 232 }}>
        <p
          style={{
            margin: 0,
            fontFamily: typography.fonts.jakarta,
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "28px",
            color: "#191c1e",
          }}
        >
          {agent.title}
        </p>
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: MUTED_400,
        }}
      >
        {agent.body[0]}
        <br />
        {agent.body[1]}
      </p>
      <div className="flex w-full items-center" style={{ paddingTop: 16, gap: 16 }}>
        <div className="flex items-center" style={{ gap: 4 }}>
          <div className="relative" style={{ width: 15, height: 14.25 }}>
            <Image src="/section-2-category-page/star.svg" alt="" fill className="object-contain" />
          </div>
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: "#191c1e",
            }}
          >
            {agent.rating}
          </span>
        </div>
        <div className="flex items-center" style={{ gap: 4 }}>
          <div className="relative" style={{ width: 15, height: 15 }}>
            <Image src="/section-2-category-page/play.svg" alt="" fill className="object-contain" />
          </div>
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "#727785",
            }}
          >
            {agent.runs}
          </span>
        </div>
        <div className="ml-auto">
          {agent.priceGradient ? (
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: GRAD, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px" }}
            >
              {agent.price}
            </span>
          ) : (
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                color: "#191c1e",
              }}
            >
              {agent.price}
            </span>
          )}
        </div>
      </div>
      <div
        className="flex w-full"
        style={{ marginTop: "auto", paddingTop: 16, gap: 12, display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            backgroundImage: GRAD,
            borderRadius: radiuses.cardSm,
            height: 40,
            padding: "10px 20px",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: colors.white,
            }}
          >
            Run Agent
          </span>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ backgroundColor: BUTTON_TR, borderRadius: radiuses.cardSm, height: 40, padding: "10px 32px" }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              color: "#191c1e",
            }}
          >
            Details
          </span>
        </div>
      </div>
    </div>
  );
}

function MarketingDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: PAGE_BG,
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
        {/* Top filter bar */}
        <div
          className="absolute flex"
          style={{
            left: 32,
            top: 68,
            width: 1216,
            height: 63,
            backgroundColor: PANEL,
            borderRadius: radiuses.cardLg,
            boxShadow: "0px 1px 1px rgba(0,0,0,0.05)",
            padding: 8,
            gap: 16,
            alignItems: "center",
          }}
        >
          <div className="relative min-w-0 flex-1" style={{ height: 47 }}>
            <div
              className="absolute"
              style={{ left: 19, top: 15, width: 18, height: 18, zIndex: 1 }}
            >
              <Image src="/section-2-category-page/search-icon.svg" alt="" width={18} height={18} />
            </div>
            <div
              className="flex h-full items-center"
              style={{
                backgroundColor: colors.white,
                borderRadius: radiuses.pill,
                paddingLeft: 48,
                paddingRight: 16,
                paddingTop: 14,
                paddingBottom: 14,
              }}
            >
              <SearchLabel />
            </div>
          </div>
          <div className="flex shrink-0" style={{ gap: 12 }}>
            {["Pricing: All", "Rating: Any", "Sort: Most Used"].map((l) => (
              <div
                key={l}
                className="flex items-center justify-end"
                style={{
                  position: "relative",
                  width: l.includes("Sort") ? 140 : l.includes("Rating") ? 109 : 117,
                  height: 44,
                  backgroundColor: colors.white,
                  borderRadius: radiuses.pill,
                }}
              >
                <div className="absolute" style={{ left: 16, top: 12 }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.inter,
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "#191c1e",
                    }}
                  >
                    {l}
                  </p>
                </div>
                <div className="pr-2" style={{ paddingRight: 8 }}>
                  <div className="relative" style={{ width: 21, height: 21 }}>
                    <Image src="/section-2-category-page/chevron.svg" alt="" width={21} height={21} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div
          className="absolute flex items-center"
          style={{ left: 32, top: 163, width: 1216, height: 56, paddingBottom: 16, gap: 8, overflow: "hidden" }}
        >
          {TABS.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-center"
              style={
                t.active
                  ? {
                      backgroundImage: GRAD,
                      borderRadius: radiuses.full,
                      padding: "10px 24px",
                      boxShadow: "0px 4px 6px -1px rgba(0,90,182,0.2),0px 2px 4px -2px rgba(0,90,182,0.2)",
                    }
                  : {
                      backgroundColor: TAB_MUTED,
                      borderRadius: radiuses.full,
                      padding: "10px 24px",
                    }
              }
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: t.active ? 600 : 500,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: t.active ? colors.white : MUTED_400,
                }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>

        {AGENTS.map((a, i) => (
          <CardShell key={a.title} agent={a} idx={i} />
        ))}

        <div
          className="absolute flex items-center justify-center"
          style={{
            left: 497,
            top: 961,
            width: 286,
            height: 56,
            backgroundColor: LOAD_MORE_BG,
            borderRadius: radiuses.pill,
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "32px",
              color: "#191c1e",
            }}
          >
            Load more agents
          </span>
        </div>
      </div>
    </section>
  );
}

function MarketingMobile() {
  return (
    <section className="block w-full py-10 md:hidden" style={{ backgroundColor: PAGE_BG }}>
      <div className="mx-auto flex max-w-md flex-col gap-6 px-4">
        <div className="flex flex-col gap-3" style={{ backgroundColor: PANEL, borderRadius: radiuses.card, padding: 8 }}>
          <div
            className="flex items-center gap-2 pl-2"
            style={{ backgroundColor: colors.white, borderRadius: radiuses.pill, padding: 12 }}
          >
            <Image src="/section-2-category-page/search-icon.svg" alt="" width={18} height={18} />
            <SearchLabel />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Pricing: All", "Rating: Any", "Sort: Most Used"].map((l) => (
              <div
                key={l}
                className="flex items-center justify-between gap-2"
                style={{
                  flex: "1 1 45%",
                  backgroundColor: colors.white,
                  borderRadius: radiuses.pill,
                  padding: "8px 12px",
                }}
              >
                <p style={{ margin: 0, fontSize: 12, color: "#191c1e" }}>{l}</p>
                <Image src="/section-2-category-page/chevron.svg" alt="" width={16} height={16} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <span
              key={t.id}
              className="inline-flex rounded-full px-3 py-2 text-sm"
              style={{
                background: t.active ? GRAD : TAB_MUTED,
                color: t.active ? colors.white : MUTED_400,
                fontFamily: typography.fonts.inter,
                fontWeight: t.active ? 600 : 500,
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
        {AGENTS.map((a) => (
          <div
            key={a.title}
            className="flex flex-col"
            style={{
              backgroundColor: colors.white,
              borderRadius: radiuses.cardLg,
              padding: 20,
              gap: 8,
              boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
            }}
          >
            <div className="flex gap-3">
              <div
                className="flex items-center justify-center"
                style={{ width: 48, height: 48, backgroundColor: a.iconBg, borderRadius: radiuses.pill }}
              >
                <Image src={`/section-2-category-page/${a.icon}`} alt="" width={28} height={28} className="object-contain" />
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 18, color: "#191c1e" }}>
                {a.title}
              </p>
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontSize: 14,
                lineHeight: "20px",
                color: MUTED_400,
              }}
            >
              {a.body[0]} {a.body[1]}
            </p>
            <div className="flex items-center justify-between text-sm" style={{ color: "#191c1e" }}>
              <span>★ {a.rating}</span>
              <span style={{ color: "#727785" }}>{a.runs}</span>
              <span style={a.priceGradient ? { backgroundImage: GRAD, WebkitBackgroundClip: "text", color: "transparent" } : {}}>
                {a.price}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl py-2 text-center text-sm font-semibold text-white" style={{ backgroundImage: GRAD }}>
                Run Agent
              </div>
              <div className="rounded-xl py-2 text-center text-sm font-semibold" style={{ background: BUTTON_TR, color: "#191c1e" }}>
                Details
              </div>
            </div>
          </div>
        ))}
        <div
          className="mx-auto flex items-center justify-center"
          style={{
            width: "100%",
            maxWidth: 286,
            height: 56,
            backgroundColor: LOAD_MORE_BG,
            borderRadius: radiuses.pill,
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "28px",
              color: "#191c1e",
            }}
          >
            Load more agents
          </span>
        </div>
      </div>
    </section>
  );
}

export default function MarketingAgentCatalog() {
  return (
    <>
      <MarketingDesktop />
      <MarketingMobile />
    </>
  );
}
