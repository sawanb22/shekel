import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// BrowseByCategory.tsx  —  "Browse by category"
// Figma frame: 506:3784  "Section - Category Grid"
// Canvas: 1280 × 228 px   Page-y: ...   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1280px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Heading (x=32, y=0) 1216 wide row
//     Heading 2 "Browse by category"
//   Categories Row (x=32, y=84) 1216 wide row, 6 cards
//     Link "Marketing"
//     Link "Design"
//     Link "Development"
//     Link "Finance"
//     Link "Legal"
//     Link "Automation"
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 228;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const CATEGORY_BG = "#F2F4F7";
const TEXT_DARK = "#191C1E";

const CATEGORIES = [
  { name: "Marketing", icon: "icon-marketing.svg", iconW: 30, iconH: 24 },
  { name: "Design", icon: "icon-design.svg", iconW: 30, iconH: 30 },
  { name: "Development", icon: "icon-development.svg", iconW: 30, iconH: 18 },
  { name: "Finance", icon: "icon-finance.svg", iconW: 30, iconH: 30 },
  { name: "Legal", icon: "icon-legal.svg", iconW: 27, iconH: 28.5 },
  { name: "Automation", icon: "icon-automation.svg", iconW: 33, iconH: 33 },
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
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        marginTop: 48,
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top center",
          left: "50%",
          marginLeft: `calc(-${CANVAS_W}px / 2)`,
        }}
      >
        <div
          className="absolute flex flex-col"
          style={{ left: 32, top: 0, width: 1216, gap: 48 }}
        >
          {/* Header */}
          <SectionHeading fontSize={30} lineHeight="36px" />

          {/* Categories Grid/Row */}
          <div className="grid w-full grid-cols-6 gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryLink key={cat.name} category={cat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile ──────────────────────────────────────────────────────────────────

function SectionMobile() {
  return (
    <section className="relative block w-full overflow-hidden md:hidden">
      <div className="flex flex-col gap-6 px-6 py-12">
        <SectionHeading fontSize="clamp(24px, 6vw, 30px)" lineHeight="1.2" />

        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryLink key={cat.name} category={cat} mobile />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Shared Sub-Components ───────────────────────────────────────────────────

function SectionHeading({ fontSize, lineHeight }: { fontSize: number | string; lineHeight: string }) {
  return (
    <h2
      className="m-0"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize,
        lineHeight,
        letterSpacing: "-0.025em",
        color: TEXT_DARK,
      }}
    >
      Browse by category
    </h2>
  );
}

function CategoryLink({
  category,
  mobile = false,
}: {
  category: { name: string; icon: string; iconW: number; iconH: number };
  mobile?: boolean;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        background: CATEGORY_BG,
        borderRadius: radiuses.card,
        padding: mobile ? "24px 16px" : 32,
        gap: 16,
        minHeight: 144,
      }}
    >
      <div className="flex items-center justify-center" style={{ height: 33 }}>
        <Image
          src={`/section-4-explore-agent/${category.icon}`}
          alt={category.name}
          width={category.iconW}
          height={category.iconH}
          className="object-contain"
        />
      </div>
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          textAlign: "center",
          color: TEXT_DARK,
        }}
      >
        {category.name}
      </span>
    </div>
  );
}