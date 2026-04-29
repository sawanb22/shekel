"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// FaqCategories.tsx — FAQ Categories Section
// Figma frame: 508:7818 "Main - FAQ Categories"
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 1200; // Approximated height based on content
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const CATEGORIES = [
  {
    title: "Getting Started",
    icon: "/section-3-faq/icon-getting-started.svg",
    questions: ["What is Shekel?", "Technical knowledge required?"],
  },
  {
    title: "AI Agents",
    icon: "/section-3-faq/icon-ai-agents.svg",
    questions: ["What are AI agents?", "Creating own agents?"],
  },
];

const GRID_CATEGORIES = [
  {
    title: "Workflows",
    icon: "/section-3-faq/icon-workflows.svg",
    questions: ["What is a workflow?", "How they work?"],
  },
  {
    title: "Usage",
    icon: "/section-3-faq/icon-usage.svg",
    questions: ["Running agents", "Connecting agents"],
  },
];

export default function FaqCategories() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          TABLET & DESKTOP (≥ 768px) — scaled Figma canvas, edge-to-edge
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative hidden w-full overflow-hidden md:block"
        style={{
          backgroundColor: colors.white,
          aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
          containerType: "inline-size",
        }}
      >
        <div
          className="absolute left-0 top-0 flex w-full flex-col items-center pt-24"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <div
            className="flex flex-col"
            style={{ width: 1024, gap: 96, padding: "0 32px" }}
          >
            {/* List Categories */}
            {CATEGORIES.map((category) => (
              <div key={category.title} className="flex w-full flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "rgba(47, 128, 237, 0.1)",
                    }}
                  >
                    {/* Placeholder for Icon */}
                    <div className="h-5 w-5 bg-blue-500 opacity-50" />
                  </div>
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: typography.fonts.jakarta,
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: "32px",
                      color: "#0B0B0B",
                    }}
                  >
                    {category.title}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {category.questions.map((q) => (
                    <QuestionItem key={q} question={q} />
                  ))}
                </div>
              </div>
            ))}

            {/* Help/Contact Block */}
            <div
              className="flex w-full items-center justify-between rounded-[32px] border border-[rgba(229,231,235,0.5)] bg-[#F8FAFC]"
              style={{ padding: "64px 40px" }}
            >
              <div className="flex flex-col gap-4">
                <h2
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 30,
                    lineHeight: "36px",
                    color: "#0B0B0B",
                  }}
                >
                  Still need help?
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "rgba(0, 0, 0, 0.6)",
                    maxWidth: 442,
                  }}
                >
                  If you couldn't find your answer, our team of AI specialists is
                  here to assist you with technical integration or billing.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  className="rounded-2xl border border-[#E5E7EB] bg-white px-[52px] py-4"
                  style={{
                    boxShadow: "0px 4px 20px -2px rgba(0, 0, 0, 0.05)",
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#0B0B0B",
                  }}
                >
                  Contact Support
                </button>
                <button
                  className="flex items-center gap-6 rounded-2xl px-12 py-4"
                  style={{
                    background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)",
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#FFFFFF",
                  }}
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Grid Categories */}
            <div className="grid grid-cols-2 gap-12">
              {GRID_CATEGORIES.map((category) => (
                <div key={category.title} className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "rgba(47, 128, 237, 0.1)",
                      }}
                    >
                      {/* Placeholder for Icon */}
                      <div className="h-5 w-5 bg-blue-500 opacity-50" />
                    </div>
                    <h2
                      style={{
                        margin: 0,
                        fontFamily: typography.fonts.jakarta,
                        fontWeight: 700,
                        fontSize: 24,
                        lineHeight: "32px",
                        color: "#0B0B0B",
                      }}
                    >
                      {category.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-4">
                    {category.questions.map((q) => (
                      <QuestionItem key={q} question={q} small />
                    ))}
                  </div>
                </div>
              ))}
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
        <div className="mx-auto flex w-full max-w-md flex-col gap-16">
          {/* List Categories */}
          {CATEGORIES.map((category) => (
            <div key={category.title} className="flex w-full flex-col gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(47, 128, 237, 0.1)" }}
                >
                  <div className="h-5 w-5 bg-blue-500 opacity-50" />
                </div>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: "#0B0B0B",
                  }}
                >
                  {category.title}
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {category.questions.map((q) => (
                  <QuestionItem key={q} question={q} mobile />
                ))}
              </div>
            </div>
          ))}

          {/* Help/Contact Block */}
          <div
            className="flex w-full flex-col items-center justify-center gap-6 rounded-3xl border border-[rgba(229,231,235,0.5)] bg-[#F8FAFC] p-8 text-center"
          >
            <div className="flex flex-col gap-3">
              <h2
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: "#0B0B0B",
                }}
              >
                Still need help?
              </h2>
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 500,
                  fontSize: 15,
                  lineHeight: "22px",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                If you couldn't find your answer, our team of AI specialists is
                here to assist you.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3">
              <button
                className="w-full rounded-2xl border border-[#E5E7EB] bg-white py-4"
                style={{
                  boxShadow: "0px 4px 20px -2px rgba(0, 0, 0, 0.05)",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#0B0B0B",
                }}
              >
                Contact Support
              </button>
              <button
                className="w-full rounded-2xl py-4"
                style={{
                  background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)",
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Grid Categories (stacked for mobile) */}
          {GRID_CATEGORIES.map((category) => (
            <div key={category.title} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(47, 128, 237, 0.1)" }}
                >
                  <div className="h-5 w-5 bg-blue-500 opacity-50" />
                </div>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: "#0B0B0B",
                  }}
                >
                  {category.title}
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {category.questions.map((q) => (
                  <QuestionItem key={q} question={q} mobile />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────

function QuestionItem({ question, small = false, mobile = false }: { question: string; small?: boolean; mobile?: boolean }) {
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[#E5E7EB] bg-white transition-shadow hover:shadow-md"
      style={{
        padding: mobile ? "20px" : small ? "20px" : "24px",
        boxShadow: "0px 4px 20px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: small || mobile ? 16 : 18,
          lineHeight: small || mobile ? "24px" : "28px",
          color: "#0B0B0B",
        }}
      >
        {question}
      </span>
      {/* Down Chevron Placeholder */}
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L8 8L14 2" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}