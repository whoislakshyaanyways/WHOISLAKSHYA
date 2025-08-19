import React, { useRef } from 'react';
import './TechStack.css';

import cpp from '../../../../assets/logos/c++.png';
import jsLogo from '../../../../assets/logos/javascript.webp';
import reactLogo from '../../../../assets/logos/React.webp';
import pythonLogo from '../../../../assets/logos/python.png';
import Card from './Card/Card';

function TechStack (){
  const skill3Container = useRef();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div ref={skill3Container} className="skill3Box">Tech stack
      <Card 
        Style={isMobile 
          ? { rotate: "-40deg", top: "60%", left: "40%" } 
          : { rotate: "-45deg", top: "55%", left: "47%" }}
        Text="SQL"
        containerRef={skill3Container}
      />
      <Card 
        Style={isMobile 
          ? { rotate: "-30deg", top: "70%", left: "73%" } 
          : { rotate: "-60deg", top: "65%", left: "71%" }}
        Image={cpp}
        containerRef={skill3Container}
      />
      <Card 
        Style={isMobile 
          ? { rotate: "-15deg", top: "70%", left: "3%" } 
          : { rotate: "-40deg", top: "68%", left: "-0.4%" }}
        Image={pythonLogo}
        containerRef={skill3Container}
      />
      <Card 
        Style={isMobile 
          ? { rotate: "45deg", top: "55%", left: "-3%" } 
          : { rotate: "45deg", top: "52%", left: "-4%" }}
        Text="HTML/CSS"
        containerRef={skill3Container}
      />
      <Card 
        Style={isMobile 
          ? { rotate: "-25deg", top: "72%", left: "15%" } 
          : { rotate: "-49deg", top: "73%", left: "12%" }}
        Image={jsLogo}
        containerRef={skill3Container}
      />
      <Card 
        Style={isMobile 
          ? { rotate: "-35deg", top: "50%", left: "3%" } 
          : { rotate: "-57deg", top: "51%", left: "0.1%" }}
        Image={reactLogo}
        containerRef={skill3Container}
      />
      <Card 
        Style={isMobile 
          ? { rotate: "70deg", top: "45%", left: "60%"} 
          : { rotate: "90deg", top: "50%", left: "70%"}}
        Text="GITHUB"
        containerRef={skill3Container}
      />
    </div>
  )
}

export default TechStack;
