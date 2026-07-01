import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"

import TechHero from '../sections/Tech/TechHero';
import AbtMe from '../sections/Tech/AbtMe';
import Projects from '../sections/Tech/Projects';
import Service from "../sections/Tech/Services"
import TechStack from '../sections/Tech/TechStack';
import ContactMe from '../sections/Tech/ContactMe';


const Zero = () => {
  return (
        
    <div className="Page relative min-h-screen">

      <section id="hero">
        <TechHero />
      </section> 

      <section id="abtMe">
        <AbtMe />  
      </section>   

      <section id="projects">
        <Projects />
      </section>    
      
      <section id="services">
        <Service />
      </section>

      <section id="techStack">
        <TechStack />
      </section>

      <section id="contactMe">
        <ContactMe />
      </section>
    </div>
  )
}

export default Zero