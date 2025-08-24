"use client";

import { motion } from "framer-motion";

export function CorporateHeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-bold text-[#004146] mb-8">
            The Structured Exercise Study
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed">
            <p>
              <strong className="text-[#4fcdc4] italic">&ldquo;We know that exercise works as medicine.</strong>
              <br />
              <strong className="text-[#4fcdc4] italic">Now we have a system that motivates people to exercise.&rdquo;</strong>
              <br />
              - Katie Stewart, Co-founder
              <br /><br />
              This one page briefing explains the costs to business of chronic conditions and cites new research on the benefits of a structured, exercise medicine program. Scroll down to see how effective our 4 Point Medex system is, in the fight against chronic illnesses.
            </p>
          </div>

          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img 
              src="/cca_logo.webp" 
              alt="Chronic Care Australia" 
              className="h-20 w-auto max-w-[50%]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}