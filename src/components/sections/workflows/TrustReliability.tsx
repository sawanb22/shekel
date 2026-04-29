import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 787;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const SECTION_COPY =
  "Build, deploy, and run AI workflows without complexity. Experience the power\nof visual logic in a digital nervous system.";

const CARDS = [
  {
    title: "Design your workflow",
    body: "Create workflows by connecting AI agents\nvisually without writing code.",
    visual: "/section-8-workflows/card-1-visual.svg",
  },
  {
    title: "Deploy in one click",
    body: "Publish your workflow to run across real tasks\nand users instantly.",
    visual: "/section-8-workflows/card-2-visual.svg",
  },
  {
    title: "Scale and earn",
    body: "Automate tasks at scale and earn from every\nworkflow execution.",
    visual: "/section-8-workflows/card-3-visual.svg",
  },
] as const;

export default function TrustReliability() {
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
          style={{ left: -560, top: 109, width: 2400.92, height: 1830 }}
        >
          <Image
            src="/section-8-workflows/bg-grid.svg"
            alt=""
            width={2401}
            height={1830}
            className="h-full w-full"
          />
        </div>

        <div
          className="absolute flex flex-col items-center"
          style={{ left: 15, top: 69, width: 1232, gap: 16 }}
        >
          <h2
            style={{
              margin: 0,
              width: 796.86,
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: 48,
              lineHeight: "60px",
              letterSpacing: "-0.0313em",
              textAlign: "center",
              color: colors.black,
              textShadow: "0px 0px 12px rgba(171, 199, 255, 0.3)",
            }}
          >
            From workflow to{" "}
            <span
              style={{
                background: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              real results
            </span>
          </h2>

          <p
            className="m-0 whitespace-pre-line text-center"
            style={{
              width: 660.52,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "28px",
              color: colors.black,
            }}
          >
            {SECTION_COPY}
          </p>
        </div>

        <div
          className="absolute flex"
          style={{ left: 15, top: 281, width: 1232, gap: 32 }}
        >
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-1 flex-col overflow-hidden"
              style={{
                border: "1px solid rgba(65,71,83,0.1)",
                borderRadius: radiuses.cardSm,
                backdropFilter: "blur(20px)",
                backgroundColor: colors.white,
              }}
            >
              <div
                className="relative"
                style={{ height: 280, backgroundColor: "#0E0E0E", padding: 24 }}
              >
                <Image src={card.visual} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col" style={{ padding: 32, gap: 10.875 }}>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.poppins,
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: "28px",
                    color: colors.black,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="m-0 whitespace-pre-line"
                  style={{
                    fontFamily: typography.fonts.inter,
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "22.75px",
                    color: colors.black,
                  }}
                >
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionMobile() {
  return (
    <section className="block w-full bg-white px-4 py-12 md:hidden">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2
          style={{
            margin: 0,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: "clamp(32px, 8vw, 40px)",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            color: colors.black,
          }}
        >
          From workflow to{" "}
          <span
            style={{
              background: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            real results
          </span>
        </h2>
        <p
          className="m-0 whitespace-pre-line"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: colors.black,
          }}
        >
          {SECTION_COPY}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden"
            style={{
              border: "1px solid rgba(65,71,83,0.1)",
              borderRadius: radiuses.cardSm,
              backdropFilter: "blur(20px)",
              backgroundColor: colors.white,
            }}
          >
            <div className="relative h-[220px]">
              <Image src={card.visual} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <h3
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: "28px",
                  color: colors.black,
                }}
              >
                {card.title}
              </h3>
              <p
                className="m-0 whitespace-pre-line"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "22.75px",
                  color: colors.black,
                }}
              >
                {card.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
