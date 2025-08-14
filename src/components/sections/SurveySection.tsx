"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TextBox } from '@/components/ui/TextBox';
import { HorizontalBarChart } from '@/components/charts/HorizontalBarChart';
import { VerticalBarChart } from '@/components/charts/VerticalBarChart';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { surveyData } from '@/data/surveyData';

export function SurveySection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          } else {
            setVisibleItems(prev => {
              const newSet = new Set([...prev]);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px',
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {surveyData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            data-index={index}
            className="mb-32 last:mb-16"
          >
            <div className="min-h-screen flex items-center justify-center">
              {!item.hasGraph ? (
                <div className="flex flex-col items-center space-y-12">
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <CircularProgress
                        percentage={84}
                        isVisible={visibleItems.has(index)}
                        size={200}
                        strokeWidth={24}
                      />
                    </motion.div>
                  )}
                  <motion.p
                    className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-body text-center max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {item.text}
                  </motion.p>
                </div>
              ) : (
                <div className="w-full max-w-4xl space-y-16">
                  <TextBox
                    heading={item.heading}
                    text={item.text}
                    isVisible={visibleItems.has(index)}
                    variant={item.variant}
                  />
                  
                  {item.graph && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {item.isVerticalChart ? (
                        <VerticalBarChart
                          title={item.graph.title}
                          data={item.graph.data}
                          isVisible={visibleItems.has(index)}
                        />
                      ) : (
                        <HorizontalBarChart
                          title={item.graph.title}
                          data={item.graph.data}
                          isVisible={visibleItems.has(index)}
                        />
                      )}
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}