import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORK_DATA = [
  {
    id: '1',
    title: '(1) BRAND STRATEGY',
    description: 'Helping brands uncover their purpose and game plan and then building a brand identity to deliver it to win.',
    tags: ['Research & Insights', 'Business models', 'Competitive Study', 'Deep case study', 'Voice & Tone', 'Workshops'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    title: '(2) DESIGN',
    description: 'Designing digital products with clarity, precision, and a deep appreciation for visual storytelling.',
    tags: ['Identity Design', 'UI', 'UX', 'Web Design', 'Product Design'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: '(3) DEVELOPMENT',
    description: 'Developing modern web experiences that are performant, scalable, and crafted with attention to every detail.',
    tags: ['React', 'Tailwind CSS', 'Frontend', 'Backend', 'APIs', 'Performance'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getLineHeight = () => {
    if (activeIndex === 0) return '20%';
    if (activeIndex === 1) return '55%';
    return '100%';
  };

  return (
    <div className="bg-black px-5">
      <div className="relative bg-white px-16">

        <div className="sticky top-0 h-screen w-1/2 float-left flex items-center z-10 pointer-events-none">

          <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-black/10">
            <div
              style={{ height: getLineHeight() }}
              className="w-full bg-black transition-all duration-500 ease-out origin-top"
            />
          </div>

          <div className="flex flex-col w-full pl-8 pointer-events-auto">
            <p className="text-xl text-neutral-800 font-medium mb-10 font-sans tracking-tight">
              Collaborating with founders, brands, and companies to create experiences that help brands grow with
            </p>

            <div className="flex flex-col gap-4">
              {WORK_DATA.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={item.id} className="flex flex-col w-full overflow-hidden">
                    <h2
                      className={`text-6xl font-black w-full tracking-tighter select-none font-sans transition-colors duration-500 ${
                        isActive ? 'text-black' : 'text-black/20'
                      }`}
                    >
                      {item.title}
                    </h2>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            marginTop: 12,
                            transition: {
                              height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                              opacity: { duration: 0.25, delay: 0.1 }
                            }
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            marginTop: 0,
                            transition: {
                              height: { duration: 0.3, ease: 'easeInOut' },
                              opacity: { duration: 0.15 }
                            }
                          }}
                        >
                          <p className="text-neutral-600 font-medium max-w-sm leading-relaxed pb-2"
                            style={{ fontSize: 'clamp(16px, 2vw, 28px)' }}  // 👈 2x bigger description
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen w-1/2 float-right flex items-center justify-center z-10">
          <div className="relative w-3/4 h-1/2 rounded-2xl overflow-hidden bg-black/5 shadow-md">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={WORK_DATA[activeIndex].image}
                alt={WORK_DATA[activeIndex].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </AnimatePresence>
          </div>
        </div>

        {WORK_DATA.map((item, index) => (
          <motion.div
            key={`trigger-${item.id}`}
            className="h-screen w-full relative z-0 clear-both"
            viewport={{ amount: 0.5 }}
            onViewportEnter={() => setActiveIndex(index)}
          />
        ))}

      </div>
    </div>
  );
};

export default Services;
