"use client";

import Link from "next/link";
// use native img for the signature so it's simpler to control sizing
import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#cv", label: "CV" },
  { href: "#training", label: "Training" },
  { href: "#certificates", label: "Certificates" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScrollProgress(total > 0 ? (current / total) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#11071f]/92 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-400 transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="shrink-0 flex items-center self-center lg:mr-8">
            <img
              src="/logo/signature.svg"
              alt="Ankush Debnath signature"
              className="h-8 sm:h-10 lg:h-12 w-auto align-middle"
              style={{ display: "block" }}
            />
          </Link>

          {/* Desktop nav - visible on large screens */}
          <div className="hidden lg:flex lg:flex-1 lg:flex-nowrap lg:items-center lg:justify-center lg:gap-1 lg:whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 lg:px-2.5 lg:py-1.5 lg:text-[0.92rem] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/8 text-cyan-200 shadow-[0_0_0_1px_rgba(103,232,249,0.18)]"
                      : "nav-glitch text-white hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
                  )}
                </Link>
              );
            })}
          </div>

          <a
            href="/firecompass.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
          >
            <FileText className="h-4 w-4" />
            Preview CV
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((s) => !s)}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-transparent p-2 text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-[#06030f]/75 backdrop-blur-sm lg:hidden"
          />

          <div className="fixed inset-x-3 top-[74px] z-50 rounded-2xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(7,12,26,0.96),rgba(14,10,33,0.94))] p-4 shadow-[0_20px_48px_rgba(2,6,23,0.48)] lg:hidden">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
                Quick Navigation
              </p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-white/80"
                aria-label="Close quick navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl border px-3 py-3 text-center text-sm font-medium transition-colors ${
                      isActive
                        ? "border-cyan-300/35 bg-cyan-300/12 text-cyan-100"
                        : "border-white/10 bg-white/[0.03] text-white/90 hover:border-cyan-300/25 hover:bg-cyan-300/8"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <a
              href="/firecompass.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
            >
              <FileText className="h-4 w-4" />
              Preview CV
            </a>
          </div>
        </>
      )}
    </header>
  );
}
