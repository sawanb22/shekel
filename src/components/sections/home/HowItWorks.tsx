// HowItWorks.tsx — Section "A Three-Step Architectural Flow"
// Figma node: 500:22350 (Section - How It Works), y=1989, w=1280, h=552
//
// LAYOUT PLAN:
// Outer: white bg, py-24
// Inner max-w-7xl mx-auto px-4 md:px-8
//   ├── Header block: flex-col items-center text-center, gap inferred from y=96 (heading) y=56 below → ~24px
//   └── Steps row: relative grid grid-cols-3 gap-12 mt-20
//       └── Connector line: absolute, y-centered on bubbles (top-10 = 40px = bubble center)
//           gradient: rgba(0,90,182,0.1) → #005ab6 → rgba(0,90,182,0.1), h=2px
//           x-span from end of bubble 1 to start of bubble 3 = 308px → 308+616=924 in 1232 total
//           Tailwind: left-[calc(1/6*100%+40px)] right-[calc(1/6*100%+40px)]  (centers on col midpoints)

import StepCard from "@/components/shared/StepCard";

const STEPS = [
  {
    number: "01",
    title: "Build & Publish",
    description:
      "Develop your agent using our SDK and host it on our decentralized nodes.",
  },
  {
    number: "02",
    title: "Discover & Use",
    description:
      "Users and other agents find your services in the global registry.",
  },
  {
    number: "03",
    title: "Monetize & Scale",
    description:
      "Get paid automatically via smart contracts as your agent scales up.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Section Header ────────────────────────────────────────────
            Figma: Container at x=256, width=768 → centered within 1280px.
            Heading y=0, subtitle y=56 → gap of 56px, but visual whitespace
            between them is 56-40(heading h) = 16px → gap-4 ✓              */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-20">
          <h2 className="font-heading font-bold text-[36px] md:text-[40px] leading-[1.2] text-[#0b0b0b] tracking-tight">
            A Three-Step Architectural Flow
          </h2>
          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#414753]">
            From deployment to global scaling in record time.
          </p>
        </div>

        {/* ── Steps Row ─────────────────────────────────────────────────
            Figma: 3 containers each 378.67px wide in a 1232px wrapper.
            Gaps inferred: Step 2 starts at x=426.67, Step 1 ends at x=378.67
            → gap = 48px → gap-12 ✓
            Connector line: x=308,y=96,w=616,h=2 within the 1232px wrapper.
            Positioned across the space between the three bubble centers.     */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">

          {/* Connector line — desktop only (hidden on mobile stack) */}
          <div
            className="hidden md:block absolute top-10 h-[2px] pointer-events-none"
            style={{
              // Left edge = center of col-1 bubble, right edge = center of col-3 bubble
              // Each col is ~33.33% wide, bubble center is at 50% of col → 16.67% from left
              // So: left = 16.67% + 40px (half bubble), right same from right edge
              left: "calc(16.67% + 40px)",
              right: "calc(16.67% + 40px)",
              backgroundImage:
                "linear-gradient(to right, rgba(0,90,182,0.1), #005ab6 50%, rgba(0,90,182,0.1))",
            }}
          />

          {STEPS.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
