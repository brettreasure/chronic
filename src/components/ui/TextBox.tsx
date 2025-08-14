"use client";

import { motion } from 'framer-motion';

interface TextBoxProps {
  heading: string;
  text: string;
  isVisible: boolean;
}

export function TextBox({ heading, text, isVisible }: TextBoxProps) {
  return (
    <motion.div
      className="max-w-2xl mx-auto text-center bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-primary/10"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-6xl sm:text-7xl font-headline font-bold text-primary dark:text-primary-dark mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {heading}
      </motion.h2>
      
      <motion.p 
        className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}