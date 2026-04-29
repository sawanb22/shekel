import Image from "next/image";
import { colors, radiuses, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// HowItWorks.tsx — Figma frame 507:5917 "Container"
// Outer content width 1216; three cards 384-wide; gap 32; horizontal inset (1280 − 1216) / 2 → 32
//
// Typography: fill_84DWAF title #141B2B — Plus Jakarta Bold 20 / 28 (style_SRPKFD)
//             fill_O15TKB body #424754 — Inter 400 14 / 22.75 (style_1Q2Z60)
// Cards: radiuses.cardLg (32); effect_L0MAG4 shadow; padding 40; inner gap 14.8
// Icons: IMAGE-SVG 56×56, well fill #F1F3FF (exported as card-*-bg.svg)
//
// Responsive: ≥768px — cqw scaled canvas; <768px — stacked cards, clamp() typography
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
/** Row height cushion for stacked body lines + paddings (+ shadow overflow) */
const CANVAS_H = 336;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const INNER_ROW_W = 1216;
const CARD_W = 384;
const GAP_CARD = 32;

const CARD_TITLE = "#141B2B";
const CARD_BODY = "#424754";
const CARD_SHADOW = "0px 12px 40px rgba(20, 27, 43, 0.06)";
const INNER_GAP = 14.800000190734863;
const TITLE_PADDING_TOP = 17.200000762939453;

const STEPS = [
  {
    title: "Drag AI Agents",
    body: "Choose from our library of pre-trained specialized models and drop them onto your workspace.",
    iconSrc: "/section-2-workflows/card-1-bg.svg",
  },
  {
    title: "Connect Steps",
    body: "Define the data flow between agents. Create logic gates, loops, and conditioned execution paths.",
    iconSrc: "/section-2-workflows/card-2-bg.svg",
  },
  {
    title: "Automate Execution",
    body: "Run your workflow in real-time. Shekel handles scaling, hosting, and error handling automatically.",
    iconSrc: "/section-2-workflows/card-3-bg.svg",
  },
] as const;

export default function HowItWorks() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionLabel() {
  return (
    <h2 className="sr-only" style={{ margin: 0 }}>
      How it works
    </h2>
  );
}

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full md:block"
      style={{
        backgroundColor: colors.background.section,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <SectionLabel />
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        <div
          className="absolute flex items-start"
          style={{
            left: (CANVAS_W - INNER_ROW_W) / 2,
            top: 0,
            width: INNER_ROW_W,
            gap: GAP_CARD,
          }}
        >
          {STEPS.map((step) => (
            <article
              key={step.title}
              className="flex flex-col"
              style={{
                boxSizing: "border-box",
                width: CARD_W,
                borderRadius: radiuses.cardLg,
                padding: 40,
                backgroundColor: colors.white,
                boxShadow: CARD_SHADOW,
                gap: INNER_GAP,
              }}
            >
              <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                <Image
                  src={step.iconSrc}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div style={{ paddingTop: TITLE_PADDING_TOP }}>
                <h3
                  className="m-0"
                  style={{
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: CARD_TITLE,
                    textAlign: "left",
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <p
                className="m-0"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "22.75px",
                  color: CARD_BODY,
                  textAlign: "left",
                  whiteSpace: "pre-wrap",
                }}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  return (
    <section
      className="block w-full px-6 py-14 md:hidden"
      style={{ backgroundColor: colors.background.section }}
    >
      <SectionLabel />
      <div className="flex flex-col gap-6">
        {STEPS.map((step) => (
          <article
            key={step.title}
            className="flex w-full flex-col"
            style={{
              boxSizing: "border-box",
              borderRadius: radiuses.cardLg,
              padding: 40,
              backgroundColor: colors.white,
              boxShadow: CARD_SHADOW,
              gap: INNER_GAP,
            }}
          >
            <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
              <Image src={step.iconSrc} alt="" fill className="object-contain" sizes="56px" />
            </div>
            <div style={{ paddingTop: TITLE_PADDING_TOP }}>
              <h3
                className="m-0"
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: "clamp(18px, 4.5vw, 20px)",
                  lineHeight: "1.4",
                  color: CARD_TITLE,
                  textAlign: "left",
                }}
              >
                {step.title}
              </h3>
            </div>
            <p
              className="m-0"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: "clamp(13px, 3.8vw, 14px)",
                lineHeight: "1.625",
                color: CARD_BODY,
                textAlign: "left",
                whiteSpace: "pre-wrap",
              }}
            >
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
