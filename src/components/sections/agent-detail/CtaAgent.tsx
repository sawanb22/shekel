import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// CtaAgent.tsx  —  "Start using this agent today"
// Figma frame: 503-3302  "Frame 2147225680"
// Canvas: 1280 × 552 px   Page-y: TBD   bg: #000000
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled canvas with max-width and centered container
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 552;

const BUTTON_GRADIENT = "linear-gradient(188.63deg, rgb(40, 100, 228) 35.4%, rgb(30, 154, 255) 67.17%, rgb(198, 248, 255) 151.22%)";
const DECORATION_GRADIENT = "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

export default function CtaAgent() {
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
      className="relative hidden w-full md:block py-16 z-10"
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
          transform: `scale(calc(100cqw / ${CANVAS_W}px))`,
          transformOrigin: "top left",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="relative w-full h-full bg-transparent overflow-clip rounded-[24px]">
            {/* Background Texture */}
            <div className="absolute h-[1252px] left-[-385px] top-[-397px] w-[1841px]">
              <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/section-9-agent-detail/bg-texture.webp" fill />
            </div>

            {/* Heading */}
            <div className="-translate-y-1/2 absolute capitalize flex flex-col justify-center leading-[0] left-[calc(50%-450px)] top-[69px] whitespace-nowrap text-black" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 72, letterSpacing: "-3.6px" }}>
              <p className="leading-[72px]">Start using this agent today</p>
            </div>

            {/* Run Agent Button */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center justify-center left-[calc(50%+0.42px)] min-w-[200px] px-[40px] py-[20px] rounded-[10px] top-[calc(50%-106px)] cursor-pointer hover:opacity-90 transition-opacity" style={{ background: BUTTON_GRADIENT }}>
              <div className="flex flex-col justify-center leading-[0] shrink-0 text-center text-white uppercase w-[144.83px] h-[20px]" style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 14, letterSpacing: "1.4px" }}>
                <p className="leading-[20px]">RUN AGENT</p>
              </div>
            </div>

            {/* Subtext */}
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[39px] text-[#94a3b8] top-[269px] w-[374px] h-[56px]" style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18 }}>
              <p className="leading-[28px] m-0">Join over 1,200 creators and businesses who have automated their social</p>
              <p className="leading-[28px] m-0">presence with Shekel's precision agents.</p>
            </div>

            {/* Explore More Agents Button */}
            <div className="absolute flex items-center left-[913px] top-[235px] w-[369px]">
              <div className="bg-white border border-[#2864e4] border-solid flex flex-col items-center justify-center min-w-[200px] px-[41px] py-[21px] relative rounded-[10px] shrink-0 w-[341px] cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="bg-clip-text bg-gradient-to-b flex flex-col from-[#2864e4] justify-center leading-[0] shrink-0 text-transparent text-center to-[#ecf2ff] uppercase w-full h-[20px]" style={{ fontFamily: typography.fonts.inter, fontWeight: 700, fontSize: 16, letterSpacing: "1.6px" }}>
                  <p className="leading-[24px]">Explore more agents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mascot Image (placed outside overflow-clip to allow floating over bottom edge) */}
          <div className="absolute pointer-events-none left-1/2 -translate-x-1/2 w-[550px] h-[550px] top-[140px] z-50">
            <Image src="/section-9-agent-detail/image 37.webp" alt="Astronaut Mascot" fill className="object-contain object-top" />
          </div>
        </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section className="relative block w-full overflow-hidden md:hidden px-6 pb-16">
      <div
        className="relative w-full overflow-hidden flex flex-col items-center text-center gap-8 py-16 px-6 bg-transparent"
        style={{
          borderRadius: radiuses.card,
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <Image src="/section-9-agent-detail/bg-texture.webp" alt="" fill className="object-cover" />
        </div>

        {/* Decoration Ellipse */}
        <div
          className="absolute rounded-full"
          style={{
            left: "-50%",
            top: "-50%",
            width: "200%",
            height: "200%",
            background: DECORATION_GRADIENT,
            filter: "blur(150px)",
            opacity: 0.5,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: "clamp(40px, 10vw, 56px)",
              lineHeight: "1.1",
              letterSpacing: "-0.05em",
              textTransform: "capitalize",
              color: "black",
            }}
          >
            Start using this agent today
          </h2>

          <div
            className="flex items-center justify-center w-full cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              padding: "20px 40px",
              background: BUTTON_GRADIENT,
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Run Agent
            </span>
          </div>

          {/* Mobile Mascot Image */}
          <div className="relative pointer-events-none w-[120%] h-[300px] -my-4 -ml-[10%]">
            <Image src="/section-9-agent-detail/image 37.webp" alt="Astronaut Mascot" fill className="object-contain object-center" />
          </div>

          <p
            style={{
              margin: 0,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: "#94a3b8",
            }}
          >
            Join over 1,200 creators and businesses who have automated their social
            presence with Shekel's precision agents.
          </p>

          <div
            className="flex flex-col items-stretch justify-center w-full cursor-pointer hover:bg-gray-50 transition-colors"
            style={{
              padding: "20px 40px",
              backgroundColor: "white",
              border: "1px solid #2864e4",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <span
              className="text-center relative z-10"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 700,
                fontSize: 16,
                lineHeight: "24px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "linear-gradient(180deg, #2864e4 0%, #ecf2ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Explore more agents
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
