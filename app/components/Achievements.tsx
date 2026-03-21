import { Award, Star, Target, Trophy } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  accent: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "TryHackMe Top 1% Globally",
    description:
      "Achieved top 1% global ranking on TryHackMe with 250+ completed labs and a 250+ day learning streak, demonstrating strong hands-on cybersecurity and threat analysis skills.",
    icon: <Trophy className="h-7 w-7" />,
    date: "January 2026",
    accent: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    title: "Advent of Cyber Challenges Completed",
    description:
      "Completed all Advent of Cyber editions to date, building practical experience across penetration testing, forensics, and real-world cyber labs.",
    icon: <Award className="h-7 w-7" />,
    date: "May 2025",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: 3,
    title: "Advanced Malware Analysis Tools",
    description:
      "Developed professional-grade malware intelligence and endpoint forensics tools, showcasing strong cybersecurity development and investigative skills.",
    icon: <Target className="h-7 w-7" />,
    date: "2025",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    id: 4,
    title: "Comprehensive Cybersecurity Training",
    description:
      "Completed multiple specialized cybersecurity programs covering SIEM, ethical hacking, and network security analysis.",
    icon: <Star className="h-7 w-7" />,
    date: "2025",
    accent: "from-emerald-400 to-teal-500",
  },
];

export default function Achievements(): React.JSX.Element {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Milestones
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Achievements that show consistency, curiosity, and execution.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,12,39,0.96),rgba(10,16,32,0.92))] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/25"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement.accent} text-white shadow-lg`}
                >
                  {achievement.icon}
                </div>

                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">
                      {achievement.title}
                    </h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="leading-relaxed text-white/78">
                    {achievement.description}
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
