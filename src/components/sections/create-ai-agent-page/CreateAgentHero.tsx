"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 717;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const PURPLE = "#b557fa";
const PURPLE_GROUP_SHIFT_X = -208;

const TUNNEL = [
  { l: 661.8, t: 172.2, w: 357.2, h: 320.5, o: 1, r: 30 },
  { l: 645.4, t: 157.5, w: 390, h: 349.8, o: 0.9, r: 30 },
  { l: 629.4, t: 143.1, w: 422.1, h: 378.6, o: 0.8, r: 30 },
  { l: 610.8, t: 126.4, w: 459.3, h: 412, o: 0.7, r: 30 },
  { l: 593, t: 110.5, w: 494.9, h: 443.9, o: 0.6, r: 30 },
  { l: 576.3, t: 95.5, w: 528.3, h: 473.9, o: 0.5, r: 30 },
  { l: 560.2, t: 81, w: 560.4, h: 502.8, o: 0.4, r: 30 },
  { l: 542, t: 67, w: 596.8, h: 530.9, o: 0.3, r: 30 },
  { l: 523.8, t: 54, w: 633.2, h: 556.9, o: 0.3, r: 20 },
  { l: 502.7, t: 54, w: 675.4, h: 556.9, o: 0.2, r: 0 },
  { l: 482, t: 54, w: 716.8, h: 556.9, o: 0.1, r: 0 },
  { l: 461.3, t: 54, w: 758.3, h: 556.9, o: 0.08, r: 0 },
  { l: 437.6, t: 54, w: 805.6, h: 556.9, o: 0.06, r: 0 },
  { l: 415, t: 54, w: 850.8, h: 556.9, o: 0.05, r: 0 },
];

function Desktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{ backgroundColor: colors.black, aspectRatio: `${CANVAS_W}/${CANVAS_H}`, containerType: "inline-size" }}
    >
      <div
        className="absolute left-0 top-0"
        style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${SCALE})`, transformOrigin: "top left" }}
      >
        <Image src="/section-1-create-ai-agent-page/hero-ellipse-top.png" alt="" width={1343} height={211} className="absolute left-[-19px] top-[-49px]" />
        <Image src="/section-1-create-ai-agent-page/hero-ellipse-left.png" alt="" width={163} height={163} className="absolute left-[-98px] top-[-139px]" />
        <Image src="/section-1-create-ai-agent-page/hero-ellipse-right.png" alt="" width={163} height={163} className="absolute left-[1252px] top-[-82px]" />

        <h1
          className="absolute m-0 bg-clip-text text-transparent"
          style={{
            left: 45,
            top: 46,
            width: 794,
            fontFamily: typography.fonts.poppins,
            fontWeight: 500,
            fontSize: 64,
            lineHeight: "82px",
            paddingBottom: 8,
            letterSpacing: "-0.9px",
            backgroundImage: "linear-gradient(184.67deg,#fff 55.6%,rgba(255,255,255,0) 110.73%)",
          }}
        >
          Create AI Agent
        </h1>

        {TUNNEL.map((r, i) => (
          <div
            key={i}
            className="absolute mix-blend-difference"
            style={{ left: r.l + PURPLE_GROUP_SHIFT_X, top: r.t, width: r.w, height: r.h, border: `1px solid ${PURPLE}`, borderRadius: r.r, opacity: r.o }}
          />
        ))}
        <Image
          src="/section-1-create-ai-agent-page/hero-glow-right.svg"
          alt=""
          width={980}
          height={900}
          className="absolute left-[147px] top-[-117px] mix-blend-screen object-cover"
        />
        <Image
          src="/images/hero/robot.webp"
          alt=""
          width={640}
          height={634}
          className="pointer-events-none absolute left-[322px] top-[6px] z-10 object-contain"
        />

        <p style={{ position: "absolute", left: 838, top: 482, margin: 0, width: 387, color: colors.white, fontSize: 18, lineHeight: "28px", fontFamily: typography.fonts.inter, zIndex: 30 }}>
          Define the identity, logic, and pricing of your autonomous agent.
        </p>

        <div className="absolute left-[-4px] top-[627px] h-[89px] w-[1291px] border border-white/20 bg-black">
          <div className="absolute left-0 top-0 h-[90px] w-[34px]" style={{ background: "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0) 100%)" }} />
          <div className="absolute left-[1239px] top-[-1px] h-[90px] w-[34px]" style={{ background: "linear-gradient(270deg, #000000 0%, rgba(0,0,0,0) 100%)" }} />

          <div className="absolute inset-x-[20px] top-0 flex h-[89px] items-center justify-between">
            <Image src="/section-1-create-ai-agent-page/logo-openai.png" alt="" width={103} height={28} className="object-contain" />
            <Image src="/section-1-create-ai-agent-page/logo-google-ai.png" alt="" width={134} height={73} className="object-contain" />
            <Image src="/section-1-create-ai-agent-page/logo-anthropic.svg" alt="" width={185} height={123} className="object-contain" />
            <Image src="/section-1-create-ai-agent-page/logo-azure.png" alt="" width={90} height={26} className="object-contain" />
            <Image src="/section-1-create-ai-agent-page/logo-meta.png" alt="" width={95} height={19} className="object-contain" />
            <Image src="/section-1-create-ai-agent-page/logo-notion.png" alt="" width={102} height={72} className="object-contain" />
            <Image src="/section-1-create-ai-agent-page/logo-slack.png" alt="" width={103} height={42} className="object-contain" />
            <Image src="/section-1-create-ai-agent-page/logo-aws.png" alt="" width={50} height={50} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Mobile() {
  return (
    <section className="block w-full bg-black px-4 py-10 md:hidden">
      <h1 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(34px,9vw,48px)", lineHeight: 1.1 }}>Create AI Agent</h1>
      <div className="relative mt-6 h-56 w-full">
        <Image src="/section-1-create-ai-agent-page/hero-glow-center.png" alt="" fill className="object-contain mix-blend-screen" />
      </div>
      <p style={{ margin: "16px 0 0", color: colors.white, fontFamily: typography.fonts.inter, fontSize: 16, lineHeight: "24px" }}>
        Define the identity, logic, and pricing of your autonomous agent.
      </p>
    </section>
  );
}

export default function CreateAgentHero() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
