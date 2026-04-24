import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// UserReviews.tsx  —  "Section - User Reviews"
// Figma frame: 503:3232  "Section - User Reviews"
// Canvas: 1232 × 181 px   Page-y: TBD   bg: Transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled canvas with max-width and centered container
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 181;

const RATING_TEXT = "#191C1E";
const LABEL_COLOR = "#727785";
const QUOTE_TEXT = "#414753";
const CARD_SHADOW = "0px 1px 2px 0px rgba(0, 0, 0, 0.05)";

export default function UserReviews() {
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
        <div className="relative flex items-center" style={{ width: 1232, height: 181, top: 0, gap: 80 }}>
          
          {/* Rating Column */}
          <div className="flex flex-col items-center flex-shrink-0 relative" style={{ width: 186.06, gap: 13 }}>
            <div className="flex flex-col items-center w-full relative">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 96, lineHeight: "96px", textAlign: "center", color: RATING_TEXT }}>
                4.8
              </span>
            </div>
            <div className="flex items-center justify-center relative" style={{ width: 232.58, height: 23.75 }}>
              <div style={{ transform: "scale(1.25)", flex: "none" }}>
                <div className="flex items-start justify-center relative" style={{ width: 186.06 }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                      <Image src="/section-7-agent-detail/star-full.svg" alt="" fill className="object-contain" />
                    </div>
                  ))}
                  <div className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                    <Image src="/section-7-agent-detail/star-half.svg" alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full relative">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", textAlign: "center", letterSpacing: "0.7px", textTransform: "uppercase", color: LABEL_COLOR }}>
                Based on 1.2k reviews
              </span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="flex-1 grid grid-cols-2 relative" style={{ gap: 40, height: 181 }}>
            
            {/* Review 1 */}
            <div className="flex flex-col items-start relative self-start" style={{ backgroundColor: colors.white, borderRadius: 16, padding: 32, gap: 24, boxShadow: CARD_SHADOW }}>
              <div className="absolute" style={{ left: -4, top: -8, width: 34, height: 24 }}>
                <Image src="/section-7-agent-detail/quote-icon.svg" alt="" fill className="object-contain" />
              </div>
              <div className="flex flex-col relative w-full" style={{ width: 386.08, height: 72 }}>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontStyle: "italic", fontSize: 16, lineHeight: "24px", color: QUOTE_TEXT }}>
                  "SocialCraft completely changed how I manage my
                  <br />agency. It does 80% of the heavy lifting for my
                  <br />social team."
                </p>
              </div>
              <div className="flex flex-col items-start w-full relative">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: QUOTE_TEXT }}>
                  — Sarah J., Founder
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col items-start relative self-start" style={{ backgroundColor: colors.white, borderRadius: 16, padding: "32px 32px 56px", gap: 24, boxShadow: CARD_SHADOW }}>
              <div className="absolute" style={{ left: -4, top: -8, width: 34, height: 24 }}>
                <Image src="/section-7-agent-detail/quote-icon.svg" alt="" fill className="object-contain" />
              </div>
              <div className="flex flex-col relative w-full" style={{ width: 397.27, height: 48 }}>
                <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontStyle: "italic", fontSize: 16, lineHeight: "24px", color: QUOTE_TEXT }}>
                  "The tone optimization is scary good. I've tried other
                  <br />tools, but this actually sounds like me."
                </p>
              </div>
              <div className="flex flex-col items-start w-full relative">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: QUOTE_TEXT }}>
                  — Marcus Chen, Content Creator
                </span>
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
      className="relative block w-full overflow-hidden md:hidden py-16 px-6"
      style={{ backgroundColor: colors.white }}
    >
      <div className="flex flex-col items-center gap-12 w-full">
        
        {/* Rating Column Mobile */}
        <div className="flex flex-col items-center relative w-full" style={{ gap: 13 }}>
          <div className="flex flex-col items-center w-full relative">
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 64, lineHeight: "64px", textAlign: "center", color: RATING_TEXT }}>
              4.8
            </span>
          </div>
          <div className="flex items-center justify-center relative" style={{ width: 232.58, height: 23.75 }}>
            <div style={{ transform: "scale(1.25)", flex: "none" }}>
              <div className="flex items-start justify-center relative" style={{ width: 186.06 }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                    <Image src="/section-7-agent-detail/star-full.svg" alt="" fill className="object-contain" />
                  </div>
                ))}
                <div className="flex flex-col items-center relative" style={{ width: 20, height: 19 }}>
                  <Image src="/section-7-agent-detail/star-half.svg" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full relative">
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "18px", textAlign: "center", letterSpacing: "0.7px", textTransform: "uppercase", color: LABEL_COLOR }}>
              Based on 1.2k reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid Mobile */}
        <div className="flex flex-col relative w-full" style={{ gap: 24 }}>
          
          {/* Review 1 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: colors.white, borderRadius: 16, padding: 24, gap: 16, boxShadow: CARD_SHADOW }}>
            <div className="absolute" style={{ left: -4, top: -8, width: 34, height: 24 }}>
              <Image src="/section-7-agent-detail/quote-icon.svg" alt="" fill className="object-contain" />
            </div>
            <div className="flex flex-col relative w-full mt-2">
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontStyle: "italic", fontSize: 15, lineHeight: "24px", color: QUOTE_TEXT }}>
                "SocialCraft completely changed how I manage my agency. It does 80% of the heavy lifting for my social team."
              </p>
            </div>
            <div className="flex flex-col items-start w-full relative">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: QUOTE_TEXT }}>
                — Sarah J., Founder
              </span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col items-start relative w-full" style={{ backgroundColor: colors.white, borderRadius: 16, padding: 24, gap: 16, boxShadow: CARD_SHADOW }}>
            <div className="absolute" style={{ left: -4, top: -8, width: 34, height: 24 }}>
              <Image src="/section-7-agent-detail/quote-icon.svg" alt="" fill className="object-contain" />
            </div>
            <div className="flex flex-col relative w-full mt-2">
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontStyle: "italic", fontSize: 15, lineHeight: "24px", color: QUOTE_TEXT }}>
                "The tone optimization is scary good. I've tried other tools, but this actually sounds like me."
              </p>
            </div>
            <div className="flex flex-col items-start w-full relative">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: QUOTE_TEXT }}>
                — Marcus Chen, Content Creator
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
