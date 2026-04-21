"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/shared/Button";

// Figma node 500:21978 — Frame 2147225667 (1280 × 75)
// fill: #000000, logo at x=47 y=21, nav at x=369 gap=32, search at x=802, button at x=1092

const NAV_LINKS = ["Browse", "Solutions", "Pricing", "Developers"] as const;

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[75px] bg-black/90 backdrop-blur-md border-b border-white/10 flex items-center px-12">
      {/* Logo — Figma x=47, y=21, w=127, h=33.61 */}
      <div className="flex-shrink-0">
        <Link href="/" aria-label="Shekel home">
          <Image
            src="/shared/header-logo.svg"
            alt="Shekel"
            width={127}
            height={34}
            priority
          />
        </Link>
      </div>

      {/* Nav links — Figma x=369, gap=32px, Nimbus Sans Regular 14px #737373 */}
      <nav className="hidden md:flex items-center gap-8 ml-auto mr-auto" style={{ marginLeft: "calc(369px - 47px - 127px - 48px)" }}>
        {NAV_LINKS.map((label) => (
          <Link
            key={label}
            href="#"
            className="text-[#737373] hover:text-white transition-colors"
            style={{
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.025em",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right side — Search + CTA — Figma search at x=802, button at x=1092 */}
      <div className="flex items-center gap-6 flex-shrink-0 ml-auto">
        {/* Search — Figma x=802, w=266, h=38, border rgba(255,255,255,0.1) */}
        <div
          className="hidden lg:flex items-center gap-2 border rounded-[5px] focus-within:border-white/30 transition-colors"
          style={{
            width: 266,
            height: 38,
            backgroundColor: "#000000",
            borderColor: "rgba(255, 255, 255, 0.1)",
            padding: "9px 16px 10px 14px",
          }}
        >
          <Search
            aria-hidden
            style={{ width: 10.5, height: 10.5, color: "#777777", flexShrink: 0 }}
          />
          <input
            type="text"
            placeholder="Search agents..."
            className="bg-transparent border-none outline-none w-full"
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontWeight: 400,
              fontSize: 14,
              color: "#fff",
              lineHeight: "20px",
            }}
          />
        </div>

        {/* Get Started — Figma x=1092, gradient 155deg, Poppins Medium 14px uppercase */}
        <Button variant="nav">Get Started</Button>
      </div>
    </header>
  );
}
