// FeaturesBento.tsx — Figma node 500:22045 "Frame 2147225679"
// Canvas: 1280 × 726. Implementation uses the pixel-perfect dual-layout
// pattern (cqw-scaled desktop canvas + reflowed mobile stack).

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 726;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

export default function FeaturesBento() {
  return (
    <>
      <FeaturesBentoDesktop />
      <FeaturesBentoMobile />
    </>
  );
}

function FeaturesBentoDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden rounded-[24px] md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        backgroundImage: "url('/section-6/features-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f0e8ff",
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
        {/* ── Soft gradient overlays for depth ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            left: -120,
            top: -120,
            width: 600,
            height: 600,
            background: BLUE_GRADIENT,
            filter: "blur(180px)",
            opacity: 0.5,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            left: 900,
            top: 300,
            width: 600,
            height: 600,
            background: BLUE_GRADIENT,
            filter: "blur(200px)",
            opacity: 0.4,
          }}
        />

        {/* ── Card group (x=28, y=79, 1216×588) with 8px gaps ── */}
        <div className="absolute" style={{ left: 28, top: 79, width: 1216, height: 596 }}>
          {/* Row 1 — y=0, h=300. Gap=8px between cards so effective widths shrink */}

          {/* AI Agent Marketplace — x=0, w=616, h=300 */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: 0,
              top: 0,
              width: 616,
              height: 300,
              backgroundColor: colors.white,
              border: `1px solid ${colors.border.card}`,
              borderRadius: 24,
              padding: "48px 48px 100px",
            }}
          >
            {/* right-half purple gradient overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute"
              style={{
                left: 296,
                top: 0,
                width: 296,
                height: 300,
                background:
                  "linear-gradient(-90deg, rgba(186,158,255,0.1) 0%, rgba(186,158,255,0) 100%)",
              }}
            />

            <div className="relative flex flex-col gap-4">
              <h3 style={h3Style}>AI Agent Marketplace</h3>
              <p style={{ ...bodyStyle, width: 384 }}>
                The world&apos;s largest repository of fine-tuned, task-specific autonomous agents ready for work.
              </p>
              <a href="#" className="mt-2 inline-flex items-center gap-2">
                <span style={exploreLinkStyle}>Explore Marketplace</span>
                <Image src="/section-6/icon-arrow.svg" alt="" width={16} height={16} />
              </a>
            </div>
          </div>

          {/* Flexible Pricing — x=624, w=304, h=300 */}
          <SmallCard
            left={624}
            top={0}
            width={304}
            height={300}
            icon="/section-6/icon-pricing.svg"
            iconW={33}
            iconH={24}
            title="Flexible Pricing"
            body={"Usage-based, subscription, or\none-time license fees tailored to\nyour business."}
            paddingBottom={102}
          />

          {/* Workflow Builder — x=936, w=280, h=300 */}
          <SmallCard
            left={936}
            top={0}
            width={280}
            height={300}
            icon="/section-6/icon-workflow.svg"
            iconW={30}
            iconH={27}
            title="Workflow Builder"
            body={"Visual drag-and-drop interface\nto connect disparate agents into full pipelines."}
            paddingBottom={102}
          />

          {/* Row 2 — y=308, h=256. Row gap = 308-300=8px */}

          {/* Dev Ecosystem — x=0, w=304, h=256 */}
          <SmallCard
            left={0}
            top={308}
            width={304}
            height={256}
            icon="/section-6/icon-dev.svg"
            iconW={30}
            iconH={24}
            title="Dev Ecosystem"
            body={"Full SDK support for Python, JS,\nand Rust to integrate Shekel into\nany stack."}
            paddingBottom={58}
          />

          {/* Global Settlement — x=312, w=904, h=256 */}
          <div
            className="absolute flex flex-row items-center justify-center"
            style={{
              left: 312,
              top: 308,
              width: 904,
              height: 256,
              backgroundColor: colors.white,
              border: `1px solid ${colors.border.card}`,
              borderRadius: 24,
              padding: 48,
              gap: 48,
            }}
          >
            <div className="flex flex-col gap-4" style={{ width: 379 }}>
              <h3 style={h3Style}>Global Settlement Network</h3>
              <p style={bodyStyle}>
                Instant, low-latency payments for every agent{"\n"}execution using decentralized ledger technology.
              </p>
            </div>

            <div
              className="flex items-center justify-center"
              style={{
                width: 381,
                height: 160,
                backgroundColor: colors.background.networkPill,
                border: `1px solid ${colors.border.networkPill}`,
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
                    color: colors.text.networkPill,
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
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="absolute flex flex-col"
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        left,
        top,
        width,
        height,
        backgroundColor: colors.white,
        border: `1px solid ${colors.border.card}`,
        borderRadius: 24,
        padding: `32px 32px ${paddingBottom}px`,
        gap: 12,
      }}
    >
      <Image src={icon} alt="" width={iconW} height={iconH} />
      <div className="pt-3">
        <h4 style={h4Style}>{title}</h4>
        <p style={{ ...smallBodyStyle, whiteSpace: "pre-line", marginTop: 8 }}>
          {body}
        </p>
      </div>
    </motion.div>
  );
}

function FeaturesBentoMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{
        backgroundImage: "url('/section-6/features-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f0e8ff",
      }}
    >
      <div className="relative z-10 flex flex-col gap-6 px-6 py-14 sm:px-8">
        <MobileCard
          large
          title="AI Agent Marketplace"
          body="The world's largest repository of fine-tuned, task-specific autonomous agents ready for work."
          cta="Explore Marketplace"
        />
        <MobileCard
          icon="/section-6/icon-pricing.svg"
          iconW={33}
          iconH={24}
          title="Flexible Pricing"
          body="Usage-based, subscription, or one-time license fees tailored to your business."
        />
        <MobileCard
          icon="/section-6/icon-workflow.svg"
          iconW={30}
          iconH={27}
          title="Workflow Builder"
          body="Visual drag-and-drop interface to connect disparate agents into full pipelines."
        />
        <MobileCard
          icon="/section-6/icon-dev.svg"
          iconW={30}
          iconH={24}
          title="Dev Ecosystem"
          body="Full SDK support for Python, JS, and Rust to integrate Shekel into any stack."
        />
        <div
          className="flex flex-col gap-4 rounded-[24px] border p-6"
          style={{
            borderColor: colors.border.card,
            backgroundColor: colors.white,
          }}
        >
          <h3 style={h3Style}>Global Settlement Network</h3>
          <p style={bodyStyle}>
            Instant, low-latency payments for every agent execution using decentralized ledger technology.
          </p>
          <div
            className="flex items-center justify-center rounded-[16px] px-5 py-4"
            style={{
              backgroundColor: colors.background.networkPill,
              border: `1px solid ${colors.border.networkPill}`,
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
                  color: colors.text.networkPill,
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
}: {
  large?: boolean;
  icon?: string;
  iconW?: number;
  iconH?: number;
  title: string;
  body: string;
  cta?: string;
}) {
  return (
    <div
      className="flex flex-col gap-3 rounded-[24px] border p-6"
      style={{ borderColor: colors.border.card, backgroundColor: colors.white }}
    >
      {icon && iconW && iconH ? (
        <Image src={icon} alt="" width={iconW} height={iconH} />
      ) : null}
      <h3 style={large ? h3Style : h4Style}>{title}</h3>
      <p style={large ? bodyStyle : smallBodyStyle}>{body}</p>
      {cta ? (
        <a href="#" className="mt-1 inline-flex items-center gap-2">
          <span style={exploreLinkStyle}>{cta}</span>
          <Image src="/section-6/icon-arrow.svg" alt="" width={16} height={16} />
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
  background: BLUE_GRADIENT,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent",
  backgroundClip: "text" as const,
};
