import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Hero.tsx  —  "SocialCraft AI"
// Figma frame: 503:2973  "Frame 2147225682"
// Canvas: 1280 × 614 px   Page-y: top   bg: none (has image bg)
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   bg image         (x=-315, y=-127)  1772 × 1325
//   Center Container (x=61, y=83)      805 × 396
//     Top Icon       (x=0, y=0)        96 × 96
//     Title          (x=?, y=?)        "SocialCraft AI" + 4.8 Rating
//     Subtitle       (x=?, y=?)        "1.2k runs" + "Verified Creator"
//     Tags           (x=?, y=?)        "Marketing", "Automation"
//     Description    (x=?, y=?)        "The ultimate autonomous..."
//     Buttons        (x=?, y=?)        "Run Agent", Share icon
//   Sticky Pricing   (x=846, y=107)    378 × 396
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 614;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

export default function Hero() {
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
        {/* Background */}
        <div className="absolute" style={{ left: -315, top: -127, width: 1772, height: 1325 }}>
          <Image 
            src="/section-4-agent-detail/bg.webp" 
            alt="Background" 
            fill
            className="object-cover pointer-events-none"
          />
        </div>
        
        {/* Left Content */}
        <div className="absolute flex flex-col items-start" style={{ left: 61, top: 83, width: 805, gap: 32 }}>
          {/* Top Icon */}
          <div className="relative" style={{ width: 96, height: 96 }}>
            <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full overflow-hidden" style={{ background: BUTTON_GRADIENT, borderRadius: 16, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)" }}>
              {/* Inner highlight/shadow logic from Figma is complex, sticking to simple gradient+shadow */}
            </div>
            <div className="absolute" style={{ left: 30, top: 31, width: 36, height: 34.5 }}>
              <Image src="/section-4-agent-detail/stars-icon.svg" alt="" fill className="object-contain" />
            </div>
          </div>

          <div className="flex flex-col items-start w-full relative" style={{ gap: 8 }}>
            
            {/* Title & Rating */}
            <div className="flex items-center w-full relative" style={{ gap: 12 }}>
              <h1 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 48, lineHeight: "40px", letterSpacing: "-0.9px", color: colors.text.heading }}>
                SocialCraft AI
              </h1>
              <div className="flex items-center relative" style={{ padding: "4px 8px", backgroundColor: "#E6E8EB", borderRadius: 6 }}>
                <div className="relative" style={{ width: 11.67, height: 11.08 }}>
                  <Image src="/section-4-agent-detail/star-small.svg" alt="" fill className="object-contain" />
                </div>
                <span style={{ paddingLeft: 4, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: colors.text.heading }}>
                  4.8
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="flex items-center w-full relative" style={{ gap: 16 }}>
              <div className="flex items-center relative" style={{ gap: 4 }}>
                <div className="relative" style={{ width: 11.67, height: 11.67 }}>
                  <Image src="/section-4-agent-detail/runs-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: colors.text.bodyMuted }}>
                  1.2k runs
                </span>
              </div>
              <div className="flex items-center relative" style={{ gap: 4 }}>
                <div className="relative" style={{ width: 12.83, height: 12.25 }}>
                  <Image src="/section-4-agent-detail/verified-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: colors.text.bodyMuted }}>
                  Verified Creator
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-start w-full relative" style={{ gap: 8, paddingTop: 8 }}>
              <div className="flex flex-col items-start relative" style={{ padding: "4px 12px", backgroundColor: "#B7EAFF", borderRadius: radiuses.full }}>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "16px", letterSpacing: "0.6px", textTransform: "uppercase", color: "#001F28" }}>
                  Marketing
                </span>
              </div>
              <div className="flex flex-col items-start relative" style={{ padding: "4px 12px", backgroundColor: "#B7EAFF", borderRadius: radiuses.full }}>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "16px", letterSpacing: "0.6px", textTransform: "uppercase", color: "#001F28" }}>
                  Automation
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col items-start relative" style={{ paddingTop: 16, maxWidth: 672 }}>
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18, lineHeight: "29.25px", color: colors.text.body }}>
                The ultimate autonomous marketing engine. Generate months of tailored high-<br/>
                engagement content and schedule it across all your platforms in seconds<br/>
                using advanced LLM optimization.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center w-full relative" style={{ gap: 16, paddingTop: 24 }}>
              <div className="flex items-center relative hover:opacity-90 cursor-pointer" style={{ padding: "16px 32px", background: BUTTON_GRADIENT, borderRadius: 12, gap: 8 }}>
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0)", borderRadius: 12 }} />
                <div className="relative" style={{ width: 20, height: 20 }}>
                  <Image src="/section-4-agent-detail/play-icon.svg" alt="" fill className="object-contain" />
                </div>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: colors.white }}>
                  Run Agent
                </span>
              </div>
              <div className="flex items-center justify-center relative hover:bg-gray-200 cursor-pointer" style={{ padding: 16, backgroundColor: "#ECEEF1", borderRadius: 12 }}>
                <div className="relative" style={{ width: 18, height: 20 }}>
                  <Image src="/section-4-agent-detail/share-icon.svg" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Sticky Pricing Card */}
        <div className="absolute flex flex-col items-start" style={{ left: 846, top: 107, width: 378.67, height: 396, padding: 32, gap: 16, backgroundColor: colors.white, borderRadius: radiuses.card }}>
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "0px 32px 64px -12px rgba(0,0,0,0.08)", borderRadius: radiuses.card }} />
          
          <div className="flex flex-col items-start w-full relative">
            <h3 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px", color: colors.text.heading }}>
              Pricing Plans
            </h3>
          </div>

          <div className="flex flex-col items-start w-full relative" style={{ gap: 16, paddingTop: 8, paddingBottom: 16 }}>
            {/* Pay per task */}
            <div className="flex items-center justify-between w-full relative" style={{ padding: 16, backgroundColor: "#F2F4F7", borderRadius: 12 }}>
              <div className="flex flex-col items-start relative">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.text.heading }}>
                  Pay per task
                </span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: colors.text.bodyMuted }}>
                  Ideal for occasional use
                </span>
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: colors.text.heading }}>
                $5
              </span>
            </div>

            {/* Monthly Subscription */}
            <div className="flex items-center justify-between w-full relative" style={{ padding: 16, backgroundColor: "#1672DF", borderRadius: 12 }}>
              <div className="flex flex-col items-start relative">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.white, whiteSpace: "nowrap" }}>
                  Monthly Subscription
                </span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: colors.white, opacity: 0.8, whiteSpace: "nowrap" }}>
                  Unlimited standard tasks
                </span>
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: colors.white }}>
                $19
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center w-full relative hover:opacity-90 cursor-pointer" style={{ padding: "16px 0", background: BUTTON_GRADIENT, borderRadius: 12 }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: "#F7F9FC" }}>
              Run Agent Now
            </span>
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
      <div className="absolute inset-0 w-full h-[1325px] opacity-60">
        <Image 
          src="/section-4-agent-detail/bg.webp" 
          alt="Background" 
          fill
          className="object-cover object-top pointer-events-none"
        />
      </div>
      <div className="relative flex flex-col gap-8 px-6 py-16">
        
        <div className="relative" style={{ width: 64, height: 64 }}>
          <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full overflow-hidden" style={{ background: BUTTON_GRADIENT, borderRadius: 12, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)" }}>
          </div>
          <div className="absolute" style={{ left: 20, top: 20, width: 24, height: 24 }}>
            <Image src="/section-4-agent-detail/stars-icon.svg" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <h1 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px, 8vw, 40px)", lineHeight: 1.2, letterSpacing: "-0.9px", color: colors.text.heading }}>
              SocialCraft AI
            </h1>
            <div className="flex flex-row items-center" style={{ padding: "4px 8px", backgroundColor: "#E6E8EB", borderRadius: 6 }}>
              <div className="relative" style={{ width: 12, height: 12 }}>
                <Image src="/section-4-agent-detail/star-small.svg" alt="Star" fill className="object-contain" />
              </div>
              <div className="flex flex-col pl-1">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, lineHeight: "20px", color: colors.text.heading }}>4.8</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-4">
            <div className="flex flex-row items-center gap-1.5">
              <div className="relative" style={{ width: 12, height: 12 }}>
                <Image src="/section-4-agent-detail/runs-icon.svg" alt="Runs" fill className="object-contain" />
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: colors.text.bodyMuted }}>1.2k runs</span>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <div className="relative" style={{ width: 13, height: 12 }}>
                <Image src="/section-4-agent-detail/verified-icon.svg" alt="Verified" fill className="object-contain" />
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: colors.text.bodyMuted }}>Verified Creator</span>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2 pt-2">
            <div style={{ padding: "4px 12px", backgroundColor: "#B7EAFF", borderRadius: radiuses.full }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "16px", letterSpacing: "0.6px", textTransform: "uppercase", color: "#001F28" }}>Marketing</span>
            </div>
            <div style={{ padding: "4px 12px", backgroundColor: "#B7EAFF", borderRadius: radiuses.full }}>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 12, lineHeight: "16px", letterSpacing: "0.6px", textTransform: "uppercase", color: "#001F28" }}>Automation</span>
            </div>
          </div>

          <div className="pt-2">
            <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "26px", color: colors.text.body }}>
              The ultimate autonomous marketing engine. Generate months of tailored high-engagement content and schedule it across all your platforms in seconds using advanced LLM optimization.
            </p>
          </div>

          <div className="flex flex-row items-center gap-4 pt-4">
            <div className="relative flex-1 flex flex-row items-center justify-center gap-2 hover:opacity-90 cursor-pointer" style={{ padding: "16px", background: BUTTON_GRADIENT, borderRadius: 12 }}>
              <div className="relative" style={{ width: 20, height: 20 }}>
                <Image src="/section-4-agent-detail/play-icon.svg" alt="Run" fill className="object-contain" />
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.white }}>Run Agent</span>
            </div>
            <div className="flex flex-col justify-center items-center hover:bg-gray-200 cursor-pointer" style={{ padding: 16, backgroundColor: "#ECEEF1", borderRadius: 12 }}>
              <div className="relative" style={{ width: 18, height: 20 }}>
                <Image src="/section-4-agent-detail/share-icon.svg" alt="Share" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Pricing Card */}
        <div className="flex flex-col items-stretch w-full gap-4 mt-4" style={{ padding: 24, backgroundColor: colors.white, borderRadius: radiuses.card, boxShadow: "0px 16px 32px -8px rgba(0, 0, 0, 0.08)" }}>
          <h3 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px", color: colors.text.heading }}>Pricing Plans</h3>

          <div className="flex flex-col gap-3 py-2">
            <div className="flex flex-row justify-between items-center w-full" style={{ padding: 16, backgroundColor: "#F2F4F7", borderRadius: 12 }}>
              <div className="flex flex-col">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.text.heading }}>Pay per task</span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: colors.text.bodyMuted }}>Ideal for occasional use</span>
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: colors.text.heading }}>$5</span>
            </div>

            <div className="flex flex-row justify-between items-center w-full" style={{ padding: 16, backgroundColor: "#1672DF", borderRadius: 12 }}>
              <div className="flex flex-col">
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", color: colors.white, whiteSpace: "nowrap" }}>Monthly Subscription</span>
                <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 12, lineHeight: "16px", color: colors.white, opacity: 0.8, whiteSpace: "nowrap" }}>Unlimited standard tasks</span>
              </div>
              <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: colors.white }}>$19</span>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center w-full hover:opacity-90 cursor-pointer" style={{ padding: "16px", background: BUTTON_GRADIENT, borderRadius: 12 }}>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: "#F7F9FC" }}>Run Agent Now</span>
          </div>
        </div>

      </div>
    </section>
  );
}
