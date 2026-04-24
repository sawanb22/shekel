"use client";

import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { colors, typography } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";
import { motion, useReducedMotion } from "framer-motion";

// LAYOUT MAP — Figma frame 500:21924 "Hero" (1280 × 717, logo strip extends to y=726)
// Root: bg #000000 (colors.black); fixed 1280×726 canvas scaled to viewport via CSS transform.
// Decorative layers (behind content):
//   - Ellipse 43662: x=-19, y=-49, 1343×211, linear-gradient(180°, brand.blueStart → brand.blueEnd), blur(1000px)
//   - Ellipse 43664: x=-98, y=-139, 163×163, same gradient, blur(203.4px)
//   - Ellipse 43665: x=1252, y=-82, 163×163, same gradient, blur(214.7px)
//   - Circuit lines SVG (Group 9210): x=412, y=50, 1566.67×1025.34 → /images/hero/circuit-lines.svg
// Robot (image 51): x=653, y=118, 645×645 → /images/hero/robot.webp
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
  { name: "Meta", src: "/images/hero/meta.png", x: 700, y: 22, w: 140, h: 44 },
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
  const prefersReducedMotion = useReducedMotion();
  return (
    <section
      className="relative hidden w-full overflow-hidden bg-black md:block"
      style={{
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
              style={{ left: 412, top: 20, width: 1566.67, height: 1025.34, opacity: 0.9 }}
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
            {/* 4 staggered purple depth panels — over lines, behind mascot — match Figma layered glass */}

        {/* 4 staggered purple depth panels — over lines, behind mascot — match Figma layered glass */}
        {/* Right side is flush to canvas edge (no right-side rounding), only left corners rounded */}
        {/* Outer → inner: inner is largest & most opaque (main glass area);
            outer panels are small stacked-sheet tabs peeking from top-left.
            All flush to right+bottom; only top-left & bottom-left corners rounded. */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 902, top: 246, width: 378, height: 480, background: "rgba(130, 72, 255, 0.06)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 860, top: 267, width: 420, height: 459, background: "rgba(130, 72, 255, 0.11)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 818, top: 288, width: 462, height: 438, background: "rgba(130, 72, 255, 0.17)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ left: 776, top: 309, width: 504, height: 417, background: "rgba(130, 72, 255, 0.22)", borderRadius: 0 }}
        />

        {/* Soft purple atmospheric glow — rendered AFTER panels so it sits on top */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: 700,
            top: 90,
            width: 760,
            height: 620,
            background:
              "radial-gradient(ellipse at center, rgba(146, 78, 255, 0.26) 0%, rgba(146, 78, 255, 0.12) 42%, rgba(146, 78, 255, 0.04) 68%, rgba(146, 78, 255, 0) 100%)",
            filter: "blur(28px)",
          }}
        />
        {/* Fade the line system at outer edges so corners feel diluted */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.08) 17%, rgba(0,0,0,0) 34%, rgba(0,0,0,0) 74%, rgba(0,0,0,0.16) 90%, rgba(0,0,0,0.38) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.1) 16%, rgba(0,0,0,0) 34%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: -8,
            top: -16,
            width: 280,
            height: 230,
            background:
              "radial-gradient(ellipse at 18% 14%, rgba(184, 204, 255, 0.24) 0%, rgba(144, 171, 255, 0.12) 38%, rgba(84, 116, 208, 0.04) 70%, rgba(0,0,0,0) 100%)",
            filter: "blur(12px)",
          }}
        />

        {/* Smooth black→purple blend inside circuit-line area */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: 180,
            top: 20,
            width: 1100,
            height: 706,
            background:
              "linear-gradient(120deg, rgba(0,0,0,0.52) 0%, rgba(28, 18, 58, 0.42) 26%, rgba(86, 48, 156, 0.34) 52%, rgba(126, 72, 214, 0.30) 76%, rgba(160, 98, 242, 0.28) 100%)",
            maskImage:
              "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,1) 56%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage:
              "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.72) 34%, rgba(0,0,0,1) 56%, rgba(0,0,0,1) 100%)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: 640,
            top: 150,
            width: 640,
            height: 460,
            background:
              "radial-gradient(ellipse at 60% 58%, rgba(255,255,255,0.96) 0%, rgba(252,245,255,0.84) 22%, rgba(231,198,255,0.56) 44%, rgba(192,132,255,0.28) 66%, rgba(192,132,255,0) 100%)",
            filter: "blur(12px)",
          }}
        />
        {/* Local white bloom behind mascot body/legs (matches reference hotspot) */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: 760,
            top: 310,
            width: 520,
            height: 360,
            background:
              "radial-gradient(ellipse at 62% 56%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.86) 24%, rgba(245,228,255,0.54) 48%, rgba(210,160,255,0.24) 70%, rgba(210,160,255,0) 100%)",
            filter: "blur(14px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            left: 720,
            top: 240,
            width: 620,
            height: 460,
            background:
              "radial-gradient(ellipse at 64% 58%, rgba(255,255,255,0.62) 0%, rgba(246,233,255,0.34) 40%, rgba(196,136,255,0.14) 68%, rgba(196,136,255,0) 100%)",
            filter: "blur(22px)",
          }}
        />

        {/* Removed extra right rectangle to avoid visible block behind mascot */}

        {/* Robot character — floating animation */}
        <Float
          amplitude={10}
          rotate={1.5}
          duration={7}
          className="pointer-events-none absolute z-20"
          style={{ left: 653, top: 118, width: 645, height: 645 }}
        >
          <Image
            src="/images/hero/robot.webp"
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
            left: 24,
            top: 132,
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
            textShadow: "0 4px 28px rgba(0, 0, 0, 0.42)",
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
            left: 33,
            top: 201,
            width: 628,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 88,
            lineHeight: "1.14em",
            paddingBottom: 14,
            background: BLUE_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 6px 30px rgba(8, 6, 20, 0.5)",
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
            left: 28,
            top: 365,
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
          style={{ left: 30, top: 511, gap: 14 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.38 }}
        >
          <Button variant="primary">Join Waitlist</Button>
          <Button variant="outline">Explore Platform</Button>
        </motion.div>

        {/* Logo strip (Frame 2147225678) — auto-scrolling marquee */}
        <div
          className="absolute z-10 overflow-hidden"
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
                {PARTNERS.map((p) => (
                  <motion.div
                    key={`${copyIdx}-${p.name}`}
                    className="relative flex-shrink-0"
                    style={{ width: p.w, height: p.h }}
                    whileHover={prefersReducedMotion ? undefined : { y: -1.5, scale: 1.02 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      sizes={`${p.w}px`}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

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
      {/* Restored ambient gradient and circuit detail for mobile */}
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
      {/* Purple glow anchored behind mascot */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 420,
          height: 320,
          background:
            "radial-gradient(ellipse at center, rgba(186,132,255,0.42) 0%, rgba(148,88,255,0.26) 40%, rgba(108,64,220,0.14) 66%, rgba(108,64,220,0) 100%)",
          filter: "blur(18px)",
        }}
      />
      {/* Desktop-style circuit backdrop behind mascot (mobile adaptation, no bg image) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[226px] -translate-x-1/2 -translate-y-1/2"
        style={{ width: 520, height: 420, opacity: 0.68 }}
      >
        <Image
          src="/images/hero/circuit-lines.svg"
          alt=""
          fill
          sizes="520px"
          className="object-contain object-center"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[226px] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 420,
          height: 300,
          background:
            "radial-gradient(ellipse at 55% 55%, rgba(255,255,255,0.88) 0%, rgba(239,214,255,0.48) 34%, rgba(171,106,248,0.22) 62%, rgba(171,106,248,0) 100%)",
          filter: "blur(14px)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8 px-6 pt-20 pb-10 text-center">
        {/* Robot — compact, centered, floating */}
        <Float
          amplitude={8}
          duration={7}
          className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]"
        >
          <Image
            src="/images/hero/robot.webp"
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
            lineHeight: "1.1em",
            paddingBottom: 6,
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

      {/* Logo strip — auto-scrolling marquee (no manual horizontal scroll) */}
      <div
        className="relative overflow-hidden"
        style={{
          height: 72,
          backgroundColor: colors.black,
          borderTop: `1px solid ${BORDER_SOFT}`,
          borderBottom: `1px solid ${BORDER_SOFT}`,
        }}
      >
        <motion.div
          className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((copyIdx) => (
            <div
              key={copyIdx}
              className="flex items-center"
              style={{ minWidth: 720, height: 72, gap: 32, padding: "0 24px" }}
            >
              {PARTNERS.map((p) => (
                <div
                  key={`${copyIdx}-${p.name}`}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
