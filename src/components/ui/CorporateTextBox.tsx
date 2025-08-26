"use client";

import { motion } from 'framer-motion';

interface CorporateTextBoxProps {
  heading: string;
  isVisible: boolean;
  variant?: 'default' | 'dark-cyan' | 'double-border';
}

export function CorporateTextBox({ heading, isVisible, variant = 'default' }: CorporateTextBoxProps) {
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
      
      <motion.div 
        className={`text-xl sm:text-2xl font-body leading-relaxed relative z-10 space-y-4 ${
          isDarkCyan 
            ? 'text-white' 
            : 'text-gray-700 dark:text-gray-300'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>
          $82 billion annually: cost to the Australian economy of chronic conditions (more than we spend on defence)
          <sup>
            <a 
              href="https://www.aihw.gov.au/reports/health-welfare-expenditure/health-system-spending-on-disease-and-injury-aus/contents/summary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#004146] transition-colors"
            >
              1
            </a>
          </sup>
        </p>
        <p>
          Annual productivity losses to business: $32B
          <sup>
            <a 
              href="https://www.medibank.com.au/content/dam/client/documents/pdfs/The_health_of_Australia's_workforce.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#004146] transition-colors"
            >
              2
            </a>
          </sup>
        </p>
        <p>
          Now, here are the research results...
        </p>
      </motion.div>
    </motion.div>
  );
}