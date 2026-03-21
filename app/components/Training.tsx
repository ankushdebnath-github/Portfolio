interface Training {
  id: number;
  title: string;
  organization: string;
  duration: string;
  description: string;
  certificate?: string;
}

const trainings: Training[] = [
  {
    id: 1,
    title: "SIEM in Cybersecurity",
    organization: "InternPro (A.I.C.T.E)",
    duration: "June 2025 - September 2025",
    description: "Comprehensive training in Security Information and Event Management (SIEM) covering security monitoring, incident analysis, threat classification, SIEM tools, log analysis, network packet inspection, phishing detection models, password security systems, and feature engineering. Gained hands-on experience in monitoring security events, detecting phishing threats, and building practical password breach alert mechanisms for risk identification.",
  },
  {
    id: 2,
    title: "Cybersecurity Fundamentals",
    organization: "Cipher Schools",
    duration: "June 2025 - July 2025",
    description: "Intensive cybersecurity training covering network security analysis, threat detection, and cybersecurity fundamentals. Developed and trained systems to recognize and classify phishing links, demonstrating understanding of common social engineering threat vectors. Focused on improving information security and analyzing signs to predict and prevent potential attacks early.",
  },
];

export default function Training(): React.JSX.Element {
  return (
    <section id="training" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Training & Courses
        </h2>
        <div className="space-y-8">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-2xl hover:shadow-purple-900 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{training.title}</h3>
                  <p className="text-purple-400 font-medium">{training.organization}</p>
                </div>
                <div className="text-white/70 font-medium mt-2 md:mt-0">
                  {training.duration}
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{training.description}</p>
              {training.certificate && (
                <div className="mt-4">
                  <a
                    href={training.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Certificate →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
