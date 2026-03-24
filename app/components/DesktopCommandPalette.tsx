"use client";

import { FormEvent, KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from "react";
import { Command, TerminalSquare, X } from "lucide-react";

type ShellEntry = {
  id: number;
  kind: "command" | "output" | "error";
  text: string;
};

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "cv",
  "training",
  "certificates",
  "achievements",
  "education",
  "contact",
] as const;

const initialEntries: ShellEntry[] = [
  { id: 1, kind: "output", text: "Linux shell initialized. Type 'help' to list commands." },
  { id: 2, kind: "output", text: "Hint: try whoami, ls, pwd, cd projects, open cv" },
];

export default function DesktopCommandPalette(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<ShellEntry[]>(initialEntries);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!isDesktop) {
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusId = window.setTimeout(() => inputRef.current?.focus(), 60);

    return () => {
      window.clearTimeout(focusId);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !outputRef.current) {
      return;
    }

    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [entries, open]);

  const appendEntry = (kind: ShellEntry["kind"], text: string) => {
    setEntries((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        kind,
        text,
      },
    ]);
  };

  const goToSection = (section: string) => {
    window.location.hash = `#${section}`;
    appendEntry("output", `navigated to #${section}`);
  };

  const runCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) {
      return;
    }

    appendEntry("command", `ankush@portfolio:~$ ${trimmed}`);
    setHistory((prev) => [...prev, trimmed]);

    const [baseCommand, ...args] = trimmed.toLowerCase().split(/\s+/);

    if (baseCommand === "clear") {
      setEntries([]);
      return;
    }

    if (baseCommand === "help") {
      appendEntry(
        "output",
        "commands: help, whoami, pwd, ls, date, echo <text>, cd <section>, open cv, clear",
      );
      return;
    }

    if (baseCommand === "whoami") {
      appendEntry("output", "ankush-debnath (cybersecurity-enthusiast)");
      return;
    }

    if (baseCommand === "pwd") {
      appendEntry("output", "/home/ankush/portfolio");
      return;
    }

    if (baseCommand === "ls") {
      appendEntry("output", sectionIds.join("  "));
      return;
    }

    if (baseCommand === "date") {
      appendEntry("output", new Date().toString());
      return;
    }

    if (baseCommand === "echo") {
      appendEntry("output", args.join(" "));
      return;
    }

    if (baseCommand === "cd") {
      const target = args[0];

      if (!target) {
        appendEntry("error", "cd: missing operand. example: cd projects");
        return;
      }

      if (sectionIds.includes(target as (typeof sectionIds)[number])) {
        goToSection(target);
      } else {
        appendEntry("error", `cd: no such section: ${target}`);
      }

      return;
    }

    if (baseCommand === "open" && args[0] === "cv") {
      window.open("/firecompass.pdf", "_blank", "noopener,noreferrer");
      appendEntry("output", "opened /firecompass.pdf");
      return;
    }

    appendEntry("error", `${baseCommand}: command not found. type 'help'.`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
    setHistoryIndex(-1);
  };

  const handleInputHistory = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (!history.length) {
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex < 0) {
        return;
      }

      const nextIndex = historyIndex + 1;

      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="desktop-command-trigger hidden lg:inline-flex"
        aria-label="Open command palette"
      >
        <Command className="h-4 w-4" />
        <span>Shell</span>
        <kbd>Ctrl K</kbd>
      </button>

      {open && (
        <div className="desktop-command-backdrop hidden lg:flex">
          <div className="desktop-command-panel" role="dialog" aria-modal="true" aria-label="Linux shell terminal">
            <div className="desktop-shell-header">
              <div className="desktop-shell-dots">
                <span className="desktop-shell-dot desktop-shell-dot-red" />
                <span className="desktop-shell-dot desktop-shell-dot-yellow" />
                <span className="desktop-shell-dot desktop-shell-dot-green" />
              </div>
              <div className="desktop-shell-title-wrap">
                <TerminalSquare className="h-4 w-4 text-cyan-300/80" />
                <p className="desktop-shell-title">ankush@portfolio:~</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="desktop-shell-close"
                aria-label="Close shell"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={outputRef} className="desktop-shell-output">
              {entries.map((entry) => (
                <p
                  key={entry.id}
                  className={`desktop-shell-line ${
                    entry.kind === "command"
                      ? "desktop-shell-line-command"
                      : entry.kind === "error"
                        ? "desktop-shell-line-error"
                        : "desktop-shell-line-output"
                  }`}
                >
                  {entry.text}
                </p>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="desktop-shell-input-row">
              <span className="desktop-shell-prompt">ankush@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleInputHistory}
                placeholder="type a command..."
                className="desktop-shell-input"
              />
            </form>

            <p className="desktop-shell-footnote">tip: use arrow up/down for history, esc to close</p>
          </div>
        </div>
      )}
    </>
  );
}
