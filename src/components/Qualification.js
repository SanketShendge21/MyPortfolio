import React, { useRef } from 'react';
import { m, useScroll } from 'framer-motion';
import { fadeUpVariant, staggerContainer, lineExpandVariant } from '../lib/animations';
import { timelineData } from '../data/portfolio';

function Qualification() {
  const containerRef = useRef(null);
  
  // Drives the SVG timeline drawing animation based on scroll depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <m.section 
      id="qualification" 
      className="py-24 px-6 bg-bg relative z-10" 
      ref={containerRef}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-5xl mx-auto">
        <m.div variants={fadeUpVariant} className="mb-20 text-center">
          <h2 className="text-[2.5rem] font-sans font-extrabold text-text-primary tracking-tight inline-block relative pb-2">
            Experience & Education
            <m.span 
              variants={lineExpandVariant}
              className="absolute bottom-0 left-0 w-full h-[3px] bg-accent origin-left"
            />
          </h2>
        </m.div>

        <div className="relative">
          
          {/* Animated SVG Timeline Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <svg viewBox="0 0 2 100" className="w-full h-full" preserveAspectRatio="none">
               {/* Faint static track */}
               <line 
                 x1="1" y1="0" x2="1" y2="100" 
                 stroke="var(--color-border)" 
                 strokeWidth="2" 
                 vectorEffect="non-scaling-stroke" 
               />
               {/* Animated scroll-driven path */}
               <m.line 
                 x1="1" y1="0" x2="1" y2="100" 
                 stroke="var(--color-accent)" 
                 strokeWidth="2" 
                 vectorEffect="non-scaling-stroke" 
                 style={{ pathLength: scrollYProgress }}
               />
            </svg>
          </div>

          <m.div variants={staggerContainer} className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <m.div key={idx} variants={fadeUpVariant} className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Glowing Node Dot */}
                  <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent z-10 mt-6 md:mt-0 shadow-[0_0_12px_rgba(19,255,170,0.6)] border-2 border-bg"></div>

                  {/* Node Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-surface p-8 rounded-[16px] border border-border shadow-sm hover:shadow-hover transition-all duration-300">
                       <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                         <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest ${item.type === 'work' ? 'bg-accent/10 text-accent' : 'bg-accent-secondary/10 text-accent-secondary'}`}>
                           {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                         </span>
                       </div>
                       <span className="font-mono text-sm font-semibold text-text-secondary block mb-3 uppercase tracking-wider">{item.date}</span>
                       <h3 className="text-xl font-sans font-bold text-text-primary mb-2">{item.title}</h3>
                       <p className="text-text-secondary">{item.institution}</p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </div>
    </m.section>
  );
}

export default Qualification;