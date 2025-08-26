"use client";

import { useState, useEffect, useRef } from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { SurveySection } from "@/components/sections/SurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { NewVbhcTextBox } from "@/components/ui/NewVbhcTextBox";

export default function Home() {
  const [isNewVbhcVisible, setIsNewVbhcVisible] = useState(false);
  const newVbhcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === newVbhcRef.current) {
            setIsNewVbhcVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px',
      }
    );

    if (newVbhcRef.current) {
      observer.observe(newVbhcRef.current);
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
      <section ref={newVbhcRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <NewVbhcTextBox isVisible={isNewVbhcVisible} variant="home" />
        </div>
      </section>
      <Footer variant="home" />
    </div>
  );
}
