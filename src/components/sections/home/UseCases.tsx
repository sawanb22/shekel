import Image from 'next/image';

// LAYOUT MAP: Frame 500:22382 → UseCases.tsx
// Section: bg-[#f9f9f9], px-24px, py-96px, full-width
// Container: max-w-1280px, flex-col, gap-64px, centered (mx-auto)
//
// Heading: Poppins Medium, 48px, lh-tight, color: #1a1c1c, text-center
//
// Cards Grid: 3-col, gap-32px
// Each card: bg-white, rounded-[32px], p-32px, shadow, flex-col, gap-12px
//   Image container: h-[192px], w-full, rounded-[24px], overflow-hidden
//   Title: Inter SemiBold, 20px, lh-28px, color: #1a1c1c, pt-20px
//   Body:  Inter Regular, 14px, lh-20px, color: #414753
//
// Layered images (from Figma):
//   Card 1 (Marketing):  bg=marketing-3d.png + overlay=marketing-overlay.png
//                        overlay: h-[480px] w-[640px] absolute left-[-68px] top-[-105px]
//   Card 2 (Real Estate): single img real-estate-3d.png, object-cover
//   Card 3 (Legal):      bg=legal-3d.png + overlay=legal-overlay.png
//                        overlay: absolute size-[400px], centered

export default function UseCases() {
  return (
    <section className="w-full bg-[#f9f9f9] px-6 py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 items-center">
        {/* Section Heading */}
        <h2 className="font-['Poppins',sans-serif] font-medium text-[48px] leading-tight text-[#1a1c1c] text-center">
          Engineered for Every Vertical
        </h2>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">

          {/* ── Card 1: Marketing ── */}
          <div className="flex flex-col gap-3 rounded-[32px] bg-white p-8 shadow-[0px_12px_32px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.02)]">
            <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
              {/* Background layer */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/section-6/marketing-3d.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              {/* Overlay: abstract 3D rings — h=480, w=640, left=-68, top=-105 */}
              <div className="absolute h-[480px] w-[640px] left-[-68px] top-[-105px]">
                <Image
                  src="/section-6/marketing-overlay.png"
                  alt="Marketing abstract 3D shape"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>
            </div>
            <div className="pt-5">
              <h3 className="font-['Inter',sans-serif] font-semibold text-[20px] leading-7 text-[#1a1c1c]">
                Marketing
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-5 text-[#414753]">
              Automated content strategy, hyper-personalized emails, and real-time social listening agents.
            </p>
          </div>

          {/* ── Card 2: Real Estate ── */}
          <div className="flex flex-col gap-3 rounded-[32px] bg-white p-8 shadow-[0px_12px_32px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.02)]">
            <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
              <Image
                src="/section-6/real-estate-3d.png"
                alt="Real Estate abstract 3D shape"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="pt-5">
              <h3 className="font-['Inter',sans-serif] font-semibold text-[20px] leading-7 text-[#1a1c1c]">
                Real Estate
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-5 text-[#414753]">
              Property valuation agents, virtual tour guides, and predictive market analysis bots.
            </p>
          </div>

          {/* ── Card 3: Legal ── */}
          <div className="flex flex-col gap-3 rounded-[32px] bg-white p-8 shadow-[0px_12px_32px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.02)]">
            <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
              {/* Background layer */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/section-6/legal-3d.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              {/* Overlay: abstract 3D prism — size=400, centered */}
              <div className="absolute size-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/section-6/legal-overlay.png"
                  alt="Legal abstract 3D shape"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </div>
            <div className="pt-5">
              <h3 className="font-['Inter',sans-serif] font-semibold text-[20px] leading-7 text-[#1a1c1c]">
                Legal
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-5 text-[#414753]">
              Contract analysis, compliance monitoring, and case law research agents.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
