"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// FaqHero.tsx — FAQ Hero Section
// Figma frame: 508:7763 "Frame 2147225665"
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function FaqHero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          backgroundColor: colors.black,
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
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
          {/* Background decoration */}
          <div
            className="absolute"
            style={{ left: 278, top: 186, width: 676, height: 577 }}
          >
            <Image
              src="/section-1-faq/main-image.png"
              alt=""
              width={676}
              height={577}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="absolute"
            style={{ left: 17, top: 245, width: 351.77, height: 380.8, filter: "blur(13.1px)" }}
          >
            <Image
              src="/section-1-faq/decor-1.png"
              alt=""
              width={352}
              height={381}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="absolute"
            style={{ left: 900, top: 495, width: 351.77, height: 380.8, filter: "blur(13.1px)" }}
          >
            <Image
              src="/section-1-faq/decor-2.png"
              alt=""
              width={352}
              height={381}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="absolute"
            style={{ left: -19, top: -49, width: 1343, height: 211, filter: "blur(1000px)", background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)" }}
          />

          <div
            className="absolute"
            style={{ left: -98, top: -139, width: 163, height: 163, filter: "blur(203px)", background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", borderRadius: "50%" }}
          />

          <div
            className="absolute"
            style={{ left: 1252, top: -82, width: 163, height: 163, filter: "blur(215px)", background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", borderRadius: "50%" }}
          />

          <div
            className="absolute"
            style={{ left: 0, top: 626, width: 34, height: 90, background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)" }}
          />

          <div
            className="absolute"
            style={{ left: -7, top: 468, width: 1293, height: 278, background: "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)" }}
          />


          {/* Text Content */}
          <div
            className="absolute"
            style={{ left: 230, top: 67, width: 752, height: 60 }}
          >
            <HeroHeading fontSize={60} lineHeight="60px" />
          </div>

          <div
            className="absolute"
            style={{ left: 342, top: 152, width: 597, height: 28 }}
          >
            <HeroBody fontSize={20} lineHeight="28px" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative flex w-full flex-col items-center overflow-hidden px-6 py-20 md:hidden"
        style={{
          backgroundColor: colors.black,
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
        }}
      >
        {/* Simplified Background for mobile */}
        <div
          className="absolute left-1/2 top-0 h-[300px] w-full max-w-[500px] -translate-x-1/2 rounded-full opacity-50 blur-[100px]"
          style={{ background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <HeroHeading fontSize={40} lineHeight="1.2" />
          <div className="mt-6">
            <HeroBody fontSize={16} lineHeight="24px" />
          </div>
        </div>
        
        <div className="relative z-0 mt-8 w-full max-w-sm">
             <Image
              src="/section-1-faq/main-image.png"
              alt=""
              width={676}
              height={577}
              className="h-auto w-full object-cover"
            />
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────

function HeroHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number;
  lineHeight: string;
}) {
  return (
    <h1
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        letterSpacing: "-0.05em",
        color: colors.white,
      }}
    >
      Frequently asked <span style={{ background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>questions</span>
    </h1>
  );
}

function HeroBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number;
  lineHeight: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 300,
        fontSize,
        lineHeight,
        color: "#C1C6D5",
      }}
    >
      Find answers about Shekel, AI agents, and how workflows work.
    </p>
  );
}
