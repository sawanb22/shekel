import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// HowItWorks.tsx  —  "How categories work"
// Figma frame: 500:13487  "Section 5: How It Works"
// Canvas: 1280 × 536 px   bg: #FCF8F8
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 536
//   Heading Block      (32, 100)  w:1216
//     Title            Poppins 500 36/40 center aligned #1C1B1B
//     Desc             Inter 400 18/28 center aligned #414753
//   Steps Container    (32, 292)  w:1216
//     Connector Line   (437.33, 344) w:405.33 h:2 bg rgba(193, 198, 213, 0.3)
//     Step 1           (32, 292) w:405.33
//       Circle bg      (194.67, 292) 80x80 bg #D7E3FF, shadow 0px 1px 2px rgba(0,0,0,0.05), radius full
//       Number         Inter 600 30/36 center aligned, gradient fill
//       Title          (113, 404) Inter 700 20/28 center aligned #1C1B1B
//       Desc           (54, 448) Inter 400 16/26 center aligned #414753, w:360.95
//     Step 2           (453.33, 292) w:405.33
//       [Same structure as Step 1]
//     Step 3           (874.67, 292) w:405.33
//       [Same structure as Step 1]
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 536; // 100 + 40 + 16 + 56 + 80 + 80 + 16 + 28 + 16 + 52 + 52 (approx padding)
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BG_COLOR = "#FCF8F8";
const TEXT_HEADING = "#1C1B1B";
const TEXT_BODY = "#414753";
const NUMBER_BG = "#D7E3FF";
const NUMBER_SHADOW = "0px 1px 2px 0px rgba(0, 0, 0, 0.05)";
const LINE_COLOR = "rgba(193, 198, 213, 0.3)";
const GRADIENT_LINEAR_BRAND = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

const STEPS = [
  {
    num: "1",
    title: "Choose a category",
    desc: "Select from over 20 specialized fields to narrow\ndown your agent search.",
    x: 0, // relative to container
  },
  {
    num: "2",
    title: "Explore agents",
    desc: "Filter by ratings, usage, and specific technical\ncapabilities within that category.",
    x: 405.33,
  },
  {
    num: "3",
    title: "Run or connect",
    desc: "Instantly run your chosen agent or connect it to\nyour existing team workflows.",
    x: 810.67,
  },
];

export default function HowItWorks() {
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
        backgroundColor: BG_COLOR,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
        }}
      >
        {/* Header Section */}
        <div className="absolute flex flex-col items-center" style={{ left: 32, top: 100, width: 1216, gap: "16px" }}>
          <SectionHeading fontSize={36} lineHeight="40px" />
          <SectionBody
            text={
              <>
                Categories help organize AI agents based on tasks and workflows, making it<br />
                easier to discover the right tool.
              </>
            }
            fontSize={18}
            lineHeight="28px"
          />
        </div>

        {/* Steps Container */}
        <div className="absolute" style={{ left: 32, top: 292, width: 1216, height: 208 }}>
          {/* Connector Line */}
          <div
            className="absolute"
            style={{
              left: 405.33 / 2, // Start from center of first circle
              top: 39, // Center of 80px circle
              width: 1216 - 405.33, // Span to center of last circle
              height: 2,
              backgroundColor: LINE_COLOR,
            }}
          />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{
                left: step.x,
                top: 0,
                width: 405.33,
              }}
            >
              {/* Number Circle */}
              <div
                className="flex items-center justify-center relative z-10"
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: NUMBER_BG,
                  boxShadow: NUMBER_SHADOW,
                  borderRadius: radiuses.full,
                  marginBottom: "32px", // margin to title
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 30,
                    lineHeight: "36px",
                    background: GRADIENT_LINEAR_BRAND,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: TEXT_HEADING,
                  textAlign: "center",
                  marginBottom: "16px", // margin to desc
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "26px",
                  color: TEXT_BODY,
                  textAlign: "center",
                  maxWidth: 360.95,
                }}
                dangerouslySetInnerHTML={{ __html: step.desc.replace(/\n/g, "<br />") }}
              />
            </div>
          ))}
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
      style={{ backgroundColor: BG_COLOR }}
    >
      <div className="flex flex-col gap-12 px-6 py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading fontSize="clamp(28px, 8vw, 36px)" lineHeight="1.2" />
          <SectionBody
            text="Categories help organize AI agents based on tasks and workflows, making it easier to discover the right tool."
            fontSize="16px"
            lineHeight="1.6"
          />
        </div>

        <div className="relative flex flex-col gap-10">
          {/* Vertical Connector Line */}
          <div
            className="absolute left-[40px] top-10 bottom-10 w-[2px] -ml-[1px]"
            style={{ backgroundColor: LINE_COLOR }}
          />

          {STEPS.map((step, i) => (
            <div key={i} className="relative z-10 flex gap-6">
              {/* Number Circle */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: NUMBER_BG,
                  boxShadow: NUMBER_SHADOW,
                  borderRadius: radiuses.full,
                }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 30,
                    lineHeight: "36px",
                    background: GRADIENT_LINEAR_BRAND,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center gap-2 pt-2">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: "1.3",
                    color: TEXT_HEADING,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "1.6",
                    color: TEXT_BODY,
                  }}
                >
                  {step.desc.replace(/\n/g, " ")}
                </p>
              </div>
            </div>
          ))}
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
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        color: TEXT_HEADING,
        textAlign: "center",
      }}
    >
      How categories work
    </h2>
  );
}

function SectionBody({
  text,
  fontSize,
  lineHeight,
}: {
  text: React.ReactNode;
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: TEXT_BODY,
        textAlign: "center",
        maxWidth: 672,
      }}
    >
      {text}
    </p>
  );
}
