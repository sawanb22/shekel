"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CoreWorkflowCanvas.tsx  —  Workflows §4 → Figma frame 507:5942 "Container"
// Desktop canvas W×H (from MCP layout_SHVLRQ): 1216 × 744  (subtitle block 80 +
// gap 64 before 600-high canvas zone)
//
// INNER CANVAS ZONE ( Background+Border frame 5948 ): 1216 × 600, rounded 40
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1216;
/** Section height: heading block (~80px) + 64 gap + canvas 600 — see MCP layout_SHVLRQ gap 64 */
const CANVAS_H = 744;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

/** Figma subtitle text box width × height */
const SUBTITLE_BOX_W = 419.41;

/** Figma exact fills where tokens differ (#141B2B / #424754 / AI label blue) */
const FIGMA_HEADING = "#141B2B";
const FIGMA_SUBTITLE_BODY = "#424754";
const FIGMA_AI_LABEL = "#0058BE";

const GRADIENT_LINE =
  "linear-gradient(179deg, rgba(0, 88, 190, 1) 0%, rgba(33, 112, 228, 1) 100%)";
const GRADIENT_PROGRESS_FILL =
  "linear-gradient(177deg, rgba(0, 88, 190, 1) 0%, rgba(33, 112, 228, 1) 100%)";
const CARD_SHADOW = "0px 12px 20px rgba(20, 27, 43, 0.06)";
const WINDOW_SHADOW = "0px 12px 40px rgba(20, 27, 43, 0.06)";
const BORDER_LIGHT = "rgba(194, 198, 214, 0.3)";
const BORDER_ACTIVE = "rgba(0, 88, 190, 0.4)";
const BORDER_NODE_ACTIVE = "rgba(0, 88, 190, 0.2)";
const BORDER_NODE_MUTED = "rgba(194, 198, 214, 0.2)";
const CANVAS_SURFACE = `
  radial-gradient(circle at 50% 50%, rgba(220, 226, 247, 1) 2%, rgba(220, 226, 247, 0) 2%),
  #ffffff`;

export default function CoreWorkflowCanvas() {
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
        backgroundColor: colors.white,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0 overflow-visible"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {/* Title block — layout_5943 wrapper: gap 16; outer column gap 64 before canvas */}
        <div
          className="absolute flex flex-col items-center"
          style={{ left: 0, top: 0, width: CANVAS_W, gap: 16 }}
        >
          <SectionHeadingDesktop />
          <SectionSubtitleDesktop />
        </div>

        <div
          className="absolute"
          style={{
            left: 0,
            top: 144,
            width: CANVAS_W,
            height: 600,
            border: `1px solid ${BORDER_LIGHT}`,
            borderRadius: 40,
            boxShadow: WINDOW_SHADOW,
            overflow: "visible",
            background: CANVAS_SURFACE,
          }}
        >
          {/* Input node — MCP: Workflow Nodes frame starts (122.39, 240.19); card width 192 */}
          <div className="absolute" style={{ left: 122, top: 240, width: 192 }}>
            <NodeCard
              type="Input"
              title="User Request"
              variant="emphasis"
              iconSrc="/section-4-workflows/input-bg.png"
            />
          </div>
          {/* Line to next node — 507:5958: abs canvas ~314 × 278, 96×2 (nested y38 in 76-high WF group → 240+38) */}
          <div
            className="absolute"
            style={{
              left: 314,
              top: 278,
              width: 96,
              height: 2,
              background: GRADIENT_LINE,
            }}
          />

          {/* AI Agent column — 507:5959 Container @ (486.59, 210.3) 256×185 */}
          <div
            className="absolute overflow-visible"
            style={{ left: 487, top: 210, width: 256, height: 185 }}
          >
            <div
              className="flex flex-col overflow-visible bg-white"
              style={{
                width: 256,
                border: `2px solid ${BORDER_ACTIVE}`,
                boxShadow: CARD_SHADOW,
                borderRadius: radiuses.card,
                padding: 24,
                gap: 16,
              }}
            >
              <div className="flex shrink-0 items-center justify-between">
                <Image
                  src="/section-4-workflows/content-bg.png"
                  alt=""
                  width={46}
                  height={43}
                />
                <Image
                  src="/section-4-workflows/content-icon.png"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
              <div className="flex shrink-0 flex-col gap-1">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: FIGMA_AI_LABEL,
                  }}
                >
                  AI Agent
                </span>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: "28px",
                    color: FIGMA_HEADING,
                  }}
                >
                  Content Generator
                </span>
              </div>
              {/* Progress fill — MCP layout_AOB38D height 6 */}
              <div
                className="relative shrink-0 w-full overflow-hidden rounded-full"
                style={{
                  height: 6,
                  backgroundColor: "#F1F3FF",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 top-0 rounded-full"
                  style={{
                    width: "66.667%",
                    background: GRADIENT_PROGRESS_FILL,
                  }}
                />
              </div>
            </div>
            {/* Decorative SVG sibling — MCP 507:5973 absolute x256 y28.5 within parent */}
            <div
              className="pointer-events-none absolute"
              style={{ left: 256, top: 28.5, width: 128, height: 128 }}
            >
              <Image
                src="/section-4-workflows/content-graphic.png"
                alt=""
                width={128}
                height={128}
              />
            </div>
          </div>

          {/* Tool — layout_X22VQI @ (911.5, 60.8) 192×74 */}
          <div className="absolute" style={{ left: 912, top: 61, width: 192, height: 74 }}>
            <NodeCard
              variant="muted"
              type="Tool"
              title="SEO Optimizer"
              iconSrc="/section-4-workflows/seo-bg.png"
            />
          </div>

          {/* Action — layout_BQ4ORM @ (911.5, 405.41) 192×74 */}
          <div className="absolute" style={{ left: 912, top: 405, width: 192, height: 74 }}>
            <NodeCard
              variant="muted"
              type="Action"
              title="Publish Agent"
              iconSrc="/section-4-workflows/publish-bg.png"
            />
          </div>

          {/* Connection dots — purple glow IMAGE-SVG groups 507:6010…6022 */}
          <CanvasDots />

          {/* Toolbar overlay — MCP 507:5994 @ (482, 515), 254×60 */}
          <ToolbarPanel />
        </div>
      </div>
    </section>
  );
}

