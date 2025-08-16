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
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p 
        className="text-lg sm:text-xl font-body leading-relaxed text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our 4 point MEDEX dispensing system is the only clinically proven exercise medicine delivery system we know that achieves compliance rates of 84%. It also delivers consistently high client health care value to its participants.
      </motion.p>
    </motion.div>
  );
}