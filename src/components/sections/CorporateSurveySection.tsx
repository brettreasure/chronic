"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TextBox } from '@/components/ui/TextBox';
import { CorporateTextBox } from '@/components/ui/CorporateTextBox';
import { HorizontalBarChart } from '@/components/charts/HorizontalBarChart';
import { VerticalBarChart } from '@/components/charts/VerticalBarChart';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { ChronicConditionsInfographic } from '@/components/ui/ChronicConditionsInfographic';
import { BenefitsInfographic } from '@/components/ui/BenefitsInfographic';
import { surveyData } from '@/data/surveyData';

export function CorporateSurveySection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [isBenefitsVisible, setIsBenefitsVisible] = useState(false);
  const [is82BVisible, setIs82BVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const corporateTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === benefitsRef.current) {
            setIsBenefitsVisible(entry.isIntersecting);
          } else if (entry.target === corporateTextRef.current) {
            setIs82BVisible(entry.isIntersecting);
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

    if (corporateTextRef.current) {
      observerRef.current?.observe(corporateTextRef.current);
    }

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
                    <>
                      <motion.div
                        className="mb-16"
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
                    </>
                  )}
                  <motion.p
                    className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-body text-center max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index === 0 ? 0.4 : 0.2 }}
                  >
                    {item.text}
                  </motion.p>
                  {item.footnote && (
                    <motion.p
                      className="text-sm text-gray-600 dark:text-gray-400 font-body text-center max-w-2xl leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index === 0 ? 0.6 : 0.4 }}
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
                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={visibleItems.has(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <CircularProgress
                        percentage={84}
                        isVisible={visibleItems.has(index)}
                        size={200}
                        strokeWidth={24}
                      />
                    </motion.div>
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
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Corporate $82B TextBox Section */}
        <div
          ref={corporateTextRef}
          className="mb-32 last:mb-16"
        >
          <div className="min-h-screen flex items-center justify-center">
            <CorporateTextBox
              heading="$82B"
              text={`$82 billion annually: cost to the Australian economy (more than we spend on defence)<sup><a href="https://www.aihw.gov.au/reports/health-welfare-expenditure/health-system-spending-on-disease-and-injury-aus/contents/summary" target="_blank" rel="noopener noreferrer" class="underline hover:text-[#004146] transition-colors">1</a></sup><br/><br/>Annual productivity losses to business: $32B<sup><a href="https://www.medibank.com.au/content/dam/client/documents/pdfs/The_health_of_Australia's_workforce.pdf" target="_blank" rel="noopener noreferrer" class="underline hover:text-[#004146] transition-colors">2</a></sup>`}
              isVisible={is82BVisible}
              variant="dark-cyan"
            />
          </div>
        </div>
        
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
              <BenefitsInfographic isVisible={isBenefitsVisible} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}