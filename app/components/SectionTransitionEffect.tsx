"use client";

import { useEffect, useState } from "react";

export default function SectionTransitionEffect(): React.JSX.Element {
  const [active, setActive] = useState(false);
  const [token, setToken] = useState("INIT::00");

  const nextToken = () => {
    const value = Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .toUpperCase()
      .padStart(6, "0");
    setToken(`SEC-${value}`);
  };

  useEffect(() => {
    let timer: number | undefined;

    const trigger = () => {
      nextToken();
      setActive(true);

      if (timer) {
        window.clearTimeout(timer);
      }

      timer = window.setTimeout(() => {
        setActive(false);
      }, 420);
    };

    const onHashChange = () => trigger();

    window.addEventListener("portfolio-section-transition", trigger as EventListener);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
      window.removeEventListener("portfolio-section-transition", trigger as EventListener);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`section-transition-overlay ${active ? "section-transition-overlay-active" : ""}`}
    >
      <div className="section-transition-hud">
        <p className="section-transition-label">ACCESSING SECTION</p>
        <p className="section-transition-token">{token}</p>
      </div>
    </div>
  );
}
