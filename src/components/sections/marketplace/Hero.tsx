"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/shared/Button";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { Float } from "@/components/shared/motion/Float";
import { motion, useReducedMotion } from "framer-motion";
import cardSocialcraftBg from "../../../../new-images/page 2/card-socialcraft-bg.webp";
import cardArchitectBg from "../../../../new-images/page 2/card-architect-bg.webp";
import cardLexBg from "../../../../new-images/page 2/card-lex-bg.webp";
import cardDesignBg1 from "../../../../new-images/page 2/card-design-bg-1.webp";
import cardDesignBg2 from "../../../../new-images/page 2/card-design-bg-2.webp";

// -----------------------------------------------------------------------------
// Hero.tsx  —  "Discover AI agents that work for you"
// Figma frame: 500:7061  "Frame 2147225665"
// Canvas: 1280 × 717 px   Page-y: unknown   bg: #000000
//
// Responsive strategy:
//   >= 768 px  -> Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px   -> Stacked reflow, fluid clamp() typography
//
// LAYOUT MAP (section-absolute Figma px):
//   Heading (x=283, y=25) 714x60; Poppins 40, white->transparent with blue accent span
//   Card group (x=45, y=113) 1190x498; one large left card + three smaller right cards
//   Logo strip (x=-4, y=627) 1291x89; black bg + subtle white stroke + logos
// -----------------------------------------------------------------------------

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const MARKET_CARD_BG = "#A9A2A2";
const CHIP_BG = "#24272E";
const BUTTON_TEXT = "#E2E2E2";
const OVERLAY_FADE = "linear-gradient(180deg, rgba(0,0,0,0.08) 26%, rgba(0,0,0,0.72) 100%)";
const HERO_HEADING_GRADIENT =
  "linear-gradient(193deg, rgba(255,255,255,1) 0%, rgba(228,236,255,0.92) 100%)";
const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";
const BUTTON_GRADIENT =
  "linear-gradient(151deg, rgba(40,100,228,1) 29%, rgba(30,154,255,1) 86%, rgba(198,248,255,1) 100%)";
const LOGO_EDGE_FADE =
  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)";


export default function Hero() {
  return (
    <>
      <HeroDesktop />
      <HeroMobile />
    </>
  );
}

function HeroDesktop() {
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
        <HeroBlurEllipses />

        <motion.h1
          className="absolute m-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            left: 283,
            top: 26,
            width: 760,
            whiteSpace: "nowrap",
            fontFamily: typography.fonts.poppins,
            fontWeight: 400,
            fontSize: 40,
            lineHeight: "60px",
            color: colors.white,
          }}
        >
          Discover AI agents that{" "}
          <span
            style={{
              background: BLUE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            work for you
          </span>
        </motion.h1>

        <DesktopCards />
        <PartnerStrip />
      </div>
    </section>
  );
}

function HeroBlurEllipses() {
  return (
    <>
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          left: -19,
          top: -49,
          width: 1343,
          height: 211,
          background: BLUE_GRADIENT,
          filter: "blur(1000px)",
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          left: -98,
          top: -139,
          width: 163,
          height: 163,
          background: BLUE_GRADIENT,
          filter: "blur(203.4px)",
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          left: 1252,
          top: -82,
          width: 163,
          height: 163,
          background: BLUE_GRADIENT,
          filter: "blur(214.7px)",
        }}
      />
    </>
  );
}

