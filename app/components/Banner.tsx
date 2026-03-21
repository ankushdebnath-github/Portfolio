"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, FileText, Github, Linkedin, Shield } from "lucide-react";
import LiveAlertTicker from "./LiveAlertTicker";
import LiveLogStream from "./LiveLogStream";

const tools = [
  { name: "Nmap", color: "from-emerald-400 to-green-600" },
  { name: "Wireshark", color: "from-sky-400 to-blue-600" },
  { name: "Metasploit", color: "from-violet-400 to-purple-600" },
  { name: "Burp Suite", color: "from-orange-400 to-amber-500" },
  { name: "TryHackMe", color: "from-pink-400 to-rose-500" },
  { name: "HackTheBox", color: "from-lime-400 to-green-500" },
  { name: "John the Ripper", color: "from-red-400 to-rose-600" },
  { name: "Kali Linux", color: "from-cyan-400 to-sky-600" },
  { name: "OWASP ZAP", color: "from-yellow-400 to-orange-500" },
  { name: "Python", color: "from-indigo-400 to-blue-500" },
];

const rotatingRoles = [
  "Cybersecurity Enthusiast",
  "B.Tech Student",
  "Python Developer",
  "Ethical Hacker",
];

const terminalLines = [
  "> whoami",
  "ankush-debnath",
  "> sudo scan --mode threat-intel",
  "status: active monitoring",
  "> tools --load recon exploit forensics",
  "modules: nmap | burp | metasploit | wireshark",
];

export default function Banner(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const fullTerminalText = terminalLines.join("\n");

  useEffect(() => {
    const currentText = rotatingRoles[currentIndex];
    const speed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else if (displayedText.length > 0) {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % rotatingRoles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedText, isDeleting]);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setTerminalText(fullTerminalText.slice(0, current));

      if (current >= fullTerminalText.length) {
        clearInterval(interval);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [fullTerminalText]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-16 pt-56 lg:pt-44"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="container relative mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <Shield className="h-4 w-4" />
              Security-first portfolio
            </div>

            <div className="space-y-4">
              <p className="text-lg text-white">
                Hello! I Am{" "}
                <span className="relative ml-2 inline-flex">
                  <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
                  <span className="relative inline-flex -rotate-2 items-center rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.16))] px-6 py-3 text-cyan-200 shadow-[0_14px_30px_rgba(34,211,238,0.14)]">
                    <span className="absolute -top-2 -right-2 h-3.5 w-3.5 rounded-full bg-cyan-300" />
                    <span className="absolute -bottom-2 -left-1 h-3 w-3 rounded-full bg-violet-300" />
                    <span className="text-lg font-semibold tracking-[0.1em] lg:text-xl">
                      Ankush Debnath
                    </span>
                  </span>
                </span>
              </p>
              <p className="text-2xl text-white/80">
                A Cybersecurity Enthusiast who
              </p>
              <h1 className="cyber-glitch text-5xl font-semibold leading-tight tracking-tight text-white lg:text-7xl">
                Secures systems
                <br />
                before they{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle"
                    width={210}
                    height={210}
                    className="absolute -top-1 left-0"
                  />
                  <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-blue-400 bg-clip-text text-transparent">
                    break
                  </span>
                </span>
                .
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/75 lg:mx-0">
                Because prevention is better than cure in the digital world.
              </p>
            </div>

            <div className="space-y-4">
              <p className="min-h-[96px] text-3xl font-bold text-white lg:min-h-[120px] lg:text-5xl">
                I&apos;m a {displayedText}
                <span className="ml-1 text-cyan-300">|</span>
              </p>
              <p className="text-lg text-white/90 lg:text-xl">
                Currently pursuing B.Tech in Computer Science at{" "}
                <span className="font-semibold text-cyan-300">
                  Lovely Professional University
                </span>
              </p>
              <p className="mx-auto max-w-2xl text-lg text-white/70 lg:mx-0">
                Passionate about ethical hacking, malware analysis, endpoint
                monitoring, and secure system development with a hands-on
                approach to solving real security problems.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(34,211,238,0.25)] transition-transform duration-300 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/firecompass.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
              >
                <FileText className="h-4 w-4" />
                Preview CV
              </a>
              <Link
                href="https://github.com/ankushdebnath-github"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/ankushdebnath/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex w-full max-w-[560px] flex-col gap-5 lg:items-end">
              <div className="relative mx-auto mt-2 w-fit lg:mx-0 lg:mt-0">
                <div className="matrix-rain absolute inset-[-10%] rounded-full opacity-55" />
                <div className="radar-sweep absolute inset-x-10 inset-y-18 rounded-full" />
                <div className="orbital-ring absolute inset-x-6 inset-y-14 rounded-full border border-cyan-300/15" />
                <div className="orbital-ring orbital-ring-delayed absolute inset-x-0 inset-y-8 rounded-full border border-violet-300/10" />
                <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute -top-8 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/70 to-cyan-300/0" />
                <div className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                <Image
                  src="/profile.png"
                  alt="Ankush Debnath - Cybersecurity Enthusiast and Developer"
                  width={330}
                  height={330}
                  className="profile-float hologram-flicker absolute max-w-md"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />
                <Image
                  src="/assets/me-glow.png"
                  alt="Ankush Debnath - Cybersecurity Enthusiast and Developer"
                  width={330}
                  height={330}
                  className="max-w-md"
                  style={{ width: "auto", height: "auto" }}
                  priority
                />

                <div className="hud-card absolute -left-10 top-6 rounded-2xl px-4 py-3 text-left shadow-lg">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
                    Focus
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Detection and Analysis
                  </p>
                </div>
                <div className="hud-card absolute -bottom-2 right-4 rounded-2xl px-4 py-3 text-left shadow-lg">
                  <p className="text-xs uppercase tracking-[0.25em] text-violet-200/70">
                    Strength
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Hands-on security projects
                  </p>
                </div>
                <div className="hud-chip absolute -right-6 top-[40%] rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200 shadow-lg">
                  System Online
                </div>
                <div className="hud-chip absolute left-1/2 top-[78%] -translate-x-1/2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200 shadow-lg">
                  Threat Monitor Active
                </div>
                <div className="absolute left-2 bottom-20 text-[10px] uppercase tracking-[0.35em] text-cyan-200/50">
                  X: 07.42 | Y: 19.84
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 lg:min-h-[204px]">
            <p className="mb-4 text-sm uppercase tracking-widest text-cyan-200/70">
              Tools &amp; Platforms
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {tools.map((tool) => (
                <span
                  key={tool.name}
                  className={`rounded-full border border-white/10 bg-gradient-to-r ${tool.color} px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-slate-950/25 transition-transform duration-300 hover:-translate-y-1`}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-side-panel w-full space-y-4 self-start">
            <div className="terminal-panel text-left">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-400" />
                <span className="terminal-dot bg-amber-400" />
                <span className="terminal-dot bg-emerald-400" />
                <span className="ml-3 text-[11px] uppercase tracking-[0.28em] text-cyan-200/65">
                  Secure Shell
                </span>
              </div>
              <pre className="terminal-body">
                {terminalText}
                <span className="terminal-caret">_</span>
              </pre>
            </div>

            <LiveAlertTicker />
            <LiveLogStream />
          </div>
        </div>
      </div>
    </section>
  );
}
