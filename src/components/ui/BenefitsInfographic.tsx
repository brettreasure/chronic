"use client";

import { motion } from 'framer-motion';

interface BenefitsInfographicProps {
  isVisible: boolean;
  footnote?: React.ReactNode;
}

export function BenefitsInfographic({ isVisible, footnote }: BenefitsInfographicProps) {
  const benefits = [
    { 
      name: "BONE DENSITY", 
      color: "#D2691E", // Chocolate orange
      x: 120, 
      y: 100,
      movementRange: 35,
      duration: 7
    },
    { 
      name: "MUSCLE MASS", 
      color: "#FF6B35", // Bright orange
      x: 280, 
      y: 80,
      movementRange: 40,
      duration: 6
    },
    { 
      name: "CARDIO CAPACITY", 
      color: "#E74C3C", // Red
      x: 420, 
      y: 120,
      movementRange: 30,
      duration: 8
    },
    { 
      name: "BLOOD PRESSURE", 
      color: "#CD853F", // Peru/sandy brown
      x: 140, 
      y: 200,
      movementRange: 45,
      duration: 9
    },
    { 
      name: "MENTAL HEALTH", 
      color: "#FF8C42", // Orange peel
      x: 350, 
      y: 180,
      movementRange: 80,
      duration: 20
    },
    { 
      name: "WEIGHT LOSS", 
      color: "#FF7F50", // Coral
      x: 250, 
      y: 280,
      movementRange: 42,
      duration: 6.5
    },
    { 
      name: "VITALITY", 
      color: "#E74C3C", // Red
      x: 380, 
      y: 260,
      movementRange: 35,
      duration: 8.5
    }
  ];

  return (
    <motion.div
      className="w-full bg-[#F7F5EF] rounded-xl p-8 shadow-2xl shadow-gray-500/20"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-headline font-bold text-[#004146] text-center mb-8"
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
                r="65"
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
                fill="white"
                fontSize="11"
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
                {benefit.name.length > 8 ? (
                  <>
                    <tspan x={benefit.x} dy="-6">{benefit.name.split(' ')[0]}</tspan>
                    <tspan x={benefit.x} dy="12">{benefit.name.split(' ')[1] || ''}</tspan>
                  </>
                ) : (
                  benefit.name
                )}
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