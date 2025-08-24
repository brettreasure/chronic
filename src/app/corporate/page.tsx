"use client";

import { useState, useEffect, useRef } from 'react';
import { CorporateHeroSection } from "@/components/sections/CorporateHeroSection";
import { CorporateSurveySection } from "@/components/sections/CorporateSurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { MedexTextBox } from "@/components/ui/MedexTextBox";
import { NewVbhcTextBox } from "@/components/ui/NewVbhcTextBox";

export default function Corporate() {
  const [isMedexVisible, setIsMedexVisible] = useState(false);
  const [isNewVbhcVisible, setIsNewVbhcVisible] = useState(false);
  const medexRef = useRef<HTMLDivElement>(null);
  const newVbhcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === medexRef.current) {
            setIsMedexVisible(entry.isIntersecting);
          } else if (entry.target === newVbhcRef.current) {
            setIsNewVbhcVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px',
      }
    );

    if (medexRef.current) {
      observer.observe(medexRef.current);
    }
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
        <CorporateHeroSection />
        <CorporateSurveySection />
      </main>
      <section ref={newVbhcRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <NewVbhcTextBox isVisible={isNewVbhcVisible} />
        </div>
      </section>
      <section ref={medexRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <MedexTextBox isVisible={isMedexVisible} />
        </div>
      </section>
      <Footer />
    </div>
  );
}