function DesktopCards() {
  return (
    <motion.div 
      className="absolute" 
      style={{ left: 45, top: 113, width: 1190, height: 498 }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
    >
      <MainCard />
      <SmallArchitectCard />
      <SmallLexCard />
      <SmallDesignCard />
    </motion.div>
  );
}

function MainCard() {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: 0,
        top: 0,
        width: 690,
        height: 498,
        borderRadius: radiuses.cardSm,
        background: MARKET_CARD_BG,
      }}
    >
      <Image
        src={cardSocialcraftBg}
        alt=""
        fill
        sizes="690px"
        className="object-cover"
      />
      <div
        className="absolute"
        style={{ left: -6, top: -61, width: 703, height: 566, background: OVERLAY_FADE }}
      />

      <div
        className="absolute flex items-center gap-[10px]"
        style={{ left: 19, top: 17, height: 25, padding: "10px", borderRadius: radiuses.inputIcon, background: CHIP_BG }}
      >
        <span
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "14px",
            color: colors.white,
          }}
        >
          Marketing - Automation
        </span>
      </div>

      <p
        className="absolute m-0"
        style={{
          left: 33,
          top: 257,
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: 40,
          lineHeight: "60px",
          color: colors.white,
        }}
      >
        SocialCraft AI
      </p>

      <Image
        src="/section-1-marketplace/stars.svg"
        alt=""
        width={96}
        height={16}
        className="absolute"
        style={{ left: 536, top: 23 }}
      />

      <p
        className="absolute m-0"
        style={{
          left: 536,
          top: 15,
          width: 125,
          fontFamily: typography.fonts.poppins,
          fontWeight: 400,
          fontSize: 20,
          lineHeight: "30px",
          color: colors.white,
        }}
      >
        4.8 - 1.2k runs
      </p>

      <p
        className="absolute m-0"
        style={{
          left: 38,
          top: 323,
          width: 372,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "19px",
          color: colors.white,
        }}
      >
        Generate and manage social media automatically
      </p>
      <p
        className="absolute m-0"
        style={{
          left: 38,
          top: 355,
          width: 148,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "19px",
          color: colors.white,
        }}
      >
        Used by 1.2k teams
      </p>

      <button
        className="absolute border-0"
        style={{
          left: 38,
          top: 399,
          padding: "12px 32px",
          borderRadius: radiuses.inputIcon,
          background: BUTTON_GRADIENT,
          color: BUTTON_TEXT,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
        }}
      >
        Run Agent
      </button>

      <div className="absolute flex flex-col" style={{ left: 203, top: 400 }}>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.white,
          }}
        >
          Pricing
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "28px",
            color: colors.white,
          }}
        >
          Pro - $19/mo
        </span>
      </div>

      <Image
        src="/section-1-marketplace/arrow-up-right-white.svg"
        alt=""
        width={16}
        height={15}
        className="absolute"
        style={{ left: 516, top: 22 }}
      />
    </div>
  );
}

function SmallArchitectCard() {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: 703,
        top: 0,
        width: 487,
        height: 275,
        borderRadius: radiuses.cardSm,
        background: MARKET_CARD_BG,
      }}
    >
      <Image src={cardArchitectBg} alt="" fill sizes="487px" className="object-cover" />
      <div className="absolute" style={{ left: -181, top: 0, width: 703, height: 328, background: OVERLAY_FADE }} />
      <p className="absolute m-0" style={{ left: 430, top: 18, fontFamily: typography.fonts.poppins, fontWeight: 400, fontSize: 20, lineHeight: "30px", color: colors.white }}>4.8</p>
      <p className="absolute m-0" style={{ left: 23, top: 194, fontFamily: typography.fonts.poppins, fontWeight: 400, fontSize: 20, lineHeight: "30px", color: colors.white }}>ArchitectAI</p>
      <p className="absolute m-0" style={{ left: 23, top: 224, width: 380, fontFamily: typography.fonts.poppins, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.white }}>Create intelligent 3D layouts and architectural designs</p>
      <Image src="/section-1-marketplace/arrow-up-right-gray.svg" alt="" width={16} height={15} className="absolute" style={{ left: 414, top: 25 }} />
    </div>
  );
}

function SmallLexCard() {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: 703,
        top: 288,
        width: 248,
        height: 210,
        borderRadius: radiuses.cardSm,
        backgroundColor: colors.black,
      }}
    >
      <Image
        src={cardLexBg}
        alt=""
        fill
        sizes="248px"
        className="object-cover"
        style={{ transform: "scale(0.83)" }}
      />
      <p className="absolute m-0" style={{ left: 18, top: 160, fontFamily: typography.fonts.poppins, fontWeight: 400, fontSize: 20, lineHeight: "30px", color: colors.white }}>LexAI</p>
    </div>
  );
}

function SmallDesignCard() {
  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: 963,
        top: 288,
        width: 227,
        height: 210,
        borderRadius: radiuses.cardSm,
        background: MARKET_CARD_BG,
      }}
    >
      <Image src={cardDesignBg1} alt="" fill sizes="227px" className="object-cover" />
      <Image src={cardDesignBg2} alt="" fill sizes="227px" className="object-cover opacity-95" />
      <p className="absolute m-0" style={{ left: 19, top: 161, fontFamily: typography.fonts.poppins, fontWeight: 400, fontSize: 20, lineHeight: "30px", color: colors.white }}>DesignGen AI</p>
    </div>
  );
}

