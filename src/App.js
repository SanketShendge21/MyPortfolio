import React, { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Qualification = lazy(() => import('./components/Qualification'));
const Contact = lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="h-screen flex items-center justify-center bg-bg">
    <div className="w-8 h-8 rounded-full bg-accent animate-pulse"></div>
  </div>
);

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Home />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Projects />
          <Qualification />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Analytics />
    </LazyMotion>
  );
}

export default App;
