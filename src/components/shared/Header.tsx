"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/shared/Button";

// Figma node 500:21978 — Frame 2147225667 (1280 × 75)
// fill: #000000, logo at x=47 y=21, nav at x=369 gap=32, search at x=802, button at x=1092

const NAV_LINKS = ["Browse", "Solutions", "Pricing", "Developers"] as const;

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSearchOpen) mobileSearchRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen && !isSearchOpen) return;
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const inHeader = headerRef.current?.contains(target);
      const inDrawer = drawerRef.current?.contains(target);
      if (!inHeader && !inDrawer) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isMenuOpen, isSearchOpen]);

  const toggleMenu = () => {
    setIsSearchOpen(false);
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen((prev) => !prev);
  };

  const closeOverlays = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 h-[75px] border-b border-white/10 bg-black backdrop-blur-md"
      >
        <div className="flex h-full w-full items-center px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center">
            <Link href="/" aria-label="Shekel home" className="shrink-0">
              <Image
                src="/shared/header-logo.svg"
                alt="Shekel"
                width={127}
                height={34}
                priority
              />
            </Link>
          </div>

          <nav className="ml-6 hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:ml-[195px] xl:gap-8">
            {NAV_LINKS.map((label) => (
              <Link
                key={label}
                href="#"
                className="whitespace-nowrap text-[#737373] transition-[color,opacity] duration-200 ease-out hover:text-white hover:opacity-95"
                style={{
                  fontFamily: "var(--font-inter, 'Inter', sans-serif)",
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

          <div className="flex-1 lg:hidden" />

          <div className="hidden shrink-0 items-center gap-3 sm:gap-4 lg:flex lg:gap-5">
            <div
              className="flex h-[38px] w-[220px] items-center gap-2 rounded-[5px] border px-[14px] py-[9px] transition-colors focus-within:border-white/30 xl:w-[266px]"
              style={{
                backgroundColor: "#000000",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <Search
                aria-hidden
                style={{ width: 10.5, height: 10.5, color: "#777777", flexShrink: 0 }}
              />
              <input
                type="text"
                placeholder="Search agents..."
                className="w-full border-none bg-transparent outline-none"
                style={{
                  fontFamily: "var(--font-inter, Inter, sans-serif)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#fff",
                  lineHeight: "20px",
                }}
              />
            </div>

            <Button variant="nav">Get Started</Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div
              id="mobile-header-search"
              className={`overflow-hidden transition-all duration-200 ease-out ${
                isSearchOpen ? "w-[160px] opacity-100" : "w-0 opacity-0"
              }`}
            >
              <div
                className="flex h-[36px] items-center gap-2 rounded-[5px] border px-3"
                style={{
                  backgroundColor: "#000000",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Search aria-hidden className="h-3 w-3 text-[#777777]" />
                <input
                  ref={mobileSearchRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full border-none bg-transparent text-[13px] text-white outline-none placeholder:text-[#777777]"
                  aria-label="Search agents"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={toggleSearch}
              aria-label={isSearchOpen ? "Close search" : "Open search"}
              aria-expanded={isSearchOpen}
              aria-controls="mobile-header-search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[5px] border border-white/10 text-[#c6c6c7] transition-colors hover:border-white/20 hover:text-white"
            >
              {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[5px] border border-white/10 text-[#c6c6c7] transition-colors hover:border-white/20 hover:text-white"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <aside
        ref={drawerRef}
        id="mobile-nav-drawer"
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-[75px] z-50 h-[calc(100vh-75px)] w-[290px] max-w-[85vw] border-l border-white/10 bg-black px-6 py-6 shadow-2xl transition-transform duration-200 ease-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-5">
          {NAV_LINKS.map((label) => (
            <Link
              key={`mobile-${label}`}
              href="#"
              onClick={closeOverlays}
              className="text-[16px] leading-6 text-[#b7b7b8] transition-colors duration-200 ease-out hover:text-white"
              style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <Button variant="nav" className="w-full" onClick={closeOverlays}>
            Get Started
          </Button>
        </div>
      </aside>
    </>
  );
}
