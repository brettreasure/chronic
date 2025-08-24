"use client";

import { motion } from 'framer-motion';

interface MedexTextBoxProps {
  isVisible: boolean;
}

export function MedexTextBox({ isVisible }: MedexTextBoxProps) {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-center rounded-lg p-8 shadow-lg"
      style={{ backgroundColor: '#4fcdc4' }}
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
      <motion.div 
        className="text-lg sm:text-xl font-body leading-relaxed text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-white mb-4">
          "Structured exercise programs reliably elevate perceived self‑efficacy alongside psychological well‑being. In other words, completing a program makes people more confident."
        </p>
        <p className="text-white">
          - Katie Stewart, Co-founder
        </p>
      </motion.div>
    </motion.div>
  );
}