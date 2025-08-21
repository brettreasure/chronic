"use client";

import { motion } from 'framer-motion';

interface NewVbhcTextBoxProps {
  isVisible: boolean;
}

export function NewVbhcTextBox({ isVisible }: NewVbhcTextBoxProps) {
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
      <motion.p 
        className="text-lg sm:text-xl font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Chronic Care Australia applies Value-Based Healthcare principles, delivering Exercise As Medicine programs that add significant value to quality of life for Australians living with varied chronic diseases.
      </motion.p>
    </motion.div>
  );
}