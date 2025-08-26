"use client";

import { motion } from 'framer-motion';

interface NewVbhcTextBoxProps {
  isVisible: boolean;
  variant?: 'home' | 'profession';
}

export function NewVbhcTextBox({ isVisible, variant = 'profession' }: NewVbhcTextBoxProps) {
  return (
    <motion.div
      className="w-2/3 max-w-2xl mx-auto text-center rounded-lg p-8 shadow-lg text-white"
      style={{ backgroundColor: '#004146' }}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.8 
      }}
      transition={{ 
        duration: 1.2, 
        type: "spring",
        damping: 12,
        stiffness: 100,
        bounce: 0.6
      }}
    >
      <motion.h2 
        className="text-2xl sm:text-3xl font-headline font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Exercise As Medicine
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl font-body leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Exercise has been shown to be as effective as pharmacological treatments but addresses multiple chronic conditions at once. Exercise is accessible, low-cost and within the control of the individual.
      </motion.p>
      <motion.h2 
        className="text-2xl sm:text-3xl font-headline font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {variant === 'home' ? 'Motivation' : 'Compliance'}
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {variant === 'home' 
          ? "Since exercise is medicine, we need to prescribe the right dose at the right time for the right reason. And medicine only works if you TAKE IT, i.e. you need motivation. Our 4 Point Medex system is the gold standard in this regard, with clients achieving an 84% attendance rate."
          : "Since exercise is medicine, we need to prescribe the right dose at the right time for the right reason. And compliance improves efficacy. The 4 Point Medex system is the gold standard: an 84% compliance rate."
        }
      </motion.p>
    </motion.div>
  );
}