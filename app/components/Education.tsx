import { Calendar, GraduationCap, MapPin } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  gpa?: string;
}

const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University, Phagwara, Punjab",
    duration: "Since August 2023",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering with focus on software engineering, data structures, algorithms, and cybersecurity fundamentals.",
    gpa: "CGPA 7.79",
  },
  {
    id: 2,
    degree: "Intermediate (PCM)",
    institution: "Kendriya Vidyalaya, Chennai, Tamil Nadu",
    duration: "March 2022 - May 2023",
    description:
      "Completed intermediate education with Physics, Chemistry, and Mathematics as core subjects.",
    gpa: "73%",
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "Kendriya Vidyalaya, Pathankot, Punjab",
    duration: "March 2020 - May 2021",
    description:
      "Completed matriculation with strong foundation in science and mathematics.",
    gpa: "92.6%",
  },
];

export default function Education(): React.JSX.Element {
  return (
    <section id="education" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Academic Path
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Education that supports my technical growth and security journey.
          </h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-7 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/40 before:to-transparent">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative ml-0 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,11,37,0.96),rgba(10,16,32,0.92))] p-6 pl-20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
            >
              <div className="absolute left-0 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-lg">
                <GraduationCap className="h-7 w-7" />
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/65">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-300" />
                      {edu.institution}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-cyan-300" />
                      {edu.duration}
                    </span>
                  </div>
                  <p className="mt-4 leading-relaxed text-white/78">
                    {edu.description}
                  </p>
                </div>

                {edu.gpa && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center lg:min-w-[140px]">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                      Result
                    </p>
                    <p className="mt-2 text-lg font-semibold text-cyan-300">
                      {edu.gpa}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
