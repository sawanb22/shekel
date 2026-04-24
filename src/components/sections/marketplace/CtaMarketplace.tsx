import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";
import waitlistMascot from "../../../../new-images/waitlist-mascot.webp";
import ctaBg from "../../../../new-images/page 2/start using ai agents today.webp";
import glowPanel from "../../../../new-images/Group 9210 (1).webp";

const CANVAS_W = 1280;
const CANVAS_H = 552;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

const BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%)";
const BUTTON_GRADIENT =
  "linear-gradient(160deg, rgba(40,100,228,1) 9%, rgba(30,154,255,1) 72%, rgba(198,248,255,1) 100%)";

export default function CtaMarketplace() {
  return (
    <>
      <CtaDesktop />
      <CtaMobile />
    </>
  );
}

function CtaDesktop() {
  return (
    <section className="relative hidden w-full bg-white md:block">
      <div
        className="relative w-full overflow-hidden"
        style={{
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
        <div className="absolute inset-0">
          <Image src={ctaBg} alt="" fill sizes="1280px" className="object-cover object-center" />
        </div>

        <div
          className="absolute rounded-full"
          style={{
            left: -549,
            top: -566,
            width: 696,
            height: 696,
            background: BLUE_GRADIENT,
            filter: "blur(257.5px)",
          }}
        />
        <div
          className="absolute overflow-hidden"
          style={{ right: 0, top: 0, width: 732, height: CANVAS_H }}
        >
          <Image
            src={glowPanel}
            alt=""
            fill
            className="object-cover object-right"
            sizes="732px"
          />
        </div>

        <h2
          className="absolute m-0"
          style={{
            left: 109,
            top: 112,
            width: 612,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 72,
            lineHeight: "72px",
            letterSpacing: "-0.05em",
            textTransform: "capitalize",
            color: "#000",
          }}
        >
          Start using AI agents today
        </h2>

        <div className="absolute flex items-center gap-4" style={{ left: 101, top: 315 }}>
          <button
            className="border-0"
            style={{
              borderRadius: 10,
              padding: "20px 40px",
              background: BUTTON_GRADIENT,
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
                color: "#fff",
              }}
            >
              Explore Agents
            </span>
          </button>
          <button
            className="border"
            style={{
              borderRadius: 10,
              padding: "20px 40px",
              border: "1px solid transparent",
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(180deg, rgba(40,100,228,1) 0%, rgba(236,242,255,1) 100%) border-box",
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
                background: BLUE_GRADIENT,
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
          className="absolute m-0"
          style={{
            left: 101,
            top: 426,
            width: 640,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "16px",
            letterSpacing: "0.36em",
            textTransform: "uppercase",
            color: "#000",
            textAlign: "center",
          }}
        >
          Join thousands of users and developers already using Shekel
        </p>
        </div>
      </div>
      <div className="h-7 w-full bg-white" />
      <div
        className="pointer-events-none absolute"
        style={{ right: -20, bottom: -55, width: 834, height: 1001 }}
      >
        <Image
          src={waitlistMascot}
          alt="Shekel mascot"
          fill
          sizes="445px"
          className="object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
}

function CtaMobile() {
  return (
    <section className="block bg-white px-6 py-16 md:hidden">
      <h2 className="m-0 text-4xl leading-tight text-black">Start using AI agents today</h2>
      <div className="mt-8 flex flex-col gap-3">
        <button className="border-0 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white" style={{ background: BUTTON_GRADIENT, borderRadius: 10 }}>
          Explore Agents
        </button>
        <button className="border border-white/50 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-wider text-black" style={{ borderRadius: 10 }}>
          Start Building
        </button>
      </div>
    </section>
  );
}
