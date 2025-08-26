"use client";

import { useState, useEffect, useRef } from 'react';
import { ProfessionHeroSection } from "@/components/sections/ProfessionHeroSection";
import { ProfessionSurveySection } from "@/components/sections/ProfessionSurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { NewVbhcTextBox } from "@/components/ui/NewVbhcTextBox";
import { VbhcDefinitionTextBox } from "@/components/ui/VbhcDefinitionTextBox";

export default function Profession() {
  const [isNewVbhcVisible, setIsNewVbhcVisible] = useState(false);
  const [isVbhcDefinitionVisible, setIsVbhcDefinitionVisible] = useState(false);
  const newVbhcRef = useRef<HTMLDivElement>(null);
  const vbhcDefinitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === newVbhcRef.current) {
            setIsNewVbhcVisible(entry.isIntersecting);
          } else if (entry.target === vbhcDefinitionRef.current) {
            setIsVbhcDefinitionVisible(entry.isIntersecting);
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
    if (vbhcDefinitionRef.current) {
      observer.observe(vbhcDefinitionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5EF] dark:bg-[#1a1a1a] transition-colors duration-300 relative">
      <RibbonBackground />
      <main className="relative z-10">
        <ProfessionHeroSection />
        <section ref={vbhcDefinitionRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto">
            <VbhcDefinitionTextBox isVisible={isVbhcDefinitionVisible} />
          </div>
        </section>
        <ProfessionSurveySection />
      </main>
      <section ref={newVbhcRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <NewVbhcTextBox isVisible={isNewVbhcVisible} />
        </div>
      </section>
      <Footer variant="profession" />
    </div>
  );
}