import React from 'react';
import { m } from 'framer-motion';
import { fadeUpVariant, staggerContainer, lineExpandVariant } from '../lib/animations';

// Curated list of premium engineering skills (removed basic/assumed skills)
const coreSkills = [
  // Languages
  { name: "Python", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "C#", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "C/C++", category: "Language" },
  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "React Three Fiber", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  // Backend & APIs
  { name: "Node.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "ASP.NET Razor", category: "Backend" },
  { name: "Microservices", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },
  { name: "WebSocket", category: "Backend" },
  // AI / ML
  { name: "LLM Integration", category: "AI / ML" },
  { name: "RAG Pipeline", category: "AI / ML" },
  { name: "NLP", category: "AI / ML" },
  { name: "Machine Learning", category: "AI / ML" },
  // Databases
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  // Cloud & DevOps
  { name: "AWS", category: "Cloud/DevOps" },
  { name: "GCP", category: "Cloud/DevOps" },
  { name: "Azure", category: "Cloud/DevOps" },
  { name: "Docker", category: "Cloud/DevOps" },
];

const learningSkills = ["Agentic AI Workflows", "Distributed Systems", "Vector Databases"];

const TechIcon = () => (
  <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

function Skills() {
  // Duplicate array for seamless infinite scrolling
  const marqueeItems = [...coreSkills, ...coreSkills];

  return (
    <m.section
      id="skills"
      className="py-24 bg-bg overflow-x-hidden border-t border-border/50 relative z-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <m.div variants={fadeUpVariant}>
          <h2 className="text-[2.5rem] font-sans font-extrabold text-text-primary tracking-tight inline-block relative pb-2">
            Engineering Arsenal
            <m.span
              variants={lineExpandVariant}
              className="absolute bottom-0 left-0 w-full h-[3px] bg-accent origin-left"
            />
          </h2>
        </m.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden py-4">
        {/* Soft Fade Masks for clean entry/exit */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-3">
          {marqueeItems.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center bg-surface px-4 py-2 rounded-full whitespace-nowrap border border-border shadow-sm hover:border-accent transition-colors cursor-default"
            >
              <TechIcon />
              <span className="font-mono text-sm font-semibold text-text-primary">
                {skill.name}
              </span>
              <span className="ml-3 text-[10px] uppercase tracking-widest text-text-secondary bg-bg px-2.5 py-0.5 rounded-full border border-border/50">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Focus Section */}
      <m.div
        variants={fadeUpVariant}
        className="mt-20 text-center max-w-4xl mx-auto px-6"
      >
        <h3 className="text-sm font-mono font-bold text-text-secondary mb-6 flex items-center justify-center gap-2 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
          Current Focus
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {learningSkills.map((skill, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-full border border-amber/30 bg-amber/10 text-amber font-mono text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.1)] transform transition-transform hover:scale-105 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </m.div>
    </m.section>
  );
}

export default Skills;