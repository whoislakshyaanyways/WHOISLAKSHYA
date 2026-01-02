import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./UI/Buttons/Button";
import FeatureCard from "./FeatureCard";

const Pjs = ({ }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440; // card width + gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };



  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth-custom pl-20"
      >
        <FeatureCard />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-12 flex gap-3">
        <Button
          variant="ghost"
          size="icon"
          className={`w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 ${
            !canScrollLeft ? "opacity-40 cursor-not-allowed" : ""
          }`}
          onClick={() => scroll("left")}

          disabled={!canScrollLeft}
        >
          <ChevronLeft className="w-5 h-5 text-slate-900" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={`w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 ${
            !canScrollRight ? "opacity-40 cursor-not-allowed" : ""
          }`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <ChevronRight className="w-5 h-5 text-slate-900" />
        </Button>
      </div>
    </div>
  );
};

export default Pjs;
