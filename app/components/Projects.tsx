import {
  Activity,
  FileSearch,
  Globe,
  Radar,
  ShieldAlert,
  TerminalSquare,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  gradient: string;
  icon: React.ReactNode;
  badge: string;
  metrics: string[];
  tags: string[];
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "VirusTotal Malware Intelligence Desktop",
    description:
      "Developed a professional desktop intelligence client to automate advanced malware analysis for files, URLs, IPs, and domains by leveraging VirusTotal REST APIs. Engineered a custom interactive dashboard to visualize real-time threat detection scores, providing detailed engine-wise security reporting for rapid analysis. Integrated an automated PDF reporting module using ReportLab to generate professional SOC-level forensic summaries for incident documentation and auditing.",
    link: "https://github.com/ankushdebnath-github",
    gradient:
      "from-cyan-500/25 via-blue-500/15 to-violet-500/20",
    icon: <Radar className="h-7 w-7" />,
    badge: "Threat Intel Dashboard",
    metrics: ["Files", "URLs", "IPs", "Domains"],
    tags: ["VirusTotal API", "ReportLab", "Detection Score", "PDF Reports"],
  },
  {
    id: 2,
    title: "Endpoint Forensics & Monitoring Tool",
    description:
      "Architected and developed a robust Windows-based endpoint monitoring and forensic analysis tool designed to detect suspicious system activities and potential security breaches in real-time. Implemented comprehensive tracking of active system processes, user login events, and live network connections to identify anomalies, brute-force attempts, and unauthorized access. Engineered an automated logging system utilizing JSON and CSV formats to store critical forensic data, enabling efficient post-incident investigation and system auditing for SOC-level analysis.",
    link: "https://github.com/ankushdebnath-github",
    gradient:
      "from-emerald-500/20 via-cyan-500/15 to-blue-500/20",
    icon: <ShieldAlert className="h-7 w-7" />,
    badge: "Endpoint Monitoring Console",
    metrics: ["Processes", "Logins", "Connections", "Logs"],
    tags: ["Windows", "JSON", "CSV", "Realtime Alerts"],
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Projects that turn curiosity into practical security tools.
          </h2>
        </div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="mb-2 text-lg font-medium text-cyan-300 lg:text-xl">
                    Featured Project
                  </p>
                  <h3 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                    {project.title}
                  </h3>

                  <div className="relative z-10 mb-6">
                    <div
                      className={`interactive-card rounded-3xl p-6 shadow-lg lg:p-8 ${
                        isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-base leading-relaxed text-white/90 lg:text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-white transition-colors duration-200 hover:border-cyan-300/40 hover:text-cyan-200"
                        aria-label="Visit project website"
                      >
                        View Source
                        <Globe className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                </div>

                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div
                      className={`desktop-project-shell relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220] p-4 shadow-2xl ${
                        isEven ? "desktop-project-shell-even" : ""
                      }`}
                    >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                    />

                    <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.95),rgba(17,10,34,0.92))] p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200">
                            {project.icon}
                            {project.badge}
                          </span>
                          <h4 className="mt-4 max-w-sm text-2xl font-semibold text-white">
                            {project.title}
                          </h4>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                          <TerminalSquare className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((metric, metricIndex) => (
                          <div
                            key={metric}
                            className="desktop-metric-chip rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                          >
                            <div className="mb-2 flex items-center gap-2 text-cyan-200">
                              {metricIndex % 2 === 0 ? (
                                <FileSearch className="h-4 w-4" />
                              ) : (
                                <Activity className="h-4 w-4" />
                              )}
                              <span className="text-xs uppercase tracking-[0.22em] text-white/45">
                                Module
                              </span>
                            </div>
                            <p className="text-lg font-semibold text-white">
                              {metric}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="desktop-project-tag rounded-full border border-white/12 bg-white/5 px-3 py-2 text-xs font-medium text-white/75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="desktop-project-overlay pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between gap-3 rounded-2xl border border-cyan-300/30 bg-[linear-gradient(180deg,rgba(8,15,28,0.96),rgba(17,10,34,0.94))] px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/85">
                        Hover Intel Enabled
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs text-white/80">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                        Live Analysis View
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
