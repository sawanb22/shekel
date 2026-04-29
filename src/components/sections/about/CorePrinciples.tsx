import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const ITEMS = [
  { icon: "/section-7-about/principle-icon-1.svg", title: "Simplicity", body: "Eliminating complexity at every layer to ensure the path from idea to agent is frictionless." },
  { icon: "/section-7-about/principle-icon-2.svg", title: "Structure", body: "Providing rigid frameworks for reliable AI output that enterprise systems can trust." },
  { icon: "/section-7-about/principle-icon-3.svg", title: "Flexibility", body: "Modular components that can be rearranged and customized for any specialized task." },
  { icon: "/section-7-about/principle-icon-4.svg", title: "Clarity", body: "Complete visibility into how AI makes decisions, removing the black-box mystery." },
];

export default function CorePrinciples() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-[1216px]">
        <h2 style={{ margin: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 36, lineHeight: "40px", color: "#0B0B0B" }}>
          Our approach
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article key={item.title}>
              <Image src={item.icon} alt="" width={22} height={20} />
              <h3 className="mt-4" style={{ marginBottom: 0, fontFamily: typography.fonts.jakarta, fontWeight: 700, fontSize: 20, lineHeight: "28px", color: "#191C1E" }}>
                {item.title}
              </h3>
              <p className="mt-4" style={{ marginBottom: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "rgba(25,28,30,0.6)" }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
