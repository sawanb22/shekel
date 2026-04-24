"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";
import { motion, useReducedMotion } from "framer-motion";

// -----------------------------------------------------------------------------
// ExploreAgents.tsx — "Explore AI Agents"
// Figma frame: 500:7594 "Frame 2147225676"
// Canvas: 1200 x 741
// -----------------------------------------------------------------------------

const CANVAS_W = 1200;
const CANVAS_H = 741;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const CARD_BG = "#FFFFFF";
const PANEL_BG = "#F2F4F7";
const TEXT_DARK = "#191C1E";
const TEXT_BODY = "#414753";
const TEXT_PLACEHOLDER = "#6B7280";
const TEXT_MUTED = "rgba(65, 71, 83, 0.6)";
const BORDER_FAINT = "rgba(0, 0, 0, 0)";
const CARD_SHADOW = "0px 4px 20px 0px rgba(0, 0, 0, 0.03)";
const SEARCH_SHADOW = "0px 1px 2px 0px rgba(0, 0, 0, 0.05)";

type AgentCard = {
  name: string;
  rating: string;
  description: string;
  runs: string;
  pricing: string;
  popular: boolean;
  icon?: string;
  ratingStar: string;
  detailsArrow: string;
  overlay?: string;
};

const AGENT_CARDS: AgentCard[] = [
  {
    name: "TaskMaster",
    rating: "4.7",
    description:
      "Automates workflows in seconds. Handles scheduling,\nemail filtering and data entry.",
    runs: "300+ runs",
    pricing: "FREE",
    popular: true,
    icon: "/section-4-marketplace/card-taskmaster-icon.svg",
    ratingStar: "/section-4-marketplace/card-taskmaster-star.svg",
    detailsArrow: "/section-4-marketplace/card-taskmaster-details-arrow.svg",
  },
  {
    name: "MarketMuse",
    rating: "4.9",
    description:
      "Instant market gap analysis. Identifies growth\nopportunities in real-time.",
    runs: "1.2k runs",
    pricing: "$0.02 / REQ",
    popular: false,
    ratingStar: "/section-4-marketplace/card-marketmuse-star.svg",
    detailsArrow: "/section-4-marketplace/card-marketmuse-details-arrow.svg",
    overlay: "/section-4-marketplace/card-marketmuse-overlay.svg",
  },
];

export default function ExploreAgents() {
  return (
    <>
      <ExploreAgentsDesktop />
      <ExploreAgentsMobile />
    </>
  );
}

function ExploreAgentsDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: CARD_BG,
        borderRadius: 33,
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
        {/* Outer content card (contains whole section content) */}
        <div
          className="absolute"
          style={{
            left: 24,
            top: 34,
            width: 1152,
            height: 660,
            borderRadius: radiuses.cardLg,
            border: "1px solid rgba(0, 0, 0, 0)",
            backgroundColor: CARD_BG,
            boxShadow: CARD_SHADOW,
          }}
        />

        <HeaderArea />

        <RevealStagger className="absolute flex items-center" style={{ left: 53, top: 293, gap: 72 }} stagger={0.1}>
          {AGENT_CARDS.map((card) => (
            <RevealItem key={card.name}>
              <MarketplaceCard card={card} />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.3} className="absolute flex w-[1184px] justify-center" style={{ left: 48, top: 602 }}>
          <button className="inline-flex items-center gap-2 border-0 bg-transparent p-0 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02]">
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "24px",
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
                EXPLORE MORE AGENTS
              </span>
              <Image
                src="/section-4-marketplace/explore-more-arrow.svg"
                alt=""
                width={8}
                height={8}
                unoptimized
              />
            </button>
        </Reveal>
      </div>
    </section>
  );
}

function HeaderArea() {
  return (
    <div className="absolute flex w-[1152px] flex-col gap-8" style={{ left: 24, top: 84 }}>
      <Reveal>
        <h2
          className="m-0 text-center"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 48,
            lineHeight: "40px",
            color: TEXT_DARK,
          }}
        >
          Explore{" "}
          <span
            style={{
              background: BLUE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Agents
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="flex w-[1152px] items-center justify-between rounded-2xl bg-white p-4"
          style={{ boxShadow: SEARCH_SHADOW }}
        >
          <div className="relative w-full">
            <div
              className="w-[753px] rounded-xl px-12 py-[14px]"
              style={{ backgroundColor: PANEL_BG }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_PLACEHOLDER,
                }}
              >
                What task do you need to automate?
              </span>
            </div>
            <Image
              src="/section-4-marketplace/search-icon.svg"
              alt=""
              width={18}
              height={18}
              className="absolute left-[19px] top-[14px]"
              unoptimized
            />
          </div>

          <div className="ml-4 flex items-center gap-3">
            <FilterChip
              label="CATEGORY"
              width={103}
              icon="/section-4-marketplace/filter-category-icon.svg"
            />
            <FilterChip
              label="PRICING"
              width={96}
              icon="/section-4-marketplace/filter-pricing-icon.svg"
            />
            <FilterChip
              label="SORT BY"
              width={103}
              icon="/section-4-marketplace/filter-sort-icon.svg"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function FilterChip({
  label,
  width,
  icon,
}: {
  label: string;
  width: number;
  icon: string;
}) {
  return (
    <div
      className="relative rounded-xl"
      style={{ width, height: 44, backgroundColor: PANEL_BG }}
    >
      <div className="flex h-full items-center justify-between px-3">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 14,
            lineHeight: "20px",
            color: TEXT_DARK,
          }}
        >
          {label}
        </span>
        <Image src={icon} alt="" width={16} height={16} unoptimized />
      </div>
    </div>
  );
}

