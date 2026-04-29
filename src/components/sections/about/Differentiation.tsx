import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

const LEFT = [
  "Siloed data that doesn't talk to other apps.",
  "Manual intervention required between every step.",
  "Generic models without business-specific logic.",
];
const RIGHT = [
  "Integrated intelligence layers across all nodes.",
  "Autonomous hand-offs with smart error recovery.",
  "Fine-tuned agents tailored to your specific system.",
];

export default function Differentiation() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 md:px-16">
      <Image src="/section-4-about/diff-bg.png" alt="" fill className="object-cover opacity-90" />
      <Image src="/section-4-about/diff-ellipse.svg" alt="" width={696} height={696} className="pointer-events-none absolute -right-40 top-0 opacity-70" />
      <div className="relative mx-auto max-w-[1024px]">
        <h2 className="text-center" style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: "clamp(34px,5vw,48px)", lineHeight: "40px", color: "#000" }}>
          Built as a system, not a tool.
        </h2>
        <div className="mt-16 grid overflow-hidden border bg-white/90 md:grid-cols-2" style={{ borderRadius: radiuses.pill, borderColor: "rgba(65,71,83,0.1)" }}>
          <ListBlock title="Standard AI Tools" icon="/section-4-about/diff-cross.svg" items={LEFT} accent="#000" />
          <ListBlock title="Shekel Ecosystem" icon="/section-4-about/diff-check.svg" items={RIGHT} accent="#ABC7FF" />
        </div>
      </div>
    </section>
  );
}

function ListBlock({ title, icon, items, accent }: { title: string; icon: string; items: string[]; accent: string }) {
  return (
    <div className="p-10">
      <div className="mb-8 flex items-center gap-2">
        <Image src={icon} alt="" width={20} height={20} />
        <h3 style={{ margin: 0, fontFamily: typography.fonts.inter, fontWeight: 600, fontSize: 28, lineHeight: "28px", color: accent }}>{title}</h3>
      </div>
      <ul className="space-y-6">
        {items.map((item, idx) => (
          <li key={item} className="flex gap-4">
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: accent }}>{`0${idx + 1}`}</span>
            <span style={{ fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "#000" }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
