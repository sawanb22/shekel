import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// ─────────────────────────────────────────────────────────────────────────────
// PricingGrid.tsx  —  "Section - Pricing Grid"
// Figma frame: 506:4756  "Section - Pricing Grid"
// Canvas: 1232 × 476 px   Page-y: 674   bg: transparent
//
// Responsive strategy:
//   ≥ 768 px  →  Scaled cqw canvas  (100cqw / 1232px)
//   < 768 px  →  Stacked reflow, fluid clamp() font sizes
//
// LAYOUT MAP  (all coords are section-absolute Figma px):
//   Starter Plan   (x=0, y=12)   389.33×452
//   Pro Plan       (x=842.67, y=16)   389.33×444
//   Pay-as-you-go Plan (Highlighted) (x=421.33, y=9.5) 401.01×456.98 (Scaled)
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1232;
const CANVAS_H = 476;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const CARD_BORDER = "#e2e8f0";
const BLUE_TEXT = "#005ab6";
const TEXT_MUTED = "#414753";
const CARD_SHADOW = "0px 1px 2px 0px rgba(0,0,0,0.05)";
const HIGHLIGHT_SHADOW = "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)";
const BLUE_GRADIENT = `linear-gradient(to bottom, ${colors.brand.blueStart}, ${colors.brand.blueEnd})`;

const STARTER_FEATURES = [
  "5 Free agent runs / mo",
  "Access to basic marketplace",
  "Community support"
];

const PRO_FEATURES = [
  "50 AI credits included",
  "Team collaboration tools",
  "Custom agent training",
  "Dedicated support agent"
];

const PAYG_FEATURES = [
  "Unlimited marketplace access",
  "Priority queue processing",
  "Pay only for what you run",
  "API webhooks enabled"
];

export default function PricingGrid() {
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
        backgroundColor: colors.black,
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: CANVAS_H,
        }}
      >
        <div
          className="absolute"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <div className="grid grid-cols-3 gap-x-[32px] w-full h-full items-center">
            {/* Starter Plan */}
            <div
              className="flex flex-col bg-white w-[389.33px] relative rounded-[12px]"
              style={{
                padding: 33,
                border: `1px solid ${CARD_BORDER}`,
                boxShadow: CARD_SHADOW,
              }}
            >
               <PlanHeader
                  title="Starter"
                  description="Ideal for individuals testing the waters."
                  price="$0"
                  period="/forever"
                />
                <div style={{ flex: 1, marginTop: 32, marginBottom: 44 }}>
                  <FeatureList features={STARTER_FEATURES} />
                </div>
                <SecondaryButton text="Start Free" />
            </div>

            {/* Pay-as-you-go Plan (Highlighted) */}
            <div className="flex h-[456.981px] items-center justify-center relative shrink-0 w-[401.01px]">
              <div className="flex-none" style={{ transform: "scale(1.03)" }}>
                <div
                  className="bg-white relative overflow-hidden flex flex-col w-[389.33px]"
                  style={{
                    padding: 34,
                    borderRadius: radiuses.cardSm,
                    border: `2px solid rgba(0,90,182,0.2)`,
                    boxShadow: HIGHLIGHT_SHADOW,
                  }}
                >
                   {/* "MOST POPULAR" Badge Ribbon */}
                    <div
                        className="absolute flex items-center justify-center"
                        style={{
                            right: -25.63,
                            top: -29.57,
                            width: 133.555,
                            height: 133.555,
                        }}
                    >
                        <div style={{ transform: "rotate(45deg)", background: BLUE_GRADIENT, padding: "4px 40px" }}>
                           <span
                              style={{
                                  fontFamily: typography.fonts.inter,
                                  fontWeight: 600,
                                  fontSize: 10,
                                  lineHeight: "15px",
                                  letterSpacing: "0.5px",
                                  color: colors.white
                              }}
                           >
                               MOST POPULAR
                           </span>
                        </div>
                    </div>

                    <PlanHeader
                        title="Pay-as-you-go"
                        description="For power users who need high flexibility."
                        price="$2 - $10"
                        period="/task"
                        isHighlighted={true}
                        isPayg={true}
                    />
                    <div style={{ flex: 1, marginTop: 31.068, marginBottom: 38.835 }}>
                        <FeatureList features={PAYG_FEATURES} />
                    </div>
                    <PrimaryButton text="Run Agent" />
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div
              className="flex flex-col bg-white w-[389.33px] relative rounded-[12px]"
              style={{
                padding: 33,
                border: `1px solid ${CARD_BORDER}`,
                boxShadow: CARD_SHADOW,
              }}
            >
                <PlanHeader
                  title="Pro"
                  description="Complete solution for growing teams."
                  price="$19"
                  period="/month"
                />
                <div style={{ flex: 1, marginTop: 32, marginBottom: 0 }}>
                  <FeatureList features={PRO_FEATURES} />
                </div>
                <SecondaryButton text="Go Pro" />
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
      className="relative block w-full overflow-hidden md:hidden pb-16"
      style={{ backgroundColor: colors.black }}
    >
      <div className="flex flex-col gap-6 px-6 sm:px-8">
        
         {/* Pay-as-you-go Plan (Highlighted) - Displayed First on Mobile */}
         <div
            className="bg-white relative overflow-hidden flex flex-col w-full"
            style={{
                padding: 34,
                borderRadius: radiuses.cardSm,
                border: `2px solid rgba(0,90,182,0.2)`,
                boxShadow: HIGHLIGHT_SHADOW,
            }}
        >
             <div
                className="absolute flex items-center justify-center"
                style={{
                    right: -25,
                    top: -25,
                    width: 133,
                    height: 133,
                }}
            >
                <div style={{ transform: "rotate(45deg)", background: BLUE_GRADIENT, padding: "4px 40px" }}>
                    <span
                        style={{
                            fontFamily: typography.fonts.inter,
                            fontWeight: 600,
                            fontSize: 10,
                            lineHeight: "15px",
                            letterSpacing: "0.5px",
                            color: colors.white
                        }}
                    >
                        MOST POPULAR
                    </span>
                </div>
            </div>

            <PlanHeader
                title="Pay-as-you-go"
                description="For power users who need high flexibility."
                price="$2 - $10"
                period="/task"
                isHighlighted={true}
            />
            <div style={{ marginTop: 32, marginBottom: 32 }}>
                <FeatureList features={PAYG_FEATURES} />
            </div>
            <PrimaryButton text="Run Agent" />
        </div>

        {/* Starter Plan */}
        <div
          className="flex flex-col bg-white w-full"
          style={{
            padding: 33,
            borderRadius: radiuses.cardSm,
            border: `1px solid ${CARD_BORDER}`,
            boxShadow: CARD_SHADOW,
          }}
        >
            <PlanHeader
              title="Starter"
              description="Ideal for individuals testing the waters."
              price="$0"
              period="/forever"
            />
            <div style={{ marginTop: 32, marginBottom: 32 }}>
              <FeatureList features={STARTER_FEATURES} />
            </div>
            <SecondaryButton text="Start Free" />
        </div>

        {/* Pro Plan */}
        <div
          className="flex flex-col bg-white w-full"
          style={{
            padding: 33,
            borderRadius: radiuses.cardSm,
            border: `1px solid ${CARD_BORDER}`,
            boxShadow: CARD_SHADOW,
          }}
        >
            <PlanHeader
              title="Pro"
              description="Complete solution for growing teams."
              price="$19"
              period="/month"
            />
            <div style={{ marginTop: 32, marginBottom: 32 }}>
              <FeatureList features={PRO_FEATURES} />
            </div>
            <SecondaryButton text="Go Pro" />
        </div>

      </div>
    </section>
  );
}

