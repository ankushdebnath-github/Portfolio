import Image from "next/image";

const focusAreas = [
  "Threat Analysis",
  "Secure Development",
  "Forensics",
  "Continuous Learning",
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mx-auto max-w-4xl text-2xl leading-relaxed lg:text-3xl">
            I&apos;m a passionate{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              cybersecurity enthusiast
            </span>
            <br />
            <span className="text-base text-white/68 lg:text-lg">
              dedicated to protecting digital assets through innovative security
              solutions, curiosity-led research, and continuous hands-on learning.
            </span>
          </p>
        </div>

        <div className="interactive-card overflow-hidden rounded-[2rem] p-6 lg:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Image
              src="/assets/illustration.png"
              alt="Cybersecurity illustration"
              width={800}
              height={800}
              className="mx-auto object-cover"
              style={{ width: "auto", height: "auto" }}
            />

            <div className="space-y-5 text-left">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                What Drives Me
              </p>
              <h3 className="text-3xl font-semibold text-white">
                Building safer digital experiences with technical depth and clean
                execution.
              </h3>
              <p className="text-white/72">
                I enjoy understanding how systems fail, how attackers think, and
                how to design stronger defenses. That mix of analysis and
                creation is what makes cybersecurity exciting for me.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
