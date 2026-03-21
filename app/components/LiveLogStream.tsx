"use client";

import { useEffect, useState } from "react";

const logEntries = [
  "[INFO] Recon initialized",
  "[TRACE] DNS probe completed",
  "[INFO] Packet capture attached",
  "[WARN] Suspicious port activity simulated",
  "[OK] Endpoint integrity verified",
  "[INFO] Threat feed synchronized",
];

export default function LiveLogStream(): React.JSX.Element {
  const [items, setItems] = useState(logEntries.slice(0, 4));

  useEffect(() => {
    let index = 4;

    const interval = window.setInterval(() => {
      setItems((prev) => {
        const nextEntry = logEntries[index % logEntries.length];
        index += 1;
        return [...prev.slice(-3), nextEntry];
      });
    }, 1600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="log-stream">
      <div className="log-stream-header">Live Log Stream</div>
      <div className="log-stream-body">
        {items.map((item, idx) => (
          <div key={`${item}-${idx}`} className="log-stream-line">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
