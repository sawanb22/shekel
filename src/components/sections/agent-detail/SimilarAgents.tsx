import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// SimilarAgents.tsx  —  "Similar Agents"
// Figma frame: 503-3260  "Section - Similar Agents"
// Canvas: 1232 × 366 px   Page-y: TBD   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled canvas with max-width and centered container
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 366;

export default function SimilarAgents() {
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
          transform: `scale(calc(100cqw / ${CANVAS_W}px))`,
          transformOrigin: "top left",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative flex flex-col items-start w-full h-full" style={{ width: 1232, height: 366, gap: 40 }}>
          
          {/* Header Row */}
          <div className="relative shrink-0 w-full" style={{ height: 68 }}>
            <div className="absolute flex flex-col justify-center left-0 top-[24px] w-[420px]" style={{ transform: "translateY(-50%)" }}>
              <p style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 600, fontSize: 48, lineHeight: "48px", color: "#191c1e" }}>
                <span>Similar </span>
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)" }}>Agents</span>
              </p>
            </div>
            
            <div className="absolute flex items-center cursor-pointer group" style={{ gap: 7.99, left: 1008, top: 24 }}>
              <div className="flex flex-col justify-center shrink-0">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#000000", letterSpacing: "1.4px", textTransform: "uppercase" }}>
                  Explore More Agents
                </p>
              </div>
              <div className="relative shrink-0" style={{ width: 8.75, height: 8.75 }}>
                <Image src="/section-8-agent-detail/arrow-up-right.svg" alt="" fill className="object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-3 relative shrink-0 w-full" style={{ gap: 40, height: 258 }}>
            
            {/* Card 1 */}
            <div className="flex flex-col items-start relative shrink-0 self-start w-full" style={{ backgroundColor: "#f2f4f7", borderRadius: 16, padding: 32, gap: 15.5 }}>
              <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                  <Image src="/section-8-agent-detail/icon-copygenius.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full mt-[0.5px]">
                <div className="flex flex-col justify-center shrink-0 w-full">
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>
                    CopyGenius Pro
                  </p>
                </div>
              </div>
              <div className="flex items-center relative shrink-0 w-full" style={{ gap: 4 }}>
                <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                  <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
                </div>
                <div className="flex flex-col justify-center shrink-0">
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "#727785" }}>
                    4.7
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(193,198,213,0.1)", borderRadius: 8, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)", height: 48, padding: "1px 21px" }}>
                <div className="flex flex-col justify-center shrink-0 text-center" style={{ height: 21 }}>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: "#191c1e" }}>
                    Run Agent
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start relative shrink-0 self-start w-full" style={{ backgroundColor: "#f2f4f7", borderRadius: 16, padding: 32, gap: 15.5 }}>
              <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                  <Image src="/section-8-agent-detail/icon-videocraft.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full mt-[0.5px]">
                <div className="flex flex-col justify-center shrink-0 w-full">
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>
                    VideoCraft AI
                  </p>
                </div>
              </div>
              <div className="flex items-center relative shrink-0 w-full" style={{ gap: 4 }}>
                <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                  <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
                </div>
                <div className="flex flex-col justify-center shrink-0">
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "#727785" }}>
                    4.9
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(193,198,213,0.1)", borderRadius: 8, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)", height: 48, padding: "1px 21px" }}>
                <div className="flex flex-col justify-center shrink-0 text-center" style={{ height: 21 }}>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: "#191c1e" }}>
                    Run Agent
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start relative shrink-0 self-start w-full" style={{ backgroundColor: "#f2f4f7", borderRadius: 16, padding: 32, gap: 15.5 }}>
              <div className="flex items-center justify-center overflow-clip relative shrink-0" style={{ width: 56, height: 56, backgroundColor: "#ffffff", borderRadius: 12, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
                <div className="relative shrink-0" style={{ width: 16.667, height: 10 }}>
                  <Image src="/section-8-agent-detail/icon-metricmaster.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full mt-[0.5px]">
                <div className="flex flex-col justify-center shrink-0 w-full">
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>
                    MetricMaster
                  </p>
                </div>
              </div>
              <div className="flex items-center relative shrink-0 w-full" style={{ gap: 4 }}>
                <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                  <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
                </div>
                <div className="flex flex-col justify-center shrink-0">
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "#727785" }}>
                    4.5
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(193,198,213,0.1)", borderRadius: 8, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)", height: 48, padding: "1px 21px" }}>
                <div className="flex flex-col justify-center shrink-0 text-center" style={{ height: 21 }}>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: "#191c1e" }}>
                    Run Agent
                  </p>
                </div>
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
      className="relative block w-full overflow-hidden md:hidden px-6 py-16"
      style={{ backgroundColor: colors.white }}
    >
      <div className="flex flex-col items-center gap-10 w-full">
        
        {/* Header Row Mobile */}
        <div className="flex flex-col items-center text-center gap-4 w-full">
          <p style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 600, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: "1.2", color: "#191c1e" }}>
            <span>Similar </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)" }}>Agents</span>
          </p>
        </div>

        {/* Grid Row Mobile */}
        <div className="flex flex-col gap-6 w-full">
          
          {/* Card 1 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: "#f2f4f7", borderRadius: 16, padding: 24, gap: 16 }}>
            <div className="flex flex-row items-center gap-4">
              <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                  <Image src="/section-8-agent-detail/icon-copygenius.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>
                  CopyGenius Pro
                </p>
                <div className="flex items-center gap-1">
                  <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                    <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
                  </div>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "#727785" }}>
                    4.7
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative w-full cursor-pointer hover:bg-gray-50 transition-colors" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(193,198,213,0.1)", borderRadius: 8, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)", height: 44, padding: "1px 21px" }}>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: "#191c1e" }}>
                Run Agent
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: "#f2f4f7", borderRadius: 16, padding: 24, gap: 16 }}>
            <div className="flex flex-row items-center gap-4">
              <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
                <div className="absolute inset-[-1.79%_-3.57%_-5.36%_-3.57%]">
                  <Image src="/section-8-agent-detail/icon-videocraft.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>
                  VideoCraft AI
                </p>
                <div className="flex items-center gap-1">
                  <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                    <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
                  </div>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "#727785" }}>
                    4.9
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative w-full cursor-pointer hover:bg-gray-50 transition-colors" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(193,198,213,0.1)", borderRadius: 8, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)", height: 44, padding: "1px 21px" }}>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: "#191c1e" }}>
                Run Agent
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: "#f2f4f7", borderRadius: 16, padding: 24, gap: 16 }}>
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center overflow-clip relative shrink-0" style={{ width: 56, height: 56, backgroundColor: "#ffffff", borderRadius: 12, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
                <div className="relative shrink-0" style={{ width: 16.667, height: 10 }}>
                  <Image src="/section-8-agent-detail/icon-metricmaster.svg" alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: "#191c1e" }}>
                  MetricMaster
                </p>
                <div className="flex items-center gap-1">
                  <div className="relative shrink-0" style={{ width: 10, height: 9.5 }}>
                    <Image src="/section-8-agent-detail/icon-star.svg" alt="" fill className="object-contain" />
                  </div>
                  <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "18px", color: "#727785" }}>
                    4.5
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative w-full cursor-pointer hover:bg-gray-50 transition-colors" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(193,198,213,0.1)", borderRadius: 8, boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)", height: 44, padding: "1px 21px" }}>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: "#191c1e" }}>
                Run Agent
              </p>
            </div>
          </div>

        </div>

        {/* Link Mobile */}
        <div className="flex items-center cursor-pointer group mt-2" style={{ gap: 7.99 }}>
          <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "#000000", letterSpacing: "1.4px", textTransform: "uppercase" }}>
            Explore More Agents
          </p>
          <div className="relative shrink-0" style={{ width: 8.75, height: 8.75 }}>
            <Image src="/section-8-agent-detail/arrow-up-right.svg" alt="" fill className="object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

      </div>
    </section>
  );
}
