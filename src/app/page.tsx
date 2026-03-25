import { PortfolioProvider } from "@/context/portfolio-context";
import { BackToTop } from "@/components/portfolio/back-to-top";
import { FloatingParticles } from "@/components/portfolio/floating-particles";
import { Footer } from "@/components/portfolio/footer";
import { Header } from "@/components/portfolio/header";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { SectionProgress } from "@/components/portfolio/section-progress";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <FloatingParticles />
      <SectionProgress />
      <PortfolioProvider>
        <Header />
        <main></main>
        <Footer />
      </PortfolioProvider>

      <BackToTop />
    </div>
  );
}
