import React, { useRef } from 'react';

import cpp from '../../../../assets/logos/c++.png';
import jsLogo from '../../../../assets/logos/javascript.webp';
import reactLogo from '../../../../assets/logos/React.webp';
import pythonLogo from '../../../../assets/logos/python.png';
import tailwindCssLogo from '../../../../assets/logos/Tailwind_CSS_Logo.svg.png';
import mongoDBLogo from '../../../../assets/logos/mongodb-logo-png_seeklogo-481256.png';
import Card from '../../../../components/UI/TechStackCard';

function TechStack() {
  const skill3Container = useRef();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const cards = [
    {
      text: 'SQL',
      style: {
        mobile: { rotate: '-45deg', top: '65%', left: '73%' },
        desktop: { rotate: '90deg', top: '55%', left: '70%' },
      },
    },
    {
      text: 'Fast API',
      style: {
        mobile: { rotate: '-30deg', top: '70%', left: '30%' },
        desktop: { rotate: '-60deg', top: '45%', left: '60%' },
      },
    },
    {
      image: cpp,
      style: {
        mobile: { rotate: '-30deg', top: '70%', left: '45%' },
        desktop: { rotate: '30deg', top: '75%', left: '32%' },
      },
    },    
    {
      text: 'Django',
      style: {
        mobile: { rotate: '60deg', top: '70%', left: '47%' },
        desktop: { rotate: '30deg', top: '70%', left: '25%' },
      },
    },
    {
      image: pythonLogo,
      style: {
        mobile: { rotate: '-15deg', top: '70%', left: '3%' },
        desktop: { rotate: '-40deg', top: '70%', left: '60%' },
      },
    },
    {
      text: 'HTML/CSS',
      style: {
        mobile: { rotate: '60deg', top: '60%', left: '10%' },
        desktop: { rotate: '60deg', top: '50%', left: '-7%' },
      },
    },
    {
      image: jsLogo,
      style: {
        mobile: { rotate: '-25deg', top: '72%', left: '10%' },
        desktop: { rotate: '-49deg', top: '80%', left: '10%' },
      },
    },
    {
      image: reactLogo,
      style: {
        mobile: { rotate: '-35deg', top: '45%', left: '3%' },
        desktop: { rotate: '-57deg', top: '60%', left: '0%' },
      },
    },
    {
      image: tailwindCssLogo,
      style: {
        mobile: { rotate: '-30deg', top: '70%', left: '83%' },
        desktop: { rotate: '-60deg', top: '80%', left: '77%' },
      },
    },
    {
      image: mongoDBLogo,
      style: {
        mobile: { rotate: '-35deg', top: '70%', left: '25%' },
        desktop: { rotate: '-57deg', top: '80%', left: '0%' },
      },
    },
    {
      text: 'GITHUB',
      style: {
        mobile: { rotate: '70deg', top: '60%', left: '85%' },
        desktop: { rotate: '90deg', top: '50%', left: '85%' },
      },
    },
  ];

  return (
    <div
      ref={skill3Container}
      className="h-full w-full rounded-[1rem] font-bebas bg-[var(--accent)] flex items-center justify-center text-[clamp(3rem,9vw,10.5rem)] text-[var(--text)] relative overflow-hidden"
    >
      Tech stack

      {cards.map((card, index) => (
        <Card
          key={index}
          Style={isMobile ? card.style.mobile : card.style.desktop}
          Text={card.text}
          Image={card.image}
          containerRef={skill3Container}
        />
      ))}
    </div>
  );
}

export default TechStack;
