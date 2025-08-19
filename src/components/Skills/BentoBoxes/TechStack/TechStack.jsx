import React,{ useRef } from 'react';
import './TechStack.css';

import cpp from '../../../../assets/logos/c++.png'
import jsLogo from '../../../../assets/logos/javascript.webp';
import reactLogo from '../../../../assets/logos/React.webp';
import pythonLogo from '../../../../assets/logos/python.png';
import Card from './Card/Card';

function TechStack (){
      const skill3Container = useRef();
    
    return(
      <div ref={skill3Container} className="skill3Box">Tech stack
        <Card 
            Style={{ rotate: "-45deg", top: "55%", left: "47%" }}
            Text="SQL"
            containerRef={skill3Container}
        />
        <Card 
            Style={{ rotate: "-60deg", top: "65%", left: "69%", width: "4.8rem" }}
            Image={cpp}
            containerRef={skill3Container}
        />
        <Card 
            Style={{ rotate: "-40deg", top: "68%", left: "-0.4%", width: "5.5rem" }}
            Image={pythonLogo}
            containerRef={skill3Container}
        />
        <Card 
            Style={{ rotate: "45deg", top: "52%", left: "-4%", width: "14rem" }}
            Text="HTML/CSS"
            containerRef={skill3Container}
        />
        <Card 
            Style={{ rotate: "-49deg", top: "73%", left: "12%", width: "4.7rem" }}
            Image={jsLogo}
            containerRef={skill3Container}
        />
        <Card 
            Style={{ rotate: "-57deg", top: "51%", left: "0.1%", width: "4rem" }}
            Image={reactLogo}
            containerRef={skill3Container}
        />
        <Card 
            Style={{ rotate: "90deg", top: "40%", left: "65%", width: "14rem" }}
            Text="GITHUB"
            containerRef={skill3Container}
        />
      </div>
    )
}

export default TechStack;


