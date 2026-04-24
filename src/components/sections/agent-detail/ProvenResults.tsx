import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// ProvenResults.tsx  —  "Proven Results"
// Figma frame: 503:3069  "Frame 2147225684"
// Canvas: 1280 × 615 px   Page-y: ...   bg: none
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 615,   bg none
//   Grid SVG           (x=-272, y=-183)  2400 × 1830
//   Content Area       (x=24, y=91)  1232 × 371
//     Left Panel       (x=0, y=-18)  584 × 369
//     Right Grid       (x=628, y=30) 584 × 300
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 615;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BLUE = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const TEXT_DARK = "#191C1E";
const TEXT_MUTED = "#727785";

export default function ProvenResults() {
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
          backgroundColor: colors.white,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative" style={{ width: 1280, height: 615, top: 0 }}>
        <Image 
          src="/section-6-agent-detail/bg-grid.svg" 
          alt="Grid" 
          width={2400.92} 
          height={1830} 
          className="absolute"
          style={{ left: -272, top: -183, width: 2400.92, height: 1830 }}
        />

        {/* Content Box */}
        <div className="absolute" style={{ left: 24, top: 91, width: 1232, height: 371 }}>
          
          {/* Left Panel */}
          <div className="absolute flex flex-col" style={{ left: 0, top: -18, width: 584, height: 369, gap: 81 }}>
            <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 48, lineHeight: "36px", color: TEXT_DARK, display: "flex", gap: "12px" }}>
              Proven
              <span style={{ 
                background: GRADIENT_BLUE, 
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent",
                backgroundClip: "text" 
              }}>Results</span>
            </h2>

            <div className="flex flex-col w-full" style={{ gap: 57 }}>
              
              <div className="flex flex-row w-full" style={{ gap: 16 }}>
                <div style={{ padding: 8, backgroundColor: "rgba(0, 90, 182, 0.1)", borderRadius: 8, height: 36 }}>
                  <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
                </div>
                <div className="flex flex-col" style={{ gap: 4 }}>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px", color: TEXT_DARK }}>45% Increase in CTR</span>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: TEXT_MUTED }}>Average boost in engagement for small business accounts.</span>
                </div>
              </div>

              <div className="flex flex-row w-full" style={{ gap: 16 }}>
                <div style={{ padding: 8, backgroundColor: "rgba(0, 90, 182, 0.1)", borderRadius: 8, height: 36 }}>
                  <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
                </div>
                <div className="flex flex-col" style={{ gap: 4 }}>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px", color: TEXT_DARK }}>12+ Weekly Hours Saved</span>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: TEXT_MUTED }}>Automated content scheduling across 5 major platforms.</span>
                </div>
              </div>

              <div className="flex flex-row w-full" style={{ gap: 16 }}>
                <div style={{ padding: 8, backgroundColor: "rgba(0, 90, 182, 0.1)", borderRadius: 8, height: 36 }}>
                  <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
                </div>
                <div className="flex flex-col" style={{ gap: 4 }}>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "24px", color: TEXT_DARK }}>Brand Voice Consistency</span>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: TEXT_MUTED }}>Advanced LLM fine-tuning to match your exact brand persona.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Grid */}
          <div className="absolute" style={{ left: 628, top: 30, width: 584, height: 300 }}>
            
            <div className="absolute flex flex-col" style={{ left: 0, top: 0, width: 280, padding: 24, gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-1.svg" alt="Content" width={18} height={16} />
              <div className="flex flex-col w-full" style={{ paddingTop: 8 }}>
                <h4 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: TEXT_DARK }}>Content generation</h4>
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>High-quality captions and visual<br/>prompts.</p>
            </div>

            <div className="absolute flex flex-col" style={{ left: 304, top: 0, width: 280, padding: "24px 24px 40px", gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-2.svg" alt="Schedule" width={18} height={20} />
              <div className="flex flex-col w-full" style={{ paddingTop: 8 }}>
                <h4 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: TEXT_DARK }}>Auto scheduling</h4>
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>Post directly to Instagram, X, and FB.</p>
            </div>

            <div className="absolute flex flex-col" style={{ left: 0, top: 176, width: 280, padding: 24, gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-3.svg" alt="Optimization" width={20} height={12} />
              <div className="flex flex-col w-full" style={{ paddingTop: 8 }}>
                <h4 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: TEXT_DARK }}>AI optimization</h4>
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>Data-driven performance insights.</p>
            </div>

            <div className="absolute flex flex-col" style={{ left: 304, top: 176, width: 280, padding: 24, gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-4.svg" alt="Multi-platform" width={20} height={16} />
              <div className="flex flex-col w-full" style={{ paddingTop: 8 }}>
                <h4 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: TEXT_DARK }}>Multi-platform</h4>
              </div>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>Unified dashboard for all channels.</p>
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
        
        <div className="flex flex-col items-start gap-12 w-full">
          <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: 1.2, color: TEXT_DARK, display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span>Proven</span>
            <span style={{ 
              background: GRADIENT_BLUE, 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              backgroundClip: "text" 
            }}>Results</span>
          </h2>

          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-row items-start gap-4">
              <div className="mt-1" style={{ padding: 8, backgroundColor: "rgba(0, 90, 182, 0.1)", borderRadius: 8, flexShrink: 0 }}>
                <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
              </div>
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 18, lineHeight: "24px", color: TEXT_DARK }}>45% Increase in CTR</span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "22px", color: TEXT_MUTED }}>Average boost in engagement for small business accounts.</span>
              </div>
            </div>

            <div className="flex flex-row items-start gap-4">
              <div className="mt-1" style={{ padding: 8, backgroundColor: "rgba(0, 90, 182, 0.1)", borderRadius: 8, flexShrink: 0 }}>
                <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
              </div>
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 18, lineHeight: "24px", color: TEXT_DARK }}>12+ Weekly Hours Saved</span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "22px", color: TEXT_MUTED }}>Automated content scheduling across 5 major platforms.</span>
              </div>
            </div>

            <div className="flex flex-row items-start gap-4">
              <div className="mt-1" style={{ padding: 8, backgroundColor: "rgba(0, 90, 182, 0.1)", borderRadius: 8, flexShrink: 0 }}>
                <div style={{ width: 20, height: 20, background: GRADIENT_BLUE, borderRadius: 4 }} />
              </div>
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 18, lineHeight: "24px", color: TEXT_DARK }}>Brand Voice Consistency</span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "22px", color: TEXT_MUTED }}>Advanced LLM fine-tuning to match your exact brand persona.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col flex-1" style={{ padding: 20, gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-1.svg" alt="Content" width={18} height={16} />
              <h4 style={{ margin: "4px 0 0", fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: TEXT_DARK }}>Content gen</h4>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>High-quality captions and visual prompts.</p>
            </div>

            <div className="flex flex-col flex-1" style={{ padding: 20, gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-2.svg" alt="Schedule" width={18} height={20} />
              <h4 style={{ margin: "4px 0 0", fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: TEXT_DARK }}>Scheduling</h4>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>Post directly to Instagram, X, and FB.</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col flex-1" style={{ padding: 20, gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-3.svg" alt="Optimization" width={20} height={12} />
              <h4 style={{ margin: "4px 0 0", fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: TEXT_DARK }}>Optimization</h4>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>Data-driven performance insights.</p>
            </div>

            <div className="flex flex-col flex-1" style={{ padding: 20, gap: 8, backgroundColor: "#F2F4F7", borderRadius: 16, boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}>
              <Image src="/section-6-agent-detail/icon-4.svg" alt="Multi-platform" width={20} height={16} />
              <h4 style={{ margin: "4px 0 0", fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: TEXT_DARK }}>Multi-platform</h4>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: TEXT_MUTED }}>Unified dashboard for all channels.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
