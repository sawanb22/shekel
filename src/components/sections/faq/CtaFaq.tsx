"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaFaq.tsx — FAQ CTA Section
// Figma frame: 508:7911 "Frame 2147225680"
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function CtaFaq() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden px-[32px] pb-[96px] pt-[32px] md:block"
        style={{
          backgroundColor: colors.white,
        }}
      >
        <div
          className="relative mx-auto w-full max-w-[1216px] overflow-hidden rounded-[24px]"
          style={{
            backgroundColor: colors.black,
            aspectRatio: `1216 / ${CANVAS_H}`,
            containerType: "inline-size",
          }}
        >
          <div
            className="absolute left-0 top-0 w-full"
            style={{
              height: CANVAS_H,
              transform: `scale(calc(100cqw / 1216))`,
              transformOrigin: "top left",
            }}
          >
            {/* Background Image */}
            <div
              className="absolute"
              style={{ left: -385, top: -397, width: 1841, height: 1252 }}
            >
              <Image
                src="/section-4-faq/bg.png"
                alt=""
                width={1841}
                height={1252}
                className="h-full w-full object-cover opacity-80"
              />
            </div>

            {/* Glowing Ellipse */}
            <div
              className="absolute"
              style={{ left: -549, top: -566, width: 696, height: 696, filter: "blur(257px)", background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", borderRadius: "50%" }}
            />

            {/* Text Content */}
            <div
              className="absolute"
              style={{ left: 109, top: 112, width: 612, height: 159 }}
            >
              <h2
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 72,
                  lineHeight: "72px",
                  letterSpacing: "-0.05em",
                  textTransform: "capitalize",
                  color: colors.white,
                }}
              >
                Start using AI agents today
              </h2>
            </div>

            {/* Buttons */}
            <div
              className="absolute flex items-center"
              style={{ left: 101, top: 315, gap: 16 }}
            >
              <button
                className="rounded-[10px]"
                style={{
                  padding: "20px 40px",
                  background: "linear-gradient(160deg, rgba(40, 100, 228, 1) 9%, rgba(30, 154, 255, 1) 72%, rgba(198, 248, 255, 1) 100%)",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: colors.white,
                }}
              >
                Explore Agents
              </button>
              <button
                className="rounded-[10px] border border-solid"
                style={{
                  padding: "20px 40px",
                  borderImageSource: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)",
                  borderImageSlice: 1,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Start Building
              </button>
            </div>

            {/* Subtext */}
            <div
              className="absolute"
              style={{ left: 115, top: 426, width: 423, height: 16 }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 10,
                  lineHeight: "16px",
                  letterSpacing: "0.36em",
                  textTransform: "uppercase",
                  color: colors.white,
                  opacity: 0.8,
                }}
              >
                Join thousands of users and developers already using Shekel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PHONE (< 768px) — stacked, readable reflow
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative block w-full overflow-hidden px-6 py-12 md:hidden"
        style={{ backgroundColor: colors.white }}
      >
        <div
          className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-3xl px-6 py-16 text-center"
          style={{ backgroundColor: colors.black }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/section-4-faq/bg.png"
              alt=""
              fill
              className="object-cover opacity-60"
            />
          </div>
          
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Glowing Ellipse */}
          <div
            className="absolute left-1/2 top-0 z-0 h-[300px] w-full max-w-[500px] -translate-x-1/2 rounded-full opacity-50 blur-[100px]"
            style={{ background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)" }}
          />

          <div className="relative z-10 flex w-full flex-col gap-8">
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 48,
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                textTransform: "capitalize",
                color: colors.white,
              }}
            >
              Start using AI agents today
            </h2>

            <div className="flex w-full flex-col gap-4">
              <button
                className="w-full rounded-[10px]"
                style={{
                  padding: "16px 32px",
                  background: "linear-gradient(160deg, rgba(40, 100, 228, 1) 9%, rgba(30, 154, 255, 1) 72%, rgba(198, 248, 255, 1) 100%)",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: colors.white,
                }}
              >
                Explore Agents
              </button>
              <button
                className="relative w-full rounded-[10px]"
                style={{
                  padding: "16px 32px",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <div className="absolute inset-0 rounded-[10px] p-[1px]" style={{ background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
                <span style={{ background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Start Building
                </span>
              </button>
            </div>

            <p
              className="mt-4"
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "16px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: colors.white,
                opacity: 0.8,
              }}
            >
              Join thousands of users and developers already using Shekel
            </p>
          </div>
        </div>
      </section>
    </>
  );
}