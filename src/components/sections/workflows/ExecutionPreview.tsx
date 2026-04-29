// ─────────────────────────────────────────────────────────────────────────────
// ExecutionPreview.tsx  —  "See results instantly"
// Figma frame: 507:6025 "Section - Execution Preview"
// Desktop frame width: 1024 (layout_V5CNSE), padding: 128px 32px, gap: 16px
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const FRAME_W = 1024;
const SECTION_PAD_X = 32;
const SECTION_PAD_Y = 128;

const HEADING_COLOR = "#141b2b";
const TEXT_MUTED = "#424754";
const BLUE_GRADIENT = "linear-gradient(to bottom, #2864e4, #ecf2ff)";
const BG_OUTER = "#F1F3FF";
const BG_INNER = "#F9F9FF";
const BORDER_COLOR = "rgba(194,198,214,0.2)";
const CMD_TEXT_COLOR = "#0058be";
const SUCCESS_TEXT = "#16a34a";
const DOT_RED = "#f87171";
const DOT_YELLOW = "#facc15";
const DOT_GREEN = "#4ade80";
const CARD_SHADOW = "0px 12px 40px rgba(20,27,43,0.06)";
const OUTPUT_QUOTE = `"The convergence of artificial intelligence and workflow orchestration represents a paradigm shift in operational
efficiency. By leveraging Shekel's visual node system, enterprises can deploy complex agentic logic with the
precision of an architect and the speed of an automated system..."`;

export default function ExecutionPreview() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

// ─── Shared Components ─────────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      className="m-0 text-center"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        color: HEADING_COLOR,
      }}
    >
      <span style={{ lineHeight: "inherit" }}>See results </span>
      <span
        style={{
          lineHeight: "inherit",
          background: BLUE_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        instantly
      </span>
    </p>
  );
}

function SectionSubtitle({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      className="m-0 text-center"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: TEXT_MUTED,
      }}
    >
      Witness the power of your automated agents as they deliver refined results in seconds.
    </p>
  );
}

// ─── Desktop ─────────────────────────────────────────────────────────────────

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full md:block"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: FRAME_W, padding: `${SECTION_PAD_Y}px ${SECTION_PAD_X}px` }}>
        <div className="flex flex-col items-stretch" style={{ gap: 16 }}>
          <div className="flex flex-col items-center">
            <SectionHeading fontSize={48} lineHeight="36px" />
          </div>
          <div className="flex flex-col items-center" style={{ paddingBottom: 48 }}>
            <div style={{ width: 658.3 }}>
              <SectionSubtitle fontSize={16} lineHeight="24px" />
            </div>
          </div>

          <div
            className="w-full"
            style={{
              backgroundColor: BG_OUTER,
              boxShadow: CARD_SHADOW,
              borderRadius: "40px",
              padding: 48,
            }}
          >
            <ExecutionCard />
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
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="flex flex-col gap-8 px-6 py-16 items-center">
        <div className="flex flex-col gap-4 text-center">
          <SectionHeading fontSize="clamp(32px, 8vw, 40px)" lineHeight="1.2" />
          <SectionSubtitle fontSize="clamp(14px, 4vw, 16px)" lineHeight="1.5" />
        </div>

        <div
          className="w-full flex flex-col"
          style={{
            backgroundColor: BG_OUTER,
            boxShadow: CARD_SHADOW,
            borderRadius: "32px",
            padding: "24px 16px",
          }}
        >
          <ExecutionCard />
        </div>
      </div>
    </section>
  );
}

function ExecutionCard() {
  return (
    <div
      className="relative flex flex-col items-start w-full"
      style={{
        backgroundColor: colors.white,
        boxShadow: CARD_SHADOW,
        borderRadius: radiuses.card,
        padding: 32,
        gap: 24,
      }}
    >
      <div className="flex gap-3 items-center w-full shrink-0">
        <div style={{ backgroundColor: DOT_RED, borderRadius: radiuses.full, width: 12, height: 12 }} />
        <div style={{ backgroundColor: DOT_YELLOW, borderRadius: radiuses.full, width: 12, height: 12 }} />
        <div style={{ backgroundColor: DOT_GREEN, borderRadius: radiuses.full, width: 12, height: 12 }} />
      </div>

      <div className="flex flex-col gap-6 items-start w-full shrink-0">
        <div className="flex gap-4 items-start w-full shrink-0">
          <div className="relative shrink-0 w-[20px] h-[16px] mt-0.5">
            <Image src="/section-5-workflows/terminal-icon.png" alt="" fill className="object-contain" />
          </div>
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.mono,
              fontWeight: 700,
              fontSize: 14,
              lineHeight: "20px",
              color: CMD_TEXT_COLOR,
            }}
          >
            agent.execute_workflow('content_gen_v1')
          </p>
        </div>

        <div
          className="flex flex-col items-start shrink-0 w-full"
          style={{
            backgroundColor: BG_INNER,
            border: `1px solid ${BORDER_COLOR}`,
            borderRadius: radiuses.pill,
            padding: 24,
            gap: 10.75,
          }}
        >
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 16,
              lineHeight: "24px",
              color: HEADING_COLOR,
            }}
          >
            Generated Output Preview
          </p>
          <p
            className="m-0 italic whitespace-pre-line"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "22.75px",
              color: TEXT_MUTED,
            }}
          >
            {OUTPUT_QUOTE}
          </p>
        </div>

        <div className="flex gap-2 items-center w-full shrink-0">
          <div className="relative shrink-0" style={{ width: 11.67, height: 11.67 }}>
            <Image src="/section-5-workflows/check-icon.png" alt="" fill className="object-contain" />
          </div>
          <p
            className="m-0 uppercase"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 700,
              fontSize: 12,
              lineHeight: "16px",
              letterSpacing: "0.1em",
              color: SUCCESS_TEXT,
            }}
          >
            Execution complete in 2.4s
          </p>
        </div>
      </div>
    </div>
  );
}
