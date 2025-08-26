"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function RibbonBackground() {
  const [paths, setPaths] = useState<string[]>(['', '', '']);

  // Generate path data for three meandering lines
  const generatePath = (offset: number, separation: number) => {
    const points = [];
    const totalHeight = 6000; // Long enough to cover full page
    const centerX = 50; // Center percentage
    
    for (let y = 0; y <= totalHeight; y += 80) {
      // More sinuous main meandering motion
      const meander = Math.sin(y * 0.003 + offset) * 18;
      const meander2 = Math.sin(y * 0.0015 + offset * 1.5) * 12;
      
      // Occasional left/right drift
      const drift = Math.sin(y * 0.0012 + offset * 2) * 10;
      
      // Parallel detection - create neat parallel sections
      const parallelCycle = Math.sin(y * 0.0008 + offset * 2.5);
      const isParallel = parallelCycle > 0.3; // About 2/3 of the time
      
      // Separation effect - lines briefly separate and tangle
      const separationCycle = Math.sin(y * 0.0015 + offset * 3);
      const isSeparated = separationCycle > 0.7 && !isParallel; // About 1/3 of remaining time
      
      let x = centerX + meander + meander2 + drift;
      
      if (isParallel) {
        // When parallel, keep lines very close and aligned
        x = centerX + meander * 0.6 + separation * 0.2;
      } else if (isSeparated) {
        // When separated, add tangling motion
        const tangle = Math.sin(y * 0.006 + offset * 4) * separation * 3;
        const tangle2 = Math.cos(y * 0.004 + offset * 5) * separation * 2;
        x += tangle + tangle2;
      } else {
        // Regular flowing motion
        x += separation * 0.4;
      }
      
      // Add more sinuous curves
      const curve1 = Math.sin(y * 0.008 + offset * 6) * 2;
      const curve2 = Math.cos(y * 0.012 + offset * 7) * 1.5;
      x += curve1 + curve2;
      
      points.push(`${x},${y}`);
    }
    
    return `M ${points.join(' L ')}`;
  };

  useEffect(() => {
    // Generate paths only on client side to prevent hydration mismatch
    const line1Path = generatePath(0, -2);
    const line2Path = generatePath(Math.PI * 0.7, 0);
    const line3Path = generatePath(Math.PI * 1.4, 2);
    setPaths([line1Path, line2Path, line3Path]);
  }, []);

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
          d={paths[0]}
          stroke="white"
          strokeWidth="0.45"
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
          d={paths[1]}
          stroke="white"
          strokeWidth="0.45"
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
          d={paths[2]}
          stroke="white"
          strokeWidth="0.45"
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