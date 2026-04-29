import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";

// ─────────────────────────────────────────────────────────────────────────────
// DragConnectRun.tsx — Figma 507:5787 "Body"
// Canvas 1280×654 · white slice · corners 30 top (layout_KD2QFE borderRadius top)
// Section block MJIPNS: left 32 top 123, size 1216×415 — text column DJ8BR0 (656,3) + visual EZ26S0 (0,-40)
// Heading: ts1 Poppins Medium 500 #000 · ts2 "Connect" Plus Jakarta Bold 700 + gradient (fills split)
// List: layout_DNYJ2W gap 24 · padding-top 8 on list wrapper · bullets IMAGE-SVG 20×20 #80AEFF
// Halo: layout_XPUZJK 592×447 @ −16 · fill_YG036X · opacity .5 · effect_JVOF3R blur(64px)
// Chrome label: Space Grotesk 10 · letterSpacing 20% · uppercase (#A9ABB3) — caption font via CAPTION_FONT
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1280;
const CANVAS_H = 654;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const CONNECT_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const CARD_SHADOW = "0px 25px 50px -12px rgba(0, 0, 0, 0.25)";
const ICON_WELL_DRAG = "rgba(128, 174, 255, 0.1)";
const HALO_GRADIENT =
  "linear-gradient(90deg, rgba(128, 174, 255, 0.1) 0%, rgba(99, 215, 254, 0.1) 100%)";

const CAPTION_FONT = "'Space Grotesk', ui-sans-serif, system-ui, sans-serif";

const DESCRIPTION_COPY =
  "AetherFlow eliminates the need for complex API integrations or\ncustom Python scripts. Simply drag your desired AI capabilities\nonto the board, connect the logical flow, and watch your\nautomation spring to life.";

const BULLET_ITEMS = [
  "No-code visual orchestration",
  "Real-time debug & trace views",
  "One-click deployment to cloud edges",
];

export default function DragConnectRun() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function SectionHeading({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string | number;
}) {
  return (
    <h2
      className="m-0"
      style={{
        fontFamily: typography.fonts.jakarta,
        fontWeight: 700,
        fontSize,
        lineHeight,
        color: colors.black,
      }}
    >
      <span style={{ fontFamily: typography.fonts.poppins, fontWeight: 500 }}>
        Drag.{" "}
      </span>
      <span
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          background: CONNECT_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Connect
      </span>
      <span style={{ fontFamily: typography.fonts.poppins, fontWeight: 500 }}>. Run.</span>
    </h2>
  );
}

function SectionDescription({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string | number;
}) {
  return (
    <p
      className="m-0"
      style={{
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize,
        lineHeight,
        color: colors.black,
        whiteSpace: "pre-wrap",
      }}
    >
      {DESCRIPTION_COPY}
    </p>
  );
}

