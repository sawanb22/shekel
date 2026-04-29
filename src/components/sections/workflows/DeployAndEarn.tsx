import { colors, typography } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// DeployAndEarn.tsx  —  "Deploy workflows and earn"
// Figma frame: 507:6187  "Section - Deploy & Earn"
// Canvas: 1280 × 584 px   Page-y: 4040   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Heading 2   (x=32, y=128)   1216×48   [Heading]
//   Container   (x=304, y=200)   672×56   [Subtitle]
//   Container   (x=32, y=280)   1216×176   [3-column grid]
//     Container (Col 1)  (x=0, y=40)  373.33×136
//     Container (Col 2)  (x=421.33, y=40)  373.33×136
//     Container (Col 3)  (x=842.66, y=40)  373.33×136
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 584;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const SUBTITLE_COLOR = "#424754";
const HEADING_COLOR = "#141b2b";
const NUMBER_COLOR = "rgba(0,88,190,0.2)";
const SUBTITLE_COPY =
  "Run your workflows, reach users, and generate revenue automatically through\nour native monetization layer.";

const STEPS = [
  {
    number: "01",
    title: "Deploy Instantly",
    description:
      "Host your workflows on Shekel's edge infrastructure\nwith zero setup.",
  },
  {
    number: "02",
    title: "Reach Users",
    description:
      "Share your workflow links or embed them directly into\nyour existing apps.",
  },
  {
    number: "03",
    title: "Earn Revenue",
    description:
      "Collect payments for every execution through our built-\nin wallet system.",
  },
] as const;

export default function DeployAndEarn() {
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
        <h2
          className="absolute m-0 text-center"
          style={{
            left: 32,
            top: 128,
            width: 1216,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 48,
            lineHeight: "48px",
            color: colors.black,
          }}
        >
          Deploy workflows and
          <span
            style={{
              background: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {" "}
            earn
          </span>
        </h2>

        <div
          className="absolute text-center"
          style={{
            left: 304,
            top: 200,
            width: 672,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "28px",
            color: SUBTITLE_COLOR,
          }}
        >
          <p className="m-0 whitespace-pre-line">{SUBTITLE_COPY}</p>
        </div>

        {/* Grid Container */}
        <div
          className="absolute flex"
          style={{ left: 32, top: 280, width: 1216, gap: 48 }}
        >
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col relative"
              style={{ width: 373.33, gap: 16, paddingTop: 40 }}
            >
              <div
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 30,
                  lineHeight: "36px",
                  color: NUMBER_COLOR,
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: HEADING_COLOR,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: SUBTITLE_COLOR,
                }}
              >
                <p className="m-0 whitespace-pre-line">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h2
      className="m-0 text-center"
      style={{
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        color: colors.black,
      }}
    >
      Deploy workflows and
      <span
        style={{
          background: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {" "}
        earn
      </span>
    </h2>
  );
}

function SectionMobile() {
  return (
    <section className="relative block w-full overflow-hidden md:hidden">
      <div className="flex flex-col gap-12 px-6 py-16">
        <div className="flex flex-col gap-6 text-center">
          <SectionHeading fontSize="clamp(32px, 8vw, 40px)" lineHeight="1.2" />
          <div
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "1.5",
              color: SUBTITLE_COLOR,
            }}
          >
            <p className="m-0 whitespace-pre-line">{SUBTITLE_COPY}</p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: "1.2",
                  color: NUMBER_COLOR,
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: "1.3",
                  color: HEADING_COLOR,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "1.5",
                  color: SUBTITLE_COLOR,
                }}
              >
                <p className="m-0 whitespace-pre-line">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
