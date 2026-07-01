import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImgStick = ({ children, containerRef }) => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,       // the wrapper div is the trigger
        endTrigger: containerRef.current, // unpin only after the whole section passes

        start: "bottom 90%",        // pins when bottom of div hits 90% of viewport
        end: "bottom 80%",          // releases when bottom of parent section leaves viewport

        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};

export default ImgStick;