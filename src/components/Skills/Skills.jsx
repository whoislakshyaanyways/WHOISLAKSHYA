import './Skills.css';
import { useRef } from 'react';


import Intro from './BentoBoxes/Intro/Intro';
import TechStack from './BentoBoxes/TechStack/TechStack';
import FullStack from './BentoBoxes/FullStack/FullStack';
import Mail from './BentoBoxes/Mail/Mail'


function Skills() {

  return (
    <div className="bento">

{/* Intro Box */}

      <div className="skill skill1">
        <Intro></Intro>
      </div>

{/* Web Dev box */}

      <div className="skill skill2">
        <FullStack></FullStack>
      </div>
      
{/* Tech Stack box */}

      <div className="skill skill3">
        <TechStack ></TechStack>
      </div>

{/* Mail me box */}

      <div className="skill skill4">
        <Mail ></Mail>
      </div>
      
{/* Video Editing box */}

      {/*<div className="skill skill5">Video Editing</div>*/}
    </div>
    
  );
}

export default Skills;
