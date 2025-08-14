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
      className="max-w-2xl mx-auto text-center relative bg-white dark:bg-gray-800 rounded-xl p-12 shadow-xl border border-primary/20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Curved decorative lines - inspired by logo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top curved lines */}
        <motion.svg
          className="absolute -top-4 -right-8 w-32 h-16 opacity-30"
          viewBox="0 0 120 60"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <path
            d="M 20 40 Q 60 10, 100 30"
            stroke="#004146"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-[#004146]"
          />
          <path
            d="M 15 45 Q 55 15, 95 35"
            stroke="#004146"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-[#004146]"
          />
          <path
            d="M 10 50 Q 50 20, 90 40"
            stroke="#004146"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-[#004146]"
          />
        </motion.svg>

        {/* Bottom curved lines */}
        <motion.svg
          className="absolute -bottom-4 -left-8 w-32 h-16 opacity-30 rotate-180"
          viewBox="0 0 120 60"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <path
            d="M 20 40 Q 60 10, 100 30"
            stroke="#004146"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-[#004146]"
          />
          <path
            d="M 15 45 Q 55 15, 95 35"
            stroke="#004146"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-[#004146]"
          />
          <path
            d="M 10 50 Q 50 20, 90 40"
            stroke="#004146"
            strokeWidth="2"
            fill="none"
            className="dark:stroke-[#004146]"
          />
        </motion.svg>

        {/* Subtle accent line behind heading */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-40"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      <motion.h2 
        className="text-6xl sm:text-7xl font-headline font-bold text-primary dark:text-primary-dark mb-6 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {heading}
      </motion.h2>
      
      <motion.p 
        className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-body leading-relaxed relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}