import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// -----------------------------------------------------------------------------
// UseCases.tsx  -  Workflows -6
// Figma frame: 507:6051  "Section - SECTION 6: USE CASES"
// Desktop canvas: 1280 x 468
// -----------------------------------------------------------------------------

const CANVAS_W = 1280;
const CANVAS_H = 468;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const ICON_BG_BLUE = "#DAF2FD";
const BORDER_BLUE = "rgba(128,174,255,0.2)";
const BORDER_CYAN = "rgba(99,215,254,0.2)";
const BORDER_PURPLE = "rgba(199,153,255,0.2)";
const SHADOW_BLUE = "0px 0px 20px rgba(128,174,255,0.1)";
const SHADOW_CYAN = "0px 0px 20px rgba(99,215,254,0.1)";
const SHADOW_PURPLE = "0px 0px 20px rgba(186,133,251,0.1)";

const CARD_W = 373.33;

const USE_CASES = [
  {
    title: "Marketing Automation",
    desc: "From ad copy to multi-platform scheduling.",
    icon: "/section-6-workflows/icon-marketing.png",
    iconW: 30,
    iconH: 24,
    border: BORDER_BLUE,
    shadow: SHADOW_BLUE,
    x: 0,
    padBottom: 20,
    descWidth: 284.95,
  },
  {
    title: "Dev Workflows",
    desc: "Automate PR reviews, documentation, and bug\ntesting.",
    icon: "/section-6-workflows/icon-dev.png",
    iconW: 30,
    iconH: 24,
    border: BORDER_CYAN,
    shadow: SHADOW_CYAN,
    x: 421.33,
    padBottom: 0,
    descWidth: 309.39,
  },
  {
    title: "Data Processing",
    desc: "Extract, transform, and analyze complex datasets.",
    icon: "/section-6-workflows/icon-data.png",
    iconW: 27,
    iconH: 27,
    border: BORDER_PURPLE,
    shadow: SHADOW_PURPLE,
    x: 842.67,
    padBottom: 20,
    descWidth: 330.86,
  },
] as const;

export default function UseCases() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
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
        }}
      >
        <div
          className="pointer-events-none absolute"
          style={{ left: -575, top: -163, width: 2400.92, height: 1830 }}
        >
          <Image src="/section-6-workflows/bg-grid.svg" alt="" width={2401} height={1830} className="h-full w-full" />
        </div>

        <div
          className="pointer-events-none absolute"
          style={{ left: 1147, top: -531, width: 696, height: 696, filter: "blur(257.5px)" }}
        >
          <Image src="/section-6-workflows/ellipse-top-right.png" alt="" width={696} height={696} className="h-full w-full" />
        </div>
        <div
          className="pointer-events-none absolute"
          style={{ left: -522, top: -618, width: 696, height: 696, filter: "blur(257.5px)" }}
        >
          <Image src="/section-6-workflows/ellipse-bottom-left.png" alt="" width={696} height={696} className="h-full w-full" />
        </div>

        <div className="absolute" style={{ left: 32, top: 128, width: 1216, height: 212 }}>
          {USE_CASES.map((item) => (
            <div
              key={item.title}
              className="absolute flex flex-col items-center"
              style={{ left: item.x, top: 0, width: CARD_W, height: 212, gap: 16, paddingBottom: item.padBottom }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 96,
                  height: 96,
                  backgroundColor: ICON_BG_BLUE,
                  border: `1px solid ${item.border}`,
                  borderRadius: radiuses.card,
                  boxShadow: item.shadow,
                }}
              >
                <div className="relative" style={{ width: item.iconW, height: item.iconH }}>
                  <Image src={item.icon} alt={item.title} fill className="object-contain" />
                </div>
              </div>

              <h4
                style={{
                  margin: 0,
                  paddingTop: 16,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: colors.black,
                  textAlign: "center",
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  margin: 0,
                  width: item.descWidth,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: colors.black,
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  return (
    <section className="relative block w-full overflow-hidden px-4 py-12 md:hidden" style={{ backgroundColor: colors.white }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-36 h-[360px] w-[360px] opacity-40 blur-[140px]">
          <Image src="/section-6-workflows/ellipse-top-right.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute -bottom-40 -left-24 h-[360px] w-[360px] opacity-40 blur-[140px]">
          <Image src="/section-6-workflows/ellipse-bottom-left.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 rounded-[30px] px-6 py-16" style={{ backgroundColor: colors.white }}>
        {USE_CASES.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <div
              className="mb-6 flex items-center justify-center"
              style={{
                width: 80,
                height: 80,
                backgroundColor: ICON_BG_BLUE,
                border: `1px solid ${item.border}`,
                borderRadius: radiuses.card,
                boxShadow: item.shadow,
              }}
            >
              <div className="relative" style={{ width: item.iconW * 0.8, height: item.iconH * 0.8 }}>
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
            </div>

            <h4
              style={{
                margin: 0,
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: "clamp(18px, 5vw, 20px)",
                lineHeight: "1.4",
                color: colors.black,
                textAlign: "center",
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                margin: "8px 0 0",
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: "clamp(14px, 4vw, 16px)",
                lineHeight: "1.5",
                color: colors.black,
                textAlign: "center",
                whiteSpace: "pre-line",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}