import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  progress: number;
  difficulty: "Easy" | "Intermediate" | "Hard";
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Jr Penetration Tester",
    description: "Latest enrolled path for penetration testing skills, currently at 33% completion.",
    icon: "/cards/card-1.png",
    progress: 33,
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Cyber Security 101",
    description: "Core cybersecurity fundamentals path, currently at 41% completion.",
    icon: "/cards/card-2.png",
    progress: 41,
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "SOC Level 1",
    description: "Security operations center essentials, currently at 41% completion.",
    icon: "/cards/card-3.png",
    progress: 41,
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "SOC Level 2",
    description: "Advanced SOC analyst training, currently at 8% completion.",
    icon: "/cards/card-4.png",
    progress: 8,
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Security Engineer",
    description: "Security engineering path with infrastructure focus, currently at 14% completion.",
    icon: "/cards/card-1.png",
    progress: 14,
    difficulty: "Easy",
  },
  {
    id: 6,
    title: "DevSecOps",
    description: "DevSecOps pipeline security path, currently at 9% completion.",
    icon: "/cards/card-2.png",
    progress: 9,
    difficulty: "Intermediate",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
          Projects & Hands-on Labs
        </h2>
        <p className="text-center text-white/70 mb-10">
          I&apos;m focused on practical cybersecurity learning through projects, CTFs, and lab exercises.
          No formal work experience yet, so I highlight strong project achievements, security tooling, and technical certifications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 transform hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm">{card.description}</p>
                </div>
                <span className="text-xs font-semibold text-white/80 px-3 py-1 rounded-full bg-white/10">
                  {card.difficulty}
                </span>
              </div>

              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: `${card.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-white/70 mb-3">{card.progress}% completed</p>

              <div className="flex justify-between items-center">
                <Link
                  href="#"
                  className="text-purple-300 hover:text-purple-100 text-sm font-medium"
                >
                  View Path
                </Link>
                <span className="text-xs text-white/60">Click to explore</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
