import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 629;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BUTTON_GRADIENT =
  "linear-gradient(160deg, rgba(40, 100, 228, 1) 9%, rgba(30, 154, 255, 1) 72%, rgba(198, 248, 255, 1) 100%)";
const TEXT_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";

const HEADING = "Start building your workflow";
const EYEBROW = "Join thousands of users and developers already using Shekel";

export default function CtaSection() {
  return (
    <>
      <SectionDesktop />
      <SectionMobile />
    </>
  );
}

function PrimaryButton() {
  return (
    <button
      className="flex items-center justify-center border-none"
      style={{
        width: 224.83,
        height: 60,
        borderRadius: "10px",
        background: BUTTON_GRADIENT,
        padding: "20px 40px",
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
          color: colors.white,
        }}
      >
        Explore Agents
      </span>
    </button>
  );
}

function SecondaryButton() {
  return (
    <button
      className="flex items-center justify-center bg-white"
      style={{
        width: 217.66,
        height: 62,
        borderRadius: "10px",
        border: "1px solid transparent",
        borderImage: "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%) 1",
        padding: "20px 40px",
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
          background: TEXT_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Start Building
      </span>
    </button>
  );
}

function SectionDesktop() {
  return (
    <section className="relative hidden w-full overflow-hidden py-16 md:block" style={{ backgroundColor: colors.background.section }}>
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          maxWidth: "100%",
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
            className="absolute overflow-hidden"
            style={{ left: 0, top: 9, width: 1280, height: 552, backgroundColor: colors.black, borderRadius: radiuses.card }}
          >
            <div className="absolute" style={{ left: -385, top: -397, width: 1841, height: 1252 }}>
              <Image src="/section-9-workflows/bg.png" alt="" fill className="object-cover" unoptimized />
            </div>

            <div className="absolute" style={{ left: -549, top: -566, width: 696, height: 696, filter: "blur(257.5px)" }}>
              <div
                className="h-full w-full"
                style={{ background: "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)" }}
              />
            </div>

            <div className="absolute" style={{ left: 555, top: 1, width: 850.85, height: 556.86 }}>
              <Image src="/section-9-workflows/hero-rings.svg" alt="" width={851} height={557} className="h-full w-full" />
            </div>

            <h2
              style={{
                position: "absolute",
                left: 69,
                top: 113,
                width: 612,
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 72,
                lineHeight: "72px",
                letterSpacing: "-0.05em",
                textTransform: "capitalize",
                color: colors.black,
              }}
            >
              {HEADING}
            </h2>

            <div className="absolute flex items-center" style={{ left: 81, top: 305, gap: 16 }}>
              <PrimaryButton />
              <SecondaryButton />
            </div>

            <p
              className="m-0"
              style={{
                position: "absolute",
                left: 85,
                top: 426,
                width: 423,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "16px",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                textAlign: "center",
                color: colors.black,
              }}
            >
              {EYEBROW}
            </p>

            <div className="absolute" style={{ left: 597.73, top: 197, width: 327.27, height: 149.25 }}>
              <Image src="/section-9-workflows/spark-line.svg" alt="" width={327} height={149} className="h-full w-full" />
            </div>
          </div>

          <div className="absolute" style={{ left: 802, top: 0, width: 473, height: 629 }}>
            <Image src="/section-9-workflows/side-image.png" alt="" fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  return (
    <section className="block w-full overflow-hidden md:hidden" style={{ backgroundColor: colors.background.section }}>
      <div className="px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-black px-6 py-12">
          <div className="absolute inset-0">
            <Image src="/section-9-workflows/bg.png" alt="" fill className="object-cover opacity-60" unoptimized />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: "clamp(38px, 11vw, 56px)",
                lineHeight: "0.95",
                letterSpacing: "-0.05em",
                color: colors.black,
                textTransform: "capitalize",
              }}
            >
              {HEADING}
            </h2>

            <div className="mt-8 flex w-full flex-col gap-3">
              <button
                className="w-full border-none py-4"
                style={{ borderRadius: "10px", background: BUTTON_GRADIENT }}
              >
                <span
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "20px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: colors.white,
                  }}
                >
                  Explore Agents
                </span>
              </button>
              <button
                className="w-full bg-white py-4"
                style={{
                  borderRadius: "10px",
                  border: "1px solid transparent",
                  borderImage: "linear-gradient(180deg, #2864E4 0%, #ECF2FF 100%) 1",
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
                    background: TEXT_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Start Building
                </span>
              </button>
            </div>

            <p
              className="mt-8"
              style={{
                marginBottom: 0,
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 10,
                lineHeight: "16px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: colors.black,
              }}
            >
              {EYEBROW}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
