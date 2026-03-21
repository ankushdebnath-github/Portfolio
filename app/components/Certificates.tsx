import { ArrowUpRight, BadgeCheck, ShieldCheck } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cyber Security 101",
    issuer: "TryHackMe",
    date: "February 2026",
    credentialId: "THM-CYOTPZIMY8",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CYOTPZIMY8.pdf",
  },
  {
    id: 2,
    title: "Pre Security",
    issuer: "TryHackMe",
    date: "November 2025",
    credentialId: "THM-AIMWNYBZ1M",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-AIMWNYBZ1M.pdf",
  },
  {
    id: 3,
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "November 2025",
    credentialId: "NPTEL25CS117S135870153910370168",
    link: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S135870153910370168.pdf",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    issuer: "Cipher Schools",
    date: "July 2025",
    credentialId: "687e43f77efd6d5090703e02",
    link: "https://www.cipherschools.com/certificate/preview?id=687e43f77efd6d5090703e02",
  },
];

export default function Certificates(): React.JSX.Element {
  return (
    <section id="certificates" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
            Learning Proof
          </p>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Certifications that back up my hands-on cybersecurity work.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,16,44,0.96),rgba(10,16,32,0.92))] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-lg">
                    {index % 2 === 0 ? (
                      <ShieldCheck className="h-7 w-7" />
                    ) : (
                      <BadgeCheck className="h-7 w-7" />
                    )}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                    {cert.date}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">{cert.title}</h3>
                <p className="mb-4 text-sm font-medium text-cyan-300">{cert.issuer}</p>

                {cert.credentialId && (
                  <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/45">
                      Credential ID
                    </p>
                    <p className="mt-1 break-all text-sm text-white/80">
                      {cert.credentialId}
                    </p>
                  </div>
                )}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-300"
                  >
                    Verify Certificate
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
