// WhatYouCanDo.tsx — Figma node 500:22092 "Body" (1280 wide, ~804px tall)
// Title + floating UI orchestration card + 3 bottom columns.

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const CANVAS_W = 1280;
const CANVAS_H = 804;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const bgWaves = "/section-7/bg-waves.svg";
const iconPrompt = "/section-7/icon-prompt.svg";
const iconCheck = "/section-7/icon-check.svg";
const iconClock = "/section-7/icon-clock.svg";
const iconContent = "/section-7/icon-content.svg";
const iconDesign = "/section-7/icon-design.svg";
const iconPublish = "/section-7/icon-publish.svg";
const iconArrow = "/section-7/icon-arrow.svg";
const iconArrowAlt = "/section-7/icon-arrow-alt.svg";

const workflowNodes = [
  { icon: iconContent, label: "Content AI", bg: colors.brand.blue, iconW: 18, iconH: 18 },
  { icon: iconDesign, label: "Design AI", bg: colors.brand.cyan, iconW: 19, iconH: 18 },
  { icon: iconPublish, label: "Publish AI", bg: colors.brand.blue, iconW: 19, iconH: 16 },
];

const columns = [
  {
    heading: "Run marketing campaigns",
    body: "Generate and automate multi-channel campaigns using AI agents.",
    link: "Explore marketing",
    icon: iconArrow,
  },
  {
    heading: "Build intelligent workflows",
    body: "Connect multiple AI agents to automate business processes.",
    link: "Explore workflows",
    icon: iconArrow,
  },
  {
    heading: "Scale with automation",
    body: "Deploy AI agents for support, finance, and operations.",
    link: "Explore automation",
    icon: iconArrowAlt,
  },
];

export default function WhatYouCanDo() {
  return (
    <>
      <WhatYouCanDoDesktop />
      <WhatYouCanDoMobile />
    </>
  );
}

function WhatYouCanDoDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        backgroundColor: colors.background.sectionAlt,
      }}
    >
      <div
        className="absolute left-0 top-0 flex flex-col"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          padding: "37px 32px 96px",
          gap: 64,
        }}
      >
        <Reveal className="w-full text-center">
          <Heading />
        </Reveal>
        <Reveal delay={0.1}>
          <VisualCard />
        </Reveal>
        <RevealStagger
          className="grid grid-cols-3 gap-x-16 pt-4"
          style={{ width: 1120, margin: "0 auto" }}
          stagger={0.12}
        >
          {columns.map((col) => (
            <RevealItem key={col.heading}>
              <BottomColumn col={col} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function Heading() {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize: 48,
        lineHeight: "48px",
        color: colors.text.heading,
      }}
    >
      What you can do with{" "}
      <span
        style={{
          background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Shekel
      </span>
    </h2>
  );
}

function VisualCard() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="relative w-full overflow-hidden"
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -4,
              boxShadow: "0px 20px 36px -20px rgba(53, 72, 109, 0.42)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{
        backgroundColor: colors.white,
        borderRadius: radiuses.card,
        height: 330,
      }}
    >
      <div
        className="pointer-events-none absolute"
        style={{
          top: 104,
          left: 243,
          width: 730,
          height: 122,
          background: `linear-gradient(to right, ${colors.brand.blue}, ${colors.brand.cyan})`,
          filter: "blur(60px)",
          opacity: 0.4,
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          left: 436,
          top: 170,
          width: 780,
          height: 220,
        }}
      >
        <Image src={bgWaves} alt="" fill className="object-fill object-left" priority />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 p-12">
        <TopInputBar />
        <div className="flex shrink-0 items-center gap-8">
          {workflowNodes.map((node, i) => (
            <div key={node.label} className="flex items-center gap-8">
              <WorkflowNode node={node} />
              {i < workflowNodes.length - 1 ? (
                <div
                  style={{
                    width: 48,
                    height: 2,
                    background:
                      i === 0
                        ? `linear-gradient(to right, ${colors.brand.blue}, ${colors.brand.cyan})`
                        : `linear-gradient(to right, ${colors.brand.cyan}, ${colors.brand.blue})`,
                    opacity: 0.4,
                    flexShrink: 0,
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <FloatingBadge
        top={66}
        right={102}
        content={
          <>
            <div
              className="flex shrink-0 items-center justify-center"
              style={{
                width: 24,
                height: 24,
                backgroundColor: colors.status.green,
                borderRadius: radiuses.full,
              }}
            >
              <Image src={iconCheck} alt="" width={11} height={8} />
            </div>
            <span style={badgeText}>12 Posts generated</span>
          </>
        }
      />
      <FloatingBadge
        top={148}
        left={97}
        content={
          <>
            <Image src={iconClock} alt="" width={20} height={20} />
            <span style={badgeText}>Scheduled</span>
          </>
        }
      />
      <FloatingBadge
        top={235}
        right={103}
        compact
        content={
          <>
            <div
              style={{
                backgroundColor: colors.overlay.blueSubtle,
                borderRadius: radiuses.tag,
                padding: "2px 8px",
              }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 10,
                  lineHeight: "15px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: colors.brand.blue,
                }}
              >
                Completed
              </span>
            </div>
            <span style={badgeText}>Success badge</span>
          </>
        }
      />
    </motion.div>
  );
}

const badgeText = {
  fontFamily: typography.fonts.inter,
  fontWeight: 600,
  fontSize: 14,
  lineHeight: "20px",
  color: colors.text.badgeDark,
  whiteSpace: "nowrap" as const,
};

function TopInputBar() {
  return (
    <div
      className="flex shrink-0 items-center gap-4"
      style={{
        width: 576,
        padding: 16,
        backgroundColor: colors.white,
        borderRadius: radiuses.icon,
        boxShadow: "0px 20px 50px 0px rgba(0,0,0,0.08)",
      }}
    >
      <div
        className="flex shrink-0 items-center justify-center"
        style={{
          width: 40,
          height: 40,
          backgroundColor: colors.overlay.blueSubtle,
          borderRadius: radiuses.inputIcon,
        }}
      >
        <Image src={iconPrompt} alt="" width={22} height={22} />
      </div>
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.text.inputLabel,
          flex: 1,
        }}
      >
        Generate marketing campaign
      </span>
      <div
        style={{
          width: 8,
          height: 24,
          backgroundColor: colors.overlay.blueFaint,
          borderRadius: radiuses.full,
          flexShrink: 0,
        }}
      />
    </div>
  );
}

function WorkflowNode({
  node,
}: {
  node: (typeof workflowNodes)[number];
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="relative flex flex-col items-center gap-2"
      style={{
        padding: 21,
        backgroundColor: colors.overlay.whiteGlass,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${colors.overlay.whiteNode}`,
        borderRadius: radiuses.card,
        boxShadow:
          "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          backgroundColor: node.bg,
          borderRadius: radiuses.icon,
        }}
      >
        <Image src={node.icon} alt={node.label} width={node.iconW} height={node.iconH} />
      </div>
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 12,
          lineHeight: "16px",
          color: colors.text.nodeLabel,
          whiteSpace: "nowrap",
        }}
      >
        {node.label}
      </span>
    </motion.div>
  );
}

function FloatingBadge({
  top,
  left,
  right,
  content,
  compact = false,
}: {
  top: number;
  left?: number;
  right?: number;
  content: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className="absolute flex items-center gap-3"
      style={{
        top,
        left,
        right,
        padding: compact ? "10px 17px" : "13px 17px",
        backgroundColor: colors.overlay.whiteGlass,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${colors.overlay.whiteBorder}`,
        borderRadius: radiuses.icon,
        boxShadow:
          "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
      }}
    >
      {content}
    </div>
  );
}

function BottomColumn({ col }: { col: (typeof columns)[number] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3
        style={{
          margin: 0,
          fontFamily: typography.fonts.poppins,
          fontWeight: 600,
          fontSize: 18,
          lineHeight: "28px",
          color: colors.text.heading,
        }}
      >
        {col.heading}
      </h3>
      <p
        style={{
          margin: 0,
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "26px",
          color: colors.text.bodyMuted,
        }}
      >
        {col.body}
      </p>
      <a
        href="#"
        className="group inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-1.5 transition-[transform,opacity,filter,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(40,100,228,0.28)] hover:bg-[rgba(236,242,255,0.95)] hover:opacity-100 hover:[filter:drop-shadow(0_4px_10px_rgba(40,100,228,0.34))] hover:shadow-[0px_12px_24px_-14px_rgba(40,100,228,0.52)]"
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {col.link}
        </span>
        <Image
          src={col.icon}
          alt=""
          width={12}
          height={12}
          className="transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:scale-105"
        />
      </a>
    </div>
  );
}

function WhatYouCanDoMobile() {
  return (
    <section
      className="block w-full md:hidden"
      style={{ backgroundColor: colors.background.sectionAlt }}
    >
      <div className="flex flex-col gap-10 px-6 py-16 sm:px-8">
        <Reveal className="text-center">
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(28px, 8vw, 40px)",
              lineHeight: 1.1,
              color: colors.text.heading,
            }}
          >
            What you can do with{" "}
            <span
              style={{
                background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shekel
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <div
            className="flex w-full flex-col items-center gap-6 p-6"
            style={{ backgroundColor: colors.white, borderRadius: radiuses.card }}
          >
            <TopInputBar />
            <div className="flex flex-wrap items-center justify-center gap-4">
              {workflowNodes.map((node) => (
                <WorkflowNode key={node.label} node={node} />
              ))}
            </div>
          </div>
        </Reveal>

        <RevealStagger className="flex flex-col gap-8" stagger={0.12}>
          {columns.map((col) => (
            <RevealItem key={col.heading}>
              <BottomColumn col={col} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
