import FloatingParticles from "@/components/portfolio/floating-particles";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <FloatingParticles />
    </div>
  );
}