// ─── Shared Components ───────────────────────────────────────────────────────

function PlanHeader({
  title,
  description,
  price,
  period,
  isHighlighted = false,
  isPayg = false,
}: {
  title: string;
  description: string;
  price: string;
  period: string;
  isHighlighted?: boolean;
  isPayg?: boolean;
}) {
  return (
    <div className="flex flex-col" style={{ paddingBottom: isPayg ? 31.068 : 32 }}>
      <div className="flex flex-col gap-[8px]">
        <h3
          className="m-0"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "28px",
            color: isHighlighted ? BLUE_TEXT : colors.text.dark,
          }}
        >
          {title}
        </h3>
        <p
          className="m-0"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: TEXT_MUTED,
          }}
        >
          {description}
        </p>
      </div>

      <div className="flex items-baseline" style={{ paddingTop: isPayg ? 31.068 : 32 }}>
        <span
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 36,
            lineHeight: "40px",
            color: colors.text.dark,
          }}
        >
          {price}
        </span>
        <span
          className="ml-1"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: TEXT_MUTED,
          }}
        >
          {period}
        </span>
      </div>
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="m-0 p-0 flex flex-col gap-[16px] list-none">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-[12px]">
          <div style={{ position: "relative", width: 15, height: 15 }}>
            <Image
              src="/section-2-pricing/check-icon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: colors.text.dark,
            }}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SecondaryButton({ text }: { text: string }) {
  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      style={{
        border: `1px solid ${BLUE_TEXT}`,
        borderRadius: radiuses.cardSm,
        padding: "13px 25px",
        width: "100%"
      }}
    >
      <span
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: BLUE_TEXT,
          height: 24,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function PrimaryButton({ text }: { text: string }) {
  return (
    <div
      className="flex items-center justify-center cursor-pointer relative"
      style={{
        background: BLUE_GRADIENT,
        borderRadius: radiuses.cardSm,
        padding: "12px 24px",
        width: "100%"
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
            borderRadius: radiuses.cardSm,
            boxShadow: "0px 10px 15px -3px rgba(59,130,246,0.2), 0px 4px 6px -4px rgba(59,130,246,0.2)",
            inset: "0px -9.64px -1.44px 0px",
            background: "transparent",
            pointerEvents: "none"
        }}
      />
      <span
        className="relative z-10"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "24px",
          color: colors.white,
          height: 24,
        }}
      >
        {text}
      </span>
    </div>
  );
}