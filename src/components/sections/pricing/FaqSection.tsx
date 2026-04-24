"use client";

import Image from "next/image";
import { useState } from "react";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// FaqSection.tsx  —  "Common questions"
// Figma frame: 507:4995  "FAQ Section"
// Canvas: 1280 × 738 px   Page-y: 1909   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Container Left (x=24, y=96)   584×546  [Heading, Body, Button]
//   Container Right(x=672, y=96)   584×546  [Accordion Items 1-5]
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 738;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const FAQ_ITEMS = [
  {
    question: "How does pricing work?",
    answer: "We offer three tiers to support your growth. You can start for free, pay only for what you use on the marketplace, or subscribe to Pro for high-volume needs and team features."
  },
  {
    question: "What is pay-per-use?",
    answer: "Pay-per-use allows you to pay a nominal fee per task executed by an agent, giving you ultimate flexibility without a monthly subscription."
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of the next billing cycle."
  },
  {
    question: "Do unused credits roll over?",
    answer: "Unused Pro credits do not roll over to the next month. They reset at the beginning of each billing cycle."
  },
  {
    question: "Is there a free trial?",
    answer: "Our Starter plan acts as a free trial, giving you 5 free agent runs per month to test our platform's capabilities."
  }
];

export default function FaqSection() {
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
        backgroundColor: colors.white, // Adjusting based on standard white bg typical for such sections if undefined in get_design_context root
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0 flex justify-center w-full"
        style={{
          height: CANVAS_H,
        }}
      >
        <div
          className="relative"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top center",
          }}
        >
          {/* Left Column */}
          <div
            className="absolute flex flex-col"
            style={{ left: 24, top: 96, width: 584, gap: 32 }}
          >
            <div className="flex flex-col gap-[16px]">
              <SectionHeading fontSize={36} lineHeight="40px" />
              <SectionBody fontSize={18} lineHeight="28px" />
            </div>
            
            <SupportButton />
          </div>

          {/* Right Column (Accordion) */}
          <div
            className="absolute flex flex-col gap-[16px]"
            style={{ left: 672, top: 96, width: 584 }}
          >
             <DesktopAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden py-16"
      style={{ backgroundColor: colors.white }}
    >
      <div className="flex flex-col px-6 sm:px-8 gap-12">
        <div className="flex flex-col gap-6">
          <SectionHeading fontSize="clamp(28px, 6vw, 36px)" lineHeight="1.2" />
          <SectionBody fontSize="clamp(16px, 4vw, 18px)" lineHeight="1.5" />
          <SupportButton isMobile={true} />
        </div>

        <div className="flex flex-col gap-4">
            <DesktopAccordion items={FAQ_ITEMS} isMobile={true} />
        </div>
      </div>
    </section>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h2
      className="m-0"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 700,
        fontSize,
        lineHeight,
        color: colors.text.dark,
        maxWidth: 364.94
      }}
    >
      Common questions
    </h2>
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
        color: colors.text.body,
        maxWidth: 582.14
      }}
    >
      Everything you need to know about our billing and platform features.
    </p>
  );
}

function SupportButton({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      className={`flex items-center gap-[12px] bg-[#eceef1] cursor-pointer ${isMobile ? "self-start" : ""}`}
      style={{
        padding: "16px 24px",
        borderRadius: "16px",
        width: "fit-content"
      }}
    >
      <div style={{ position: "relative", width: 20, height: 16 }}>
        <Image
          src="/section-4-pricing/chat-icon.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.text.dark,
        }}
      >
        Contact Support
      </span>
      <div style={{ position: "relative", width: 16, height: 16 }}>
        <Image
          src="/section-4-pricing/arrow-icon.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

function DesktopAccordion({ items, isMobile = false }: { items: {question: string, answer: string}[], isMobile?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="flex flex-col bg-white overflow-hidden"
            style={{
              borderRadius: "16px",
              boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
              cursor: "pointer",
            }}
            onClick={() => setOpenIndex(isOpen ? null : idx)}
          >
            <div
              className="flex items-center justify-between"
              style={{ padding: "24px" }}
            >
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: colors.text.dark,
                }}
              >
                {item.question}
              </span>
              <div
                style={{
                  position: "relative",
                  width: 12,
                  height: 7.4,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <Image
                  src="/section-4-pricing/chevron-down.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    style={{
                      padding: "0 24px 24px 24px",
                    }}
                  >
                    <p
                      className="m-0"
                      style={{
                        fontFamily: typography.fonts.inter,
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "26px",
                        color: colors.text.body,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
}