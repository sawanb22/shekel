"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";
import { motion, useReducedMotion } from "framer-motion";

const CANVAS_W = 1285;
const CANVAS_H = 818;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const SECTION_BG = "#FFFFFF";
const TITLE_COLOR = "#000000";
const BODY_COLOR = "rgba(0, 0, 0, 0.6)";
const LABEL_COLOR = "rgba(0, 0, 0, 0.4)";
const CARD_BORDER = "rgba(255, 255, 255, 0.1)";
const CARD_SHADOW = "0px 4px 20px 0px rgba(0, 0, 0, 0.03)";

type EnterpriseCard = {
  title: string;
  body: string;
  metaLeftLabel: string;
  metaLeftValue: string;
  metaRightLabel: string;
  metaRightValue: string;
  overlaySrc: string;
  paddingBottom?: number;
};

const CARDS: EnterpriseCard[] = [
  {
    title: "SecOps Warden",
    body: "Enterprise-grade threat detection and\nautomated incident response across global\nclouds.",
    metaLeftLabel: "Used by",
    metaLeftValue: "Fortune 500 Companies",
    metaRightLabel: "Pricing",
    metaRightValue: "$499/Month",
    overlaySrc: "/section-5-marketplace/card-1-overlay.svg",
  },
  {
    title: "LedgerAI Analyst",
    body: "Automated audit and compliance for\nfinancial institutions with deep-ledger\nanalysis.",
    metaLeftLabel: "Reliability",
    metaLeftValue: "99.99% Uptime",
    metaRightLabel: "Pricing",
    metaRightValue: "$2 / Run",
    overlaySrc: "/section-5-marketplace/card-2-overlay.svg",
  },
  {
    title: "QueryMaster",
    body: "Natural language interface for complex\nSQL/NoSQL enterprise databases.",
    metaLeftLabel: "Security",
    metaLeftValue: "SOC2 Compliant",
    metaRightLabel: "Tier",
    metaRightValue: "Enterprise Only",
    overlaySrc: "/section-5-marketplace/card-3-overlay.svg",
    paddingBottom: 52,
  },
];

export default function Enterprise() {
  return (
    <>
      <EnterpriseDesktop />
      <EnterpriseMobile />
    </>
  );
}

function EnterpriseDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: SECTION_BG,
        borderRadius: radiuses.card,
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
          className="absolute left-0 top-0"
          style={{
            width: 1285,
            height: 818,
            opacity: 0.1,
            background:
              "linear-gradient(146deg, rgba(47,128,237,1) 0%, rgba(86,204,242,1) 100%)",
          }}
        />
        <div
          className="absolute"
          style={{ left: -531, top: -228, width: 2400.92, height: 1830 }}
        >
          <Image
            src="/section-5-marketplace/bg-lines.svg"
            alt=""
            fill
            sizes="2401px"
            unoptimized
          />
        </div>

        <div className="absolute" style={{ left: -214, top: 702, width: 384, height: 240, borderRadius: radiuses.full, background: BLUE_GRADIENT, filter: "blur(150px)", opacity: 1 }} />
        <div className="absolute" style={{ left: 1115, top: 702, width: 384, height: 240, borderRadius: radiuses.full, background: BLUE_GRADIENT, filter: "blur(150px)", opacity: 1 }} />

        <div className="absolute flex w-[1280px] flex-col gap-16 px-12" style={{ left: 0, top: 96 }}>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-3">
              <Reveal>
                <h2
                  className="m-0"
                  style={{
                    fontFamily: typography.fonts.poppins,
                    fontWeight: 500,
                    fontSize: 36,
                    lineHeight: "40px",
                    color: TITLE_COLOR,
                  }}
                >
                  Built for scale and security
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="m-0"
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 12,
                    lineHeight: "16px",
                    letterSpacing: "0.2em",
                    color: TITLE_COLOR,
                  }}
                >
                  Enterprise AI Agents
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <a href="#" className="group inline-flex items-center gap-2 border-0 bg-transparent p-0 transition-[opacity,filter] duration-200 ease-out hover:opacity-100 hover:[filter:drop-shadow(0_4px_10px_rgba(40,100,228,0.34))]">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: TITLE_COLOR,
                  }}
                >
                  SEE ALL
                </span>
                <Image 
                  src="/section-5-marketplace/see-all-arrow.svg" 
                  alt="" 
                  width={8} 
                  height={12} 
                  className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                  unoptimized 
                />
              </a>
            </Reveal>
          </div>

          <RevealStagger className="relative min-h-[241px]" stagger={0.15}>
            {CARDS.map((card, idx) => (
              <RevealItem key={card.title} className="absolute" style={{ left: idx * 405.33, top: 0 }}>
                <EnterpriseCard card={card} />
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.3} className="absolute flex w-[1184px] justify-center" style={{ left: 48, top: 614, zIndex: 10 }}>
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
                  letterSpacing: "0.02em",
                }}
              >
                EXPLORE MORE AGENTS
              </span>
              <Image src="/section-5-marketplace/explore-more-arrow.svg" alt="" width={10} height={14} unoptimized />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EnterpriseCard({ card }: { card: EnterpriseCard }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      className="relative w-[375px] rounded-[32px] border bg-white px-8 pt-8"
      style={{
        borderColor: CARD_BORDER,
        boxShadow: CARD_SHADOW,
        paddingBottom: card.paddingBottom ?? 32,
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
      <div className="relative h-16 w-16 rounded-2xl">
        <Image src={card.overlaySrc} alt="" fill sizes="64px" unoptimized />
      </div>

      <h3
        className="m-0 pt-4"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 20,
          lineHeight: "28px",
          color: TITLE_COLOR,
        }}
      >
        {card.title}
      </h3>

      <p
        className="m-0 pt-2 whitespace-pre-line"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: BODY_COLOR,
        }}
      >
        {card.body}
      </p>

      <div className="flex flex-col gap-3 pb-6 pt-4">
        <MetaRow label={card.metaLeftLabel} value={card.metaLeftValue} />
        <MetaRow label={card.metaRightLabel} value={card.metaRightValue} />
      </div>

      <button
        className="w-full border-0"
        style={{
          background: BLUE_GRADIENT,
          padding: "16px 0",
          borderRadius: radiuses.cardSm,
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
          RUN AGENT
        </span>
      </button>
    </motion.article>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "16px",
          textTransform: "uppercase",
          color: LABEL_COLOR,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "16px",
          textTransform: "uppercase",
          color: TITLE_COLOR,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function EnterpriseMobile() {
  return (
    <section className="block bg-white px-6 py-14 md:hidden">
      <h2
        className="m-0"
        style={{
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: "clamp(30px, 8vw, 40px)",
          lineHeight: "1.1",
          color: TITLE_COLOR,
        }}
      >
        Built for scale and security
      </h2>
      <p
        className="m-0 pt-2"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 12,
          lineHeight: "16px",
          letterSpacing: "0.2em",
          color: TITLE_COLOR,
        }}
      >
        Enterprise AI Agents
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {CARDS.map((card) => (
          <div key={`m-${card.title}`} className="rounded-3xl border bg-white p-5" style={{ borderColor: CARD_BORDER, boxShadow: CARD_SHADOW }}>
            <h3 className="m-0 text-xl font-semibold text-black">{card.title}</h3>
            <p className="mt-2 whitespace-pre-line text-sm leading-5 text-[rgba(0,0,0,0.6)]">{card.body}</p>
            <div className="mt-4 flex flex-col gap-2">
              <MetaRow label={card.metaLeftLabel} value={card.metaLeftValue} />
              <MetaRow label={card.metaRightLabel} value={card.metaRightValue} />
            </div>
            <button className="mt-4 w-full border-0 py-3 text-white" style={{ background: BLUE_GRADIENT, borderRadius: radiuses.cardSm }}>
              RUN AGENT
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="inline-flex items-center gap-2 border-0 bg-transparent p-0">
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 15,
              lineHeight: "22px",
              color: colors.brand.blueStart,
            }}
          >
            EXPLORE MORE AGENTS
          </span>
          <Image src="/section-5-marketplace/explore-more-arrow.svg" alt="" width={8} height={12} unoptimized />
        </button>
      </div>
    </section>
  );
}
