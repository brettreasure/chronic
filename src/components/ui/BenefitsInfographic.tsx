"use client";

import { motion } from 'framer-motion';

interface BenefitsInfographicProps {
  isVisible: boolean;
  footnote?: React.ReactNode;
}

export function BenefitsInfographic({ isVisible, footnote }: BenefitsInfographicProps) {
  const benefits = [
    { 
      name: "LESS ABSENTEEISM", 
      color: "#F0AC6F", // Chocolate orange
      x: 120, 
      y: 100,
      movementRange: 35,
      duration: 7
    },
    { 
      name: "MORE JOB SATISFACTION", 
      color: "#E1865A", // Bright orange
      x: 280, 
      y: 80,
      movementRange: 40,
      duration: 6
    },
    { 
      name: "TEAMWORK", 
      color: "#E378A3", // Red
      x: 420, 
      y: 120,
      movementRange: 30,
      duration: 8
    },
    { 
      name: "BREAKS DOWN SILOS", 
      color: "#CD853F", // Peru/sandy brown
      x: 140, 
      y: 200,
      movementRange: 45,
      duration: 9
    },
    { 
      name: "ATTRACTS NEW TALENT", 
      color: "#FF8C42", // Orange peel
      x: 350, 
      y: 180,
      movementRange: 80,
      duration: 20
    }
  ];

  return (
    <motion.div
      className="w-full bg-[#EDE1D0] rounded-xl p-8 shadow-2xl shadow-gray-500/20"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-headline font-bold text-black text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        BUSINESS BENEFITS
      </motion.h2>
      
      <div className="relative w-full h-80 overflow-hidden">
        <svg
          viewBox="0 0 500 350"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {benefits.map((benefit, index) => (
            <motion.g key={benefit.name}>
              {/* Circle */}
              <motion.circle
                cx={benefit.x}
                cy={benefit.y}
                r="81"
                fill={benefit.color}
                opacity="0.7"
                stroke="white"
                strokeWidth="2"
                initial={{ 
                  scale: 0
                }}
                animate={isVisible ? 
                  benefit.name === "ATTRACTS NEW TALENT" ? {
                    // MENTAL HEALTH: Migrate across full infographic width
                    scale: 1,
                    x: [0, 80, -60, 100, -80, 70, -90, 0],
                    y: [0, -40, 50, -30, 40, -60, 30, 0]
                  } : {
                    // Other benefits: Individual movement patterns
                    scale: 1,
                    x: [
                      0, 
                      Math.sin(index * 2) * benefit.movementRange, 
                      Math.cos(index * 3) * benefit.movementRange * 0.8,
                      Math.sin(index * 4) * benefit.movementRange * 0.6,
                      0
                    ],
                    y: [
                      0, 
                      Math.cos(index * 1.5) * benefit.movementRange * 0.9, 
                      Math.sin(index * 2.5) * benefit.movementRange * 0.7,
                      Math.cos(index * 3.5) * benefit.movementRange * 0.5,
                      0
                    ]
                  } : {
                    scale: 0
                  }
                }
                transition={{
                  scale: { duration: 0.8, delay: 0.6 + index * 0.1 },
                  x: { 
                    duration: benefit.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  },
                  y: { 
                    duration: benefit.duration * 0.8, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Text */}
              <motion.text
                x={benefit.x}
                y={benefit.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="10"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                initial={{ opacity: 0 }}
                animate={isVisible ? 
                  benefit.name === "ATTRACTS NEW TALENT" ? {
                    // MENTAL HEALTH: Same migration pattern as circle
                    opacity: 1,
                    x: [0, 80, -60, 100, -80, 70, -90, 0],
                    y: [0, -40, 50, -30, 40, -60, 30, 0]
                  } : {
                    // Other benefits: Match their circle movement
                    opacity: 1,
                    x: [
                      0, 
                      Math.sin(index * 2) * benefit.movementRange, 
                      Math.cos(index * 3) * benefit.movementRange * 0.8,
                      Math.sin(index * 4) * benefit.movementRange * 0.6,
                      0
                    ],
                    y: [
                      0, 
                      Math.cos(index * 1.5) * benefit.movementRange * 0.9, 
                      Math.sin(index * 2.5) * benefit.movementRange * 0.7,
                      Math.cos(index * 3.5) * benefit.movementRange * 0.5,
                      0
                    ]
                  } : { 
                    opacity: 0
                  }
                }
                transition={{
                  opacity: { duration: 0.6, delay: 1.0 + index * 0.1 },
                  x: { 
                    duration: benefit.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  },
                  y: { 
                    duration: benefit.duration * 0.8, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }
                }}
              >
                {(() => {
                  const words = benefit.name.split(' ');
                  if (words.length >= 3) {
                    // 3 lines for phrases like "MORE JOB SATISFACTION", "BREAKS DOWN SILOS", "ATTRACTS NEW TALENT"
                    return (
                      <>
                        <tspan x={benefit.x} dy="-10">{words[0]}</tspan>
                        <tspan x={benefit.x} dy="10">{words[1]}</tspan>
                        <tspan x={benefit.x} dy="10">{words.slice(2).join(' ')}</tspan>
                      </>
                    );
                  } else if (words.length === 2) {
                    // 2 lines for phrases like "LESS ABSENTEEISM"
                    return (
                      <>
                        <tspan x={benefit.x} dy="-5">{words[0]}</tspan>
                        <tspan x={benefit.x} dy="10">{words[1]}</tspan>
                      </>
                    );
                  } else {
                    // Single line for "TEAMWORK"
                    return benefit.name;
                  }
                })()}
              </motion.text>
            </motion.g>
          ))}
        </svg>
      </div>
      
      {footnote && (
        <motion.p
          className="text-sm text-gray-600 mt-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {footnote}
        </motion.p>
      )}
    </motion.div>
  );
}