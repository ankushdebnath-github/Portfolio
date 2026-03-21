import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ankush Debnath | Cybersecurity Portfolio",
  description:
    "Portfolio of Ankush Debnath featuring cybersecurity projects, technical skills, achievements, and hands-on security work.",
  keywords: [
    "Ankush Debnath",
    "Cybersecurity",
    "Ethical Hacking",
    "Python Developer",
    "Portfolio",
    "Malware Analysis",
    "Digital Forensics",
  ],
  authors: [{ name: "Ankush Debnath" }],
  creator: "Ankush Debnath",
  publisher: "Ankush Debnath",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ankush Debnath | Cybersecurity Portfolio",
    description:
      "Cybersecurity portfolio featuring practical projects, skills, certifications, and achievements.",
    siteName: "Ankush Debnath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankush Debnath | Cybersecurity Portfolio",
    description:
      "Cybersecurity portfolio featuring projects, skills, certifications, and achievements.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
