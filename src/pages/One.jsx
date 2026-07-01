import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"

import Hero from "../sections/Tech/TechHero"
import About from '../sections/Creative/About';
import Services from '../sections/Creative/Services';
import ProfessionalWork from '../sections/Creative/ProfessionalWork';
import PersonalWork from '../sections/Creative/PersonalWork';
import Contact from '../sections/Creative/Contact';

const One = () => {
  return (
    <div className="Page relative min-h-screen">

      <section id="hero">
        <Hero />
      </section>    

      <section id='About'>
        <About />
      </section>        
      
      <section id='Services'>
        <Services />
      </section>        
      
      <section id='ProfessionalWork'>
        <ProfessionalWork />
      </section>            
      
      <section id='PersonalWork'>
        <PersonalWork />
      </section>  

      <section id='Contact'>
        <Contact />
      </section>

    </div>
  )
}

export default One