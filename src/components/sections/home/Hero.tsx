"use client";

import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { colors, typography } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";
import { motion } from "framer-motion";

// LAYOUT MAP — Figma frame 500:21924 "Hero" (1280 × 717, logo strip extends to y=726)
// Root: bg #000000 (colors.black); fixed 1280×726 canvas scaled to viewport via CSS transform.
// Decorative layers (behind content):
//   - Ellipse 43662: x=-19, y=-49, 1343×211, linear-gradient(180°, brand.blueStart → brand.blueEnd), blur(1000px)
//   - Ellipse 43664: x=-98, y=-139, 163×163, same gradient, blur(203.4px)
//   - Ellipse 43665: x=1252, y=-82, 163×163, same gradient, blur(214.7px)
//   - Circuit lines SVG (Group 9210): x=412, y=50, 1566.67×1025.34 → /images/hero/circuit-lines.svg
// Robot (image 51): x=653, y=118, 645×645 → /images/hero/robot.png
// Left text column:
//   - "The Marketplace for": x=56, y=82, 628×72, Poppins 500 64/72, letter -5.62%,
//     fill linear-gradient(193°, #ffffff 50% → rgba(255,255,255,0) 100%) clipped to text
//   - "AI Agents": x=65, y=151, 628×132, Poppins 500 88, fill linear-gradient(180°, brand.blueStart → brand.blueEnd) clipped to text
//   - Subtext: x=60, y=315, 508.73×98, Inter 400 20/32.5, color text.badgeUpcoming (#a7aab9)
//   - Button row: x=62, y=461, row gap 14
//     • Primary "Join Waitlist" & Outline "Explore Platform" via shared Button component
// Logo strip (Frame 2147225678): x=-4, y=637, 1291×89, bg #000, top+bottom border rgba(255,255,255,0.2)
//   Partner logos (x,y,w×h) at their Figma coords inside strip.
// Scaling strategy: inner canvas is pinned at 1280×726. Section height + inner transform
// use `min(1, 100vw/1280)` so it looks 1:1 at 1280+ and proportionally scales on narrower viewports.

