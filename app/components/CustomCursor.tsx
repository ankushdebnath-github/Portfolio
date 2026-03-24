"use client";

import { useEffect, useState } from "react";

export default function CustomCursor(): React.JSX.Element | null {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    const handleMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          setPosition({ x, y });
          frame = 0;
        });
      }

      setActive(true);
    };

    const handleLeave = () => setActive(false);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  if (!active) {
    return null;
  }

  return (
    <>
      <div
        aria-hidden="true"
        className={`custom-cursor-glow ${pressed ? "custom-cursor-glow-pressed" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        aria-hidden="true"
        className={`custom-cursor-ring ${pressed ? "custom-cursor-ring-pressed" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        aria-hidden="true"
        className={`custom-cursor-crosshair ${pressed ? "custom-cursor-crosshair-pressed" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        aria-hidden="true"
        className={`custom-cursor-dot ${pressed ? "custom-cursor-dot-pressed" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
