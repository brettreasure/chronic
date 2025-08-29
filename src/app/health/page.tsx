"use client";

import { useState, useEffect, useRef } from 'react';
import { HealthHeroSection } from "@/components/sections/HealthHeroSection";
import { HealthSurveySection } from "@/components/sections/HealthSurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { HealthVbhcTextBox } from "@/components/ui/HealthVbhcTextBox";
import { HealthVbhcDefinitionTextBox } from "@/components/ui/HealthVbhcDefinitionTextBox";

export default function Health() {
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
        <HealthHeroSection />
        <section ref={vbhcDefinitionRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto">
            <HealthVbhcDefinitionTextBox isVisible={isVbhcDefinitionVisible} />
          </div>
        </section>
        <HealthSurveySection />
      </main>
      <section ref={newVbhcRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <HealthVbhcTextBox isVisible={isNewVbhcVisible} />
        </div>
      </section>
      <Footer variant="health" />
    </div>
  );
}