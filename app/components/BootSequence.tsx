"use client";

import { useEffect, useState } from "react";

const bootLines = [
  "Initializing secure shell",
  "Loading reconnaissance modules",
  "Syncing endpoint telemetry",
  "Establishing threat monitor",
  "Portfolio interface online",
];

export default function BootSequence(): React.JSX.Element | null {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const lineTimer = window.setInterval(() => {
      setLineIndex((prev) => {
        if (prev >= bootLines.length - 1) {
          window.clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 380);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2600);

    return () => {
      window.clearInterval(lineTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="boot-overlay">
      <div className="boot-panel">
        <p className="boot-title">System Boot Sequence</p>
        <div className="boot-lines">
          {bootLines.slice(0, lineIndex + 1).map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
