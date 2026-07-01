import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShrinkRotate = ({
  children,
  rotateTo = 0,       
  start = "top bottom",
  end = "top top",
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { scale: 1, rotation: 0 },
        {
          scale: 0.8,
          rotation: rotateTo,
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
  }, [rotateTo, start, end]);

  return (
    <div ref={sectionRef} className="will-change-transform">
      {children}
    </div>
  );
};


export default ShrinkRotate;