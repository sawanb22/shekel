// CtaWaitlist.tsx — Figma node 500:22272 "CTA Waitlist" (1280 × 552)
// Large heading + email input + join button, with decorative blurred ellipse.

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { Float } from "@/components/shared/motion/Float";
import ctaBgImage from "../../../../new-images/bg (1).webp";
import darkCircuitBg from "../../../../new-images/Group 9210 (1).webp";

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

export default function CtaWaitlist() {
  return (
    <>
      <CtaDesktop />
      <CtaMobile />
    </>
  );
}

function CtaDesktop() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="hidden w-full md:block"
      style={{ backgroundColor: isDark ? colors.black : colors.white }}
    >
      <div className="pb-16">
        <div
          className="relative w-full rounded-[24px]"
          style={{
            aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
            containerType: "inline-size",
            backgroundImage: isDark ? "none" : `url("${ctaBgImage.src}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: isDark ? "#000000" : "#f0e8ff",
          }}
        >
          {isDark ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[24px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2,6,16,0.36) 0%, rgba(4,8,20,0.3) 42%, rgba(12,10,28,0.38) 72%, rgba(24,16,46,0.42) 100%)",
              }}
            />
          ) : null}
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            {isDark ? (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute"
                  style={{
                    left: -90,
                    top: -90,
                    width: 520,
                    height: 320,
                    background:
                      "radial-gradient(ellipse at 16% 18%, rgba(128,173,255,0.98) 0%, rgba(94,140,248,0.9) 28%, rgba(56,96,212,0.62) 50%, rgba(24,58,156,0.30) 66%, rgba(24,58,156,0) 100%)",
                    filter: "blur(56px)",
                    opacity: 1,
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute"
                  style={{
                    left: -120,
                    bottom: -120,
                    width: 560,
                    height: 360,
                    background:
                      "radial-gradient(ellipse at 18% 82%, rgba(128,173,255,0.96) 0%, rgba(94,140,248,0.84) 32%, rgba(56,96,212,0.56) 54%, rgba(24,58,156,0.26) 70%, rgba(24,58,156,0) 100%)",
                    filter: "blur(60px)",
                    opacity: 0.98,
                  }}
                />
              </>
            ) : null}
            <div
              className="absolute left-0 top-0"
              style={{
                width: CANVAS_W,
                height: CANVAS_H,
                transform: `scale(${SCALE})`,
                transformOrigin: "top left",
              }}
            >
        {/* Decorative blurred ellipse — Figma x=-549, y=-566, w=696, h=696 */}
        {!isDark ? (
          <div
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              left: -549,
              top: -566,
              width: 696,
              height: 696,
              background: BLUE_GRADIENT,
              filter: "blur(257.5px)",
            }}
          />
        ) : null}

        {/* Heading — Figma x=81, y=62, w=612, textCase TITLE */}
        <div className="absolute" style={{ left: 81, top: 62, width: 612 }}>
          <Reveal>
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 500,
                fontSize: 60,
                lineHeight: "60px",
                letterSpacing: "-0.05em",
                color: isDark ? colors.white : "#000000",
                background: isDark
                  ? "linear-gradient(202.88deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
                  : "none",
                WebkitBackgroundClip: isDark ? "text" : "border-box",
                WebkitTextFillColor: isDark ? "transparent" : "unset",
              }}
            >
              Join The Future Of
              <br />
              <span
                style={{
                  background: BLUE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Automation
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p
            className="absolute"
            style={{
              left: 84,
              top: 251,
              width: 463,
              margin: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 20,
              lineHeight: "28px",
              color: isDark ? "rgba(255, 255, 255, 0.73)" : "rgba(0, 0, 0, 0.73)",
            }}
          >
            Get early access to the developer beta and start building the agents
            that will power the next generation economy.
          </p>
        </Reveal>

        {isDark ? (
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              left: 560,
              top: 58,
              width: 620,
              height: 430,
              background:
                "radial-gradient(ellipse at center, rgba(181,106,255,0.30) 0%, rgba(142,82,232,0.18) 44%, rgba(95,56,171,0.10) 68%, rgba(95,56,171,0) 100%)",
              filter: "blur(10px)",
              opacity: 0.85,
            }}
          />
        ) : null}

        <Reveal delay={0.2}>
          <div
            className="absolute"
            style={{ left: 84, top: 368, width: 448, height: 72 }}
          >
            <WaitlistForm isDark={isDark} />
          </div>
        </Reveal>
            </div>
          </div>
          {/* Keep mascot position, but render outside clipped layer so feet are not cut */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-20"
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
                className="absolute"
                style={{ right: 0, top: 6, width: 780, height: 540, opacity: 0.72 }}
              >
                <Image
                  src={darkCircuitBg}
                  alt=""
                  width={780}
                  height={540}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            ) : null}
            <Float
              amplitude={14}
              rotate={2}
              duration={5.5}
              className="absolute"
              style={{ left: 366, top: -12, width: 914, height: 652 }}
            >
              <Image
                src="/section-11/cta-robot.webp"
                alt=""
                width={914}
                height={652}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}

function WaitlistForm({ isDark }: { isDark: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-3"
      style={{ width: "100%", height: "100%" }}
    >
      <motion.div
        className="relative"
        style={{ width: 282, height: 56 }}
      >
        <motion.input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="h-full w-full outline-none"
          animate={{
            boxShadow: focused
              ? "0 0 0 3px rgba(40, 100, 228, 0.18), 0px 12px 26px -18px rgba(40, 100, 228, 0.45)"
              : hovered
                ? "0px 10px 22px -18px rgba(40, 100, 228, 0.34)"
                : "0px 0px 0px 0px rgba(40, 100, 228, 0)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            padding: "18px 24px",
            borderRadius: 24,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            color: "#6B7280",
            backgroundColor: isDark ? "rgba(10,14,24,0.5)" : colors.white,
            border: `1px solid ${
              focused
                ? colors.brand.blueStart
                : hovered
                  ? "rgba(40,100,228,0.58)"
                  : isDark
                    ? "rgba(255,255,255,0.3)"
                    : "#e5e7eb"
            }`,
          }}
        />
      </motion.div>

      <motion.button
        type="submit"
        className="flex h-14 items-center justify-center text-white"
        style={{
          padding: "0 32px",
          background: colors.brand.blue,
          borderRadius: 24,
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          whiteSpace: "nowrap",
          boxShadow: "0 8px 18px -10px rgba(40, 100, 228, 0.45)",
        }}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.03,
                background: BLUE_GRADIENT,
                boxShadow: "0 12px 28px -6px rgba(40, 100, 228, 0.65)",
                filter: "brightness(1.15)",
              }
        }
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        Join Waitlist
      </motion.button>
    </form>
  );
}

function CtaMobile() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{
        backgroundImage: isDark ? "none" : `url("${ctaBgImage.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: isDark ? "#000000" : "#f0e8ff",
      }}
    >
      {isDark ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 200px 100px at 100% 0%, rgba(17,17,17,1) 0%, rgba(11,11,11,1) 100%)",
              opacity: 0.9,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-80px] top-[40px] h-[280px] w-[320px]"
            style={{ opacity: 0.66 }}
          >
            <Image
              src={darkCircuitBg}
              alt=""
              fill
              sizes="320px"
              style={{ objectFit: "contain" }}
            />
          </div>
        </>
      ) : null}
      {/* Decorative robot — top-right by headline (mobile), behind copy */}
      <Float
        amplitude={12}
        rotate={2}
        duration={5.5}
        className="pointer-events-none absolute -right-6 top-12 z-[1] w-[min(200px,46vw)] max-w-[220px] opacity-[0.68] sm:-right-4 sm:top-14"
      >
        <Image
          src="/section-11/cta-robot.webp"
          alt=""
          width={580}
          height={326}
          style={{ width: "100%", height: "auto" }}
        />
      </Float>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 z-0 rounded-full"
        style={{
          width: 500,
          height: 500,
          background: BLUE_GRADIENT,
          filter: isDark ? "blur(140px)" : "blur(200px)",
          opacity: isDark ? 0.72 : 1,
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 px-6 py-16 sm:px-8">
        <Reveal>
          <h2
            className="relative pr-[min(7.5rem,30%)]"
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 9vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: isDark ? colors.white : "#000000",
              background: isDark
                ? "linear-gradient(202.88deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
                : "none",
              WebkitBackgroundClip: isDark ? "text" : "border-box",
              WebkitTextFillColor: isDark ? "transparent" : "unset",
            }}
          >
            Join The Future Of{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Automation
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            style={{
              margin: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: isDark ? "rgba(255, 255, 255, 0.73)" : "rgba(0, 0, 0, 0.73)",
            }}
          >
            Get early access to the developer beta and start building the agents
            that will power the next generation economy.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <MobileWaitlistForm isDark={isDark} />
        </Reveal>
      </div>
    </section>
  );
}

