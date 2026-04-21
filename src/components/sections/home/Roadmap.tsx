// Roadmap.tsx — Figma node 500:22182 "Body" (1280 × 690)
// Light pastel gradient bg (features-bg.webp cover), rocket on left,
// vertical timeline on right with dark text on light background.

"use client";

import Image from "next/image";
import { colors, typography } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";
import { Reveal } from "@/components/shared/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/shared/motion/RevealStagger";

const CANVAS_W = 1280;
const CANVAS_H = 690;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

// Figma fill_3UVOLK uses the same features-bg.webp (imageRef f29b33d3…)
// as FeaturesBento. Apply it as CSS cover so it fills edge-to-edge.

type TimelineItem = {
  status: "COMPLETED" | "IN PROGRESS" | "UPCOMING";
  heading: string;
  desc: string;
  statusBg: string;
  statusText: string;
  nodeBg: string;
  nodeShadow?: string;
  nodeBorder?: string;
  icon?: string;
};

const TIMELINE: TimelineItem[] = [
  {
    status: "COMPLETED",
    heading: "Alpha Launch & Core Engine",
    desc: "Development of the decentralized hosting protocol and basic agent API standards.",
    statusBg: "#202534",
    statusText: "#E5E7F6",
    nodeBg: "#BA9EFF",
    nodeShadow: "rgba(186, 158, 255, 0.35)",
    icon: "/section-8/node-completed.svg",
  },
  {
    status: "IN PROGRESS",
    heading: "Marketplace Beta v2.0",
    desc: "Introducing automated revenue splitting and the visual workflow builder for all users.",
    statusBg: "#202534",
    statusText: "#699CFF",
    nodeBg: "#C2CFFF",
    nodeShadow: "rgba(105, 156, 255, 0.25)",
    icon: "/section-8/node-inprogress.svg",
  },
  {
    status: "UPCOMING",
    heading: "Enterprise SDK & Global Node Mesh",
    desc: "Scaling to 100k+ agents with localized edge-node hosting for sub-10ms latency.",
    statusBg: "#202534",
    statusText: "#A7AAB9",
    nodeBg: "#2D2F3A",
    nodeBorder: "#444854",
  },
];

export default function Roadmap() {
  return (
    <>
      <RoadmapDesktop />
      <RoadmapMobile />
    </>
  );
}

function RoadmapDesktop() {
  return (
    <section
      className="relative hidden w-full overflow-hidden rounded-[24px] md:block"
      style={{
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "inline-size",
        backgroundImage: "url('/section-6/features-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f0e8ff",
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
        {/* Rocket — Figma rect: x=-408, y=-75, w=1274.68, h=1293.46.
            The section overflow:hidden clips the 408px that sits off-canvas;
            ~866px (68%) of the rocket is visible on the left. */}
        <Float
          amplitude={14}
          rotate={2}
          duration={8}
          className="pointer-events-none absolute"
          style={{ left: -408, top: -75, width: 1274.68, height: 1293.46 }}
        >
          <Image
            src="/section-8/rocket.webp"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </Float>

        {/* Roadmap content — x=509, y=55, w=800 (Figma layout_MG2NQ8) */}
        <div
          className="absolute flex flex-col"
          style={{ left: 509, top: 55, width: 800, gap: 80 }}
        >
          <Reveal>
            <h2
              style={{
                margin: 0,
                fontFamily: typography.fonts.poppins,
                fontWeight: 700,
                fontSize: 36,
                lineHeight: "40px",
                color: "#000000",
              }}
            >
              Development Roadmap
            </h2>
          </Reveal>

          <RevealStagger className="flex flex-col" style={{ gap: 48 }} stagger={0.18}>
            {TIMELINE.map((item, i) => (
              <RevealItem key={item.heading}>
                <TimelineRow item={item} isLast={i === TIMELINE.length - 1} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
  return (
    <div className="flex flex-row items-stretch" style={{ gap: 32 }}>
      {/* Node + connector column */}
      <div className="relative flex flex-col items-center" style={{ width: 24 }}>
        {item.icon ? (
          <div
            className="relative z-10 flex items-center justify-center"
            style={{
              width: 24,
              height: 24,
              borderRadius: "9999px",
              backgroundColor: item.nodeBg,
              boxShadow: `0 0 0 5px ${item.nodeShadow}`,
              flexShrink: 0,
            }}
          >
            <Image src={item.icon} alt="" width={10} height={8} />
          </div>
        ) : (
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "9999px",
              backgroundColor: item.nodeBg,
              border: `1.5px solid ${item.nodeBorder}`,
              flexShrink: 0,
            }}
          />
        )}

        {!isLast && (
          <div
            className="mt-3 flex-1"
            style={{
              width: 1.5,
              backgroundColor: "rgba(0,0,0,0.12)",
              minHeight: 56,
            }}
          />
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col" style={{ gap: 8, paddingBottom: 32 }}>
        {/* Status badge */}
        <div
          className="inline-flex self-start rounded"
          style={{
            backgroundColor: item.statusBg,
            padding: "2px 8px",
          }}
        >
          <span
            style={{
              fontFamily: typography.fonts.inter,
              fontWeight: 700,
              fontSize: 10,
              lineHeight: "15px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: item.statusText,
            }}
          >
            {item.status}
          </span>
        </div>

        <h4
          style={{
            margin: 0,
            fontFamily: typography.fonts.inter,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: "28px",
            color: "#0b0b0b",
          }}
        >
          {item.heading}
        </h4>

        <p
          style={{
            margin: 0,
            fontFamily: typography.fonts.inter,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function RoadmapMobile() {
  return (
    <section
      className="relative block w-full overflow-hidden md:hidden"
      style={{
        backgroundImage: "url('/section-6/features-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f0e8ff",
      }}
    >
      {/* Rocket — faint decoration top-right on mobile */}
      <Float
        amplitude={10}
        duration={8}
        className="pointer-events-none absolute -right-24 -top-16 opacity-50"
        style={{ width: 360 }}
      >
        <Image
          src="/section-8/rocket.webp"
          alt=""
          width={360}
          height={365}
          style={{ width: "100%", height: "auto" }}
        />
      </Float>

      <div className="relative z-10 flex flex-col gap-10 px-6 py-16 sm:px-8">
        <Reveal>
          <h2
            style={{
              margin: 0,
              fontFamily: typography.fonts.poppins,
              fontWeight: 700,
              fontSize: "clamp(28px, 8vw, 36px)",
              lineHeight: 1.1,
              color: "#000000",
            }}
          >
            Development Roadmap
          </h2>
        </Reveal>

        <RevealStagger className="flex flex-col gap-10" stagger={0.15}>
          {TIMELINE.map((item, i) => (
            <RevealItem key={item.heading}>
              <TimelineRow item={item} isLast={i === TIMELINE.length - 1} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
