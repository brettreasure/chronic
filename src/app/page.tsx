"use client";

import { useState, useEffect, useRef } from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { SurveySection } from "@/components/sections/SurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { MedexTextBox } from "@/components/ui/MedexTextBox";

export default function Home() {
  const [isMedexVisible, setIsMedexVisible] = useState(false);
  const medexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMedexVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px',
      }
    );

    if (medexRef.current) {
      observer.observe(medexRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5EF] dark:bg-[#1a1a1a] transition-colors duration-300 relative">
      <RibbonBackground />
      <main className="relative z-10">
        <HeroSection />
        <SurveySection />
      </main>
      <section ref={medexRef} className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <MedexTextBox isVisible={isMedexVisible} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