function CanvasDots() {
  const DOT = "/section-4-workflows/canvas-dot-purple.svg";
  const spots: [number, number][] = [
    [410, 272],
    [865, 240],
    [729, 295],
    [870, 350],
    [307, 271],
  ];
  return (
    <>
      {spots.map(([l, t], i) => (
        <div
          key={`${l}-${t}-${i}`}
          className="pointer-events-none absolute"
          style={{
            left: l,
            top: t,
            width: 14,
            height: 14,
          }}
        >
          <Image src={DOT} alt="" width={14} height={14} className="h-[14px] w-[14px]" />
        </div>
      ))}
    </>
  );
}

function ToolbarPanel() {
  return (
    <div
      className="absolute flex items-center"
      style={{
        left: 482,
        top: 515,
        width: 254,
        height: 60,
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(114, 119, 133, 0.15)",
        boxShadow: WINDOW_SHADOW,
        borderRadius: 16,
        padding: 8,
        gap: 8,
      }}
    >
      <div className="flex shrink-0 items-center justify-center rounded-xl p-3">
        <Image src="/section-4-workflows/toolbar-icon-1.png" alt="" width={14} height={14} />
      </div>
      <div className="h-10 w-px shrink-0 bg-[rgba(194,198,214,0.3)]" />
      <div className="flex shrink-0 items-center justify-center rounded-xl p-3">
        <Image src="/section-4-workflows/toolbar-icon-2.png" alt="" width={18} height={18} />
      </div>
      <div className="flex shrink-0 items-center justify-center rounded-xl p-3">
        <Image src="/section-4-workflows/toolbar-icon-3.png" alt="" width={18} height={18} />
      </div>
      <div className="h-10 w-px shrink-0 bg-[rgba(194,198,214,0.3)]" />
      <div className="relative flex shrink-0 items-center justify-center rounded-xl p-3">
        <Image src="/section-4-workflows/toolbar-icon-4.png" alt="" width={11} height={14} />
        <div className="absolute -bottom-2 -right-2">
          <Image src="/section-4-workflows/toolbar-vector.png" alt="" width={19} height={15} />
        </div>
      </div>
    </div>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.white }}
    >
      <div className="flex flex-col items-center gap-8 px-6 py-16 text-center">
        <div className="flex max-w-xl flex-col items-center gap-4">
          <SectionHeadingMobile />
          <SectionSubtitleMobile />
        </div>

        <div
          className="relative mt-4 aspect-[608/371] min-h-[280px] w-full overflow-visible rounded-[40px] border max-w-[calc(100vw-3rem)]"
          style={{
            borderColor: BORDER_LIGHT,
            boxShadow: WINDOW_SHADOW,
            background: CANVAS_SURFACE,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute left-4 top-10 w-[calc(100%-4rem)] max-w-[220px]">
            <NodeCard
              variant="emphasis"
              type="Input"
              title="User Request"
              iconSrc="/section-4-workflows/input-bg.png"
            />
          </div>
          <div className="absolute left-1/2 top-[42%] w-[72%] max-w-[280px] -translate-x-1/2">
            <div
              className="flex flex-col overflow-visible bg-white"
              style={{
                border: `2px solid ${BORDER_ACTIVE}`,
                boxShadow: CARD_SHADOW,
                borderRadius: radiuses.card,
                padding: 20,
                gap: 12,
              }}
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/section-4-workflows/content-bg.png"
                  alt=""
                  width={36}
                  height={34}
                />
                <Image
                  src="/section-4-workflows/content-icon.png"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
              <div className="flex flex-col items-start gap-1 text-left">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 10,
                    lineHeight: "15px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: FIGMA_AI_LABEL,
                  }}
                >
                  AI Agent
                </span>
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: FIGMA_HEADING,
                  }}
                >
                  Content Generator
                </span>
              </div>
              <div
                className="relative h-1.5 w-full overflow-hidden rounded-full"
                style={{ backgroundColor: "#F1F3FF" }}
              >
                <div
                  className="absolute bottom-0 left-0 top-0 w-2/3 rounded-full"
                  style={{ background: GRADIENT_PROGRESS_FILL }}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-2xl border px-3 py-2"
            style={{
              borderColor: "rgba(114, 119, 133, 0.15)",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              boxShadow: CARD_SHADOW,
            }}
          >
            <Image src="/section-4-workflows/toolbar-icon-1.png" alt="" width={14} height={14} />
            <div className="h-6 w-px bg-[rgba(194,198,214,0.3)]" />
            <Image src="/section-4-workflows/toolbar-icon-2.png" alt="" width={18} height={18} />
            <Image src="/section-4-workflows/toolbar-icon-3.png" alt="" width={18} height={18} />
            <div className="h-6 w-px bg-[rgba(194,198,214,0.3)]" />
            <div className="relative">
              <Image src="/section-4-workflows/toolbar-icon-4.png" alt="" width={11} height={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Shared heading / copy — desktop & mobile wrappers avoid duplicated lines ─

function SectionHeadingDesktop() {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize: 48,
        lineHeight: "40px",
        color: FIGMA_HEADING,
      }}
    >
      Core Workflow{" "}
      <span
        style={{
          background: "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Canvas
      </span>
    </h2>
  );
}

