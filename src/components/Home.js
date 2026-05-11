import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { bio, roles } from '../data/portfolio';

function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 relative bg-dot-grid overflow-hidden">
      
      {/* Pure CSS Aurora Background */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column - Text Content */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-start"
        >
          {/* Small Monospace Label */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-text-primary tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-sans font-extrabold leading-[1.1] tracking-[-3px] text-text-primary mb-4">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              {bio.name.split(' ')[0]}
            </span>
          </h1>
          
          {/* Role Cycling Animation */}
          <div className="h-[40px] md:h-[48px] overflow-hidden mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <m.div
                key={currentRoleIndex}
                className="flex flex-wrap gap-x-2 text-2xl md:text-3xl font-sans font-bold text-text-secondary"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  },
                  exit: {
                    opacity: 0,
                    y: -10,
                    transition: { duration: 0.2 }
                  }
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {roles[currentRoleIndex].split(" ").map((word, index) => (
                  <m.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                    }}
                  >
                    {word}
                  </m.span>
                ))}
              </m.div>
            </AnimatePresence>
          </div>
          
          <p className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed">
            {bio.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/assets/Sanket_Shendge.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
          </div>
        </m.div>

        {/* Right Column - Image Card */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 relative mx-auto lg:ml-auto max-w-md w-full"
        >
          <div className="relative z-10 bg-card rounded-[20px] p-2 border border-border shadow-[0_0_30px_rgba(19,255,170,0.15)] transition-shadow hover:shadow-[0_0_40px_rgba(19,255,170,0.25)]">
            <img 
              src="/assets/img/Sanket_Sachin_Shendge_Photo.png" 
              loading="lazy"
              alt={bio.name}
              width={600}
              height={800}
              className="w-full h-auto aspect-[4/5] object-cover rounded-[16px]"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800/1E293B/94A3B8?text=Photo+Placeholder'; }}
            />
          </div>
        </m.div>
        
      </div>
    </section>
  );
}

export default Home;