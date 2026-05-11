import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll for sticky pill background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Active Links
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -60% 0px', // Trigger when section passes the upper middle of the screen
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <m.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[600px] flex justify-center"
      >
        <div 
          className={`w-full flex justify-between items-center px-4 py-3 rounded-[50px] transition-all duration-300 ease-in-out border ${
            scrolled 
              ? 'bg-[rgba(2,6,23,0.75)] backdrop-blur-[16px] border-[rgba(255,255,255,0.08)] shadow-lg' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Square Logo Initials */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent text-bg font-sans font-extrabold flex items-center justify-center rounded-md group-hover:bg-accent/80 transition-colors">
              SS
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 group 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                  after:bg-accent after:origin-left after:transition-transform after:duration-300 
                  ${activeSection === item.id ? 'text-accent after:scale-x-100' : 'text-text-secondary hover:text-accent after:scale-x-0 group-hover:after:scale-x-100'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-text-primary p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </m.header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[rgba(2,6,23,0.95)] flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-8 right-8 text-text-primary p-2 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((item, idx) => (
                <m.a 
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-display font-bold transition-colors ${
                    activeSection === item.id ? 'text-accent' : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {item.name}
                </m.a>
              ))}
              <m.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length }}
                href="/assets/Sanket_Shendge.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 px-8 py-3 text-lg font-bold text-bg bg-accent rounded-full hover:bg-accent/80 transition-all"
              >
                Resume
              </m.a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;