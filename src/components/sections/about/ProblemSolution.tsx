import Image from "next/image";
import { typography, radiuses } from "@/tokens/design-tokens";

export default function ProblemSolution() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-[1216px] gap-10 md:grid-cols-2 md:gap-32">
        <Panel
          title="AI tools are disconnected"
          body="Most AI tools operate independently, creating silos of manual work between every step. Your team becomes the glue, losing time in the gaps between disconnected intelligence."
          muted
          icons={["/section-3-about/problem-icon-1.svg", "/section-3-about/problem-icon-2.svg", "/section-3-about/problem-icon-3.svg"]}
        />
        <Panel
          title="A workflow-driven system"
          body="Shekel connects AI agents into structured workflows. Data flows seamlessly from one expert agent to the next, maintaining context and precision through the entire lifecycle."
          muted={false}
          icons={["/section-3-about/solution-icon-1.svg", "/section-3-about/solution-icon-2.svg", "/section-3-about/solution-icon-3.svg"]}
        />
      </div>
    </section>
  );
}

function Panel({ title, body, muted, icons }: { title: string; body: string; muted: boolean; icons: string[] }) {
  return (
    <div>
      <h2 style={{ margin: 0, fontFamily: typography.fonts.poppins, fontWeight: 500, fontSize: 36, lineHeight: "40px", color: "#0B0B0B" }}>{title}</h2>
      <p className="mt-6" style={{ marginBottom: 0, fontFamily: typography.fonts.inter, fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "rgba(25,28,30,0.6)" }}>{body}</p>
      <div className="mt-8 flex items-center gap-6 border p-6" style={{ borderRadius: radiuses.pill, borderColor: muted ? "rgba(193,198,213,0.4)" : "rgba(0,90,182,0.2)", background: muted ? "#F2F4F7" : "rgba(0,90,182,0.05)" }}>
        {icons.map((icon, idx) => (
          <div key={icon} className="flex items-center gap-6">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <Image src={icon} alt="" width={20} height={20} />
            </div>
            {idx < icons.length - 1 && <div className="hidden h-[2px] w-16 border-t border-dashed border-slate-300 md:block" />}
          </div>
        ))}
      </div>
    </div>
  );
}
