"use client";

import Image from "next/image";
import { colors, typography, radiuses } from "@/tokens/design-tokens";

// Figma: 506:4546  Section - Similar Agents
// Canvas: 1280 × 366  (content inset: 24px L/R → 1232px)

const CANVAS_W = 1280;
const CANVAS_H = 366;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const GAP = 40;
const CARD_W = 384;
const G = `linear-gradient(180deg, ${colors.brand.blueStart} 0%, ${colors.brand.blueEnd} 100%)`;

const CARDS: { name: string; rating: string; icon: "glow" | "glow2" | "graph" }[] = [
  { name: "CopyGenius Pro", rating: "4.7", icon: "glow" },
  { name: "VideoCraft AI", rating: "4.9", icon: "glow2" },
  { name: "MetricMaster", rating: "4.5", icon: "graph" },
];

function CardIcon({ kind }: { kind: (typeof CARDS)[0]["icon"] }) {
  if (kind === "graph") {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          width: 56,
          height: 56,
          background: colors.white,
          borderRadius: 12,
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }}
      >
        <div className="relative" style={{ width: 16.67, height: 10 }}>
          <Image src="/section-4-category-page/card-3-icon.svg" alt="" fill className="object-contain" />
        </div>
      </div>
    );
  }
  if (kind === "glow2") {
    return (
      <div className="relative" style={{ width: 56, height: 56 }}>
        <div className="absolute" style={{ left: "3.5%", right: "3.5%", top: "3.5%", bottom: "5.4%" }}>
          <Image src="/section-4-category-page/card-2-glow.svg" alt="" width={60} height={60} className="h-full w-full object-contain" />
        </div>
      </div>
    );
  }
  return (
    <div className="relative" style={{ width: 56, height: 56 }}>
      <div className="absolute" style={{ left: "3.5%", right: "3.5%", top: "3.5%", bottom: "5.4%" }}>
        <Image src="/section-4-category-page/card-1-glow.svg" alt="" width={60} height={60} className="h-full w-full object-contain" />
      </div>
    </div>
  );
}

function SimilarDesktop() {
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
          className="absolute m-0 flex flex-col justify-center"
          style={{ left: 24, top: 0, width: 420, height: 48, paddingTop: 0 }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: typography.fonts.jakarta,
              fontWeight: 600,
              fontSize: 48,
              lineHeight: "48px",
              color: "#191c1e",
            }}
          >
            <span>Similar </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: G }}
            >
              Agents
            </span>
          </p>
        </div>
        <a
          href="#"
          className="absolute flex items-center"
          style={{ left: 24 + 1008, top: 24, gap: 7.99, textDecoration: "none" }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: typography.fonts.inter,
              fontSize: 14,
              lineHeight: "20px",
              color: colors.black,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
            }}
          >
            Explore More Agents
          </p>
          <div className="relative" style={{ width: 8.75, height: 8.75 }}>
            <Image src="/section-4-category-page/link-arrow.svg" alt="" width={9} height={9} className="object-contain" />
          </div>
        </a>
        {CARDS.map((c, i) => {
          const left = 24 + i * (CARD_W + GAP);
          return (
            <div
              key={c.name}
              className="absolute flex flex-col"
              style={{
                left,
                top: 108,
                width: CARD_W,
                minHeight: 256.5,
                background: "#f2f4f7",
                borderRadius: radiuses.pill,
                padding: 32,
                gap: 15.5,
              }}
            >
              <CardIcon kind={c.icon} />
              <p
                style={{
                  margin: 0,
                  fontFamily: typography.fonts.inter,
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "#191c1e",
                }}
              >
                {c.name}
              </p>
              <div className="flex items-center" style={{ gap: 4 }}>
                <div className="relative" style={{ width: 10, height: 9.5 }}>
                  <Image src="/section-4-category-page/star.svg" alt="" fill className="object-contain" />
                </div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontSize: 12,
                    lineHeight: "18px",
                    color: "#727785",
                  }}
                >
                  {c.rating}
                </p>
              </div>
              <div
                className="mt-auto flex items-center justify-center"
                style={{
                  height: 48,
                  width: 320,
                  maxWidth: "100%",
                  background: colors.white,
                  border: "1px solid rgba(193,198,213,0.1)",
                  borderRadius: radiuses.icon,
                  boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: typography.fonts.inter,
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: "21px",
                    color: "#191c1e",
                  }}
                >
                  Run Agent
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SimilarMobile() {
  return (
    <section className="w-full py-8 md:hidden" style={{ backgroundColor: colors.white }}>
      <div className="mx-auto flex max-w-md flex-col gap-6 px-4">
        <p style={{ fontFamily: typography.fonts.jakarta, fontSize: 28, fontWeight: 600, margin: 0 }}>
          Similar <span className="bg-clip-text text-transparent" style={{ backgroundImage: G }}>Agents</span>
        </p>
        <a href="#" className="flex items-center gap-1 text-sm uppercase" style={{ letterSpacing: 1, color: colors.black }}>
          Explore More Agents
          <Image src="/section-4-category-page/link-arrow.svg" alt="" width={10} height={10} />
        </a>
        <div className="grid gap-4">
          {CARDS.map((c) => (
            <div
              key={c.name}
              className="flex flex-col p-4"
              style={{ background: "#f2f4f7", borderRadius: radiuses.pill, gap: 8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 shrink-0">
                  {c.icon === "graph" ? (
                    <div className="flex h-12 w-12 items-center justify-center bg-white" style={{ borderRadius: 12, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                      <Image src="/section-4-category-page/card-3-icon.svg" alt="" width={20} height={12} className="object-contain" />
                    </div>
                  ) : (
                    <div className="relative h-12 w-12">
                      <Image
                        src={c.icon === "glow2" ? "/section-4-category-page/card-2-glow.svg" : "/section-4-category-page/card-1-glow.svg"}
                        alt=""
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <p className="m-0 font-semibold" style={{ color: "#191c1e" }}>{c.name}</p>
                  <p className="m-0 text-xs" style={{ color: "#727785" }}>★ {c.rating}</p>
                </div>
              </div>
              <div className="mt-1 rounded-md bg-white py-2 text-center text-sm font-semibold" style={{ color: "#191c1e" }}>
                Run Agent
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CategorySimilarAgents() {
  return (
    <>
      <SimilarDesktop />
      <SimilarMobile />
    </>
  );
}
