import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// PricingOptions.tsx  —  "Pricing options"
// Figma frame: 503:3139  "Body"
// Canvas: 1280 × 769 px   Page-y: TBD   bg: #FFFFFF
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 769,   bg #FFFFFF, rounded 24px
//   Background SVG     (-531, -188)  2400.92 × 1830 (bg-decoration.svg)
//   Ellipse 43665      (-126, 638)   310 × 131   bg gradient, blur 203.4px
//   Ellipse 43666      (1081, 655)   310 × 131   bg gradient, blur 203.4px
//   Section Header     (48, 76)      1184 × 52   flex-col, center
//     Heading          (376, -8)     432.92 × 60 Poppins 500 60/60 LS -2.5% #000000
//   Pricing Grid       (24, 212)     1232 × 469  flex-row, gap 24
//     Free Card        (0, 0)        389.33 × 448 bg #FFFFFF, border rgba(255,255,255,0.34) rounded 24px, p 32
//       Heading 4      ... Plus Jakarta Sans 500 24/36 #000000 "Free"
//       Subtext        ... Inter 400 14/21 #000000 "Explore the possibilities"
//       Price          ... Inter 600 48/48 #000000 "$0" + Inter 400 16/16 "/mo"
//       List           ... flex-col, gap 20
//         Item 1       ... check-icon.svg + Inter 400 14/21 #000000 "3 runs per month"
//         Item 2       ... "Basic text generation"
//         Item 3       ... "1 social platform"
//       Button         ... border gradient, rounded 12px, Inter 600 16/24 gradient text "Start Free"
//     Pay-per-use Card (421.33, 0)   389.33 × 441 bg #FFFFFF, rounded 24px, shadow, p 32
//       Badge          ... "Popular" bg gradient, rounded-full
//       Heading 4      ... "Pay-per-use"
//       Subtext        ... "Flexibility at its best"
//       Price          ... "$5/task"
//       List           ... "All Free features", "Premium visual AI", "Multi-platform scheduling", "API access"
//       Button         ... bg gradient, shadow, "Get Started" #FFFFFF
//     Pro Card         (842.67, 0)   389.33 × 448 bg #FFFFFF, border rgba(255,255,255,0.24) rounded 24px, p 32
//       Heading 4      ... "Pro"
//       Subtext        ... "Power for professionals"
//       Price          ... "$19/mo"
//       List           ... "Unlimited runs", "Priority processing", "Dedicated support"
//       Button         ... border gradient, "Go Pro"
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 769;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const GRADIENT_BG = "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%)";
const CARD_SHADOW = "0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 0px 0px 2px #005AB6";
const BUTTON_SHADOW = "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)";