type Partner = {
  name: string;
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const PARTNERS: Partner[] = [
  { name: "OpenAI", src: "/images/hero/openai.png", x: -22, y: 31, w: 103, h: 28 },
  { name: "Google AI", src: "/images/hero/google-ai.png", x: 132, y: 3, w: 134, h: 73 },
  { name: "Anthropic", src: "/images/hero/anthropic.svg", x: 302, y: -16, w: 185, h: 123 },
  { name: "Azure", src: "/images/hero/azure.png", x: 561, y: 27, w: 90, h: 26 },
  { name: "Meta", src: "/images/hero/meta.png", x: 724, y: 36, w: 95, h: 19 },
  { name: "Notion", src: "/images/hero/notion.png", x: 893, y: 9, w: 102, h: 72 },
  { name: "Slack", src: "/images/hero/slack.png", x: 1050, y: 24, w: 103, h: 42 },
  { name: "AWS", src: "/images/hero/aws.png", x: 1208, y: 19, w: 50, h: 50 },
];

const BLUE_GRADIENT = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;
const BORDER_SOFT = "rgba(255,255,255,0.2)";

// Figma canvas dimensions — all child coords are expressed in these pixels.
const CANVAS_W = 1280;
const CANVAS_H = 726;

// Uniform scale tied to the section's container width (100cqw) so the composition
// always matches Figma at every viewport — including widths greater than 1280 (scales up)
// and smaller than 1280 (scales down). Using cqw instead of vw avoids double-counting
// the vertical scrollbar width that otherwise causes horizontal overflow.
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function Hero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <HeroDesktop />
      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
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
        {/* Blurred blue ellipses */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
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
          className="pointer-events-none absolute rounded-full"
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
          className="pointer-events-none absolute rounded-full"
          style={{
            left: 1252,
            top: -82,
            width: 163,
            height: 163,
            background: BLUE_GRADIENT,
            filter: "blur(214.7px)",
          }}
        />

        {/* Circuit-lines SVG background (Group 9210) */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 412, top: 50, width: 1566.67, height: 1025.34 }}
        >
          <Image
            src="/images/hero/circuit-lines.svg"
            alt=""
            fill
            sizes="1567px"
            className="object-contain object-left-top"
            priority
          />
        </div>

        {/* Robot character — floating animation */}
        <Float
          amplitude={10}
          rotate={1.5}
          duration={7}
          className="pointer-events-none absolute"
          style={{ left: 653, top: 118, width: 645, height: 645 }}
        >
          <Image
            src="/images/hero/robot.png"
            alt="AI robot hero illustration"
            fill
            sizes="645px"
            className="object-contain"
            priority
          />
        </Float>

        {/* Heading line 1: "The Marketplace for" */}
        <motion.h1
          className="absolute m-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            left: 56,
            top: 82,
            width: 628,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 64,
            lineHeight: "72px",
            letterSpacing: "-0.0562em",
            background:
              "linear-gradient(193deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The Marketplace for
        </motion.h1>

        {/* Heading line 2: "AI Agents" */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          style={{
            left: 65,
            top: 151,
            width: 628,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 88,
            lineHeight: "1em",
            background: BLUE_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI Agents
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="absolute m-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          style={{
            left: 60,
            top: 315,
            width: 508.73,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "32.5px",
            color: colors.text.badgeUpcoming,
          }}
        >
          Discover, deploy, and monetize high-performance decentralized
          intelligence. The premier ecosystem for chaining autonomous
          workflows across industries.
        </motion.p>

        {/* Button row */}
        <motion.div
          className="absolute flex flex-row items-center"
          style={{ left: 62, top: 461, gap: 14 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
        >
          <Button variant="primary">Join Waitlist</Button>
          <Button variant="outline">Explore Platform</Button>
        </motion.div>

        {/* Logo strip (Frame 2147225678) */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: -4,
            top: 637,
            width: 1291,
            height: 89,
            backgroundColor: colors.black,
            borderTop: `1px solid ${BORDER_SOFT}`,
            borderBottom: `1px solid ${BORDER_SOFT}`,
          }}
        >
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="absolute"
              style={{ left: p.x, top: p.y, width: p.w, height: p.h }}
            >
              <Image
                src={p.src}
                alt={p.name}
                fill
                sizes={`${p.w}px`}
                className="object-contain"
              />
            </div>
          ))}

          {/* Fade overlays anchored to strip edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              left: 0,
              top: 0,
              width: 34,
              height: 89,
              background:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              right: 0,
              top: 0,
              width: 34,
              height: 89,
              background:
                "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function HeroMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.black }}
    >
      {/* Blurred blue glow — single large ellipse for ambient color */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: "50%",
          top: -80,
          width: "140%",
          height: 320,
          transform: "translateX(-50%)",
          background: BLUE_GRADIENT,
          filter: "blur(120px)",
          opacity: 0.55,
        }}
      />
      {/* Circuit lines — subtle, scaled down, anchored top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute opacity-40"
        style={{ right: -120, top: 0, width: 600, height: 420 }}
      >
        <Image
          src="/images/hero/circuit-lines.svg"
          alt=""
          fill
          sizes="600px"
          className="object-contain object-right-top"
          priority
        />
      </div>

      <div className="relative flex flex-col items-center gap-8 px-6 pt-20 pb-10 text-center">
        {/* Robot — compact, centered, floating */}
        <Float
          amplitude={8}
          duration={7}
          className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]"
        >
          <Image
            src="/images/hero/robot.png"
            alt="AI robot hero illustration"
            fill
            sizes="(max-width: 640px) 260px, 320px"
            className="object-contain"
            priority
          />
        </Float>

        {/* Heading line 1 */}
        <h1
          className="m-0"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: "clamp(32px, 9vw, 48px)",
            lineHeight: 1.05,
            letterSpacing: "-0.0562em",
            background:
              "linear-gradient(193deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The Marketplace for
        </h1>

        {/* Heading line 2 */}
        <div
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: "clamp(44px, 13vw, 72px)",
            lineHeight: 1,
            background: BLUE_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI Agents
        </div>

        {/* Subtext */}
        <p
          className="m-0 max-w-[480px]"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "26px",
            color: colors.text.badgeUpcoming,
          }}
        >
          Discover, deploy, and monetize high-performance decentralized
          intelligence. The premier ecosystem for chaining autonomous
          workflows across industries.
        </p>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2">
          <Button variant="primary">Join Waitlist</Button>
          <Button variant="outline">Explore Platform</Button>
        </div>
      </div>

      {/* Logo strip — horizontal scroll-snap so all partners stay visible */}
      <div
        className="relative flex items-center overflow-x-auto"
        style={{
          height: 72,
          backgroundColor: colors.black,
          borderTop: `1px solid ${BORDER_SOFT}`,
          borderBottom: `1px solid ${BORDER_SOFT}`,
        }}
      >
        <div className="flex min-w-full flex-row items-center gap-8 px-6">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="relative flex-shrink-0"
              style={{ width: p.w * 0.75, height: p.h * 0.75 }}
            >
              <Image
                src={p.src}
                alt={p.name}
                fill
                sizes={`${Math.round(p.w * 0.75)}px`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
