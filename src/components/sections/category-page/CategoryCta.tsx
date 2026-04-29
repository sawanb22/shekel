"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// Figma: 506:4588
// Canvas: 1280 × 552

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const CTA_R = 24;
const GBtn = "linear-gradient(188.63deg, rgb(40, 100, 228) 35.4%, rgb(30, 154, 255) 67.2%, rgb(198, 248, 255) 151.2%)";
const TGRAD = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

function CtaSubline() {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontSize: 10,
        lineHeight: "16px",
        letterSpacing: 3.6,
        textTransform: "uppercase",
        textAlign: "center",
        color: colors.text.heading,
      }}
    >
      Join thousands of users and developers already using Shekel
    </p>
  );
}

function CtaTitle() {
  return (
    <h2
      className="m-0 capitalize"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 72,
        lineHeight: "72px",
        letterSpacing: -3.6,
        color: colors.text.heading,
        maxWidth: 808,
      }}
    >
      Start using AI agents today
    </h2>
  );
}

function CtaDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-visible md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0 overflow-hidden"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          backgroundColor: colors.black,
          borderRadius: CTA_R,
        }}
      >
        <div
          className="pointer-events-none absolute"
          style={{ left: -385, top: -397, width: 1841, height: 1252, overflow: "hidden" }}
        >
          <Image src="/section-5-category-page/cta-bg.png" alt="" width={1841} height={1252} className="h-full w-full object-cover" />
        </div>
        <div
          className="pointer-events-none absolute"
          style={{ left: 147, top: -566, width: 696, height: 696, transform: "scaleY(-1) rotate(180deg)" }}
        >
          <div className="absolute inset-[-0.37]">
            <Image src="/section-5-category-page/ellipse-a.svg" alt="" width={1500} height={1500} className="h-full w-full object-contain" />
          </div>
        </div>
        <div
          className="pointer-events-none absolute"
          style={{ left: 160, top: 523, width: 696, height: 696, transform: "scaleY(-1) rotate(180deg)" }}
        >
          <div className="absolute inset-[-0.37]">
            <Image src="/section-5-category-page/ellipse-a.svg" alt="" width={1500} height={1500} className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="pointer-events-none absolute" style={{ right: 0, top: -531, width: 696, height: 696 }}>
          <div className="absolute inset-[-0.37]">
            <Image src="/section-5-category-page/ellipse-b.svg" alt="" width={1500} height={1500} className="h-full w-full object-contain" />
          </div>
        </div>
        <div className="absolute" style={{ left: 79, top: 93, width: 808 }}>
          <CtaTitle />
        </div>
        <div className="absolute flex" style={{ left: 90, top: 291, gap: 16, alignItems: "center" }}>
          <div
            className="flex min-w-[200px] items-center justify-center"
            style={{
              background: GBtn,
              borderRadius: 10,
              padding: "20px 40px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: colors.white,
              }}
            >
              Explore Agents
            </p>
          </div>
          <div
            className="flex min-w-[200px] items-center justify-center"
            style={{
              border: `1px solid ${colors.brand.blueStart}`,
              borderRadius: 10,
              padding: "21px 41px",
            }}
          >
            <p
              className="m-0 bg-clip-text text-transparent"
              style={{ backgroundImage: TGRAD, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, letterSpacing: 1.4, textTransform: "uppercase" }}
            >
              Start Building
            </p>
          </div>
        </div>
        <div className="absolute" style={{ left: 103, top: 407, width: 423, textAlign: "left" as const }}>
          <CtaSubline />
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          zIndex: 120,
        }}
      >
        <div
          className="absolute"
          style={{
            right: -82,
            top: -242,
            width: 890,
            height: 1055,
            transform: "rotate(30deg)",
            transformOrigin: "center",
          }}
        >
          <Image
            src="/section-8/rocket.webp"
            alt=""
            fill
            className="object-contain"
            sizes="860px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function CtaMobile() {
  return (
    <section className="w-full py-6 md:hidden" style={{ backgroundColor: colors.black, borderRadius: CTA_R, margin: "0 12px" }}>
      <div className="flex flex-col gap-4 p-4">
        <h2
          className="m-0 capitalize"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: "clamp(32px, 8vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: -1.2,
            color: colors.text.heading,
          }}
        >
          Start using AI agents today
        </h2>
        <div className="flex flex-col gap-2 text-center">
          <div
            className="w-full py-2 font-semibold"
            style={{ background: GBtn, borderRadius: 10, color: colors.white, fontSize: 14, fontFamily: typography.fonts.inter }}
          >
            Explore Agents
          </div>
          <div
            className="w-full py-2 font-semibold"
            style={{
              border: `1px solid ${colors.brand.blueStart}`,
              borderRadius: 10,
              color: colors.brand.blueStart,
              fontSize: 14,
              fontFamily: typography.fonts.inter,
            }}
          >
            Start Building
          </div>
        </div>
        <CtaSubline />
        <div className="relative h-24 w-full">
          <Image src="/section-5-category-page/cta-bg.png" alt="" fill className="object-cover" style={{ borderRadius: 12, opacity: 0.3 }} />
        </div>
      </div>
    </section>
  );
}

export default function CategoryCta() {
  return (
    <>
      <CtaDesktop />
      <CtaMobile />
    </>
  );
}
