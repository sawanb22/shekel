"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/shared/Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[75px] bg-black/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ba9eff] to-[#699cff] flex items-center justify-center">
          <span className="text-white font-bold text-sm tracking-tighter">S</span>
        </div>
        <span className="text-white text-xl font-semibold tracking-tight font-heading">Shekel</span>
      </div>

      {/* Nav Links — centered (x=369, gap inferred from Figma layer spacing) */}
      <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-white/70">
        <Link href="#" className="hover:text-white transition-colors">Agents</Link>
        <Link href="#" className="hover:text-white transition-colors">Workflows</Link>
        <Link href="#" className="hover:text-white transition-colors">Docs</Link>
        <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
      </nav>

      {/* Right side: Search + CTA */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Search Input (x=802 in Figma, w=266, h=38)
            Padding: icon at x=13.75, text starts at x=41 → left padding ~41px
            Right padding: container w=266, text ends ~233 → right padding ~17px */}
        <div className="hidden lg:flex items-center gap-2 bg-black border border-white/10 rounded-[5px] px-[17px] py-[10px] w-[266px] h-[38px] focus-within:border-white/30 transition-colors">
          <Search className="w-[10.5px] h-[10.5px] text-[#6b7280] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search agents..."
            className="bg-transparent border-none outline-none text-[14px] text-white placeholder:text-[#6b7280] font-sans w-full leading-normal"
          />
        </div>

        {/* Get Started Button (x=1092, w=132, h=36)
            px inferred: (132 - text_width~84)/2 = ~24px, py: (36-20)/2 = 8px */}
        <Button variant="nav">Get Started</Button>
      </div>
    </header>
  );
}
