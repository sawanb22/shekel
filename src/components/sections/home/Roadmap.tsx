// Roadmap.tsx — Figma node 500:22182 "Body" (1280 × 690)
// Light pastel gradient bg (features-bg.webp cover), rocket on left,
// vertical timeline on right with dark text on light background.

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { colors, typography } from "@/tokens/design-tokens";
import { Float } from "@/components/shared/motion/Float";
import { Reveal } from "@/components/shared/motion/Reveal";

const CANVAS_W = 1280;
const CANVAS_H = 690;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;
const STICKY_TOP_OFFSET = 72;

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
    nodeShadow: "rgba(186, 158, 255, 0.2)",
    icon: "/section-8/icon-check.svg",
  },
  {
    status: "IN PROGRESS",
    heading: "Marketplace Beta v2.0",
    desc: "Introducing automated revenue splitting and the visual workflow builder for all users.",
    statusBg: "#DCE7FF",
    statusText: "#5E8FEF",
    nodeBg: "#699CFF",
    nodeShadow: "rgba(105, 156, 255, 0.22)",
    icon: "/section-8/icon-sync.svg",
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState<{ 0: boolean; 1: boolean; 2: boolean }>({
    0: false,
    1: false,
    2: false,
  });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (prefersReducedMotion) {
      setRevealed({ 0: true, 1: true, 2: true });
      return;
    }
    setRevealed((prev) => ({
      0: prev[0] || v >= 0.05,
      1: prev[1] || v >= 0.38,
      2: prev[2] || v >= 0.7,
    }));
  });

  const dotCenter = 14;
  const lineTopInset = dotCenter + 5;

  return (
    <section
      ref={sectionRef}
      className="relative hidden w-full md:block"
      style={{
        height: "350vh",
      }}
    >
      <div
        className="sticky overflow-hidden"
        style={{
          top: STICKY_TOP_OFFSET,
          height: `calc(100vh - ${STICKY_TOP_OFFSET}px)`,
          backgroundImage: "url('/section-8/roadmap.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f0e8ff",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(126, 84, 206, 0.13) 0px, rgba(126, 84, 206, 0.13) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(to bottom, rgba(126, 84, 206, 0.13) 0px, rgba(126, 84, 206, 0.13) 1px, transparent 1px, transparent 44px)",
            opacity: 0.38,
          }}
        />
        <div
          className="absolute left-0 top-0"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
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

            <div className="flex items-stretch" style={{ gap: 32 }}>
              <div
                className="relative grid shrink-0"
                style={{
                  width: 36,
                  height: 430,
                  gridTemplateRows: "repeat(3, minmax(0, 1fr))",
                  justifyItems: "center",
                  alignItems: "start",
                }}
              >
                <motion.div
                  aria-hidden
                  className="absolute rounded-full"
                  style={{
                    top: lineTopInset,
                    height: "calc((100% / 3) * 2)",
                    left: "50%",
                    width: 3,
                    transform: "translateX(-50%)",
                    scaleY: fillScale,
                    transformOrigin: "top center",
                    background:
                      "linear-gradient(180deg, rgba(186,158,255,1) 0%, rgba(40,100,228,1) 45%, rgba(86,204,242,1) 100%)",
                  }}
                />

                {TIMELINE.map((item) => (
                  <div key={item.heading}>
                    <TimelineDot item={item} />
                  </div>
                ))}
              </div>

              <div
                className="grid flex-1"
                style={{
                  height: 430,
                  gridTemplateRows: "repeat(3, minmax(0, 1fr))",
                  alignItems: "start",
                }}
              >
                {TIMELINE.map((item, i) => (
                  <TimelineStep key={item.heading} item={item} revealed={revealed[i as 0 | 1 | 2]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineDot({ item }: { item: TimelineItem }) {
  if (item.icon) {
    return (
      <div
        className="relative z-10 flex items-center justify-center"
        style={{
          width: 36,
          height: 29,
          borderRadius: 8.64,
          backgroundColor: item.nodeShadow,
          flexShrink: 0,
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: 27,
            height: 21,
            borderRadius: 8.64,
            backgroundColor: item.nodeBg,
            boxSizing: "border-box",
            padding: item.status === "COMPLETED" ? "3px 4px" : "3px 3px",
            overflow: "hidden",
          }}
        >
          <Image
            src={item.icon}
            alt=""
            width={item.status === "COMPLETED" ? 6 : 7}
            height={item.status === "COMPLETED" ? 5 : 7}
            style={
              item.status === "COMPLETED"
                ? {
                    width: 10,
                    height: 8,
                    maxWidth: 10,
                    maxHeight: 8,
                    objectFit: "contain",
                    flexShrink: 0,
                  }
                : {
                    width: 10,
                    height: 10,
                    maxWidth: 10,
                    maxHeight: 10,
                    objectFit: "contain",
                    flexShrink: 0,
                  }
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative z-10"
      style={{
        width: 28,
        height: 28,
        borderRadius: "9999px",
        backgroundColor: item.nodeBg,
        border: `1.5px solid ${item.nodeBorder}`,
        flexShrink: 0,
      }}
    />
  );
}

function TimelineStep({ item, revealed }: { item: TimelineItem; revealed: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: prefersReducedMotion || revealed ? 1 : 0,
        y: prefersReducedMotion || revealed ? 0 : 20,
      }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col"
      style={{ gap: 8 }}
    >
      <div
        className="inline-flex self-start rounded"
        style={{
          backgroundColor: item.statusBg,
          padding: "3px 10px",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontFamily: typography.fonts.inter,
            fontWeight: 700,
            fontSize: 10,
            lineHeight: "14px",
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
    </motion.div>
  );
}

function RoadmapMobile() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState<{ 0: boolean; 1: boolean; 2: boolean }>({
    0: false,
    1: false,
    2: false,
  });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (prefersReducedMotion) {
      setRevealed({ 0: true, 1: true, 2: true });
      return;
    }
    setRevealed((prev) => ({
      0: prev[0] || v >= 0.05,
      1: prev[1] || v >= 0.38,
      2: prev[2] || v >= 0.7,
    }));
  });

  const dotCenter = 14;
  const lineTopInset = dotCenter + 5;

  return (
    <section
      ref={sectionRef}
      className="relative block w-full md:hidden"
      style={{
        height: "350vh",
      }}
    >
      <div
        className="sticky overflow-hidden"
        style={{
          top: STICKY_TOP_OFFSET,
          height: `calc(100vh - ${STICKY_TOP_OFFSET}px)`,
          backgroundImage: "url('/section-8/roadmap.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f0e8ff",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(126, 84, 206, 0.13) 0px, rgba(126, 84, 206, 0.13) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(to bottom, rgba(126, 84, 206, 0.13) 0px, rgba(126, 84, 206, 0.13) 1px, transparent 1px, transparent 44px)",
            opacity: 0.34,
          }}
        />
        <Float
          amplitude={10}
          duration={8}
          className="pointer-events-none absolute -right-24 top-2 opacity-50"
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

        <div className="relative z-10 flex h-full flex-col justify-center gap-10 px-6 sm:px-8">
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

          <div className="flex items-stretch" style={{ gap: 24 }}>
            <div
              className="relative grid shrink-0"
              style={{
                width: 36,
                height: 420,
                gridTemplateRows: "repeat(3, minmax(0, 1fr))",
                justifyItems: "center",
                alignItems: "start",
              }}
            >
              <motion.div
                aria-hidden
                className="absolute rounded-full"
                style={{
                  top: lineTopInset,
                  height: "calc((100% / 3) * 2)",
                  left: "50%",
                  width: 3,
                  transform: "translateX(-50%)",
                  scaleY: fillScale,
                  transformOrigin: "top center",
                  background:
                    "linear-gradient(180deg, rgba(186,158,255,1) 0%, rgba(40,100,228,1) 45%, rgba(86,204,242,1) 100%)",
                }}
              />
              {TIMELINE.map((item) => (
                <div key={item.heading}>
                  <TimelineDot item={item} />
                </div>
              ))}
            </div>

            <div
              className="grid flex-1"
              style={{
                height: 420,
                gridTemplateRows: "repeat(3, minmax(0, 1fr))",
                alignItems: "start",
              }}
            >
              {TIMELINE.map((item, i) => (
                <TimelineStep key={item.heading} item={item} revealed={revealed[i as 0 | 1 | 2]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
