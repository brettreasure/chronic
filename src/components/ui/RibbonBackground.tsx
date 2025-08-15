"use client";

import { motion } from 'framer-motion';

export function RibbonBackground() {
  // Generate path data for three meandering lines
  const generatePath = (offset: number, separation: number) => {
    const points = [];
    const totalHeight = 6000; // Long enough to cover full page
    const centerX = 50; // Center percentage
    
    for (let y = 0; y <= totalHeight; y += 100) {
      // Main meandering motion
      const meander = Math.sin(y * 0.002 + offset) * 15;
      
      // Occasional left/right drift
      const drift = Math.sin(y * 0.0008 + offset * 2) * 8;
      
      // Separation effect - lines briefly separate and tangle
      const separationCycle = Math.sin(y * 0.001 + offset * 3);
      const isSeparated = separationCycle > 0.6; // About 1/3 of the time
      
      let x = centerX + meander + drift;
      
      if (isSeparated) {
        // When separated, add tangling motion
        const tangle = Math.sin(y * 0.005 + offset * 4) * separation * 2;
        x += tangle;
      } else {
        // When parallel, keep lines close
        x += separation * 0.3;
      }
      
      // Add subtle randomness
      const randomness = Math.sin(y * 0.01 + offset * 5) * 1;
      x += randomness;
      
      points.push(`${x},${y}`);
    }
    
    return `M ${points.join(' L ')}`;
  };

  const line1Path = generatePath(0, -2);
  const line2Path = generatePath(Math.PI * 0.7, 0);
  const line3Path = generatePath(Math.PI * 1.4, 2);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 6000"
        preserveAspectRatio="xMidYMin slice"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* First line */}
        <motion.path
          d={line1Path}
          stroke="white"
          strokeWidth="0.3"
          fill="none"
          opacity="0.4"
          filter="url(#softGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ 
            pathLength: { duration: 8, ease: "easeInOut" },
            opacity: { duration: 2, delay: 0.5 }
          }}
        />
        
        {/* Second line */}
        <motion.path
          d={line2Path}
          stroke="white"
          strokeWidth="0.3"
          fill="none"
          opacity="0.3"
          filter="url(#softGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ 
            pathLength: { duration: 8, ease: "easeInOut", delay: 0.3 },
            opacity: { duration: 2, delay: 0.8 }
          }}
        />
        
        {/* Third line */}
        <motion.path
          d={line3Path}
          stroke="white"
          strokeWidth="0.3"
          fill="none"
          opacity="0.35"
          filter="url(#softGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ 
            pathLength: { duration: 8, ease: "easeInOut", delay: 0.6 },
            opacity: { duration: 2, delay: 1.1 }
          }}
        />
      </svg>
    </div>
  );
}