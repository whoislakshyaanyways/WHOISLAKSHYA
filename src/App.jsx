import NavBar from './components/NavBar/NavBar';
import Island from './components/Island/Island';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe'
import Loader from './components/Loader/Loader.jsx';

import React, { useState } from 'react';

import './App.css';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    
    <div className="Page" data-theme={!isDark ? "dark" : "light"}>

      <section id="loader">
        <Loader />
      </section>

{/*      <section id="NavBar">         
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
        <div className="Contact">
          <ContactMe />
        </div>
      </section>*/}
    </div>
  );
}

export default App;
