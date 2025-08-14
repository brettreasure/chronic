import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SurveySection } from "@/components/sections/SurveySection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <SurveySection />
      </main>
      <Footer />
    </div>
  );
}
