import './Skills.css';
import { useRef } from 'react';
import Intro from './BentoBoxes/Intro/Intro';
import TechStack from './BentoBoxes/TechStack/TechStack';
import FullStack from './BentoBoxes/FullStack/FullStack';
import Mail from './BentoBoxes/Mail/Mail'
import ML from './BentoBoxes/Ml/ML'


function Skills() {

  return (
    <div className="bento h-screen p-[10vh] bg-zinc-200 mx-auto h-[90vh] w-auto max-w-none
    max-md:p-[5vh] max-md:pt-[15vh]">

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

{/* ML */}

      <div className="skill skill5">
        <ML ></ML>
      </div>

    </div>
    
  );
}

export default Skills;
