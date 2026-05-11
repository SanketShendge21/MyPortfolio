import React from 'react';
import { m } from 'framer-motion';
import { fadeUpVariant, staggerContainer, lineExpandVariant } from '../lib/animations';
import { bio, certifications } from '../data/portfolio';

function About() {
  return (
    <m.section 
      id="about" 
      className="py-24 px-6 bg-bg-secondary border-t border-border overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <m.div variants={fadeUpVariant} className="mb-12">
          <h2 className="text-[2.5rem] font-display font-bold text-text-primary inline-block relative pb-2">
            About Me
            <m.span 
              variants={lineExpandVariant}
              className="absolute bottom-0 left-0 w-full h-[3px] bg-accent origin-left"
            />
          </h2>
        </m.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text */}
          <m.div variants={fadeUpVariant} className="lg:col-span-7 space-y-6 border-l-[3px] border-accent pl-6">
            {bio.about.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </m.div>

          {/* Right Column: Key Facts Card */}
          <m.div variants={fadeUpVariant} className="lg:col-span-5 space-y-6">
            <div className="bg-bg-card p-8 rounded-[16px] border border-border shadow-card hover:shadow-hover transition-shadow duration-300">
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">Key Metrics</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {bio.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-4xl font-display font-bold text-accent mb-1">{metric.value}</span>
                    <span className="text-sm font-mono font-medium text-text-muted uppercase tracking-wider">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-bg-card p-6 rounded-[16px] border border-border">
              <h3 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </m.div>

        </div>
      </div>
    </m.section>
  );
}

export default About;