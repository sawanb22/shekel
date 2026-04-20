// StepCard.tsx
// Reusable component for the "How It Works" section.
// Design tokens sourced from Figma node 500:22358.
// Number bubble: w-20 h-20, rounded-full, bg-white + drop shadow.
// Number text: Inter SemiBold 30px, gradient #2864e4 → #ecf2ff.
// Title: Poppins Medium 24px, #1a1c1c.
// Body: Inter Regular 16px, lh 24px, #414753.

type StepCardProps = {
  number: string;      // e.g. "01"
  title: string;
  description: string;
};

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* Number Bubble — 80×80px, rounded-full, white bg, Figma shadow */}
      <div
        className="flex items-center justify-center w-20 h-20 rounded-full bg-white"
        style={{
          boxShadow:
            "0px 12px 32px 0px rgba(0,0,0,0.04), 0px 4px 8px 0px rgba(0,0,0,0.02)",
        }}
      >
        {/* Gradient number text: Inter SemiBold 30px */}
        <span
          className="font-sans font-semibold text-[30px] leading-[36px] bg-clip-text text-transparent select-none"
          style={{
            backgroundImage: "linear-gradient(to bottom, #2864e4, #ecf2ff)",
          }}
        >
          {number}
        </span>
      </div>

      {/* Title — Poppins Medium 24px, #1a1c1c, pt-5 inferred from y=92 - y=80 = 12 + 20pt gap  */}
      <div className="pt-5">
        <h3
          className="font-heading font-medium text-[24px] leading-[28px] text-[#1a1c1c] whitespace-nowrap"
        >
          {title}
        </h3>
      </div>

      {/* Body — Inter Regular 16px, lh 24px, #414753 */}
      <p className="font-sans font-normal text-[16px] leading-[24px] text-[#414753] max-w-[320px]">
        {description}
      </p>
    </div>
  );
}
