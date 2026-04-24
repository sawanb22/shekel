import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// HowItWorks.tsx  —  "How It Works"
// Figma frame: 503:3040  "How It Works Section"
// Canvas: 1232 × 311 px   Page-y: ...   bg: none
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1232px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1232 × 311,   bg none
//   Heading            (x=0, y=0)    1232 × 48
//   Content Row        (x=104, y=112) 1024 × 199
//     Connectors       (x=256, y=44)  512 × 1
//     Item 1 (Input)   (x=0, y=0)     260 × 199
//     Item 2 (AI)      (x=382, y=0)   260 × 199
//     Item 3 (Output)  (x=764, y=0)   260 × 199
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280; // Standardizing canvas width for consistent scaling
const CANVAS_H = 340;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const TEXT_DARK = "#191C1E";
const TEXT_MUTED = "#727785";
const LINE_COLOR = "#C1C6D5";

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
      className="relative hidden w-full overflow-hidden md:block py-16"
      style={{
        backgroundColor: colors.white,
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
          justifyContent: "center", // Center the 1232 content in the 1280 canvas
        }}
      >
        <div className="relative" style={{ width: 1232, height: 311, top: 14 }}>
          
          <div className="absolute flex flex-col items-center" style={{ left: 0, top: 0, width: 1232, height: 48 }}>
            <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 48, lineHeight: "48px", color: TEXT_DARK, textAlign: "center" }}>
              How It Works
            </h2>
          </div>

          <div className="absolute flex flex-row justify-between items-center" style={{ left: 104, top: 112, width: 1024, height: 199 }}>
            
            {/* Dashed connector line */}
            <div className="absolute" style={{ left: 256, top: 40, width: 512, height: 1, borderTop: `1px dashed ${LINE_COLOR}` }} />

            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10" style={{ gap: 16, width: 260 }}>
              <Image src="/section-7-agent-detail/icon-input.svg" alt="Input" width={80} height={80} className="rounded-full" />
              <div className="flex flex-col items-center" style={{ gap: 16 }}>
                <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 24, lineHeight: "27px", textAlign: "center", color: TEXT_DARK }}>Input</h3>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", textAlign: "center", color: TEXT_MUTED }}>
                  Provide your brand goals and niche<br/>through text or files.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10" style={{ gap: 16, width: 260 }}>
              <div className="relative flex justify-center items-center" style={{ width: 136, height: 144, marginTop: -8, marginBottom: -40 }}>
                <Image src="/section-7-agent-detail/icon-ai.svg" alt="AI Processing" fill className="object-contain" />
              </div>
              <div className="flex flex-col items-center" style={{ gap: 16 }}>
                <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 24, lineHeight: "27px", textAlign: "center", color: TEXT_DARK }}>AI Processing</h3>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", textAlign: "center", color: TEXT_MUTED }}>
                  SocialCraft analyzes trends and builds<br/>your campaign strategy.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10" style={{ gap: 16, width: 260 }}>
              <Image src="/section-7-agent-detail/icon-output.svg" alt="Generated Output" width={80} height={80} className="rounded-full" />
              <div className="flex flex-col items-center" style={{ gap: 16 }}>
                <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 24, lineHeight: "27px", textAlign: "center", color: TEXT_DARK }}>Generated Output</h3>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", textAlign: "center", color: TEXT_MUTED }}>
                  Receive ready-to-post content across<br/>all chosen channels.
                </p>
              </div>
            </div>

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
      style={{ backgroundColor: colors.white }}
    >
      <div className="relative flex flex-col gap-12 px-6 py-16">
        
        <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: 1.2, color: TEXT_DARK, textAlign: "center" }}>
          How It Works
        </h2>

        <div className="flex flex-col items-center relative gap-12">
          
          {/* Vertical dashed line for mobile */}
          <div className="absolute top-10 bottom-10" style={{ width: 1, borderLeft: `1px dashed ${LINE_COLOR}`, left: "50%", transform: "translateX(-50%)", zIndex: 0 }} />

          {/* Step 1 */}
          <div className="flex flex-col items-center relative z-10" style={{ gap: 12, backgroundColor: colors.white, padding: "8px 0" }}>
            <Image src="/section-7-agent-detail/icon-input.svg" alt="Input" width={64} height={64} className="rounded-full" />
            <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px", textAlign: "center", color: TEXT_DARK }}>Input</h3>
            <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", textAlign: "center", color: TEXT_MUTED, maxWidth: 280 }}>
              Provide your brand goals and niche through text or files.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative z-10" style={{ gap: 12, backgroundColor: colors.white, padding: "8px 0" }}>
            <div className="relative flex justify-center items-center" style={{ width: 102, height: 108, marginTop: -6, marginBottom: -30 }}>
              <Image src="/section-7-agent-detail/icon-ai.svg" alt="AI Processing" fill className="object-contain" />
            </div>
            <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px", textAlign: "center", color: TEXT_DARK }}>AI Processing</h3>
            <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", textAlign: "center", color: TEXT_MUTED, maxWidth: 280 }}>
              SocialCraft analyzes trends and builds your campaign strategy.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center relative z-10" style={{ gap: 12, backgroundColor: colors.white, padding: "8px 0" }}>
            <Image src="/section-7-agent-detail/icon-output.svg" alt="Generated Output" width={64} height={64} className="rounded-full" />
            <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px", textAlign: "center", color: TEXT_DARK }}>Generated Output</h3>
            <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", textAlign: "center", color: TEXT_MUTED, maxWidth: 280 }}>
              Receive ready-to-post content across all chosen channels.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
