import { Award, Flame, Shield, Wrench } from "lucide-react";

const stats = [
  {
    value: "250+",
    label: "Labs Completed",
    description: "Hands-on learning through security labs, practical paths, and challenge rooms.",
    icon: <Shield className="h-6 w-6" />,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    value: "Top 1%",
    label: "TryHackMe Rank",
    description: "Demonstrates consistency, competitive performance, and practical security skills.",
    icon: <Award className="h-6 w-6" />,
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    value: "250+",
    label: "Day Streak",
    description: "Built through sustained learning, discipline, and continuous cyber practice.",
    icon: <Flame className="h-6 w-6" />,
    accent: "from-orange-400 to-rose-500",
  },
  {
    value: "4+",
    label: "Security Projects",
    description: "From malware intelligence to endpoint monitoring and security-focused automation.",
    icon: <Wrench className="h-6 w-6" />,
    accent: "from-emerald-400 to-teal-500",
  },
];

export default function StatsSection(): React.JSX.Element {
  return (
    <section id="stats" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Numbers That Matter
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Quick stats that show consistency, effort, and practical skill.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="interactive-card rounded-[1.75rem] p-6"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent} text-white shadow-lg`}
              >
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <h3 className="mt-2 text-lg font-semibold text-cyan-200">
                {stat.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/72">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
