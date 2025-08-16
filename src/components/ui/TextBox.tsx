"use client";

import { motion } from 'framer-motion';

interface TextBoxProps {
  heading: string;
  text: string;
  isVisible: boolean;
  variant?: 'default' | 'dark-cyan' | 'double-border';
  footnote?: string;
}

export function TextBox({ heading, text, isVisible, variant = 'default', footnote }: TextBoxProps) {
  const isDarkCyan = variant === 'dark-cyan';
  const isDoubleBorder = variant === 'double-border';
  
  return (
    <motion.div
      className={`max-w-2xl mx-auto text-center rounded-lg p-8 shadow-lg relative ${
        isDarkCyan 
          ? 'bg-[#004146] border border-[#004146]/20' 
          : isDoubleBorder
          ? 'bg-white dark:bg-gray-800'
          : 'bg-white dark:bg-gray-800 border border-primary/10'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Double border effect for first text box */}
      {isDoubleBorder && (
        <>
          {/* Outer border */}
          <div className="absolute inset-0 rounded-lg border-2 border-[#004146]" />
          {/* Inner border with gap */}
          <div className="absolute inset-2 rounded-md border-2 border-[#004146]" />
        </>
      )}
      
      <motion.h2 
        className={`text-6xl sm:text-7xl font-headline font-bold mb-4 relative z-10 ${
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
        className={`text-xl sm:text-2xl font-body leading-relaxed relative z-10 whitespace-pre-line ${
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
      
      {footnote && (
        <motion.p 
          className={`text-sm font-body leading-relaxed relative z-10 mt-4 ${
            isDarkCyan 
              ? 'text-white/80' 
              : 'text-gray-600 dark:text-gray-400'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {footnote}
        </motion.p>
      )}
    </motion.div>
  );
}