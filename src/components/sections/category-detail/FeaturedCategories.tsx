import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// FeaturedCategories.tsx  —  "Featured categories"
// Figma frame: 500:13331  "Section 3: Featured Categories"
// Canvas: 1280 × 972.5 px   bg: #FFFFFF, radius 22px
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 972.5  bg white, radius 22
//   Heading Block      (32, 100)  w:1216
//     Title            Poppins 500 36/40 #000000
//     Desc             Inter 400 18/28 rgba(0,0,0,0.6)
//     Arrow Icon       right aligned
//   Cards Container    (32, 280)  w:1216, gap:32px (calculated to fit two cards)
//   Card 1             w:592 (calculated), h:592.5 (calculated)
//     bg rgba(255,255,255,0.03), border 1px rgba(255,255,255,0.1), blur 12px, radius 24px
//     Text Block       pad 48px
//       Title          Plus Jakarta Sans Bold 30/36 #000
//       Desc           Inter 400 18/29.25 rgba(0,0,0,0.6)
//       Button         bg #2F80ED, Inter 600 16/24 #FFF, pad 12x24, radius 8px
//     Overlay graphic  bottom aligned, SVG
//   Card 2             w:592, h:592.5
//     [Same base styles as Card 1]
//     Overlay Content  bottom aligned, w:414.39, h:256, bg #0B0B0B, radius 16x16x0x0
//       Header graphic   (25, 25) w:364.39
//       Stats box 1      (25, 89) w:174 (approx) bg rgba(255,255,255,0.05), border 1px, radius 12px
//       Stats box 2      (215, 89) w:174 (approx)
//       Chart graphic    (25, 194) w:364.39 h:96
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 972.5;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BG_COLOR = "#FFFFFF";
const TEXT_HEADING = "#000000";
const TEXT_BODY = "rgba(0, 0, 0, 0.6)";
const CARD_BG = "rgba(255, 255, 255, 0.03)";
const CARD_BORDER = "rgba(255, 255, 255, 0.1)";
const CARD_TITLE = "#000000";
const BUTTON_BG = "#2F80ED";
const BUTTON_TEXT = "#FFFFFF";
const OVERLAY_BG = "#0B0B0B";
const STAT_BG = "rgba(255, 255, 255, 0.05)";
const STAT_LABEL = "rgba(255, 255, 255, 0.6)";
const STAT_VALUE = "#FFFFFF";

