import { PortfolioProvider } from "@/context/portfolio-context";
// import { About } from "@/components/portfolio/about";
import { BackToTop } from "@/components/portfolio/back-to-top";
// import { Education } from "@/components/portfolio/education";
// import { Experience } from "@/components/portfolio/experience";
import { FloatingParticles } from "@/components/portfolio/floating-particles";
import { Footer } from "@/components/portfolio/footer";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
// import { Projects } from "@/components/portfolio/projects";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { SectionConnector } from "@/components/portfolio/section-connector";
import { SectionProgress } from "@/components/portfolio/section-progress";

// import { Skills } from "@/components/portfolio/skills";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <FloatingParticles />
      <SectionProgress />
      <PortfolioProvider>
        <Header />
        <main>
          <Hero />
          {/* <SectionConnector variant="chevron" />
          <About />
          <SectionConnector variant="dots" />
          <Skills />
          <SectionConnector variant="line" />
          <Experience />
          <SectionConnector variant="wave" />
          <Projects />
          <SectionConnector variant="dots" />
          <Education /> */}
          <SectionConnector variant="chevron" />
        </main>
        <Footer />
      </PortfolioProvider>

      <BackToTop />
    </div>
  );
}
