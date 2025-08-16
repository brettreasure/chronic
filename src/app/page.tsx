import { HeroSection } from "@/components/sections/HeroSection";
import { SurveySection } from "@/components/sections/SurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { MedexTextBox } from "@/components/ui/MedexTextBox";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] dark:bg-[#1a1a1a] transition-colors duration-300 relative">
      <RibbonBackground />
      <main className="relative z-10">
        <HeroSection />
        <SurveySection />
      </main>
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <MedexTextBox isVisible={true} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
