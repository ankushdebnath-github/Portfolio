import { BrainCircuit, Radar, ShieldCheck, Wrench } from "lucide-react";

const reasons = [
  {
    title: "Hands-on Security Mindset",
    description:
      "I learn by building, testing, and breaking things in realistic lab environments instead of only studying theory.",
    icon: <ShieldCheck className="h-6 w-6" />,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Tool Builder Mentality",
    description:
      "I enjoy creating practical security tools for threat analysis, monitoring, and automation that solve real problems.",
    icon: <Wrench className="h-6 w-6" />,
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Fast Technical Learner",
    description:
      "From SIEM to endpoint forensics to malware intelligence, I adapt quickly and keep improving through consistent practice.",
    icon: <BrainCircuit className="h-6 w-6" />,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Security-Focused Problem Solver",
    description:
      "I like thinking from both attacker and defender perspectives, then turning that understanding into stronger systems.",
    icon: <Radar className="h-6 w-6" />,
    accent: "from-amber-400 to-orange-500",
  },
];

export default function WhyHireMe(): React.JSX.Element {
  return (
    <section id="why-hire-me" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Recruiter Snapshot
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Why Hire Me
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/68">
            A quick summary of the qualities I bring to internships, security
            roles, and hands-on technical environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="interactive-card rounded-[1.75rem] p-6"
            >
              <div className="mb-5 flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${reason.accent} text-white shadow-lg`}
                >
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/76">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
