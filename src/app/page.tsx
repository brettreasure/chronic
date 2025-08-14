import { HeroSection } from "@/components/sections/HeroSection";
import { SurveySection } from "@/components/sections/SurveySection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] dark:bg-[#1a1a1a] transition-colors duration-300">
      <main>
        <HeroSection />
        <SurveySection />
      </main>
      <Footer />
    </div>
  );
}
