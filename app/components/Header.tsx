"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

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
        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={110}
              height={110}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
          >
            <FileText className="h-4 w-4" />
            Preview CV
          </a>
        </div>
      </nav>
    </header>
  );
}
