import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextSliderItem from "./animations/TextSliderItem";

function Island() {
  const islandRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      islandRef.current,
      { y: 100, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div
    ref={ islandRef }
    className="fixed bottom-0 left-0 w-full z-[999] flex justify-center p-[clamp(0.5rem,2vw,1.5rem)] pointer-events-none">
      
    <div className="w-full flex justify-center mt-6">
      <div className="bg-black text-white rounded-2xl px-6 py-3 flex items-center gap-8 shadow-lg">
        <span className="text-gray-400 cursor-pointer hover:text-white transition">
          All Work
        </span>

        <span className="text-white font-medium cursor-pointer">
          Discover
        </span>

        <button className="text-white text-xl font-bold hover:scale-110 transition">
          +
        </button>
      </div>
    </div>
    </div>
  );
}

export default Island;