export default function FeaturedCategories() {
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
        backgroundColor: BG_COLOR,
        borderRadius: 22,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        // The Figma design shows this section having a white background with rounded corners.
        // It's likely placed on a darker background page, so we keep the radius.
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
        {/* Glow Effects */}
        <div
          className="absolute"
          style={{
            left: -98,
            top: -139,
            width: 163,
            height: 163,
            background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)",
            filter: "blur(203.4px)",
            borderRadius: radiuses.full,
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1235,
            top: -70,
            width: 163,
            height: 163,
            background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)",
            filter: "blur(203.4px)",
            borderRadius: radiuses.full,
          }}
        />

        {/* Header Block */}
        <div
          className="absolute flex items-end justify-between"
          style={{ left: 32, top: 100, width: 1216 }}
        >
          <div className="flex flex-col gap-[16px]">
            <SectionHeading fontSize={36} lineHeight="40px" />
            <SectionBody
              text="Explore categories with the highest activity and usage this month."
              fontSize={18}
              lineHeight="28px"
              width={558.81}
            />
          </div>
          <Image
            src="/section-3-category-detail/icon-arrow-right.svg"
            alt=""
            width={48}
            height={48}
            className="cursor-pointer transition-transform hover:translate-x-2"
          />
        </div>

        {/* Cards Container */}
        <div
          className="absolute flex"
          style={{ left: 32, top: 280, width: 1216, gap: 32 }}
        >
          {/* Card 1: Generative Coding */}
          <div
            className="relative flex flex-col items-start overflow-hidden"
            style={{
              flex: "1 1 0",
              height: 592.5,
              backgroundColor: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              backdropFilter: "blur(12px)",
              borderRadius: 24,
            }}
          >
            <div className="flex flex-col items-start gap-[16px] p-[48px] relative z-10 w-full">
              <CardHeading text="Generative Coding" />
              <CardBody
                text={
                  <>
                    The most active category for developers building<br />
                    complex microservices and API integrations.
                  </>
                }
              />
              <CardButton text="Explore Coding Agents" />
            </div>
            
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-[16px] pt-[48px] px-[32px]">
              <Image
                src="/section-3-category-detail/card-1-overlay.svg"
                alt=""
                width={528}
                height={296}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 2: Intelligent Logistics */}
          <div
            className="relative flex flex-col items-start overflow-hidden"
            style={{
              flex: "1 1 0",
              height: 592.5,
              backgroundColor: CARD_BG,
              border: `1px solid ${CARD_BORDER}`,
              backdropFilter: "blur(12px)",
              borderRadius: 24,
            }}
          >
            <div className="flex flex-col items-start gap-[16px] p-[48px] relative z-10 w-full">
              <CardHeading text="Intelligent Logistics" />
              <CardBody
                text={
                  <>
                    Streamline supply chain and inventory management with<br />
                    real-time reactive AI agents.
                  </>
                }
              />
              <CardButton text="Explore Logistics" />
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-[16px] pt-[48px] px-[32px]">
              {/* Inner Dark Overlay */}
              <div
                className="relative overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                style={{
                  width: 414.39,
                  height: 256,
                  backgroundColor: OVERLAY_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "16px 16px 0px 0px",
                }}
              >
                 <Image
                    src="/section-3-category-detail/card-2-header.svg"
                    alt=""
                    width={364.39}
                    height={32}
                    className="absolute"
                    style={{ left: 25, top: 25 }}
                 />

                 <div
                   className="absolute flex items-start gap-[4px] p-[16px]"
                   style={{
                     left: 25,
                     top: 89,
                     width: 178, // Approx half of 364
                     backgroundColor: STAT_BG,
                     border: `1px solid ${CARD_BORDER}`,
                     borderRadius: 12,
                     flexDirection: "column"
                   }}
                 >
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 10, lineHeight: "15px", letterSpacing: "0.05em", color: STAT_LABEL, textTransform: "uppercase" }}>
                      Efficiency
                    </span>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: STAT_VALUE }}>
                      98.4%
                    </span>
                 </div>

                 <div
                   className="absolute flex items-start gap-[4px] p-[16px]"
                   style={{
                     left: 211, // 25 + 178 + 8
                     top: 89,
                     width: 178,
                     backgroundColor: STAT_BG,
                     border: `1px solid ${CARD_BORDER}`,
                     borderRadius: 12,
                     flexDirection: "column"
                   }}
                 >
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 10, lineHeight: "15px", letterSpacing: "0.05em", color: STAT_LABEL, textTransform: "uppercase" }}>
                      Active
                    </span>
                    <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 20, lineHeight: "28px", color: STAT_VALUE }}>
                      14
                    </span>
                 </div>

                 <Image
                    src="/section-3-category-detail/card-2-chart.svg"
                    alt=""
                    width={364.39}
                    height={96}
                    className="absolute"
                    style={{ left: 25, top: 194 }}
                 />
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
      style={{ backgroundColor: BG_COLOR, borderRadius: 22 }}
    >
      <div className="flex flex-col gap-10 px-6 py-16">
        
        {/* Header Block */}
        <div className="flex flex-col gap-4">
          <SectionHeading fontSize="clamp(28px, 8vw, 36px)" lineHeight="1.2" />
          <SectionBody
            text="Explore categories with the highest activity and usage this month."
            fontSize="16px"
            lineHeight="1.6"
          />
          <Image
            src="/section-3-category-detail/icon-arrow-right.svg"
            alt=""
            width={40}
            height={40}
            className="mt-2"
          />
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-8">
          
          {/* Card 1 */}
          <div
            className="relative flex flex-col items-start overflow-hidden bg-[#F8F9FA] dark:bg-[#111]"
            style={{
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: radiuses.cardLg,
              backgroundColor: CARD_BG,
            }}
          >
            <div className="flex flex-col items-start gap-4 p-6 sm:p-8 z-10">
              <CardHeading text="Generative Coding" />
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 15, lineHeight: "1.6", color: TEXT_BODY }}>
                The most active category for developers building complex microservices and API integrations.
              </p>
              <div className="mt-2">
                 <CardButton text="Explore Coding Agents" />
              </div>
            </div>
            <div className="relative w-full px-6 pb-4 pt-8">
              <Image
                src="/section-3-category-detail/card-1-overlay.svg"
                alt=""
                width={528}
                height={296}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative flex flex-col items-start overflow-hidden bg-[#F8F9FA] dark:bg-[#111]"
            style={{
              border: `1px solid ${CARD_BORDER}`,
              borderRadius: radiuses.cardLg,
              backgroundColor: CARD_BG,
            }}
          >
            <div className="flex flex-col items-start gap-4 p-6 sm:p-8 z-10">
              <CardHeading text="Intelligent Logistics" />
              <p style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 15, lineHeight: "1.6", color: TEXT_BODY }}>
                Streamline supply chain and inventory management with real-time reactive AI agents.
              </p>
              <div className="mt-2">
                 <CardButton text="Explore Logistics" />
              </div>
            </div>

            <div className="relative w-full flex justify-center px-4 pb-4 pt-8">
              <div
                className="relative overflow-hidden w-full max-w-[340px] shadow-lg"
                style={{
                  height: 220,
                  backgroundColor: OVERLAY_BG,
                  border: `1px solid ${CARD_BORDER}`,
                  borderRadius: "16px 16px 0px 0px",
                }}
              >
                 <Image
                    src="/section-3-category-detail/card-2-header.svg"
                    alt=""
                    width={364}
                    height={32}
                    className="absolute w-[90%] max-w-[320px] h-auto"
                    style={{ left: "5%", top: 20 }}
                 />

                 <div className="absolute flex gap-2 w-[90%] left-[5%]" style={{ top: 70 }}>
                   <div
                     className="flex-1 flex items-start gap-1 p-3"
                     style={{ backgroundColor: STAT_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, flexDirection: "column" }}
                   >
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 9, color: STAT_LABEL, textTransform: "uppercase" }}>Efficiency</span>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, color: STAT_VALUE }}>98.4%</span>
                   </div>
                   <div
                     className="flex-1 flex items-start gap-1 p-3"
                     style={{ backgroundColor: STAT_BG, border: `1px solid ${CARD_BORDER}`, borderRadius: 8, flexDirection: "column" }}
                   >
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 9, color: STAT_LABEL, textTransform: "uppercase" }}>Active</span>
                      <span style={{ fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 16, color: STAT_VALUE }}>14</span>
                   </div>
                 </div>

                 <Image
                    src="/section-3-category-detail/card-2-chart.svg"
                    alt=""
                    width={364}
                    height={96}
                    className="absolute w-[90%] max-w-[320px] h-auto"
                    style={{ left: "5%", bottom: 0 }}
                 />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────────

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
}) {
  return (
    <h2
      style={{
        margin: 0,
        fontFamily: typography.fonts.poppins,
        fontWeight: 500,
        fontSize,
        lineHeight,
        color: TEXT_HEADING,
      }}
    >
      Featured categories
    </h2>
  );
}

function SectionBody({
  text,
  fontSize,
  lineHeight,
  width,
}: {
  text: string;
  fontSize: number | string;
  lineHeight: string;
  width?: number;
}) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: TEXT_BODY,
        width: width,
        maxWidth: "100%",
      }}
    >
      {text}
    </p>
  );
}

function CardHeading({ text }: { text: string }) {
  return (
    <h3
      style={{
        margin: 0,
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize: 30,
        lineHeight: "36px",
        color: CARD_TITLE,
      }}
    >
      {text}
    </h3>
  );
}

function CardBody({ text }: { text: React.ReactNode }) {
  return (
    <p
      className="hidden md:block"
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "29.25px",
        color: TEXT_BODY,
      }}
    >
      {text}
    </p>
  );
}

function CardButton({ text }: { text: string }) {
  return (
    <button
      className="transition-transform active:scale-95"
      style={{
        backgroundColor: BUTTON_BG,
        borderRadius: radiuses.inputIcon,
        padding: "12px 24px",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: BUTTON_TEXT,
        }}
      >
        {text}
      </span>
    </button>
  );
}
