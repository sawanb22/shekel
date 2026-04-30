// FeaturesBento.tsx — Figma node 500:22045 "Frame 2147225679"
// Canvas: 1280 × 726. Implementation uses the pixel-perfect dual-layout
// pattern (cqw-scaled desktop canvas + reflowed mobile stack).

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";

const CANVAS_W = 1280;
const CANVAS_H = 726;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const CARD_HOVER_CLASS =
  "transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0px_18px_34px_-16px_rgba(61,86,133,0.42)]";

export default function FeaturesBento() {
  return (
    <>
      <FeaturesBentoDesktop />
      <FeaturesBentoMobile />
    </>
  );
}

function FeaturesBentoDesktop() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative hidden w-full overflow-hidden rounded-[24px] md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        backgroundImage: isDark ? "none" : "url('/section-6/bg-ai_agent_marketplace.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: isDark ? "#0f131e" : "#f0e8ff",
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
        {isDark ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(126,84,206,0.13) 0px, rgba(126,84,206,0.13) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(to bottom, rgba(126,84,206,0.13) 0px, rgba(126,84,206,0.13) 1px, transparent 1px, transparent 44px)",
              opacity: 0.24,
            }}
          />
        ) : null}

        {/* ── Card group (x=28, y=79, 1216×588) with 16px gaps ── */}
        <div className="absolute" style={{ left: 28, top: 79, width: 1216, height: 596 }}>
          {/* Row 1 — y=0, h=300. Gap=16px between cards */}

          {/* AI Agent Marketplace — x=0, w=604, h=300 */}
          <div
            className={`absolute overflow-hidden ${CARD_HOVER_CLASS}`}
            style={{
              left: 0,
              top: 0,
              width: 604,
              height: 300,
              backgroundColor: isDark ? "#1a1f2d" : colors.white,
              border: isDark ? "1px solid rgba(68,72,84,0.1)" : `1px solid ${colors.border.card}`,
              borderRadius: 24,
              padding: "48px 48px 100px",
            }}
          >
            <div className="relative flex flex-col gap-4">
              <h3 style={{ ...h3Style, color: isDark ? "#e5e7f6" : h3Style.color }}>AI Agent Marketplace</h3>
              <p style={{ ...bodyStyle, color: isDark ? "#a7aab9" : bodyStyle.color, width: 384 }}>
                The world&apos;s largest repository of fine-tuned, task-specific autonomous agents ready for work.
              </p>
              <a href="#" className="group mt-2 inline-flex items-center gap-2 transition-[transform,opacity,filter] duration-200 ease-out hover:translate-x-1 hover:opacity-100 hover:[filter:drop-shadow(0_4px_10px_rgba(40,100,228,0.34))_brightness(1.15)]">
                <span
                  className="transition-[color] duration-200 ease-out group-hover:[background-image:linear-gradient(to_bottom,_#2864e4,_#ecf2ff)] group-hover:bg-clip-text group-hover:text-transparent group-hover:[-webkit-text-fill-color:transparent]"
                  style={exploreLinkStyle}
                >
                  Explore Marketplace
                </span>
                <Image
                  src="/section-6/icon-arrow.svg"
                  alt=""
                  width={16}
                  height={16}
                    className="[filter:brightness(0)_saturate(100%)_invert(32%)_sepia(95%)_saturate(1900%)_hue-rotate(213deg)_brightness(95%)_contrast(94%)] transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:scale-105 group-hover:[filter:none]"
                />
              </a>
            </div>
          </div>

          {/* Flexible Pricing — x=620, w=296, h=300 */}
          <SmallCard
            left={620}
            top={0}
            width={296}
            height={300}
            icon="/section-6/icon-pricing.svg"
            iconW={33}
            iconH={24}
            title="Flexible Pricing"
            body={"Usage-based, subscription, or\none-time license fees tailored to\nyour business."}
            paddingBottom={102}
            isDark={isDark}
          />

          {/* Workflow Builder — x=932, w=284, h=300 */}
          <SmallCard
            left={932}
            top={0}
            width={284}
            height={300}
            icon="/section-6/icon-workflow.svg"
            iconW={30}
            iconH={27}
            title="Workflow Builder"
            body={"Visual drag-and-drop interface\nto connect disparate agents into full pipelines."}
            paddingBottom={102}
            isDark={isDark}
          />

          {/* Row 2 — y=316, h=256. Row gap = 316-300=16px */}

          {/* Dev Ecosystem — x=0, w=304, h=256 */}
          <SmallCard
            left={0}
            top={316}
            width={304}
            height={256}
            icon="/section-6/icon-dev.svg"
            iconW={30}
            iconH={24}
            title="Dev Ecosystem"
            body={"Full SDK support for Python, JS,\nand Rust to integrate Shekel into\nany stack."}
            paddingBottom={58}
            isDark={isDark}
          />

          {/* Global Settlement — x=320, w=896, h=256 */}
          <div
            className={`absolute flex flex-row items-center justify-center ${CARD_HOVER_CLASS}`}
            style={{
              left: 320,
              top: 316,
              width: 896,
              height: 256,
              backgroundColor: isDark ? "#151926" : colors.white,
              border: isDark ? "1px solid rgba(68,72,84,0.2)" : `1px solid ${colors.border.card}`,
              borderRadius: 24,
              padding: 48,
              gap: 48,
            }}
          >
            <div className="flex flex-col gap-4" style={{ width: 379 }}>
              <h3 style={{ ...h3Style, color: isDark ? "#e5e7f6" : h3Style.color }}>Global Settlement Network</h3>
              <p style={{ ...bodyStyle, color: isDark ? "#a7aab9" : bodyStyle.color }}>
                Instant, low-latency payments for every agent{"\n"}execution using decentralized ledger technology.
              </p>
            </div>

            <div
              className="flex items-center justify-center"
              style={{
                width: 381,
                height: 160,
                backgroundColor: isDark ? "rgba(10,14,24,0.5)" : colors.background.networkPill,
                border: isDark ? "1px solid rgba(68,72,84,0.2)" : `1px solid ${colors.border.networkPill}`,
                borderRadius: 16,
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full"
                  style={{ width: 12, height: 12, background: BLUE_GRADIENT }}
                />
                <span
                  style={{
                    fontFamily: typography.fonts.mono,
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "20px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isDark ? "#e5e7f6" : colors.text.networkPill,
                  }}
                >
                  NETWORK LIVE: 12.4K TPS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmallCard({
  left,
  top,
  width,
  height,
  icon,
  iconW,
  iconH,
  title,
  body,
  paddingBottom,
  isDark,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  icon: string;
  iconW: number;
  iconH: number;
  title: string;
  body: string;
  paddingBottom: number;
  isDark: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="absolute flex flex-col"
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -6,
              boxShadow: "0px 20px 34px -18px rgba(61, 86, 133, 0.45)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{
        left,
        top,
        width,
        height,
        backgroundColor: isDark ? "#151926" : colors.white,
        border: isDark ? "1px solid rgba(68,72,84,0.1)" : `1px solid ${colors.border.card}`,
        borderRadius: 24,
        padding: `32px 32px ${paddingBottom}px`,
        gap: 12,
      }}
    >
      <Image src={icon} alt="" width={iconW} height={iconH} />
      <div className="pt-3">
        <h4 style={{ ...h4Style, color: isDark ? "#e5e7f6" : h4Style.color }}>{title}</h4>
        <p
          style={{
            ...smallBodyStyle,
            color: isDark ? "#a7aab9" : smallBodyStyle.color,
            whiteSpace: "pre-line",
            marginTop: 8,
          }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}

function FeaturesBentoMobile() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{
        backgroundImage: isDark ? "none" : "url('/section-6/bg-ai_agent_marketplace.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: isDark ? "#0f131e" : "#f0e8ff",
      }}
    >
      {isDark ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(126,84,206,0.13) 0px, rgba(126,84,206,0.13) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(to bottom, rgba(126,84,206,0.13) 0px, rgba(126,84,206,0.13) 1px, transparent 1px, transparent 36px)",
            opacity: 0.2,
          }}
        />
      ) : null}
      <div className="relative z-10 flex flex-col gap-10 px-6 py-14 sm:px-8">
        <MobileCard
          large
          title="AI Agent Marketplace"
          body="The world's largest repository of fine-tuned, task-specific autonomous agents ready for work."
          cta="Explore Marketplace"
          isDark={isDark}
        />
        <MobileCard
          icon="/section-6/icon-pricing.svg"
          iconW={33}
          iconH={24}
          title="Flexible Pricing"
          body="Usage-based, subscription, or one-time license fees tailored to your business."
          isDark={isDark}
        />
        <MobileCard
          icon="/section-6/icon-workflow.svg"
          iconW={30}
          iconH={27}
          title="Workflow Builder"
          body="Visual drag-and-drop interface to connect disparate agents into full pipelines."
          isDark={isDark}
        />
        <MobileCard
          icon="/section-6/icon-dev.svg"
          iconW={30}
          iconH={24}
          title="Dev Ecosystem"
          body="Full SDK support for Python, JS, and Rust to integrate Shekel into any stack."
          isDark={isDark}
        />
        <div
          className={`flex flex-col gap-4 rounded-[24px] border p-6 ${CARD_HOVER_CLASS}`}
          style={{
            borderColor: isDark ? "rgba(68,72,84,0.2)" : colors.border.card,
            backgroundColor: isDark ? "#151926" : colors.white,
          }}
        >
          <h3 style={{ ...h3Style, color: isDark ? "#e5e7f6" : h3Style.color }}>Global Settlement Network</h3>
          <p style={{ ...bodyStyle, color: isDark ? "#a7aab9" : bodyStyle.color }}>
            Instant, low-latency payments for every agent execution using decentralized ledger technology.
          </p>
          <div
            className="flex items-center justify-center rounded-[16px] px-5 py-4"
            style={{
              backgroundColor: isDark ? "rgba(10,14,24,0.5)" : colors.background.networkPill,
              border: isDark ? "1px solid rgba(68,72,84,0.2)" : `1px solid ${colors.border.networkPill}`,
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="rounded-full"
                style={{ width: 12, height: 12, background: BLUE_GRADIENT }}
              />
              <span
                style={{
                  fontFamily: typography.fonts.mono,
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isDark ? "#e5e7f6" : colors.text.networkPill,
                }}
              >
                NETWORK LIVE: 12.4K TPS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileCard({
  large = false,
  icon,
  iconW,
  iconH,
  title,
  body,
  cta,
  isDark,
}: {
  large?: boolean;
  icon?: string;
  iconW?: number;
  iconH?: number;
  title: string;
  body: string;
  cta?: string;
  isDark: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-[24px] border p-6 ${CARD_HOVER_CLASS}`}
      style={{
        borderColor: isDark ? "rgba(68,72,84,0.1)" : colors.border.card,
        backgroundColor: isDark ? "#151926" : colors.white,
      }}
    >
      {icon && iconW && iconH ? (
        <Image src={icon} alt="" width={iconW} height={iconH} />
      ) : null}
      <h3
        style={
          large
            ? { ...h3Style, color: isDark ? "#e5e7f6" : h3Style.color }
            : { ...h4Style, color: isDark ? "#e5e7f6" : h4Style.color }
        }
      >
        {title}
      </h3>
      <p
        style={
          large
            ? { ...bodyStyle, color: isDark ? "#a7aab9" : bodyStyle.color }
            : { ...smallBodyStyle, color: isDark ? "#a7aab9" : smallBodyStyle.color }
        }
      >
        {body}
      </p>
      {cta ? (
        <a href="#" className="group mt-1 inline-flex items-center gap-2 transition-[transform,opacity,filter] duration-200 ease-out hover:translate-x-1 hover:opacity-100 hover:[filter:drop-shadow(0_4px_10px_rgba(40,100,228,0.34))_brightness(1.15)]">
          <span
            className="transition-[color] duration-200 ease-out group-hover:[background-image:linear-gradient(to_bottom,_#2864e4,_#ecf2ff)] group-hover:bg-clip-text group-hover:text-transparent group-hover:[-webkit-text-fill-color:transparent]"
            style={exploreLinkStyle}
          >
            {cta}
          </span>
          <Image
            src="/section-6/icon-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="[filter:brightness(0)_saturate(100%)_invert(32%)_sepia(95%)_saturate(1900%)_hue-rotate(213deg)_brightness(95%)_contrast(94%)] transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:scale-105 group-hover:[filter:none]"
          />
        </a>
      ) : null}
    </div>
  );
}

const h3Style = {
  margin: 0,
  fontFamily: typography.fonts.inter,
  fontWeight: 600,
  fontSize: 24,
  lineHeight: "32px",
  color: colors.black,
};

const h4Style = {
  margin: 0,
  fontFamily: typography.fonts.inter,
  fontWeight: 600,
  fontSize: 20,
  lineHeight: "28px",
  color: colors.black,
};

const bodyStyle = {
  margin: 0,
  whiteSpace: "pre-line" as const,
  fontFamily: typography.fonts.inter,
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "24px",
  color: colors.black,
};

const smallBodyStyle = {
  margin: 0,
  fontFamily: typography.fonts.inter,
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "20px",
  color: colors.black,
};

const exploreLinkStyle = {
  fontFamily: typography.fonts.inter,
  fontWeight: 700,
  fontSize: 16,
  lineHeight: "24px",
  color: colors.brand.blueStart,
};
