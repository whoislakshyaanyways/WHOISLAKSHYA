import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Right = ({
  children,
  xTo = "25vw",
  start = "top bottom",
  end = "top top",
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { x: "0%" },
        {
          x: xTo,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: start, 
            end: end,     
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [xTo, start, end]);

  return (
    <div ref={sectionRef} className="will-change-transform">
      {children}
    </div>
  );
};

export default Right;