import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";

const cvHighlights = [
  "Focused on ethical hacking, malware analysis, and endpoint defense",
  "Hands-on experience with Python automation, Wireshark, Nmap, and Metasploit",
  "Built practical security tools and SOC-style reporting workflows",
];

const experienceHighlights = [
  "Malware intelligence desktop client",
  "Endpoint forensics and monitoring tool",
  "Security-first investigation workflows",
];

const focusBars = [
  { label: "Security Analysis", value: 92 },
  { label: "Python Automation", value: 88 },
  { label: "Threat Investigation", value: 84 },
];

export default function CVPreview(): React.JSX.Element {
  return (
    <section id="cv" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <FileText className="h-4 w-4" />
              CV Preview
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                A quick snapshot of my resume, strengths, and security mindset.
              </h2>
              <p className="max-w-xl text-base text-white/72 lg:text-lg">
                This section gives recruiters and collaborators a fast preview of
                my profile before they open the full CV.
              </p>
            </div>

            <div className="grid gap-3">
              {cvHighlights.map((item) => (
                <div
                  key={item}
                  className="interactive-card flex items-start gap-3 rounded-2xl p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm text-white/78">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/firecompass.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Open CV
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/firecompass.pdf"
                download="firecompass.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-cyan-300/40 hover:bg-white/10"
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-10 right-4 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(160deg,rgba(14,20,42,0.95),rgba(18,8,40,0.9))] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_35%)]" />

              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                      Resume Card
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Ankush Debnath
                    </h3>
                    <p className="text-sm text-white/65">
                      Cybersecurity Enthusiast | Python Developer | Ethical Hacker
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3">
                    <BadgeCheck className="h-7 w-7 text-cyan-200" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="interactive-card rounded-2xl p-5">
                    <div className="mb-3 flex items-center gap-2 text-cyan-100">
                      <BriefcaseBusiness className="h-4 w-4" />
                      <span className="text-sm font-medium">Featured Experience</span>
                    </div>
                    <div className="space-y-3">
                      {experienceHighlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-white/5 px-3 py-3 text-sm text-white/76"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="interactive-card rounded-2xl p-5">
                    <p className="text-sm font-medium text-violet-100">
                      Core Focus
                    </p>
                    <div className="mt-4 space-y-4">
                      {focusBars.map((item) => (
                        <div key={item.label}>
                          <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                            <span>{item.label}</span>
                            <span>{item.value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/8">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500"
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="interactive-card rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        CV connected
                      </p>
                      <p className="text-sm text-white/62">
                        Your real PDF is now linked from the hero, header, and this section.
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
                      Preview Mode
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