function MobileWaitlistForm({ isDark }: { isDark: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <motion.input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex-1 outline-none"
        animate={{
          boxShadow: focused
            ? "0 0 0 3px rgba(40, 100, 228, 0.18), 0px 12px 26px -18px rgba(40, 100, 228, 0.45)"
            : hovered
              ? "0px 10px 22px -18px rgba(40, 100, 228, 0.34)"
              : "0px 0px 0px 0px rgba(40, 100, 228, 0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          padding: "16px 20px",
          borderRadius: 24,
          fontFamily: typography.fonts.inter,
          fontSize: 16,
          color: "#111",
          backgroundColor: isDark ? "rgba(10,14,24,0.5)" : colors.white,
          border: `1px solid ${
            focused
              ? colors.brand.blueStart
              : hovered
                ? "rgba(40,100,228,0.58)"
                : isDark
                  ? "rgba(255,255,255,0.3)"
                  : "#e5e7eb"
          }`,
        }}
      />
      <motion.button
        type="submit"
        className="text-white"
        style={{
          padding: "16px 32px",
          background: colors.brand.blue,
          borderRadius: 24,
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          boxShadow: "0 8px 18px -10px rgba(40, 100, 228, 0.45)",
        }}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.03,
                background: BLUE_GRADIENT,
                filter: "brightness(1.15)",
                boxShadow: "0 12px 28px -6px rgba(40, 100, 228, 0.65)",
              }
        }
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      >
        Join Waitlist
      </motion.button>
    </form>
  );
}
