"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, FolderKanban, MessageSquareText, ShieldCheck } from "lucide-react";

export default function MobileEnhancements(): React.JSX.Element {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 380);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="mobile-enhancements lg:hidden">
        <div className="mobile-status-strip">
          <span className="mobile-status-dot" />
          <span>Open To Internships</span>
          <span className="mobile-status-divider" />
          <ShieldCheck className="h-4 w-4" />
          <span>Security Focused</span>
        </div>

        <div className="mobile-action-grid">
          <Link href="#projects" className="mobile-action-card">
            <FolderKanban className="h-4 w-4" />
            <span>View Projects</span>
          </Link>

          <a href="#contact" className="mobile-action-card">
            <MessageSquareText className="h-4 w-4" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {showTopButton && (
        <button
          type="button"
          onClick={scrollTop}
          className="mobile-top-fab lg:hidden"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </>
  );
}
