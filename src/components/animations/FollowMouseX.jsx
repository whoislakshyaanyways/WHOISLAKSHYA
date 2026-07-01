import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const FollowMouseX = ( { containerRef, imgRef, src, style} ) => {

    const x = useMotionValue(0);
    const smoothX = useSpring(x, {stiffness: 200, damping: 30});

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const imgWidth = imgRef.current.offsetWidth;

            const halfWidth = imgWidth / 2;

            let mouseX = e.clientX;

            const minX = rect.left + halfWidth;
            const maxX = rect.right - halfWidth;

            const clampedX = Math.max(minX, Math.min(mouseX, maxX));
            const localX = clampedX - rect.left;

            const strength = 0.2;

            x.set(localX * strength + x.get() * (1-strength));
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x]);

  return (
                <motion.img
                    ref={imgRef}
                    src={src}
                    alt=""
                    style={{
                    ...style,
                    position: "absolute",
                    left: smoothX,
                    top: "50%", 
                    translateX: "-50%",
                    translateY: "-50%",
                    pointerEvents: "none",
                    }}
                    className="h-full object-contain rounded-xl"
                />
  )
}

export default FollowMouseX


