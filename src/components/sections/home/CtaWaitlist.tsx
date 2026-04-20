"use client";

import Image from "next/image";

// LAYOUT MAP: CTA Waitlist Section (Frame 500:22272)
// Section Container: max-w-7xl, mx-auto, px-6 to px-12 for responsiveness, py-24.
// Card Wrapper: bg-white, overflow-hidden, rounded-card (24px), relative, min-h-[600px] flex items-center.
// Background Image: absolute inset-0 object-cover w-full h-full, scale slightly or position to match visual.
// Content Layout: relative z-10 w-full max-w-2xl px-10 md:px-20 py-16 flex flex-col items-start.
// Heading: "Join The Future Of" (black) + "AI Automation" (gradient brand.blueStart to blueEnd).
//          Poppins Medium, 48px to 60px responsive, tight tracking (-3px).
// Subtext: Inter Regular 20px, text.bodyMuted (#4a4a4a), max-w-[460px]
// Form Row: Flex row items-center, gap-0 relative mt-8 w-full max-w-md.
//    - Email Input: bg-white, rounded-card, pl-6 pr-40 py-4 w-full shadow-sm. text 16px.
//    - Button: absolute right-2, gradient blueStart to blueEnd, rounded-card px-8 py-3 text-white font-semibold.

export default function CtaWaitlist() {
  return (
    <section className="w-full px-6 md:px-12 py-24">
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Card Wrapper */}
        <div 
          className="relative w-full overflow-hidden flex items-center min-h-[500px] md:min-h-[640px]"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
          }}
        >
          {/* Background Image encompassing the fluid colors and robot */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Image
              src="/section-11/bg-fluid-robot.png"
              alt="Background Abstract"
              fill
              priority
              className="object-cover md:object-[right_center] object-[70%_center]"
            />
          </div>

          {/* Optional decorative SVG overlay */}
          <div className="absolute top-[-20%] left-[-10%] w-[696px] h-[696px] opacity-50 pointer-events-none rotate-180 mix-blend-overlay">
            <Image
              src="/section-11/ellipse-overlay.svg"
              alt="Decorative Ellipse"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start px-8 md:px-20 py-16 w-full max-w-2xl">
            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(40px, 5vw, 60px)",
                lineHeight: "1.1",
                letterSpacing: "-0.05em",
              }}
              className="mb-6"
            >
              <span className="block" style={{ color: "#000000" }}>
                Join The Future Of
              </span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(to bottom, #2864e4, #ecf2ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Automation
              </span>
            </h2>

            {/* Subtext */}
            <p
              className="mb-10 max-w-[463px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: "1.4",
                color: "rgba(0,0,0,0.73)", // using exact alpha as token match is imprecise for this exact blend
              }}
            >
              Get early access to the developer beta and start building the agents that will power the next generation economy.
            </p>

            {/* Form */}
            <form 
              className="relative w-full max-w-[500px] flex items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full outline-none"
                style={{
                  backgroundColor: "#ffffff",
                  padding: "18px 160px 18px 24px",
                  borderRadius: "24px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  color: "#0b0b0b",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 transition-transform hover:scale-[1.02] active:scale-95"
                style={{
                  background: "linear-gradient(to bottom, #2864e4, #ecf2ff)",
                  borderRadius: "24px",
                  padding: "16px 32px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
