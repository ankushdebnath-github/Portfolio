"use client";

import { useEffect, useState } from "react";

const alerts = [
  "ALERT: Port scan simulation active",
  "STATUS: Threat monitor synchronized",
  "TRACE: Endpoint integrity verified",
  "LOG: Recon modules online",
  "PING: Secure shell channel stable",
];

export default function LiveAlertTicker(): React.JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % alerts.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alert-ticker">
      <span className="alert-indicator" />
      <span className="alert-label">Live Alert</span>
      <span key={alerts[index]} className="alert-text">
        {alerts[index]}
      </span>
    </div>
  );
}
