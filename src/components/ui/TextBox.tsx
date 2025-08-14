"use client";

import { motion } from 'framer-motion';

interface TextBoxProps {
  heading: string;
  text: string;
  isVisible: boolean;
  variant?: 'default' | 'dark-cyan';
}

export function TextBox({ heading, text, isVisible, variant = 'default' }: TextBoxProps) {
  const isDarkCyan = variant === 'dark-cyan';
  
  return (
    <motion.div
      className={`max-w-2xl mx-auto text-center rounded-lg p-8 shadow-lg border ${
        isDarkCyan 
          ? 'bg-[#004146] border-[#004146]/20' 
          : 'bg-white dark:bg-gray-800 border-primary/10'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className={`text-6xl sm:text-7xl font-headline font-bold mb-4 ${
          isDarkCyan 
            ? 'text-white' 
            : 'text-primary dark:text-primary-dark'
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {heading}
      </motion.h2>
      
      <motion.p 
        className={`text-xl sm:text-2xl font-body leading-relaxed ${
          isDarkCyan 
            ? 'text-white' 
            : 'text-gray-700 dark:text-gray-300'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}