function SectionHeadingMobile() {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize: "clamp(32px, 8vw, 40px)",
        lineHeight: "1.2",
        color: FIGMA_HEADING,
      }}
    >
      Core Workflow{" "}
      <span
        style={{
          background: "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Canvas
      </span>
    </h2>
  );
}

function SectionSubtitleDesktop() {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: FIGMA_SUBTITLE_BODY,
        maxWidth: SUBTITLE_BOX_W,
        textAlign: "center",
      }}
    >
      The architect&apos;s studio where ideas become automation.
    </p>
  );
}

function SectionSubtitleMobile() {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        color: FIGMA_SUBTITLE_BODY,
      }}
    >
      The architect&apos;s studio where ideas become automation.
    </p>
  );
}

function NodeCard({
  type,
  title,
  iconSrc,
  variant,
}: {
  type: string;
  title: string;
  iconSrc: string;
  variant: "emphasis" | "muted";
}) {
  const border =
    variant === "emphasis"
      ? `2px solid ${BORDER_NODE_ACTIVE}`
      : `1px solid ${BORDER_NODE_MUTED}`;
  const labelWeight = 700;
  return (
    <div
      className="bg-white flex h-full max-h-none w-full min-w-0 items-center overflow-hidden"
      style={{
        border,
        borderRadius: radiuses.pill,
        boxShadow: CARD_SHADOW,
        padding: "16px",
        gap: 16,
      }}
    >
      <Image src={iconSrc} alt="" width={36} height={32} />
      <div className="flex min-w-0 flex-col gap-px text-left">
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: labelWeight,
            fontSize: 10,
            lineHeight: "15px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: FIGMA_SUBTITLE_BODY,
          }}
        >
          {type}
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 14,
            lineHeight: "20px",
            color: FIGMA_HEADING,
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
