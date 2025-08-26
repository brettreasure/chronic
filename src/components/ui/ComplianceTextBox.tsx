"use client";

import { motion } from 'framer-motion';

interface ComplianceTextBoxProps {
  isVisible: boolean;
}

export function ComplianceTextBox({ isVisible }: ComplianceTextBoxProps) {
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
        Compliance
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Since exercise is medicine, we need to prescribe the right dose at the right time for the right reason. And compliance improves efficacy. The 4 Point Medex system is the gold standard: an 84% compliance rate.
      </motion.p>
    </motion.div>
  );
}