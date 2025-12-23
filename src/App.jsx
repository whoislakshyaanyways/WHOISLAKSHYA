import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"

import NavBar from './components/NavBar';
import Island from './components/Island/Island';
import Hero from './Pages/Hero/Hero';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import ContactMe from './Pages/ContactMe/ContactMe';

import './App.css';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    
    <div className="Page relative min-h-screen" data-theme={!isDark ? "dark" : "light"}>
    
      <section id="NavBar">
        <NavBar 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <Island />
      </section>

      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section> 

      <section id="skills">
        <Skills />
      </section>

      <section id="contactMe">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
