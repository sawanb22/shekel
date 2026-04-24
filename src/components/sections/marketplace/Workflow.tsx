import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";
import workflowBg from "../../../../new-images/page 2/run ai agents as a complete workflow.webp";

// -----------------------------------------------------------------------------
// Workflow.tsx — "Run AI agents as a complete workflow"
// Figma frame: 500:7451 "Body"
// Canvas: 1280 x 718
// -----------------------------------------------------------------------------

const CANVAS_W = 1280;
const CANVAS_H = 718;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40, 100, 228, 1) 0%, rgba(236, 242, 255, 1) 100%)";
const SHADOW_SOFT = "0px 20px 50px 0px rgba(25, 28, 30, 0.06)";
const TEXT_DARK = "#191C1E";
const TEXT_BODY = "#414753";
const TEXT_MUTED = "#727785";
const INPUT_BG = "#F2F4F7";
const BORDER_SOFT = "#E6E8EB";

type Step = {
  label: string;
  x: number;
  bgSrc: string;
};

const STEPS: Step[] = [
  {
    label: "Content AI",
    x: 16,
    bgSrc: "/section-3-marketplace/step-1-bg.svg",
  },
  {
    label: "Design AI",
    x: 271.22,
    bgSrc: "/section-3-marketplace/step-2-bg.svg",
  },
  {
    label: "Publish AI",
    x: 511.59,
    bgSrc: "/section-3-marketplace/step-3-bg.svg",
  },
];

export default function Workflow() {
  return (
    <>
      <WorkflowDesktop />
      <WorkflowMobile />
    </>
  );
}

function WorkflowDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
        zIndex: 10,
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
        <div className="absolute inset-0">
          <Image src={workflowBg} alt="" fill sizes="1280px" className="object-cover" />
        </div>

        <div className="absolute" style={{ left: 38, top: 82, width: 1184, height: 520 }}>
          <LeftVisual />
          <RightContent />
        </div>
      </div>
    </section>
  );
}

function LeftVisual() {
  return (
    <div className="absolute" style={{ left: 0, top: 12.25, width: 664, height: 495.5 }}>
      <div
        className="absolute"
        style={{
          left: -80,
          top: -80,
          width: 824,
          height: 656,
          background:
            "radial-gradient(circle at 50% 50%, rgba(22,114,223,0.08) 0%, rgba(22,114,223,0) 70%)",
        }}
      />

      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 664,
          padding: 32,
          borderRadius: radiuses.pill,
          backgroundColor: colors.white,
          boxShadow: SHADOW_SOFT,
        }}
      >
        <div className="flex flex-col gap-[16.5px]">
          <p
            className="m-0"
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "0.025em",
              textTransform: "uppercase",
              color: TEXT_BODY,
            }}
          >
            What do you want to automate?
          </p>

          <div
            className="relative"
            style={{
              padding: "18px 56px 18px 24px",
              borderRadius: 12,
              backgroundColor: INPUT_BG,
              boxShadow: SHADOW_SOFT,
            }}
          >
            <p
              className="m-0"
              style={{
                fontFamily: typography.fonts.inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: TEXT_MUTED,
              }}
            >
              Create and publish a full marketing campaign
            </p>
            <div
              className="absolute"
              style={{
                left: 549.67,
                top: 5.89,
                height: 43.21,
                borderRadius: radiuses.inputIcon,
                padding: 8,
                background: "rgba(0, 90, 182, 0.1)",
              }}
            >
              <Image
                src="/section-3-marketplace/input-overlay.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
              />
            </div>
          </div>
        </div>

        <RevealStagger className="relative mt-10 h-[92px]" stagger={0.15}>
          {STEPS.map((step) => (
            <RevealItem key={step.label} className="absolute flex flex-col items-center gap-3" style={{ left: step.x, top: 0 }}>
              <div className="relative h-16 w-16">
                <Image src={step.bgSrc} alt="" fill sizes="64px" unoptimized />
              </div>
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: "16px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: TEXT_MUTED,
                }}
              >
                {step.label}
              </span>
            </RevealItem>
          ))}

          <RevealItem className="absolute" style={{ left: 96.48, top: 45 }}>
            <Image
              src="/section-3-marketplace/connector-1.svg"
              alt=""
              width={175}
              height={16}
              unoptimized
            />
          </RevealItem>
          <RevealItem className="absolute" style={{ left: 336.86, top: 45 }}>
            <Image
              src="/section-3-marketplace/connector-2.svg"
              alt=""
              width={175}
              height={16}
              unoptimized
            />
          </RevealItem>
        </RevealStagger>

        <div
          className="mt-10 flex flex-col gap-4"
          style={{
            borderRadius: 12,
            backgroundColor: INPUT_BG,
            padding: 24,
            boxShadow: SHADOW_SOFT,
          }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <p
              className="m-0"
              style={{
                fontFamily: typography.fonts.jakarta,
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
                color: TEXT_DARK,
              }}
            >
              System execution log
            </p>
          </div>
          <LogItem icon="/section-3-marketplace/log-icon-1.svg" text="12 posts generated" />
          <LogItem icon="/section-3-marketplace/log-icon-2.svg" text="Scheduled across platforms" />
          <LogItem icon="/section-3-marketplace/log-icon-3.svg" text="Ready to publish" />
        </div>
      </div>
    </div>
  );
}

function LogItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt="" width={15} height={15} unoptimized />
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: TEXT_BODY,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function RightContent() {
  return (
    <div className="absolute" style={{ left: 728, top: 13, width: 456, height: 494 }}>
      <div className="flex w-full flex-col gap-6">
        <Reveal>
          <h2
            className="m-0"
            style={{
              fontFamily: typography.fonts.poppins,
              fontWeight: 500,
              fontSize: 60,
              lineHeight: "60px",
              color: TEXT_DARK,
            }}
          >
            Run AI agents as a{" "}
            <span
              style={{
                background: BLUE_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              complete workflow
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="m-0"
            style={{
              width: 422.55,
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "29.25px",
              color: TEXT_BODY,
            }}
          >
            Automate complex multi-step processes by connecting specialized AI
            agents into a seamless, high-performance execution chain.
          </p>
        </Reveal>
      </div>

      <button
        className="absolute border-0"
        style={{
          left: 0,
          top: 325,
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 32px",
          borderRadius: 12,
          background: BLUE_GRADIENT,
          boxShadow: SHADOW_SOFT,
        }}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 18,
            lineHeight: "28px",
            color: colors.white,
          }}
        >
          Run Workflow
        </span>
        <Image src="/section-3-marketplace/run-arrow.svg" alt="" width={16} height={16} unoptimized />
      </button>

      <div
        className="absolute flex items-center gap-8"
        style={{
          left: 0,
          top: 417,
          width: 456,
          height: 77,
          paddingTop: 24,
          borderTop: `1px solid ${BORDER_SOFT}`,
        }}
      >
        <StatBlock value="2.4k+" label="Active agents" />
        <div style={{ width: 1, height: 32, backgroundColor: BORDER_SOFT }} />
        <StatBlock value="0ms" label="Latency" />
      </div>
    </div>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span
        style={{
          fontFamily: typography.fonts.jakarta,
          fontWeight: 700,
          fontSize: 24,
          lineHeight: "32px",
          color: TEXT_DARK,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: TEXT_MUTED,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function WorkflowMobile() {
  return (
    <section className="block w-full bg-white md:hidden">
      <div className="px-6 py-16">
        <h2
          className="m-0"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: "clamp(32px, 9vw, 46px)",
            lineHeight: "1.05",
            color: TEXT_DARK,
          }}
        >
          Run AI agents as a{" "}
          <span
            style={{
              background: BLUE_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            complete workflow
          </span>
        </h2>
        <p
          className="mt-4"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "26px",
            color: TEXT_BODY,
          }}
        >
          Automate complex multi-step processes by connecting specialized AI
          agents into a seamless, high-performance execution chain.
        </p>
        <button
          className="mt-6 inline-flex items-center gap-2 border-0"
          style={{
            padding: "14px 24px",
            borderRadius: 12,
            background: BLUE_GRADIENT,
            color: colors.white,
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "24px",
          }}
        >
          Run Workflow
          <Image src="/section-3-marketplace/run-arrow.svg" alt="" width={16} height={16} unoptimized />
        </button>
      </div>
    </section>
  );
}
