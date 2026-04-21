import Image from "next/image";

const CANVAS_W = 1280;
const CANVAS_H = 507;

const FRAGMENTED_ITEMS = [
  "Weeks of building basic chat interfaces",
  "Inconsistent component styling across teams",
  'Technical debt from "quick-fix" UI updates',
];

const STANDARD_ITEMS = [
  "Launch sophisticated AI apps in days",
  "Unified design language across all products",
  "Optimized for performance and heavy data",
];

export default function Compare() {
  return (
    <>
      <CompareDesktop />
      <CompareMobile />
    </>
  );
}

function CompareDesktop() {
  const scaleExpr = `calc(100cqw / ${CANVAS_W}px)`;

  return (
    <section
      className="relative hidden w-full overflow-hidden rounded-[24px] md:block"
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
          transform: `scale(${scaleExpr})`,
          transformOrigin: "top left",
        }}
      >
        <Image
          src="/section-3/bg-texture.webp"
          alt=""
          width={CANVAS_W}
          height={CANVAS_H}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          priority
        />

        <div
          className="absolute left-[20px] top-[47px] w-[1232px] overflow-hidden rounded-[40px] border border-[#E2E8F0]"
          style={{
            boxShadow:
              "0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)",
          }}
        >
          <div className="grid grid-cols-2 gap-0.5">
            <Panel
              headerImage="/section-3/fragmented-header.svg"
              heading="The Fragmented Approach"
              items={FRAGMENTED_ITEMS}
              bulletIcon="/section-3/fragmented-bullet-icon.svg"
              bulletWidth={14}
              bulletHeight={14}
              headerHeight={38}
              textColor="#475569"
              panelBg="#FFFFFF"
            />
            <Panel
              headerImage="/section-3/shekel-header.svg"
              heading="The Shekel UI Standard"
              items={STANDARD_ITEMS}
              bulletIcon="/section-3/shekel-bullet-icon.svg"
              bulletWidth={22}
              bulletHeight={21}
              headerHeight={40}
              textColor="#0B0B0B"
              panelBg="#F1F5F9"
              withBlur
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareMobile() {
  return (
    <section className="relative block w-full overflow-hidden md:hidden">
      <Image
        src="/section-3/bg-texture.webp"
        alt=""
        width={1841}
        height={1252}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 px-6 py-14 sm:px-8">
        <div className="overflow-hidden rounded-[22px] border border-[#E2E8F0] shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col">
            <Panel
              headerImage="/section-3/fragmented-header.svg"
              heading="The Fragmented Approach"
              items={FRAGMENTED_ITEMS}
              bulletIcon="/section-3/fragmented-bullet-icon.svg"
              bulletWidth={14}
              bulletHeight={14}
              headerHeight={38}
              textColor="#475569"
              panelBg="#FFFFFF"
              compact
            />
            <Panel
              headerImage="/section-3/shekel-header.svg"
              heading="The Shekel UI Standard"
              items={STANDARD_ITEMS}
              bulletIcon="/section-3/shekel-bullet-icon.svg"
              bulletWidth={22}
              bulletHeight={21}
              headerHeight={40}
              textColor="#0B0B0B"
              panelBg="#F1F5F9"
              withBlur
              compact
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type PanelProps = {
  headerImage: string;
  heading: string;
  items: string[];
  bulletIcon: string;
  bulletWidth: number;
  bulletHeight: number;
  headerHeight: number;
  textColor: string;
  panelBg: string;
  withBlur?: boolean;
  compact?: boolean;
};

function Panel({
  headerImage,
  heading,
  items,
  bulletIcon,
  bulletWidth,
  bulletHeight,
  headerHeight,
  textColor,
  panelBg,
  withBlur = false,
  compact = false,
}: PanelProps) {
  return (
    <div
      className={`relative flex flex-col ${compact ? "gap-5 p-7 sm:p-8" : "gap-6 p-20"}`}
      style={{ backgroundColor: panelBg }}
    >
      {withBlur ? (
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-xl"
          style={{
            backgroundColor: "rgba(79, 70, 229, 0.05)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      ) : null}

      <Image
        src={headerImage}
        alt=""
        width={455}
        height={headerHeight}
        className="relative z-10 object-contain object-left"
        style={{ width: "100%", height: "auto" }}
      />

      <h3
        className="relative z-10 font-heading font-bold text-[#0B0B0B]"
        style={{
          fontSize: compact ? "clamp(24px, 7vw, 30px)" : "30px",
          lineHeight: compact ? "1.2" : "36px",
        }}
      >
        {heading}
      </h3>

      <ul className={`relative z-10 flex flex-col ${compact ? "gap-4" : "gap-6"}`}>
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4">
            <Image src={bulletIcon} alt="" width={bulletWidth} height={bulletHeight} />
            <span
              className="font-sans font-normal"
              style={{
                color: textColor,
                fontSize: compact ? "15px" : "16px",
                lineHeight: "24px",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
