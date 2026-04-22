// CtaWaitlist.tsx — Figma node 500:22272 "CTA Waitlist" (1280 × 552)
// Large heading + email input + join button, with decorative blurred ellipse.

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { Float } from "@/components/shared/motion/Float";

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
  return (
    <section className="hidden w-full bg-white md:block">
      <div className="pb-16">
        <div
          className="relative w-full rounded-[24px]"
          style={{
            aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
            containerType: "inline-size",
            backgroundImage: "url('/section-6/features-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#f0e8ff",
          }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
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
                color: "#000000",
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
              color: "rgba(0, 0, 0, 0.73)",
            }}
          >
            Get early access to the developer beta and start building the agents
            that will power the next generation economy.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="absolute"
            style={{ left: 84, top: 368, width: 448, height: 72 }}
          >
            <WaitlistForm />
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
            <Float
              amplitude={8}
              duration={9}
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

function WaitlistForm() {
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
          className="h-full w-full bg-white outline-none"
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
            border: `1px solid ${
              focused ? colors.brand.blueStart : hovered ? "rgba(40,100,228,0.58)" : "#e5e7eb"
            }`,
          }}
        />
      </motion.div>

      <motion.button
        type="submit"
        className="flex h-14 items-center justify-center text-white"
        style={{
          padding: "0 32px",
          background: BLUE_GRADIENT,
          borderRadius: 24,
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          whiteSpace: "nowrap",
          boxShadow: "0 10px 20px -8px rgba(40, 100, 228, 0.5)",
        }}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.03,
                boxShadow: "0 12px 28px -6px rgba(40, 100, 228, 0.65)",
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
      {/* Decorative robot — small, bottom-right, semi-transparent */}
      <Float amplitude={8} duration={9} className="pointer-events-none absolute -bottom-8 -right-16 opacity-60 w-72">
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
        className="pointer-events-none absolute -left-40 -top-40 rounded-full"
        style={{
          width: 500,
          height: 500,
          background: BLUE_GRADIENT,
          filter: "blur(200px)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 px-6 py-16 sm:px-8">
        <Reveal>
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: "clamp(32px, 9vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#000000",
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
              color: "rgba(0, 0, 0, 0.73)",
            }}
          >
            Get early access to the developer beta and start building the agents
            that will power the next generation economy.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <MobileWaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}

function MobileWaitlistForm() {
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
        className="flex-1 bg-white outline-none"
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
          border: `1px solid ${
            focused ? colors.brand.blueStart : hovered ? "rgba(40,100,228,0.58)" : "#e5e7eb"
          }`,
        }}
      />
      <motion.button
        type="submit"
        className="text-white"
        style={{
          padding: "16px 32px",
          background: BLUE_GRADIENT,
          borderRadius: 24,
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          boxShadow: "0 10px 20px -8px rgba(40, 100, 228, 0.5)",
        }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      >
        Join Waitlist
      </motion.button>
    </form>
  );
}
