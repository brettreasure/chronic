"use client";

import { motion } from 'framer-motion';

interface VbhcDefinitionTextBoxProps {
  isVisible: boolean;
}

export function VbhcDefinitionTextBox({ isVisible }: VbhcDefinitionTextBoxProps) {
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
        A quick definition
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl font-body leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <strong>Value-Based Healthcare (VBHC)</strong> is a model that rewards exercise physiologists for delivering measurable improvements in their clients&apos; health outcomes—rather than simply providing services—by focusing on prevention, function, and long-term impact.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-xl sm:text-2xl font-headline font-bold mb-3">
          VBHC in Practice
        </h3>
        <p className="text-lg sm:text-xl font-body leading-relaxed">
          By capturing PRIMS (Provider-Reported Importance Measures), PREMS (Patient-Reported Experience Measures), and PROMS (Patient-Reported Outcome Measures), EPs can demonstrate real-world impact, support funding conversations, and continuously align care with what matters most to patients.
        </p>
      </motion.div>
    </motion.div>
  );
}