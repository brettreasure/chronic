"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TextBox } from '@/components/ui/TextBox';
import { CorporateTextBox } from '@/components/ui/CorporateTextBox';
import { HorizontalBarChart } from '@/components/charts/HorizontalBarChart';
import { VerticalBarChart } from '@/components/charts/VerticalBarChart';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { ChronicConditionsInfographic } from '@/components/ui/ChronicConditionsInfographic';
import { HealthBenefitsInfographic } from '@/components/ui/HealthBenefitsInfographic';
import { healthSurveyData } from '@/data/surveyData';

export function HealthSurveySection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [isBenefitsVisible, setIsBenefitsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === benefitsRef.current) {
            setIsBenefitsVisible(entry.isIntersecting);
          } else {
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

    if (benefitsRef.current) {
      observerRef.current?.observe(benefitsRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {healthSurveyData.map((item, index) => (
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
                <div className="flex flex-col items-center">
                  {index === 0 && (
                    <>
                      <motion.div
                        className="mb-32"
                        initial={{ opacity: 0, y: 30 }}
                        animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <ChronicConditionsInfographic 
                          isVisible={visibleItems.has(index)}
                          footnote={
                            <>
                              <a 
                                href="https://www.aihw.gov.au/reports/australias-health/chronic-conditions" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="underline hover:text-[#004146] transition-colors"
                              >
                                61% of Australians
                              </a>
                              {" have one chronic condition or more"}
                            </>
                          }
                        />
                      </motion.div>
                      
                      {/* $82B textbox positioned above the 84% circle */}
                      <motion.div
                        className="mb-32"
                        initial={{ opacity: 0, y: 30 }}
                        animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <CorporateTextBox
                          heading="$82B"
                          isVisible={visibleItems.has(index)}
                          variant="dark-cyan"
                        />
                      </motion.div>
                    </>
                  )}
                  {index === 0 && (
                    <motion.div
                      className="mt-12"
                      initial={{ opacity: 0, y: 30 }}
                      animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
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
                    className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-body text-center max-w-2xl leading-relaxed mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index === 0 ? 0.8 : 0.2 }}
                  >
                    {item.text}
                  </motion.p>
                  {item.footnote && (
                    <motion.p
                      className="text-sm text-gray-600 dark:text-gray-400 font-body text-center max-w-2xl leading-relaxed mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index === 0 ? 1.0 : 0.4 }}
                    >
                      {item.footnote?.startsWith('*') ? (
                        <>
                          <sup>*</sup>{item.footnote.substring(1)}
                        </>
                      ) : (
                        item.footnote
                      )}
                    </motion.p>
                  )}
                </div>
              ) : (
                <div className="w-full max-w-4xl space-y-16">
                  {item.isVerticalChart ? (
                    <div className="flex flex-col items-center space-y-12">
                      <motion.p
                        className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-body text-center max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {item.text}
                      </motion.p>
                      {item.graph && (
                        <motion.div
                          className="w-1/2"
                          initial={{ opacity: 0, y: 50 }}
                          animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          <VerticalBarChart
                            title={item.graph.title}
                            data={item.graph.data}
                            isVisible={visibleItems.has(index)}
                          />
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <>
                      <TextBox
                        heading={item.heading}
                        text={item.text}
                        isVisible={visibleItems.has(index)}
                        variant={item.variant}
                        footnote={item.footnote}
                      />
                      
                      {item.graph && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          <HorizontalBarChart
                            title={item.graph.title}
                            data={item.graph.data}
                            isVisible={visibleItems.has(index)}
                          />
                        </motion.div>
                      )}
                    </>
                  )}
                  
                  {/* Add VBHC quote after individual needs chart (index 3) */}
                  {index === 3 && (
                    <motion.div
                      className="mt-16 max-w-3xl mx-auto text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <div className="space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-body leading-relaxed">
                        <p>
                          <strong className="text-[#4fcdc4] italic">&ldquo;We know this system causes compliance, adherence and higher member engagement. There are measurable benefits to the health insurance industry and government.&rdquo;</strong>
                          <br />
                          - Katie Stewart, Co-founder
                        </p>
                      </div>
                    </motion.div>
                  )}

                </div>
              )}
            </div>
          </div>
        ))}

        {/* Add momentum text after improved symptoms chart (index 4) */}
        <motion.div
          className="mb-32 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-body text-center max-w-2xl leading-relaxed"
          >
            Momentum:{' '}
            <a 
              href="https://www.interwellhealth.com/resources/insights/healthcare-utilization-trends-in-2025-how-health-plans-use-value-based-care-to-manage-costs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4fcdc4] hover:text-[#004146] transition-colors no-underline"
            >
              growing payer interest
            </a>{' '}
            in value-based care models in the U.S.
          </motion.p>
        </motion.div>
        
        {/* Benefits Infographic Section */}
        <div
          ref={benefitsRef}
          className="mb-32 last:mb-16"
        >
          <div className="min-h-screen flex items-center justify-center">
            <motion.div
              className="w-full max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HealthBenefitsInfographic isVisible={isBenefitsVisible} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}