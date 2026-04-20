import Image from "next/image";

// LAYOUT MAP: FAQ Section (Frame 500:22410)
// Section: bg: #f3f3f4, flex-col, items-center, justify-center, py: 96px, px: clamp down to mobile
// Container: flex-col, items-center, gap-48px, max-w-[768px], full-width
// Section Header: text-center, Poppins Medium, 48px, color #1a1c1c, line-height 40px
//                 "Frequently Asked" / "Questions" (gradient text: #2864e4 to #ecf2ff)
// FAQ Container: flex-col, gap-16px, full-width
// FAQ Item (Details): bg-white, flex-col, p-24px, rounded-16px
//                      shadow: 0px 12px 32px 0px rgba(0,0,0,0.04), 0px 4px 8px 0px rgba(0,0,0,0.02)
// FAQ Summary (Question): flex, items-center, justify-between
//                         Inter Semi_Bold, 18px, color #1a1c1c, line-height 28px
// FAQ Icon: chevron-down.svg, width 12px, height 7.4px

const faqs = [
  "How are agents verified?",
  "What tokens does Shekel support?",
  "Can I host agents on my own servers?"
];

export default function Faq() {
  return (
    <section 
      className="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-64 py-24"
      style={{ backgroundColor: "#f3f3f4" }}
    >
      <div className="flex flex-col items-center gap-12 w-full max-w-[768px]">
        {/* Section Header */}
        <div className="flex flex-col items-center w-full">
          <h2
            className="text-center"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "48px",
              lineHeight: "40px",
              color: "#1a1c1c",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white w-full shadow-[0px_12px_32px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.02)]"
              style={{
                padding: "24px",
                borderRadius: "16px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#1a1c1c",
                  margin: 0,
                }}
              >
                {faq}
              </h3>
              <div className="relative w-[12px] h-[7.4px] shrink-0">
                <Image
                  src="/section-10/chevron-down.svg"
                  alt="Expand"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
