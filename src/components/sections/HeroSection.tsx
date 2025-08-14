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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-bold text-primary dark:text-primary-dark mb-8">
            The 90 Study
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed">
            <p>
              Here&apos;s some real world research on the benefits of a structured, 12 week exercise program 
              by qualified exercise physiologists. Chronic Care Australia applies Values Based Health Care 
              principles, delivering Exercise As Medicine programs that add significant value to quality of life, 
              as you&apos;ll see when you scroll down through the results.
            </p>
            
            <p className="text-primary dark:text-primary-dark font-semibold">
              The study was conducted over three years and involved 177 participants.
            </p>
          </div>
          
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-16 h-1 bg-primary dark:bg-primary-dark rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}