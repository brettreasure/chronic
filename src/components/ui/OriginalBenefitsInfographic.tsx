"use client";

import { motion } from 'framer-motion';

interface OriginalBenefitsInfographicProps {
  isVisible: boolean;
}

export function OriginalBenefitsInfographic({ isVisible }: OriginalBenefitsInfographicProps) {
  const benefits = [
    { 
      name: "BONE DENSITY", 
      color: "#004146", // Deep Cyan
      x: 120, 
      y: 100,
      movementRange: 50,
      duration: 12
    },
    { 
      name: "MUSCLE MASS", 
      color: "#F7F5EF", // Cream
      x: 280, 
      y: 80,
      movementRange: 55,
      duration: 14
    },
    { 
      name: "CARDIO CAPACITY", 
      color: "#C5D3C6", // Pale Green
      x: 420, 
      y: 120,
      movementRange: 45,
      duration: 16
    },
    { 
      name: "BLOOD PRESSURE", 
      color: "#89AC8F", // Mid Green
      x: 140, 
      y: 200,
      movementRange: 60,
      duration: 13
    },
    { 
      name: "WEIGHT LOSS", 
      color: "#004146", // Deep Cyan
      x: 350, 
      y: 180,
      movementRange: 50,
      duration: 15
    },
    { 
      name: "MENTAL HEALTH", 
      color: "#89AC8F", // Mid Green
      x: 250, 
      y: 150,
      movementRange: 80,
      duration: 30
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
        BENEFITS
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
                  benefit.name === "MENTAL HEALTH" ? {
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
                fill={benefit.color === "#F7F5EF" ? "black" : "white"}
                fontSize="12"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                initial={{ opacity: 0 }}
                animate={isVisible ? 
                  benefit.name === "MENTAL HEALTH" ? {
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
                  if (words.length >= 2) {
                    // 2 lines for phrases like "BONE DENSITY", "MUSCLE MASS", etc.
                    return (
                      <>
                        <tspan x={benefit.x} dy="-5">{words[0]}</tspan>
                        <tspan x={benefit.x} dy="10">{words.slice(1).join(' ')}</tspan>
                      </>
                    );
                  } else {
                    // Single line for single words
                    return benefit.name;
                  }
                })()}
              </motion.text>
            </motion.g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}