export default function PricingOptions() {
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
        <div className="relative" style={{ width: 1280, height: 769 }}>
          <div
            className="absolute overflow-hidden"
            style={{
              left: 0,
              top: 0,
              width: CANVAS_W,
              height: CANVAS_H,
              backgroundColor: colors.white,
              borderRadius: radiuses.card,
            }}
          >
            {/* Background decoration */}
            <div className="absolute pointer-events-none" style={{ left: -531, top: -188, width: 2400.92, height: 1830 }}>
              <Image src="/section-6-agent-detail/bg-decoration.svg" alt="" fill className="object-cover" />
            </div>
            
            <div className="absolute pointer-events-none" style={{ left: -126, top: 638, width: 310, height: 131 }}>
              <div className="absolute w-[310px] h-[131px]" style={{ background: GRADIENT_BG, filter: "blur(203.4px)" }} />
            </div>
            <div className="absolute pointer-events-none" style={{ left: 1081, top: 655, width: 310, height: 131 }}>
              <div className="absolute w-[310px] h-[131px]" style={{ background: GRADIENT_BG, filter: "blur(203.4px)" }} />
            </div>

            {/* Section Header */}
            <div className="absolute flex flex-col items-center" style={{ left: 48, top: 76, width: 1184, height: 52 }}>
              <div className="absolute flex flex-col justify-center text-center" style={{ left: "50%", transform: "translateX(-50%)", top: -8 }}>
                <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 60, lineHeight: "60px", letterSpacing: "-1.5px", color: colors.black }}>
                  Pricing options
                </h2>
              </div>
            </div>

            {/* Pricing Grid */}
            <div className="absolute flex flex-row" style={{ left: 24, top: 212, width: 1232, height: 469 }}>
              
              {/* Free Card */}
              <div className="absolute flex flex-col items-start" style={{ left: 0, top: 0, width: 389.33, height: 448, backgroundColor: colors.white, border: "1px solid rgba(255, 255, 255, 0.34)", borderRadius: 24, padding: 32, gap: 24 }}>
                <div className="flex flex-col items-start w-full" style={{ gap: 8 }}>
                  <span style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px", color: colors.black }}>Free</span>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Explore the possibilities</span>
                </div>
                
                <div className="relative w-full" style={{ height: 48 }}>
                  <div className="absolute flex flex-col justify-center" style={{ left: 0, top: "50%", transform: "translateY(-50%)", height: 48 }}>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px", color: colors.black }}>$0</span>
                  </div>
                  <div className="absolute flex flex-col justify-center" style={{ left: 62.89, top: "50%", transform: "translateY(-50%)", height: 16, marginTop: 11 }}>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px", color: colors.black }}>/mo</span>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full" style={{ gap: 20, paddingBottom: 48 }}>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 113.47 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>3 runs per month</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 139.42 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Basic text generation</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 106.98 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>1 social platform</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full" style={{ height: 48, borderRadius: 12, border: "1px solid #2864E4", padding: "0 21px" }}>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", background: GRADIENT_BG, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Start Free
                  </span>
                </div>
              </div>

              {/* Pay-per-use Card */}
              <div className="absolute flex flex-col items-start" style={{ left: 421.33, top: 0, width: 389.33, height: 441, backgroundColor: colors.white, borderRadius: 24, padding: 32, gap: 24, boxShadow: CARD_SHADOW }}>
                <div className="absolute flex flex-col items-center" style={{ left: "50%", transform: "translateX(-50%)", top: -16, padding: "6px 20px", background: GRADIENT_BG, borderRadius: 9999 }}>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "18px", textTransform: "uppercase", color: colors.white }}>Popular</span>
                </div>

                <div className="flex flex-col items-start w-full" style={{ gap: 8 }}>
                  <span style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px", color: colors.black }}>Pay-per-use</span>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Flexibility at its best</span>
                </div>
                
                <div className="relative w-full" style={{ height: 48 }}>
                  <div className="absolute flex flex-col justify-center" style={{ left: 0, top: "50%", transform: "translateY(-50%)", height: 48 }}>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px", color: colors.black }}>$5</span>
                  </div>
                  <div className="absolute flex flex-col justify-center" style={{ left: 60.61, top: "50%", transform: "translateY(-50%)", height: 16, marginTop: 11 }}>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px", color: colors.black }}>/task</span>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full" style={{ gap: 20 }}>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 110.59 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>All Free features</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 120.98 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>Premium visual AI</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 175.56 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>Multi-platform scheduling</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 74.64 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>API access</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full hover:opacity-90 cursor-pointer" style={{ height: 48, borderRadius: 12, background: GRADIENT_BG, boxShadow: BUTTON_SHADOW }}>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: colors.white }}>
                    Get Started
                  </span>
                </div>
              </div>

              {/* Pro Card */}
              <div className="absolute flex flex-col items-start" style={{ left: 842.67, top: 0, width: 389.33, height: 448, backgroundColor: colors.white, border: "1px solid rgba(255, 255, 255, 0.24)", borderRadius: 24, padding: 32, gap: 24 }}>
                <div className="flex flex-col items-start w-full" style={{ gap: 8 }}>
                  <span style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px", color: colors.black }}>Pro</span>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Power for professionals</span>
                </div>
                
                <div className="relative w-full" style={{ height: 48 }}>
                  <div className="absolute flex flex-col justify-center" style={{ left: 0, top: "50%", transform: "translateY(-50%)", height: 48 }}>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px", color: colors.black }}>$19</span>
                  </div>
                  <div className="absolute flex flex-col justify-center" style={{ left: 82.22, top: "50%", transform: "translateY(-50%)", height: 16, marginTop: 11 }}>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px", color: colors.black }}>/mo</span>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full" style={{ gap: 20, paddingBottom: 48 }}>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 95.45 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Unlimited runs</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 124.8 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Priority processing</span>
                    </div>
                  </div>
                  <div className="flex items-center w-full" style={{ gap: 12 }}>
                    <div className="relative" style={{ width: 12.23, height: 9.02 }}>
                      <Image src="/section-6-agent-detail/check-icon.svg" alt="" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center" style={{ width: 122.63 }}>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Dedicated support</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full" style={{ height: 48, borderRadius: 12, border: "1px solid #2864E4", padding: "0 21px" }}>
                  <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", background: GRADIENT_BG, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Go Pro
                  </span>
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
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: colors.white, borderRadius: radiuses.card, marginTop: 32, marginBottom: 32 }}
    >
      <div className="relative flex flex-col gap-12 px-6 py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <Image src="/section-6-agent-detail/bg-decoration.svg" alt="" fill className="object-cover opacity-50" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: "1.2", letterSpacing: "-1px", color: colors.black }}>
            Pricing options
          </h2>
        </div>

        <div className="relative z-10 flex flex-col gap-8 w-full">
          
          {/* Free Card Mobile */}
          <div className="flex flex-col items-start w-full bg-white border border-[rgba(255,255,255,0.34)] rounded-3xl p-8 gap-6 shadow-sm">
            <div className="flex flex-col items-start w-full gap-2">
              <span style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px", color: colors.black }}>Free</span>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Explore the possibilities</span>
            </div>
            
            <div className="flex items-baseline w-full h-12 gap-1">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px", color: colors.black }}>$0</span>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px", color: colors.black }}>/mo</span>
            </div>

            <div className="flex flex-col items-start w-full gap-4 pb-6">
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>3 runs per month</span>
              </div>
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Basic text generation</span>
              </div>
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>1 social platform</span>
              </div>
            </div>

            <div className="flex items-center justify-center w-full hover:opacity-90 cursor-pointer" style={{ height: 48, borderRadius: 12, border: "1px solid #2864E4", padding: "0 21px" }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", background: GRADIENT_BG, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Start Free</span>
            </div>
          </div>

          {/* Pay-per-use Card Mobile */}
          <div className="flex flex-col items-start w-full relative bg-white rounded-3xl p-8 gap-6" style={{ boxShadow: CARD_SHADOW }}>
            <div className="absolute flex flex-col items-center" style={{ left: "50%", transform: "translateX(-50%)", top: -16, padding: "6px 20px", background: GRADIENT_BG, borderRadius: 9999 }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "18px", textTransform: "uppercase", color: colors.white }}>Popular</span>
            </div>

            <div className="flex flex-col items-start w-full gap-2">
              <span style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px", color: colors.black }}>Pay-per-use</span>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Flexibility at its best</span>
            </div>
            
            <div className="flex items-baseline w-full h-12 gap-1">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px", color: colors.black }}>$5</span>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px", color: colors.black }}>/task</span>
            </div>

            <div className="flex flex-col items-start w-full gap-4">
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>All Free features</span>
              </div>
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>Premium visual AI</span>
              </div>
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>Multi-platform scheduling</span>
              </div>
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon-blue.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "21px", color: colors.black }}>API access</span>
              </div>
            </div>

            <div className="flex items-center justify-center w-full hover:opacity-90 cursor-pointer" style={{ height: 48, borderRadius: 12, background: GRADIENT_BG, boxShadow: BUTTON_SHADOW }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: colors.white }}>Get Started</span>
            </div>
          </div>

          {/* Pro Card Mobile */}
          <div className="flex flex-col items-start w-full bg-white border border-[rgba(255,255,255,0.24)] rounded-3xl p-8 gap-6 shadow-sm">
            <div className="flex flex-col items-start w-full gap-2">
              <span style={{ fontFamily: typography.fonts.jakarta, fontWeight: 500, fontSize: 24, lineHeight: "36px", color: colors.black }}>Pro</span>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Power for professionals</span>
            </div>
            
            <div className="flex items-baseline w-full h-12 gap-1">
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 48, lineHeight: "48px", color: colors.black }}>$19</span>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "16px", color: colors.black }}>/mo</span>
            </div>

            <div className="flex flex-col items-start w-full gap-4 pb-6">
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Unlimited runs</span>
              </div>
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Priority processing</span>
              </div>
              <div className="flex items-center w-full gap-3">
                <Image src="/section-6-agent-detail/check-icon.svg" alt="" width={12.23} height={9.02} />
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "21px", color: colors.black }}>Dedicated support</span>
              </div>
            </div>

            <div className="flex items-center justify-center w-full hover:opacity-90 cursor-pointer" style={{ height: 48, borderRadius: 12, border: "1px solid #2864E4", padding: "0 21px" }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", background: GRADIENT_BG, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Go Pro</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
