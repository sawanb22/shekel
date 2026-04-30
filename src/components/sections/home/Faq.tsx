// Faq.tsx — Figma node 500:22410 "Section - FAQ" (1280 × ~560)
// 3 accordion-style question cards with reveal + expand motion.

"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { useThemeTokens } from "@/hooks/useThemeTokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "How are agents verified?",
    a: "Every agent on Shekel undergoes a rigorous security audit, performance benchmark, and code review before being listed publicly. Agents can also earn verified status through community reviews and historical performance metrics.",
  },
  {
    q: "What tokens does Shekel support?",
    a: "Shekel is multi-chain — native support for ETH, USDC, USDT, DAI, and major L2 tokens (Arbitrum, Optimism, Base). Our programmable escrow and revenue-split contracts work with any ERC-20 compliant token.",
  },
  {
    q: "Can I host agents on my own servers?",
    a: "Yes. Shekel is hybrid by design. Host on our decentralized node mesh for automatic scaling, or bring-your-own-infra via the Enterprise SDK — keep sensitive data on-premise while still benefiting from Shekel's discovery, billing, and routing layer.",
  },
];

export default function Faq() {
  const { isDark } = useThemeTokens();
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: isDark ? colors.black : colors.background.faq }}
    >
      <div
        className="mx-auto flex w-full flex-col px-[54px] sm:px-[62px] lg:px-[78px]"
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          gap: "clamp(32px, 4vw, 48px)",
        }}
      >
        <Reveal className="w-full text-center">
          <FaqHeading isDark={isDark} />
        </Reveal>
        <RevealStagger className="flex flex-col gap-4" stagger={0.1}>
          {ITEMS.map((item) => (
            <RevealItem key={item.q}>
              <FaqCard item={item} isDark={isDark} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function FaqHeading({ isDark }: { isDark: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <h2
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize: "clamp(32px, 5vw, 48px)",
        lineHeight: "40px",
        color: isDark ? colors.white : "#1A1C1C",
        background: isDark
          ? "linear-gradient(185.55deg, rgba(255,255,255,1) 55.625%, rgba(255,255,255,0) 110.73%)"
          : "none",
        WebkitBackgroundClip: isDark ? "text" : "border-box",
        WebkitTextFillColor: isDark ? "transparent" : "unset",
      }}
    >
      Frequently Asked{" "}
      <span
        style={{
          color: isDark ? undefined : colors.brand.blueStart,
          background:
            isDark || isHovered
              ? `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`
              : "none",
          WebkitBackgroundClip: isDark || isHovered ? "text" : "border-box",
          WebkitTextFillColor: isDark || isHovered ? "transparent" : "unset",
          backgroundClip: isDark || isHovered ? "text" : "border-box",
          transition: "color 180ms ease, background 180ms ease",
        }}
      >
        Questions
      </span>
    </h2>
  );
}

function FaqCard({ item, isDark }: { item: Item; isDark: boolean }) {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="overflow-hidden"
      style={{
        borderRadius: 16,
        backgroundColor: isDark ? "#101420" : colors.white,
        border: isDark ? "1px solid rgba(255,255,255,0.2)" : "none",
        boxShadow:
          "0px 4px 8px 0px rgba(0, 0, 0, 0.02), 0px 12px 32px 0px rgba(0, 0, 0, 0.04)",
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -2,
              boxShadow:
                "0px 10px 20px 0px rgba(0, 0, 0, 0.06), 0px 20px 38px -8px rgba(0, 0, 0, 0.08)",
            }
      }
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between text-left transition-colors duration-200 ease-out ${
          isDark ? "hover:bg-white/5" : "hover:bg-[rgba(40,100,228,0.04)]"
        }`}
        style={{ padding: 24 }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "28px",
            color: isDark ? colors.white : "#1A1C1C",
          }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0, y: open ? 0 : -0.5 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Image src="/section-10/chevron.svg" alt="" width={12} height={8} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div style={{ padding: "0 24px 24px" }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: isDark ? "#a7aab9" : "#414753",
                }}
              >
                {item.a}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

