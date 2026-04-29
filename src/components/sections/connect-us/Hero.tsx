"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Hero.tsx  —  "Get in touch with us"
// Figma frame: 508-7438  "Frame 2147225665"
// Canvas: 1280 × 717 px   Page-y: 0   bg: #000000
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Ellipse 43662   (x=-19, y=-49)     1343×211   blur 1000, vertical blue gradient
//   Ellipse 43664   (x=-98, y=-139)    163×163    blur 203.4, vertical blue gradient
//   Ellipse 43666   (x=99, y=609)      1034×373   blur 203.4, vertical blue gradient
//   Ellipse 43665   (x=1252, y=-82)    163×163    blur 214.7, vertical blue gradient
//   Hero Image      (x=233, y=140)     843×749    /section-1-connect-us/hero-image.png
//   Bottom Fade     (x=-17, y=490)     1320×251   gradient #000000 -> transparent
//   Heading         (x=94, y=71)       516×198    Plus Jakarta Sans 800, 72/72, gradient
//   Body            (x=840, y=115)     400×64     Inter 400, 24/32, white
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GLOW_GRADIENT = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;
const HEADING_GRADIENT = "linear-gradient(193deg, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)";
const BOTTOM_FADE = "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)";

export default function Hero() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
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
        {/* Glow Ellipses */}
        <div
          className="absolute"
          style={{
            left: -19,
            top: -49,
            width: 1343,
            height: 211,
            background: GLOW_GRADIENT,
            filter: "blur(1000px)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: -98,
            top: -139,
            width: 163,
            height: 163,
            background: GLOW_GRADIENT,
            filter: "blur(203.4px)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: 99,
            top: 609,
            width: 1034,
            height: 373,
            background: GLOW_GRADIENT,
            filter: "blur(203.4px)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1252,
            top: -82,
            width: 163,
            height: 163,
            background: GLOW_GRADIENT,
            filter: "blur(214.7px)",
          }}
        />

        {/* Hero Image */}
        <div
          className="absolute"
          style={{ left: 233, top: 140, width: 843, height: 749 }}
        >
          <Image
            src="/section-1-connect-us/hero-image.png"
            alt="Connect with us illustration"
            width={843}
            height={749}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Bottom Fade Overlay */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: -17,
            top: 490,
            width: 1320,
            height: 251,
            background: BOTTOM_FADE,
          }}
        />

        {/* Heading */}
        <div
          className="absolute"
          style={{ left: 94, top: 71, width: 516, height: 198 }}
        >
          <SectionHeading fontSize={72} lineHeight="72px" />
        </div>

        {/* Body Text */}
        <div
          className="absolute"
          style={{ left: 840, top: 115, width: 400, height: 64 }}
        >
          <SectionBody fontSize={24} lineHeight="32px" />
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.black }}
    >
      {/* Background Glows for Mobile */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 opacity-60"
        style={{
          width: "120%",
          height: 200,
          background: GLOW_GRADIENT,
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-8 px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-6">
          <SectionHeading fontSize="clamp(40px, 10vw, 56px)" lineHeight="1.1" />
          <SectionBody fontSize="clamp(16px, 4vw, 18px)" lineHeight="1.5" />
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto mt-4 w-full max-w-[500px]">
          <Image
            src="/section-1-connect-us/hero-image.png"
            alt="Connect with us illustration"
            width={843}
            height={749}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Fade for mobile */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: 100,
          background: BOTTOM_FADE,
        }}
      />
    </section>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h1
      className="m-0"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 800,
        fontSize,
        lineHeight,
        letterSpacing: "-0.05em",
        background: HEADING_GRADIENT,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Get in touch with us
    </h1>
  );
}

function SectionBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      className="m-0"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: colors.white,
      }}
    >
      We&apos;re here to help you navigate the world of AI agents.
      <br />
      Premium support for modern builders.
    </p>
  );
}
