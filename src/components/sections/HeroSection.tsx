"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-bold text-[#004146] mb-8">
            The 84% Study
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed">
            <p>
              <em>We know that exercise works as medicine. Now we have a system that gets people motivated.</em>
              <br />
              - <em>Katie Stewart, Co-founder.</em>
              <br /><br />
              Here&apos;s the proof: real world research on the benefits of a structured, 12 week exercise medicine program, using our 4 Point Medex system. Scroll down through the results to see how effective value-based exercise medicine is, in the fight against chronic illnesses.
            </p>
            
            <p className="text-primary dark:text-primary-dark font-semibold">
              The study was conducted over three years and involved 177 participants. Results align with our previous research, awarded an <a href="https://chroniccare.com.au/vbhc" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#004146] transition-colors">International Value-Based Health Care prize</a>.
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