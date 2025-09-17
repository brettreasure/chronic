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
        
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-body mb-6 leading-relaxed">
              Example
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed mb-8">
              An insurer funds a structured exercise program for diabetes, but reimbursement is tied to improvements in HbA1c, mobility and quality of life (not just a number of sessions). Compliance becomes a measured outcome.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              Chronic Care runs a 12-week program using a 4 Point Medex system.<br />
              Scroll down for breakthroughs in compliance, results and loyalty.
            </p>
          </div>
        </section>
        
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-body mb-6 leading-relaxed">
              VBHC in Practice
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              By capturing PRIMS (Provider-Reported Importance Measures), PREMS (Patient-Reported Experience Measures), and PROMS (Patient-Reported Outcome Measures), EPs can demonstrate real-world impact, support funding conversations, and continuously align care with what matters most to patients.
            </p>
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