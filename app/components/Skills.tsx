interface Skill {
  id: number;
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { id: 1, name: "C/C++", level: 85, color: "from-blue-500 to-blue-700" },
  { id: 2, name: "Python", level: 90, color: "from-yellow-500 to-yellow-700" },
  { id: 3, name: "SQL", level: 80, color: "from-orange-500 to-red-500" },
  { id: 4, name: "Bash", level: 75, color: "from-gray-600 to-gray-800" },
  { id: 5, name: "John the Ripper", level: 85, color: "from-red-500 to-red-700" },
  { id: 6, name: "Wireshark", level: 80, color: "from-blue-600 to-blue-800" },
  { id: 7, name: "Metasploit", level: 85, color: "from-purple-500 to-purple-700" },
  { id: 8, name: "Nmap", level: 80, color: "from-green-500 to-green-700" },
];

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white lg:text-5xl">
          Skills & Technologies
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-white/65">
          A practical toolkit shaped by lab work, security projects, and
          automation-focused development.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="interactive-card rounded-3xl p-6 transition-all duration-300"
            >
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg shadow-slate-950/30`}
                >
                  <span className="text-lg font-bold text-white">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>

              <div className="mb-3 flex items-center justify-between text-sm text-white/60">
                <span>Confidence</span>
                <span>{skill.level}%</span>
              </div>

              <div className="h-2 w-full rounded-full bg-white/10">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="mt-4 text-sm text-white/70">
                Strong working proficiency in {skill.name} for hands-on security
                and development tasks.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