function PartnerStrip() {
  const prefersReducedMotion = useReducedMotion();
  
  const partnerImages = [
    { src: "/section-1-marketplace/logo-openai.png", alt: "OpenAI", w: 103, h: 28 },
    { src: "/section-1-marketplace/logo-google-ai.png", alt: "Google AI", w: 134, h: 73 },
    { src: "/section-1-marketplace/logo-anthropic.svg", alt: "Anthropic", w: 185, h: 123 },
    { src: "/section-1-marketplace/logo-azure.png", alt: "Azure", w: 90, h: 26 },
    { src: "/section-1-marketplace/logo-meta.png", alt: "Meta", w: 95, h: 19 },
    { src: "/section-1-marketplace/logo-notion.png", alt: "Notion", w: 102, h: 72 },
    { src: "/section-1-marketplace/logo-slack.png", alt: "Slack", w: 103, h: 42 },
    { src: "/section-1-marketplace/logo-aws.png", alt: "AWS", w: 50, h: 50 },
  ];

  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: -4,
        top: 627,
        width: 1291,
        height: 89,
        backgroundColor: colors.black,
        borderTop: "1px solid rgba(255,255,255,0.2)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <motion.div
        className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center"
        animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 26, ease: "linear", repeat: Infinity }
        }
      >
        {[0, 1].map((copyIdx) => (
          <div
            key={copyIdx}
            className="flex items-center"
            style={{ minWidth: 1291, height: 89, gap: 56, padding: "0 28px" }}
          >
            {partnerImages.map((p, i) => (
              <div
                key={`${copyIdx}-${p.alt}`}
                className="relative flex-shrink-0"
                style={{ width: p.w, height: p.h }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={`${p.w}px`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      <div className="absolute pointer-events-none" style={{ left: 0, top: 0, width: 34, height: 90, background: LOGO_EDGE_FADE }} />
      <div className="absolute pointer-events-none" style={{ left: 1240, top: 0, width: 34, height: 90, background: "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }} />
    </div>
  );
}

function HeroMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.black }}
    >
      <div className="absolute inset-x-0 -top-16 h-56" style={{ background: BLUE_GRADIENT, filter: "blur(120px)", opacity: 0.45 }} />

      <div className="relative mx-auto flex max-w-[430px] flex-col gap-6 px-6 pb-10 pt-16">
        <Reveal>
          <h2
            className="m-0 text-center"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 400,
              fontSize: "clamp(28px, 7vw, 40px)",
              lineHeight: "1.25",
              background: HERO_HEADING_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Discover AI agents that{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              work for you
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: radiuses.cardSm, height: 280, background: MARKET_CARD_BG }}
          >
            <Image src={cardSocialcraftBg} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0" style={{ background: OVERLAY_FADE }} />
            <p className="absolute m-0" style={{ left: 20, bottom: 56, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 24, lineHeight: "32px", color: colors.white }}>
              SocialCraft AI
            </p>
            <p className="absolute m-0" style={{ left: 20, bottom: 28, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: colors.white }}>
              Generate and manage social media automatically
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="primary">Run Agent</Button>
          </div>
        </Reveal>

        <div className="overflow-hidden pb-2">
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[0, 1].map((copyIdx) => (
              <div key={copyIdx} className="flex items-center gap-8 px-4">
                <Image src="/section-1-marketplace/logo-openai.png" alt="OpenAI" width={103} height={28} />
                <Image src="/section-1-marketplace/logo-google-ai.png" alt="Google AI" width={134} height={73} />
                <Image src="/section-1-marketplace/logo-anthropic.svg" alt="Anthropic" width={118} height={78} />
                <Image src="/section-1-marketplace/logo-azure.png" alt="Azure" width={90} height={26} />
                <Image src="/section-1-marketplace/logo-meta.png" alt="Meta" width={95} height={19} />
                <Image src="/section-1-marketplace/logo-notion.png" alt="Notion" width={102} height={72} />
                <Image src="/section-1-marketplace/logo-slack.png" alt="Slack" width={103} height={42} />
                <Image src="/section-1-marketplace/logo-aws.png" alt="AWS" width={50} height={50} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