function MarketplaceCard({ card }: { card: AgentCard }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      className="relative h-[241px] w-[511px] rounded-[32px] border bg-white p-8"
      style={{
        borderColor: BORDER_FAINT,
        boxShadow: CARD_SHADOW,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              boxShadow: "0px 20px 34px -20px rgba(53, 72, 109, 0.42)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="flex items-center gap-8">
        <div className="relative h-32 w-32 rounded-3xl" style={{ backgroundColor: PANEL_BG }}>
          {card.overlay ? (
            <Image src={card.overlay} alt="" fill sizes="128px" unoptimized />
          ) : null}
          {card.icon ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={card.icon} alt="" width={40} height={40} unoptimized />
            </div>
          ) : null}
          {card.popular ? (
            <div
              className="absolute"
              style={{
                left: 72.59,
                top: -8,
                borderRadius: radiuses.full,
                background: BLUE_GRADIENT,
                padding: "4px 8px",
              }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 700,
                  fontSize: 10,
                  lineHeight: "15px",
                  color: colors.white,
                }}
              >
                POPULAR
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3
              className="m-0"
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "32px",
                color: TEXT_DARK,
              }}
            >
              {card.name}
            </h3>
            <div className="flex items-center gap-1">
              <Image src={card.ratingStar} alt="" width={20} height={19} unoptimized />
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: TEXT_DARK,
                }}
              >
                {card.rating}
              </span>
            </div>
          </div>

          <p
            className="m-0 whitespace-pre-line"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: TEXT_BODY,
            }}
          >
            {card.description}
          </p>

          <div className="flex gap-6 pt-1">
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 700,
                fontSize: 10,
                lineHeight: "15px",
                textTransform: "uppercase",
                color: TEXT_MUTED,
              }}
            >
              {card.runs}
            </span>
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 700,
                fontSize: 10,
                lineHeight: "15px",
                textTransform: "uppercase",
                color: "#005AB6",
              }}
            >
              {card.pricing}
            </span>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              className="flex-1 rounded-xl border-0 px-6 py-3"
              style={{ background: BLUE_GRADIENT }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: colors.white,
                }}
              >
                RUN AGENT
              </span>
            </button>
            <button
              className="inline-flex items-center gap-1 rounded-xl border-0 px-6 py-3"
              style={{ backgroundColor: PANEL_BG }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: TEXT_DARK,
                }}
              >
                DETAILS
              </span>
              <Image src={card.detailsArrow} alt="" width={8} height={8} unoptimized />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ExploreAgentsMobile() {
  return (
    <section className="block bg-white px-6 py-14 md:hidden">
      <h2
        className="m-0 text-center"
        style={{
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: "clamp(32px, 9vw, 44px)",
          lineHeight: "1.1",
          color: TEXT_DARK,
        }}
      >
        Explore{" "}
        <span
          style={{
            background: BLUE_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI Agents
        </span>
      </h2>

      <div className="mt-6 rounded-2xl bg-white p-4" style={{ boxShadow: SEARCH_SHADOW }}>
        <div className="relative rounded-xl bg-[#F2F4F7] px-10 py-3">
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: TEXT_PLACEHOLDER,
            }}
          >
            What task do you need to automate?
          </span>
          <Image
            src="/section-4-marketplace/search-icon.svg"
            alt=""
            width={16}
            height={16}
            className="absolute left-3 top-3.5"
            unoptimized
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {AGENT_CARDS.map((card) => (
          <div key={`m-${card.name}`} className="rounded-3xl bg-white p-5" style={{ boxShadow: CARD_SHADOW }}>
            <div className="flex items-center justify-between">
              <h3
                className="m-0"
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 22,
                  lineHeight: "30px",
                  color: TEXT_DARK,
                }}
              >
                {card.name}
              </h3>
              <span style={{ fontSize: 14, color: TEXT_DARK }}>{card.rating}</span>
            </div>
            <p className="mt-2 whitespace-pre-line text-sm leading-5 text-[#414753]">{card.description}</p>
            <div className="mt-4 flex justify-between">
              <span className="text-[10px] font-bold uppercase text-[#68707f]">{card.runs}</span>
              <span className="text-[10px] font-bold uppercase text-[#005AB6]">{card.pricing}</span>
            </div>
            <button className="mt-4 w-full rounded-xl border-0 py-3" style={{ background: BLUE_GRADIENT }}>
              <span className="text-sm font-bold text-white">RUN AGENT</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="inline-flex items-center gap-2 border-0 bg-transparent p-0">
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 15,
              lineHeight: "22px",
              background: BLUE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EXPLORE MORE AGENTS
          </span>
          <Image src="/section-4-marketplace/explore-more-arrow.svg" alt="" width={8} height={8} unoptimized />
        </button>
      </div>
    </section>
  );
}