function SectionList({
  fontSize,
  lineHeight,
}: {
  fontSize: number | string;
  lineHeight: string | number;
}) {
  return (
    <div className="flex flex-col self-stretch" style={{ gap: 24, paddingTop: 8 }}>
      {BULLET_ITEMS.map((item) => (
        <div key={item} className="flex items-center" style={{ gap: 16 }}>
          <div className="relative h-5 w-5 shrink-0">
            <Image
              src="/section-3-workflows/list-item-check.svg"
              alt=""
              fill
              className="object-contain"
              sizes="20px"
            />
          </div>
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize,
              lineHeight,
              color: colors.black,
            }}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function VisualBlock({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="relative mt-12 aspect-[560/415] w-full">
        <VisualBlockInner isMobile />
      </div>
    );
  }

  return (
    <div className="absolute" style={{ left: 0, top: -40, width: 560, height: 415 }}>
      <VisualBlockInner />
    </div>
  );
}

function VisualBlockInner({ isMobile = false }: { isMobile?: boolean }) {
  const outerClass = isMobile ? "relative h-full w-full" : "relative h-[415px] w-[560px]";

  return (
    <div className={outerClass}>
      <div
        className="pointer-events-none absolute rounded-[32px]"
        style={{
          left: -16,
          top: -16,
          width: 592,
          height: 447,
          opacity: 0.5,
          background: HALO_GRADIENT,
          filter: "blur(64px)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col border border-solid"
        style={{
          backgroundColor: "#161a21",
          borderColor: "rgba(69, 72, 79, 0.2)",
          borderRadius: radiuses.cardLg,
          padding: 32,
          gap: 32,
          boxShadow: CARD_SHADOW,
        }}
      >
        <div className="flex w-full shrink-0 items-center justify-between">
          <div className="flex gap-2">
            <div
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: "rgba(255, 113, 108, 0.5)" }}
            />
            <div
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: "rgba(99, 215, 254, 0.5)" }}
            />
            <div
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: "rgba(128, 174, 255, 0.5)" }}
            />
          </div>
          <div
            style={{
              fontFamily: CAPTION_FONT,
              fontWeight: 400,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.2em",
              color: "#a9abb3",
              textTransform: "uppercase",
            }}
          >
            Canvas-04.afw
          </div>
        </div>

        <div className="relative flex w-full shrink-0 flex-col items-end gap-6">
          {!isMobile && (
            <>
              <div className="absolute left-[38px] top-[50px] h-24 w-4">
                <Image
                  src="/section-3-workflows/connector-1.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="16px"
                />
              </div>
              <div className="absolute left-[38px] top-[146px] h-[34px] w-[18px]">
                <Image
                  src="/section-3-workflows/connector-2.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="18px"
                />
              </div>
            </>
          )}

          <div
            className="relative z-10 flex w-full items-center gap-4 rounded-[32px] p-4"
            style={{
              borderColor: "rgba(128, 174, 255, 0.2)",
              borderWidth: 1,
              borderStyle: "solid",
              backgroundColor: "#1c2028",
            }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: ICON_WELL_DRAG }}
            >
              <div className="relative h-[12px] w-[15px]">
                <Image
                  src="/section-3-workflows/icon-drag.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-2 w-24 rounded-2xl" style={{ background: "rgba(128,174,255,0.3)" }} />
              <div className="h-1 w-40 rounded-2xl" style={{ background: "rgba(169,171,179,0.2)" }} />
            </div>
            <div
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: "#80aeff", boxShadow: "0 0 15px rgba(99,215,254,0.3)" }}
            />
          </div>

          <div
            className="relative z-10 py-4 pl-[48px] pr-4"
            style={{
              width: isMobile ? "100%" : 446,
              borderLeftWidth: 2,
              borderLeftStyle: "dashed",
              borderLeftColor: "rgba(69,72,79,0.4)",
              boxSizing: "border-box",
            }}
          >
            <div
              className="flex w-full items-center gap-4 rounded-[32px] p-4"
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "rgba(99, 215, 254, 0.2)",
                backgroundColor: "#22262f",
              }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
                style={{ background: "rgba(99, 215, 254, 0.1)" }}
              >
                <div className="relative h-[17px] w-4">
                  <Image
                    src="/section-3-workflows/icon-connect.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="h-2 w-32 rounded-2xl" style={{ background: "rgba(99,215,254,0.3)" }} />
                <div className="h-1 w-20 rounded-2xl" style={{ background: "rgba(169,171,179,0.2)" }} />
              </div>
              <div
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ background: "#63d7fe", boxShadow: "0 0 15px rgba(99,215,254,0.3)" }}
              />
            </div>
          </div>

          <div
            className="relative z-10 flex w-full items-center gap-4 rounded-[32px] p-4"
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "rgba(199, 153, 255, 0.2)",
              backgroundColor: "#1c2028",
            }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: "rgba(199,153,255,0.1)" }}
            >
              <div className="relative h-[13px] w-[18px]">
                <Image
                  src="/section-3-workflows/icon-automate.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-2 w-20 rounded-2xl" style={{ background: "rgba(199,153,255,0.3)" }} />
              <div className="h-1 w-48 rounded-2xl" style={{ background: "rgba(169,171,179,0.2)" }} />
            </div>
            <div
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: "#c799ff", boxShadow: "0 0 15px rgba(99,215,254,0.3)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CanvasDecoration() {
  return (
    <div
      className="pointer-events-none absolute z-[4]"
      style={{ left: 506, top: -32, width: 144, height: 75.5 }}
    >
      <Image
        src="/section-3-workflows/canvas-decoration.svg"
        alt=""
        fill
        className="object-contain"
        sizes="144px"
      />
    </div>
  );
}

function SectionDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden rounded-t-[30px] md:block"
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
        <div className="pointer-events-none absolute left-[-205px] top-[-97px] h-[1252px] w-[1841px] rotate-180 scale-y-[-1] opacity-50">
          <Image
            src="/section-3-workflows/bg-texture.png"
            alt=""
            fill
            className="object-cover"
            sizes="1841px"
          />
        </div>

        <div className="absolute left-[32px] top-[123px] h-[415px] w-[1216px]">
          <VisualBlock />
          <CanvasDecoration />

          <Reveal y={30} delay={0.2}>
            <div
              className="absolute flex flex-col"
              style={{
                left: 656,
                top: 3,
                width: 560,
                height: 409,
                gap: 32,
                paddingBottom: 40,
                boxSizing: "border-box",
              }}
            >
              <SectionHeading fontSize={48} lineHeight="60px" />
              <SectionDescription fontSize={18} lineHeight="29.25px" />
              <SectionList fontSize={16} lineHeight="24px" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  return (
    <section className="relative block w-full overflow-hidden rounded-t-[24px] bg-white md:hidden">
      <div className="pointer-events-none absolute inset-0 rotate-180 scale-y-[-1] opacity-30">
        <Image src="/section-3-workflows/bg-texture.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 flex flex-col px-6 py-16">
        <Reveal y={20}>
          <div className="flex flex-col gap-8">
            <SectionHeading fontSize="clamp(32px, 8vw, 40px)" lineHeight="1.2" />
            <SectionDescription fontSize={16} lineHeight={1.6} />
            <SectionList fontSize={15} lineHeight="22px" />
          </div>
        </Reveal>

        <Reveal y={30} delay={0.2}>
          <VisualBlock isMobile />
        </Reveal>
      </div>
    </section>
  );
}
