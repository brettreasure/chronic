"use client";

import { motion } from 'framer-motion';

interface HealthVbhcDefinitionTextBoxProps {
  isVisible: boolean;
}

export function HealthVbhcDefinitionTextBox({ isVisible }: HealthVbhcDefinitionTextBoxProps) {
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
        Value-Based Healthcare
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl font-body leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        A system-level reform that aligns payment and care models with measurable improvements in client health outcomes—rather than simply providing services. It focuses on prevention, function, and long-term impact.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-xl sm:text-2xl font-headline font-bold mb-3">
          Exercise As Medicine
        </h3>
        <p className="text-lg sm:text-xl font-body leading-relaxed">
          Exercise has proved as effective as pharmacological treatments but addresses multiple chronic conditions at once. It&apos;s accessible, low-cost and within the control of the individual. We embed exercise as a first-line treatment for chronic conditions, with structured prescriptions (dosage, supervision and adherence strategies).
        </p>
      </motion.div>
    </motion.div>
  );
}