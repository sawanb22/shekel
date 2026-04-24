import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// DesignedFor.tsx  —  "Designed For"
// Figma frame: 503:3127  "Best For Section"
// Canvas: 1232 × 82 px   Page-y: TBD   bg: Transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1232px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Heading 3      (x=0, y=0)   1232×18   flex-col, center, gap 0
//     Designed For (x=556.97, y=0) 118.06×18 Plus Jakarta Sans 700 12/18 LS 20% UPPER #727785
//   Container      (x=0, y=58)  1232×56   flex-row, center, gap 20
//     Button       (x=312.2, y=0) 193.92×56 bg #F2F4F7, rounded-full, pad 16×32
//       Text       (x=32, y=16)   129.92×24 Inter 600 16/24 #191C1E
//     Button       (x=526.12, y=0) 195.17×56 bg #F2F4F7, rounded-full, pad 16×32
//       Text       (x=32, y=16)   131.17×24 Inter 600 16/24 #191C1E
//     Button       (x=741.3, y=0) 136.42×56 bg #F2F4F7, rounded-full, pad 16×32
//       Text       (x=32, y=16)   72.42×24 Inter 600 16/24 #191C1E
//     Button       (x=897.72, y=0) 194.25×56 bg #F2F4F7, rounded-full, pad 16×32
//       Text       (x=32, y=16)   130.25×24 Inter 600 16/24 #191C1E
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1232;
const CANVAS_H = 114; // 18 (heading) + 40 (gap) + 56 (buttons)
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const LABEL_COLOR = "#727785";
const BUTTON_BG = "#F2F4F7";
const BUTTON_TEXT = "#191C1E";

const BUTTONS = [
  "Marketing teams",
  "Startup founders",
  "Agencies",
  "Content creators",
];

export default function DesignedFor() {
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
      className="relative hidden w-full overflow-hidden md:block py-16"
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative" style={{ width: 1232, height: 114, top: 0 }}>
          <div
            className="absolute"
            style={{
              left: 556.97,
              top: 0,
              width: 118.06,
              height: 18,
            }}
          >
            <DesignedForHeading />
          </div>
        </div>
        <div
          className="absolute flex flex-row items-center justify-center"
          style={{ left: 0, top: 58, width: CANVAS_W, height: 56, gap: 20 }}
        >
          {BUTTONS.map((text, i) => (
            <DesignedForButton key={i} text={text} />
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
      style={{ backgroundColor: colors.white }}
    >
      <div className="flex flex-col items-center gap-6 px-6 py-12">
        <DesignedForHeading />
        <div className="flex flex-wrap justify-center gap-3">
          {BUTTONS.map((text, i) => (
            <DesignedForButton key={i} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────

function DesignedForHeading() {
  return (
    <span
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: "18px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: LABEL_COLOR,
        textAlign: "center",
      }}
    >
      Designed For
    </span>
  );
}

function DesignedForButton({ text }: { text: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundColor: BUTTON_BG,
        borderRadius: radiuses.full,
        padding: "16px 32px",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: BUTTON_TEXT,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </div>
  );
}
