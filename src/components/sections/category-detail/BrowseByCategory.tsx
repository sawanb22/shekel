import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// BrowseByCategory.tsx  —  "Browse by category"
// Figma frame: 500:13233  "Section 2: Category Grid"
// Canvas: 1280 × 832 px   bg: #F7F9FC
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Canvas             1280 × 832
//   Heading            (32, 100)  w:1216     Poppins 600 36/40
//   Body               (32, 156)  w:576      Inter 400 18/28
//   Cards Container    (32, 248)  1216×484   grid, gap:32px (calculated)
//   Card (each)        384x226 (calculated) bg white, border radius 12px, pad 40px
//     Icon Bg          56×56      bg #D7E3FF, border radius 12px
//     Title            Inter 700 24/32
//     Desc             Inter 400 16/26
//     Count            Inter 600 14/20, color #005AB6
//     Link             Inter 600 14/20, color #005AB6
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 832;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BG_COLOR = "#F7F9FC";
const TEXT_HEADING = "#1C1B1B";
const TEXT_BODY = "#414753";
const CARD_BG = "#FFFFFF";
const ICON_BG = "#D7E3FF";
const LINK_COLOR = "#005AB6";

const CATEGORIES = [
  {
    title: "Marketing",
    desc: "Automate social media, email campaigns, and SEO strategy with specialized agents.",
    count: "120+",
    icon: "/section-2-category-detail/icon-marketing.svg",
    x: 32,
    y: 248,
  },
  {
    title: "Content",
    desc: "Draft articles, generate creative scripts, and refine copy across all digital channels.",
    count: "85+",
    icon: "/section-2-category-detail/icon-content.svg",
    x: 448,
    y: 248,
  },
  {
    title: "Design",
    desc: "Create UI prototypes, brand assets, and custom illustrations using generative vision agents.",
    count: "60+",
    icon: "/section-2-category-detail/icon-design.svg",
    x: 864,
    y: 248,
  },
  {
    title: "Development",
    desc: "Debug code, write boilerplate scripts, and automate documentation for tech stacks.",
    count: "200+",
    icon: "/section-2-category-detail/icon-development.svg",
    x: 32,
    y: 506,
  },
  {
    title: "Automation",
    desc: "Bridge workflows between different apps and schedule complex task sequences.",
    count: "150+",
    icon: "/section-2-category-detail/icon-automation.svg",
    x: 448,
    y: 506,
  },
  {
    title: "Data Processing",
    desc: "Analyze spreadsheets, scrape web data, and generate insights from raw datasets.",
    count: "95+",
    icon: "/section-2-category-detail/icon-data-processing.svg",
    x: 864,
    y: 506,
  },
];

export default function BrowseByCategory() {
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
        {/* Header Section */}
        <div className="absolute" style={{ left: 32, top: 100, width: 1216 }}>
          <SectionHeading fontSize={36} lineHeight="40px" />
        </div>
        <div className="absolute" style={{ left: 32, top: 156, width: 576 }}>
          <SectionBody fontSize={18} lineHeight="28px" />
        </div>

        {/* Cards Grid */}
        {CATEGORIES.map((cat, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-start"
            style={{
              left: cat.x,
              top: cat.y,
              width: 384,
              backgroundColor: CARD_BG,
              borderRadius: radiuses.cardSm,
              padding: 40,
              gap: 12,
            }}
          >
            {/* Top row: Icon */}
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: 56,
                height: 56,
                backgroundColor: ICON_BG,
                borderRadius: radiuses.icon,
              }}
            >
              <Image src={cat.icon} alt="" width={24} height={24} className="object-contain" />
            </div>

            {/* Title */}
            <div style={{ paddingTop: 20 }}>
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.jakarta,
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "32px",
                  color: TEXT_HEADING,
                }}
              >
                {cat.title}
              </h3>
            </div>

            {/* Description */}
            <p
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "26px",
                color: TEXT_BODY,
                minHeight: 52, // Allow wrapping
              }}
            >
              {cat.desc}
            </p>

            {/* Footer: Count & Link */}
            <div
              className="flex w-full items-center justify-between"
              style={{ paddingTop: 11.5 }}
            >
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: LINK_COLOR,
                  }}
                >
                  {cat.count}
                </span>
              </div>
              <div className="flex items-center gap-[4px] cursor-pointer group">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: LINK_COLOR,
                  }}
                  className="group-hover:underline"
                >
                  View Category
                </span>
                <Image
                  src="/section-2-category-detail/icon-arrow-right.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{ backgroundColor: BG_COLOR }}
    >
      <div className="flex flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-4">
          <SectionHeading fontSize="clamp(28px, 8vw, 36px)" lineHeight="1.2" />
          <SectionBody fontSize="16px" lineHeight="1.6" />
        </div>

        <div className="flex flex-col gap-6">
          {CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{
                backgroundColor: CARD_BG,
                borderRadius: radiuses.cardSm,
                padding: "32px 24px",
                gap: "12px",
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: ICON_BG,
                  borderRadius: radiuses.icon,
                }}
              >
                <Image src={cat.icon} alt="" width={20} height={20} className="object-contain" />
              </div>

              <div className="pt-2">
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.jakarta,
                    fontWeight: 700,
                    fontSize: 22,
                    lineHeight: "1.3",
                    color: TEXT_HEADING,
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 15,
                  lineHeight: "1.6",
                  color: TEXT_BODY,
                }}
              >
                {cat.desc}
              </p>

              <div className="mt-2 flex items-center justify-between pt-2">
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: LINK_COLOR,
                  }}
                >
                  {cat.count} agents
                </span>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span
                    style={{
                      fontFamily: typography.fonts.inter,
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: LINK_COLOR,
                    }}
                  >
                    View Category
                  </span>
                  <Image
                    src="/section-2-category-detail/icon-arrow-right.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </div>
          ))}
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
        fontWeight: 600,
        fontSize,
        lineHeight,
        color: TEXT_HEADING,
      }}
    >
      Browse by category
    </h2>
  );
}

function SectionBody({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string;
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
      }}
    >
      Find AI agents based on your needs and use cases.
    </p>
  );
}
