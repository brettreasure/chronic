"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CorporateHeroSection } from "@/components/sections/CorporateHeroSection";
import { CorporateSurveySection } from "@/components/sections/CorporateSurveySection";
import { Footer } from "@/components/sections/Footer";
import { RibbonBackground } from "@/components/ui/RibbonBackground";
import { NewVbhcTextBox } from "@/components/ui/NewVbhcTextBox";
import { ComplianceTextBox } from "@/components/ui/ComplianceTextBox";

export default function Corporate() {
  const [isMedexVisible, setIsMedexVisible] = useState(false);
  const [isNewVbhcVisible, setIsNewVbhcVisible] = useState(false);
  const [isComplianceVisible, setIsComplianceVisible] = useState(false);
  const medexRef = useRef<HTMLDivElement>(null);
  const newVbhcRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === medexRef.current) {
            setIsMedexVisible(entry.isIntersecting);
          } else if (entry.target === newVbhcRef.current) {
            setIsNewVbhcVisible(entry.isIntersecting);
          } else if (entry.target === complianceRef.current) {
            setIsComplianceVisible(entry.isIntersecting);
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
    if (complianceRef.current) {
      observer.observe(complianceRef.current);
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
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMedexVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed">
              <p>
                <strong className="text-[#4fcdc4] italic">&ldquo;Structured exercise programs reliably elevate perceived self‑efficacy alongside psychological well‑being.</strong>
                <br />
                <strong className="text-[#4fcdc4] italic">In other words, completing a program makes people more confident.&rdquo;</strong>
                <br />
                - Katie Stewart, Co-founder
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section ref={complianceRef} className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <ComplianceTextBox isVisible={isComplianceVisible} />
        </div>
      </section>
      <Footer />
    </div>
  );
}