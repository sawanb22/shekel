// AppStore.tsx — "AI Agent Marketplace" Bento Grid Section
// Figma node: 500:22045 (Frame 2147225679), y=2541, w=1280, h=726
//
// LAYOUT: 2-panel flex-row
//   LEFT PANEL  (flex-col, ~50% width):
//     - [Row 1] "AI Agent Marketplace" card (large, h=300px)
//     - [Row 2] "Dev Ecosystem" card (small, h=256px)
//   RIGHT PANEL (CSS Grid 2x2, ~50% width):
//     - [Row 1, col 1] "Flexible Pricing"
//     - [Row 1, col 2] "Workflow Builder"
//     - [Row 2, full] "Global Settlement Network" (col-span-2)
//
// Background: soft pastel gradient with radial ellipse blobs

import Image from "next/image";

const CARD_HOVER_CLASS =
  "transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0px_18px_34px_-16px_rgba(61,86,133,0.42)]";

export default function AppStore() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* ── Decorative Background ── */}
      {/* Radial ellipses from Figma: Ellipse 43664/43665/43666 */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large bottom ellipse — pinkish */}
        <div
          className="absolute rounded-full blur-[120px] opacity-40"
          style={{
            width: "120%",
            height: "500px",
            bottom: "-100px",
            left: "-10%",
            background:
              "radial-gradient(ellipse at center, #f9a8d4 0%, #fbcfe8 40%, transparent 70%)",
          }}
        />
        {/* Left ellipse — blue/purple */}
        <div
          className="absolute rounded-full blur-[100px] opacity-35"
          style={{
            width: "550px",
            height: "550px",
            top: "-100px",
            left: "-200px",
            background:
              "radial-gradient(ellipse at center, #a78bfa 0%, #c4b5fd 40%, transparent 70%)",
          }}
        />
        {/* Right ellipse — pink/rose */}
        <div
          className="absolute rounded-full blur-[100px] opacity-35"
          style={{
            width: "550px",
            height: "550px",
            top: "-60px",
            right: "-200px",
            background:
              "radial-gradient(ellipse at center, #f9a8d4 0%, #fda4af 40%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* 
          Two-panel flex row:
          Left:  flex-col stack (Marketplace hero card + Dev Ecosystem card)
          Right: 2×2 CSS grid (Flexible Pricing, Workflow Builder, Global Settlement)
          Gap: 32px → gap-8 (matching Figma's gap-x-[32px] gap-y-[32px])
        */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ════════════════════════════════
              LEFT PANEL — flex-col stack
              ════════════════════════════════ */}
          <div className="flex flex-col gap-8 lg:w-[calc(50%-16px)] flex-shrink-0">

            {/* Card 1: AI Agent Marketplace — h=300px, col-[1/span_2] in Figma */}
            {/* Internal gradient: purple from left-half → transparent going right */}
            <div
              className={`relative bg-white border border-[rgba(0,0,0,0.2)] rounded-[24px] overflow-hidden
                         flex flex-col items-start pt-[48px] px-[48px] pb-[48px] min-h-[300px]"
                         ${CARD_HOVER_CLASS}`}
            >
              {/* Right-half purple gradient overlay (from Figma: Gradient, right-half) */}
              <div
                className="absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to left, rgba(186,158,255,0.1), transparent)",
                }}
              />

              {/* Content — z-10 so it sits above gradient */}
              <div className="relative z-10 flex flex-col gap-4 max-w-[384px]">
                <h3 className="font-sans font-semibold text-[24px] leading-[32px] text-black">
                  AI Agent Marketplace
                </h3>
                <p className="font-sans font-normal text-[16px] leading-[24px] text-black">
                  The world&apos;s largest repository of fine-tuned, task-specific autonomous agents ready for work.
                </p>
                {/* "Explore Marketplace →" link-button */}
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 pt-4 font-sans font-semibold text-[16px] leading-[24px] transition-[transform,opacity,filter] duration-200 ease-out hover:translate-x-1 hover:opacity-100 hover:[filter:drop-shadow(0_4px_10px_rgba(40,100,228,0.34))]"
                >
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #2864e4, #ecf2ff)",
                    }}
                  >
                    Explore Marketplace
                  </span>
                  <Image
                    src="/images/section-2/icon-arrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-hover:scale-105"
                  />
                </a>
              </div>
            </div>

            {/* Card 2: Dev Ecosystem — h=256px, col-1 row-2 in Figma */}
            <div
              className={`bg-white border border-[rgba(0,0,0,0.2)] rounded-[24px]
                         flex flex-col gap-3 items-start pt-[33px] px-[33px] pb-[59px] min-h-[256px]
                         ${CARD_HOVER_CLASS}`}
            >
              <Image
                src="/images/section-2/icon-dev.svg"
                alt="Dev Ecosystem icon"
                width={30}
                height={24}
              />
              <div className="flex flex-col gap-0">
                <h4 className="font-sans font-semibold text-[20px] leading-[28px] text-black pt-3">
                  Dev Ecosystem
                </h4>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-black mt-2">
                  Full SDK support for Python, JS, and Rust to integrate Shekel into any stack.
                </p>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════
              RIGHT PANEL — 2×2 CSS Grid
                [Flexible Pricing] [Workflow Builder]
                [Global Settlement Network — col-span-2]
              ════════════════════════════════ */}
          <div
            className="grid gap-8 lg:flex-1"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "300px 256px",
            }}
          >
            {/* Cell 1, 1: Flexible Pricing */}
            <div
              className={`bg-white border border-[rgba(0,0,0,0.2)] rounded-[24px]
                         flex flex-col gap-3 items-start pt-[33px] px-[33px] pb-[32px]
                         ${CARD_HOVER_CLASS}`}
            >
              <Image
                src="/images/section-2/icon-pricing.svg"
                alt="Flexible Pricing icon"
                width={33}
                height={24}
              />
              <div>
                <h4 className="font-sans font-semibold text-[20px] leading-[28px] text-black pt-3">
                  Flexible Pricing
                </h4>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-black mt-2">
                  Usage-based, subscription, or one-time license fees tailored to your business.
                </p>
              </div>
            </div>

            {/* Cell 1, 2: Workflow Builder */}
            <div
              className={`bg-white border border-[rgba(0,0,0,0.2)] rounded-[24px]
                         flex flex-col gap-3 items-start pt-[33px] px-[33px] pb-[32px]
                         ${CARD_HOVER_CLASS}`}
            >
              <Image
                src="/images/section-2/icon-workflow.svg"
                alt="Workflow Builder icon"
                width={30}
                height={27}
              />
              <div>
                <h4 className="font-sans font-semibold text-[20px] leading-[28px] text-black pt-3">
                  Workflow Builder
                </h4>
                <p className="font-sans font-normal text-[14px] leading-[20px] text-black mt-2">
                  Visual drag-and-drop interface to connect disparate agents into full pipelines.
                </p>
              </div>
            </div>

            {/* Cell 2, full-width: Global Settlement Network — col-span-2 */}
            <div
              className={`bg-white border border-[rgba(0,0,0,0.2)] rounded-[24px]
                         flex flex-row items-center gap-12 p-[48px]
                         transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0px_20px_36px_-18px_rgba(61,86,133,0.44)]`}
              style={{ gridColumn: "1 / span 2" }}
            >
              {/* Left: text content */}
              <div className="flex flex-col gap-4 flex-1 min-w-0">
                <h3 className="font-sans font-semibold text-[24px] leading-[32px] text-black">
                  Global Settlement Network
                </h3>
                <p className="font-sans font-normal text-[16px] leading-[24px] text-black">
                  Instant, low-latency payments for every agent execution using decentralized ledger technology.
                </p>
              </div>

              {/* Right: "NETWORK LIVE" status badge
                  Figma: Overlay+Border — w=381, h=160, bg rgba(255,255,255,0.5),
                  border rgba(68,72,84,0.2), rounded-[16px]
                  Inner: dot (gradient #2864e4→#ecf2ff, 12px), monospace text */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-[16px] w-[200px] h-[100px] md:w-[280px] md:h-[120px] lg:w-[320px] lg:h-[140px]"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(68,72,84,0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  {/* Live dot — gradient circle */}
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 animate-pulse"
                    style={{
                      background: "linear-gradient(to bottom, #2864e4, #ecf2ff)",
                    }}
                  />
                  <span
                    className="font-mono text-[#353740] text-[12px] md:text-[14px] tracking-[1.4px] uppercase whitespace-nowrap"
                  >
                    Network Live: 12.4K TPS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
