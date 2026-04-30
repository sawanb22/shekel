// WhatYouCanDo.tsx — Figma node 500:22092 "Body" (1280 wide, ~804px tall)
// Title + floating UI orchestration card + 3 bottom columns.

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";
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
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        backgroundColor: isDark ? "#101420" : colors.background.sectionAlt,
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
          <Heading isDark={isDark} />
        </Reveal>
        <Reveal delay={0.1}>
          <VisualCard isDark={isDark} />
        </Reveal>
        <RevealStagger
          className="grid grid-cols-3 gap-x-16 pt-4"
          style={{ width: 1120, margin: "0 auto" }}
          stagger={0.12}
        >
          {columns.map((col) => (
            <RevealItem key={col.heading}>
              <BottomColumn col={col} isDark={isDark} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function Heading({ isDark }: { isDark: boolean }) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize: 48,
        lineHeight: "48px",
        color: isDark ? colors.white : colors.text.heading,
        background: isDark
          ? "linear-gradient(183.67deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
          : "none",
        WebkitBackgroundClip: isDark ? "text" : "border-box",
        WebkitTextFillColor: isDark ? "transparent" : "unset",
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

function VisualCard({ isDark }: { isDark: boolean }) {
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
        background: isDark
          ? "linear-gradient(#000000, #000000) padding-box, linear-gradient(145deg, rgba(71,109,214,0.38) 0%, rgba(43,58,98,0.2) 45%, rgba(24,31,52,0.14) 100%) border-box"
          : colors.white,
        border: isDark ? "1px solid transparent" : "none",
        borderRadius: radiuses.card,
        height: 330,
      }}
    >
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
        <Image
          src={bgWaves}
          alt=""
          fill
          className="object-fill object-left"
          style={{ opacity: 0.7, filter: "contrast(1.22) saturate(1.2)" }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 p-12">
        <TopInputBar isDark={isDark} />
        <div className="flex shrink-0 items-center gap-8">
          {workflowNodes.map((node, i) => (
            <div key={node.label} className="flex items-center gap-8">
              <WorkflowNode node={node} isDark={isDark} />
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
        isDark={isDark}
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
        isDark={isDark}
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
        isDark={isDark}
      />
    </motion.div>
  );
}

const badgeText = {
  fontFamily: typography.fonts.inter,
  fontWeight: 600,
  fontSize: 14,
  lineHeight: "20px",
  color: "#7c7e81",
  whiteSpace: "nowrap" as const,
};

function TopInputBar({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="flex w-full min-w-0 max-w-full shrink items-center gap-3 sm:gap-4"
      style={{
        width: "min(576px, 100%)",
        padding: 16,
        backgroundColor: isDark ? "#1b1a1a" : colors.white,
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
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
          color: isDark ? "#475569" : colors.text.inputLabel,
          flex: 1,
          minWidth: 0,
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
  isDark,
}: {
  node: (typeof workflowNodes)[number];
  isDark: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative flex flex-col items-center gap-2"
      style={{
        padding: 21,
        backgroundColor: isDark ? "#1b1a1a" : colors.overlay.whiteGlass,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : `1px solid ${colors.overlay.whiteNode}`,
        borderRadius: radiuses.card,
        boxShadow:
          "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)",
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 48,
          height: 48,
          background: isHovered
            ? `linear-gradient(180deg, ${colors.brand.blueStart} 0%, #d8e6ff 100%)`
            : isDark
              ? "#1f2937"
              : node.bg,
          border: isHovered ? "none" : isDark ? "1px solid rgba(255,255,255,0.08)" : "none",
          borderRadius: radiuses.icon,
          boxShadow: isHovered ? "0px 8px 20px rgba(40,100,228,0.32)" : "none",
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
          color: isDark ? "#334155" : colors.text.nodeLabel,
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
  isDark,
}: {
  top: number;
  left?: number;
  right?: number;
  content: React.ReactNode;
  compact?: boolean;
  isDark: boolean;
}) {
  return (
    <div
      className="absolute flex items-center gap-3"
      style={{
        top,
        left,
        right,
        padding: compact ? "10px 17px" : "13px 17px",
        backgroundColor: isDark ? "#1b1a1a" : colors.overlay.whiteGlass,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : `1px solid ${colors.overlay.whiteBorder}`,
        borderRadius: radiuses.icon,
        boxShadow:
          "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
      }}
    >
      {content}
    </div>
  );
}

function BottomColumn({ col, isDark }: { col: (typeof columns)[number]; isDark: boolean }) {
  return (
    <div className="flex flex-col gap-4 opacity-100 transition-[transform,opacity] duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:opacity-80">
      <h3
        style={{
          margin: 0,
          fontFamily: typography.fonts.poppins,
          fontWeight: 600,
          fontSize: 18,
          lineHeight: "28px",
          color: isDark ? colors.white : colors.text.heading,
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
          color: isDark ? colors.white : colors.text.bodyMuted,
        }}
      >
        {col.body}
      </p>
      <a
        href="#"
        className="group inline-flex items-center gap-1 rounded-full px-3 py-1.5"
      >
        <span
          className="transition-[color] duration-200 ease-out group-hover:bg-clip-text group-hover:text-transparent group-hover:[-webkit-text-fill-color:transparent]"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            color: colors.brand.blueStart,
            background: `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`,
            WebkitBackgroundClip: "text",
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
        />
      </a>
    </div>
  );
}

function WhatYouCanDoMobile() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="block w-full overflow-x-clip md:hidden"
      style={{ backgroundColor: isDark ? "#101420" : colors.background.sectionAlt }}
    >
      <div className="flex min-w-0 max-w-full flex-col gap-10 px-6 py-16 sm:px-8">
        <Reveal className="text-center">
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(28px, 8vw, 40px)",
              lineHeight: 1.1,
              color: isDark ? colors.white : colors.text.heading,
              background: isDark
                ? "linear-gradient(183.67deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
                : "none",
              WebkitBackgroundClip: isDark ? "text" : "border-box",
              WebkitTextFillColor: isDark ? "transparent" : "unset",
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
            className="flex w-full min-w-0 max-w-full flex-col items-center gap-6 overflow-hidden p-6"
            style={{
              background: isDark
                ? "linear-gradient(#000000, #000000) padding-box, linear-gradient(145deg, rgba(71,109,214,0.36) 0%, rgba(43,58,98,0.2) 45%, rgba(24,31,52,0.14) 100%) border-box"
                : colors.white,
              borderRadius: radiuses.card,
              border: isDark ? "1px solid transparent" : "none",
            }}
          >
            <TopInputBar isDark={isDark} />
            <div className="flex flex-wrap items-center justify-center gap-4">
              {workflowNodes.map((node) => (
                <WorkflowNode key={node.label} node={node} isDark={isDark} />
              ))}
            </div>
          </div>
        </Reveal>

        <RevealStagger className="flex flex-col gap-8" stagger={0.12}>
          {columns.map((col) => (
            <RevealItem key={col.heading}>
              <BottomColumn col={col} isDark={isDark} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
