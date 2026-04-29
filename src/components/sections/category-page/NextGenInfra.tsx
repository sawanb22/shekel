"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// Figma: 506:4493  Section
// Canvas: 1280 × 800
// Bg: linear 135deg #0B1220 → #0E1A2B, rounded 27

const CANVAS_W = 1280;
const CANVAS_H = 800;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const SECTION_R = 27;

const GRAD = `linear-gradient(135deg, rgb(11, 18, 32) 0%, rgb(14, 26, 43) 100%)`;
const BADGE_BORDER = "rgba(0,90,182,0.2)";
const BADGE_BG = "rgba(0,90,182,0.1)";
const CARD_BDR = "rgba(255,255,255,0.08)";
const CARD_BG = "rgba(255,255,255,0.03)";

const FEATURES: { title: string; body: [string, string]; icon: string }[] = [
  { title: "Smart Automation", body: ["Automate repetitive tasks like content creation, SEO,", "and campaign management with AI-powered agents."], icon: "feat-1.svg" },
  { title: "High Performance", body: ["Optimize workflows with data-driven insights and", "intelligent decision-making."], icon: "feat-2.svg" },
  { title: "Scalable Systems", body: ["Run multiple AI agents simultaneously to", "handle complex business operations at scale."], icon: "feat-3.svg" },
];

function Subcopy() {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: typography.fonts.inter,
        fontWeight: 400,
        fontSize: 20,
        lineHeight: "28px",
        color: colors.text.heading,
      }}
    >
      Discover powerful AI agents designed to handle repetitive tasks, improve performance, and
      scale your operations effortlessly.
    </p>
  );
}

function NextGenDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        borderRadius: SECTION_R,
      }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `scale(${SCALE})`,
          transformOrigin: "top left",
          background: GRAD,
          borderRadius: SECTION_R,
        }}
      >
        <div
          className="pointer-events-none absolute"
          style={{ left: -385, top: -397, width: 2452, height: 1999, borderRadius: SECTION_R, overflow: "hidden" }}
        >
          <Image src="/section-3-category-page/bg.png" alt="" width={2452} height={1999} className="h-full w-full object-cover" />
        </div>
        <div
          className="pointer-events-none absolute"
          style={{
            right: 0,
            top: -80,
            width: 500,
            height: 500,
            background: "rgba(0,90,182,0.1)",
            borderRadius: radiuses.full,
            filter: "blur(60px)",
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            left: -64,
            bottom: 0,
            width: 400,
            height: 400,
            background: "rgba(0,103,128,0.1)",
            borderRadius: radiuses.full,
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute flex"
          style={{ left: 32, top: 151, width: 1216, height: 498, alignItems: "center", justifyContent: "space-between" }}
        >
          <div className="flex flex-col" style={{ width: 560, gap: 32, paddingTop: 0 }}>
            <div
              className="inline-flex w-fit"
              style={{
                border: `1px solid ${BADGE_BORDER}`,
                backgroundColor: BADGE_BG,
                borderRadius: radiuses.full,
                padding: "5px 13px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: "16px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  background: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Next-Gen Infrastructure
              </p>
            </div>
            <div style={{ paddingTop: 16 }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.poppins,
                  fontWeight: 500,
                  fontSize: 60,
                  lineHeight: "60px",
                  letterSpacing: -1.5,
                  color: colors.text.heading,
                }}
              >
                <span className="block">Automate your</span>
                <span className="block">
                  workflows with{" "}
                  <span
                    className="inline bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)` }}
                  >
                    AI
                  </span>
                </span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)` }}
                >
                  agents
                </span>
              </h2>
            </div>
            <div style={{ maxWidth: 576 }}>
              <Subcopy />
            </div>
            <div className="flex" style={{ gap: 16, paddingTop: 16 }}>
              <div
                className="relative flex items-center"
                style={{
                  backgroundColor: colors.brand.blue,
                  borderRadius: radiuses.pill,
                  padding: "17px 32px",
                  gap: 8,
                  boxShadow: "0px 20px 25px -5px rgba(59,130,246,0.25),0px 8px 10px -6px rgba(59,130,246,0.25)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: colors.white,
                  }}
                >
                  Run an AI Agent
                </p>
                <Image src="/section-3-category-page/btn-arrow.svg" alt="" width={14} height={16} className="object-contain" />
              </div>
              <div
                className="flex items-center justify-center"
                style={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  backdropFilter: "blur(2px)",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  borderRadius: radiuses.pill,
                  padding: "17px 33px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: colors.text.heading,
                  }}
                >
                  View Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col" style={{ width: 560, gap: 24 }}>
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex w-full"
                style={{
                  marginLeft: f.title === "High Performance" ? 32 : f.title === "Scalable Systems" ? 64 : 0,
                }}
              >
                <div
                  className="flex w-full"
                  style={{
                    padding: 33,
                    backgroundColor: CARD_BG,
                    border: `1px solid ${CARD_BDR}`,
                    borderRadius: radiuses.pill,
                    gap: 24,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div
                    className="flex shrink-0 items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      border: "1px solid rgba(59,130,246,0.2)",
                      background: "rgba(59,130,246,0.1)",
                      borderRadius: radiuses.icon,
                    }}
                  >
                    <Image src={`/section-3-category-page/${f.icon}`} alt="" width={32} height={32} className="object-contain" />
                  </div>
                  <div className="flex min-w-0 flex-col" style={{ gap: 8 }}>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: typography.fonts.jakarta,
                        fontWeight: 700,
                        fontSize: 20,
                        lineHeight: "28px",
                        color: colors.text.heading,
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: typography.fonts.inter,
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: colors.text.heading,
                      }}
                    >
                      {f.body[0]} <br />
                      {f.body[1]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NextGenMobile() {
  return (
    <section
      className="block w-full py-10 md:hidden"
      style={{ background: GRAD, borderRadius: radiuses.card, margin: "0 12px" }}
    >
      <div className="overflow-hidden" style={{ borderRadius: radiuses.card, margin: 8, position: "relative" }}>
        <div className="relative h-40 w-full">
          <Image src="/section-3-category-page/bg.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="space-y-4 px-4 pb-8" style={{ color: colors.text.heading }}>
          <p
            className="text-center"
            style={{
              fontSize: 12,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: colors.brand.blue,
            }}
          >
            Next-Gen Infrastructure
          </p>
          <h2
            className="text-center"
            style={{ fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(32px,8vw,40px)" }}
          >
            Automate your workflows with AI agents
          </h2>
          <Subcopy />
          <div className="grid gap-2">
            <div className="flex justify-center gap-2 py-2 text-sm font-semibold text-white" style={{ background: colors.brand.blue, borderRadius: radiuses.pill }}>
              Run an AI Agent
            </div>
            <div className="flex justify-center gap-2 py-2 text-sm font-semibold" style={{ background: "rgba(255,255,255,0.05)", borderRadius: radiuses.pill }}>
              View Solutions
            </div>
          </div>
          {FEATURES.map((f) => (
            <div key={f.title} className="p-4" style={{ background: CARD_BG, border: `1px solid ${CARD_BDR}`, borderRadius: radiuses.pill }}>
              <p style={{ fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 18, margin: "0 0 8px" }}>{f.title}</p>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, fontFamily: typography.fonts.inter }}>
                {f.body[0]} {f.body[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function NextGenInfra() {
  return (
    <>
      <NextGenDesktop />
      <NextGenMobile />
    </>
  );
}
