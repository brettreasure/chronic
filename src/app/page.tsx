"use client";

import { useState, useEffect, useRef } from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { SurveySection } from "@/components/sections/SurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { MedexTextBox } from "@/components/ui/MedexTextBox";
import { VbhcTextBox } from "@/components/ui/VbhcTextBox";
import { NewVbhcTextBox } from "@/components/ui/NewVbhcTextBox";

export default function Home() {
  const [isMedexVisible, setIsMedexVisible] = useState(false);
  const [isVbhcVisible, setIsVbhcVisible] = useState(false);
  const [isNewVbhcVisible, setIsNewVbhcVisible] = useState(false);
  const medexRef = useRef<HTMLDivElement>(null);
  const vbhcRef = useRef<HTMLDivElement>(null);
  const newVbhcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === medexRef.current) {
            setIsMedexVisible(entry.isIntersecting);
          } else if (entry.target === vbhcRef.current) {
            setIsVbhcVisible(entry.isIntersecting);
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
    if (vbhcRef.current) {
      observer.observe(vbhcRef.current);
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
        <HeroSection />
        <SurveySection />
      </main>
      <section ref={vbhcRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <VbhcTextBox isVisible={isVbhcVisible} />
        </div>
      </section>
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
