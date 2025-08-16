"use client";

import { motion } from 'framer-motion';

interface ChronicConditionsInfographicProps {
  isVisible: boolean;
  footnote?: React.ReactNode;
}

export function ChronicConditionsInfographic({ isVisible, footnote }: ChronicConditionsInfographicProps) {
  const conditions = [
    { 
      name: "ARTHRITIS", 
      color: "#004146", 
      x: 120, 
      y: 100,
      movementRange: 35,
      duration: 7
    },
    { 
      name: "ASTHMA", 
      color: "#C5D3C6", 
      x: 280, 
      y: 80,
      movementRange: 40,
      duration: 6
    },
    { 
      name: "BACK PAIN", 
      color: "#89AC8F", 
      x: 420, 
      y: 120,
      movementRange: 30,
      duration: 8
    },
    { 
      name: "CANCER", 
      color: "#004146", 
      x: 140, 
      y: 200,
      movementRange: 45,
      duration: 9
    },
    { 
      name: "HEART DISEASE", 
      color: "#C5D3C6", 
      x: 350, 
      y: 180,
      movementRange: 38,
      duration: 7.5
    },
    { 
      name: "LUNG DISEASE", 
      color: "#89AC8F", 
      x: 200, 
      y: 280,
      movementRange: 42,
      duration: 6.5
    },
    { 
      name: "DIABETES", 
      color: "#004146", 
      x: 380, 
      y: 260,
      movementRange: 35,
      duration: 8.5
    },
    { 
      name: "MENTAL HEALTH", 
      color: "#C5D3C6", 
      x: 250, 
      y: 200,
      movementRange: 80,
      duration: 20
    },
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
        CHRONIC CONDITIONS
      </motion.h2>
      
      <div className="relative w-full h-80 overflow-hidden">
        <svg
          viewBox="0 0 500 350"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {conditions.map((condition, index) => (
            <motion.g key={condition.name}>
              {/* Circle */}
              <motion.circle
                cx={condition.x}
                cy={condition.y}
                r="65"
                fill={condition.color}
                opacity="0.7"
                stroke="white"
                strokeWidth="2"
                initial={{ 
                  scale: 0
                }}
                animate={isVisible ? 
                  condition.name === "MENTAL HEALTH" ? {
                    // MENTAL HEALTH: Migrate across full infographic width
                    scale: 1,
                    x: [0, 80, -60, 100, -80, 70, -90, 0],
                    y: [0, -40, 50, -30, 40, -60, 30, 0]
                  } : {
                    // Other conditions: Individual movement patterns
                    scale: 1,
                    x: [
                      0, 
                      Math.sin(index * 2) * condition.movementRange, 
                      Math.cos(index * 3) * condition.movementRange * 0.8,
                      Math.sin(index * 4) * condition.movementRange * 0.6,
                      0
                    ],
                    y: [
                      0, 
                      Math.cos(index * 1.5) * condition.movementRange * 0.9, 
                      Math.sin(index * 2.5) * condition.movementRange * 0.7,
                      Math.cos(index * 3.5) * condition.movementRange * 0.5,
                      0
                    ]
                  } : {
                    scale: 0
                  }
                }
                transition={{
                  scale: { duration: 0.8, delay: 0.6 + index * 0.1 },
                  x: { 
                    duration: condition.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  },
                  y: { 
                    duration: condition.duration * 0.8, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Text */}
              <motion.text
                x={condition.x}
                y={condition.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="11"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                initial={{ opacity: 0 }}
                animate={isVisible ? 
                  condition.name === "MENTAL HEALTH" ? {
                    // MENTAL HEALTH: Same migration pattern as circle
                    opacity: 1,
                    x: [0, 80, -60, 100, -80, 70, -90, 0],
                    y: [0, -40, 50, -30, 40, -60, 30, 0]
                  } : {
                    // Other conditions: Match their circle movement
                    opacity: 1,
                    x: [
                      0, 
                      Math.sin(index * 2) * condition.movementRange, 
                      Math.cos(index * 3) * condition.movementRange * 0.8,
                      Math.sin(index * 4) * condition.movementRange * 0.6,
                      0
                    ],
                    y: [
                      0, 
                      Math.cos(index * 1.5) * condition.movementRange * 0.9, 
                      Math.sin(index * 2.5) * condition.movementRange * 0.7,
                      Math.cos(index * 3.5) * condition.movementRange * 0.5,
                      0
                    ]
                  } : { 
                    opacity: 0
                  }
                }
                transition={{
                  opacity: { duration: 0.6, delay: 1.0 + index * 0.1 },
                  x: { 
                    duration: condition.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  },
                  y: { 
                    duration: condition.duration * 0.8, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }
                }}
              >
                {condition.name.length > 8 ? (
                  <>
                    <tspan x={condition.x} dy="-6">{condition.name.split(' ')[0]}</tspan>
                    <tspan x={condition.x} dy="12">{condition.name.split(' ')[1] || ''}</tspan>
                  </>
                ) : (
                  condition.name
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