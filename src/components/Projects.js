import React from 'react';
import { m } from 'framer-motion';
import { fadeUpVariant, staggerContainer, lineExpandVariant } from '../lib/animations';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { personalProjects } from '../data/portfolio';

const Projects = () => {
  return (
    <m.section 
      id="projects" 
      className="py-24 px-6 bg-bg-secondary relative z-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <m.div variants={fadeUpVariant} className="mb-12">
          <h2 className="text-[2.5rem] font-sans font-extrabold text-text-primary inline-block relative pb-2 tracking-tight">
            Selected Work
            <m.span 
              variants={lineExpandVariant}
              className="absolute bottom-0 left-0 w-full h-[3px] bg-accent origin-left"
            />
          </h2>
        </m.div>
        
        {/* Bento Grid */}
        <m.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {personalProjects.map((project, idx) => (
            <m.div 
              key={idx}
              variants={fadeUpVariant}
              className={`col-span-1 ${project.featured ? 'md:col-span-8' : 'md:col-span-4'}`}
            >
              <Card className="group h-full flex flex-col bg-card border-border overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
                
                <div className="h-[3px] w-full bg-gradient-to-r from-accent to-accent-secondary" />
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <CardTitle className="text-2xl font-sans font-bold text-text-primary">
                      {project.name}
                    </CardTitle>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.publication && (
                        <Badge variant="secondary" className="uppercase tracking-wider text-accent border-accent/30 bg-accent/10">
                          📄 Published
                        </Badge>
                      )}
                      {project.featured && (
                        <Badge variant="amber" className="uppercase tracking-wider">
                          ★ Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-text-secondary leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <Badge key={tech} variant="secondary" className="font-mono bg-surface text-text-secondary border-border hover:bg-surface/80 rounded-md">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-border/50 gap-2">
                  {project.sourceCode && (
                    <Button variant="ghost" size="sm" asChild className="text-text-primary hover:text-accent font-medium px-0 mr-4">
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.livePreview && (
                    <Button variant="ghost" size="sm" asChild className="text-text-primary hover:text-accent font-medium px-0">
                      <a href={project.livePreview} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
                
              </Card>
            </m.div>
          ))}
        </m.div>
      </div>
    </m.section>
  );
};

export default Projects;