import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CVPreview from "./components/CVPreview";
import WhyHireMe from "./components/WhyHireMe";
import StatsSection from "./components/StatsSection";
import Training from "./components/Training";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Footer from "./components/Footer";
import RevealSection from "./components/RevealSection";
import CyberBackground from "./components/CyberBackground";
import CustomCursor from "./components/CustomCursor";
import BootSequence from "./components/BootSequence";

export default function Home(): React.JSX.Element {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#110720] text-white">
      <CyberBackground />
      <BootSequence />
      <CustomCursor />
      <div className="relative z-10">
        <Header />
        <RevealSection>
          <Banner />
        </RevealSection>
        <RevealSection delay={40}>
          <About />
        </RevealSection>
        <RevealSection delay={60}>
          <Skills />
        </RevealSection>
        <RevealSection delay={80}>
          <Experience />
        </RevealSection>
        <RevealSection delay={100}>
          <Projects />
        </RevealSection>
        <RevealSection delay={120}>
          <CVPreview />
        </RevealSection>
        <RevealSection delay={140}>
          <WhyHireMe />
        </RevealSection>
        <RevealSection delay={160}>
          <StatsSection />
        </RevealSection>
        <RevealSection delay={180}>
          <Training />
        </RevealSection>
        <RevealSection delay={200}>
          <Certificates />
        </RevealSection>
        <RevealSection delay={220}>
          <Achievements />
        </RevealSection>
        <RevealSection delay={240}>
          <Education />
        </RevealSection>
        <RevealSection delay={260}>
          <Footer />
        </RevealSection>
      </div>
    </main>
  );
}
