// import logo from './logo.svg';
import './App.css';


import React from 'react';
// import SweetAlert from 'sweetalert-react';
// import { useState } from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particle from './components/Particle.js';

function App() {

  
  return (
    <>
    <Navbar  />
    <Particle></Particle>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Qualification />
    <Contact />
    <Footer />
    
    </>
  );
}

export default App;
