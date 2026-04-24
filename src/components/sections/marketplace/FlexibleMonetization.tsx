import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 690;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";

type PricingCard = {
  tier: string;
  title: string;
  body: string;
  priceMain: string;
  priceSub: string;
  buttonGradient: boolean;
  highlighted?: boolean;
  x: number;
  width: number;
};

const CARDS: PricingCard[] = [
  {
    tier: "ON-DEMAND",
    title: "Pay-per-use",
    body: "Ideal for occasional tasks. Pay only for\nwhat you run.",
    priceMain: "From $2",
    priceSub: "per task",
    buttonGradient: false,
    x: 0,
    width: 373.33,
  },
  {
    tier: "MONTHLY ACCESS",
    title: "Subscription",
    body: "Unlimited access to premium agents\nwith predictable pricing.",
    priceMain: "Starts at $19",
    priceSub: "per month",
    buttonGradient: true,
    highlighted: true,
    x: 395.33,
    width: 391.99,
  },
  {
    tier: "ENTRY LEVEL",
    title: "Freemium",
    body: "Explore basic capabilities. Get a limited\nnumber of runs free every month.",
    priceMain: "Free",
    priceSub: "with limits",
    buttonGradient: false,
    x: 810.67,
    width: 373.33,
  },
];

export default function FlexibleMonetization() {
  return (
    <>
      <FlexibleMonetizationDesktop />
      <FlexibleMonetizationMobile />
    </>
  );
}

function FlexibleMonetizationDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        backgroundColor: colors.white,
        borderRadius: radiuses.card,
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
          className="absolute left-0 top-0 h-full w-full"
          style={{ backgroundColor: colors.white }}
        />
        <div
          className="absolute"
          style={{ left: -531, top: -228, width: 2400.92, height: 1830 }}
        >
          <Image src="/section-7-marketplace/bg-lines.svg" alt="" fill unoptimized />
        </div>
        <div
          className="absolute"
          style={{
            left: -126,
            top: 638,
            width: 310,
            height: 131,
            borderRadius: "9999px",
            background: BLUE_GRADIENT,
            filter: "blur(203.4px)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: 1081,
            top: 655,
            width: 310,
            height: 131,
            borderRadius: "9999px",
            background: BLUE_GRADIENT,
            filter: "blur(203.4px)",
          }}
        />

        <div className="absolute left-0 top-0 w-[1280px] px-12 pt-[66px]">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-4">
              <h2
                className="m-0"
                style={{
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 500,
                  fontSize: 60,
                  lineHeight: "60px",
                  letterSpacing: "-0.025em",
                  color: "#000",
                }}
              >
                Flexible monetization
              </h2>
              <p
                className="m-0"
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#000",
                }}
              >
                Choose how you want to use and pay for AI agents
              </p>
            </div>
            <a className="inline-flex items-center gap-2 no-underline" href="#">
              <span
                style={{
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "#000",
                }}
              >
                Explore pricing
              </span>
              <Image src="/section-7-marketplace/explore-pricing-arrow.svg" alt="" width={16} height={16} unoptimized />
            </a>
          </div>

          <div className="relative mt-16 h-[351px]">
            {CARDS.map((card) => (
              <PricingCardView key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCardView({ card }: { card: PricingCard }) {
  return (
    <article
      className="absolute rounded-2xl bg-white px-8 pb-8 pt-8"
      style={{
        left: card.x,
        top: 0,
        width: card.width,
        height: 351.5,
        border: card.highlighted ? "2px solid #2F80ED" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: card.highlighted ? "0px 0px 40px -10px rgba(47,128,237,0.3)" : "none",
      }}
    >
      {card.highlighted ? (
        <div
          className="absolute"
          style={{
            left: 134.11,
            top: -14.71,
            width: 123.77,
            borderRadius: "9999px",
            background: "#2F80ED",
            padding: "4px 16px",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 700,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.05em",
              color: "#fff",
            }}
          >
            MOST POPULAR
          </span>
        </div>
      ) : null}

      <div className="pb-8">
        <p
          className="m-0"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 10,
            lineHeight: "15px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: card.highlighted ? "#2F80ED" : "rgba(0,0,0,0.4)",
          }}
        >
          {card.tier}
        </p>
        <h3
          className="m-0 pt-2"
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "32px",
            color: "#000",
          }}
        >
          {card.title}
        </h3>
        <p
          className="m-0 whitespace-pre-line pt-2"
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "26px",
            color: "rgba(0,0,0,0.6)",
          }}
        >
          {card.body}
        </p>
      </div>

      <div className="flex items-baseline gap-1">
        <span
          style={{
            fontFamily: typography.fonts.poppins,
            fontWeight: 700,
            fontSize: 36,
            lineHeight: "40px",
            color: "#000",
          }}
        >
          {card.priceMain}
        </span>
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: card.highlighted ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)",
          }}
        >
          {card.priceSub}
        </span>
      </div>

      <button
        className="mt-8 w-full rounded-2xl border-0 py-4"
        style={{ background: card.buttonGradient ? BLUE_GRADIENT : "#2F80ED" }}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: "#fff",
          }}
        >
          Run Agent
        </span>
      </button>
    </article>
  );
}

function FlexibleMonetizationMobile() {
  return (
    <section className="block bg-white px-6 py-14 md:hidden">
      <h2
        className="m-0"
        style={{
          fontFamily: typography.fonts.poppins,
          fontWeight: 500,
          fontSize: "clamp(34px, 9vw, 46px)",
          lineHeight: "1.05",
          color: "#000",
        }}
      >
        Flexible monetization
      </h2>
      <p
        className="m-0 pt-3"
        style={{
          fontFamily: typography.fonts.inter,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "24px",
          color: "#000",
        }}
      >
        Choose how you want to use and pay for AI agents
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {CARDS.map((card) => (
          <div key={`m-${card.title}`} className="rounded-2xl border p-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">{card.tier}</p>
            <h3 className="m-0 pt-2 text-2xl font-bold text-black">{card.title}</h3>
            <p className="m-0 whitespace-pre-line pt-2 text-base leading-6 text-black/70">{card.body}</p>
            <div className="pt-4">
              <span className="text-3xl font-bold text-black">{card.priceMain}</span>
              <span className="pl-1 text-sm text-black/50">{card.priceSub}</span>
            </div>
            <button className="mt-4 w-full rounded-2xl border-0 py-3 text-white" style={{ background: card.buttonGradient ? BLUE_GRADIENT : "#2F80ED" }}>
              Run Agent
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
