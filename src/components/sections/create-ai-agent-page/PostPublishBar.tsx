"use client";

import Image from "next/image";
import { typography } from "@/tokens/design-tokens";

const CANVAS_W = 1280;
const CANVAS_H = 337;
const SCALE = `calc(100cqw / ${CANVAS_W}px)`;

export default function PostPublishBar() {
  return (
    <section className="relative hidden w-full overflow-hidden md:block" style={{ aspectRatio: `${CANVAS_W}/${CANVAS_H}`, containerType: "inline-size" }}>
      <div className="absolute left-0 top-0 overflow-hidden rounded-[20px]" style={{ width: CANVAS_W, height: CANVAS_H, transform: `scale(${SCALE})`, transformOrigin: "top left" }}>
        <Image src="/section-3-create-ai-agent-page/bar-bg.png" alt="" fill className="object-cover" />
        <h3 style={{ margin: 0, position: "absolute", left: 32, top: 96, color: "#000", fontSize: 56, fontFamily: typography.fonts.poppins, fontWeight: 500 }}>Ready to launch your agent?</h3>
        <div className="absolute left-8 top-[202px] flex gap-5">
          <button className="h-[56px] w-[163px] rounded-[10px] border border-[#2864e4] bg-white text-black">Save Draft</button>
          <button className="h-[56px] w-[256px] rounded-xl bg-[#2864e4] text-[20px] font-semibold text-white">Publish Agent</button>
        </div>
        <p style={{ margin: 0, position: "absolute", right: 32, top: 161, color: "#000", fontSize: 12, fontFamily: typography.fonts.inter }}>Last autosaved at 12:45 PM</p>
      </div>
    </section>
  );
}
