import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./UI/Buttons/Button";
import FeatureCard from "./FeatureCard";

const features = [
  {
    category: "In production",
    title: "Anaadi",
    subtitle: "",
    backgroundClass: "bg-zinc-300",
  },  
  {
    category: "In production",
    title: "Civic Lense",
    subtitle: "Civic Lense is an app that makes reporting civic issues simple and effective. Users can photograph problems like potholes, garbage, broken roads, or electric hazards, and the app automatically geo-tags and timestamps the report before sending it to the correct government authority. The platform also lets users discuss civic issues in city- or state-based forums, creating a leaderboard that motivates regions to improve civic responsibility. It addresses two main barriers: confusion over which agency handles complaints and fear of personal disclosure, allowing users to report anonymously.",
    backgroundClass: "bg-zinc-500",
  },
  {
    category: "In production",
    title: "Virtual Pet",
    subtitle: "Virtual Pet is a hybrid software + hardware personal assistant designed to help users manage tasks, habits, and daily journaling in an engaging, emotional way. On the software side, it functions as a task manager, habit tracker, journal keeper, and personal assistant, where users can log tasks, reflect on their day, and track consistency over time.",
    backgroundClass: "bg-zinc-400",
  },
  {
    category: "In production",
    title: "Skyline",
    subtitle: "Skyline is a web-based productivity app that turns focused work into a growing city. Using the Pomodoro technique, users work in timed sessions (25–120 minutes) to construct or upgrade buildings on a 10x10 city grid. Completing a session successfully builds or upgrades a structure, while quitting early leaves ruins, giving immediate visual feedback. Over time, the city evolves with day/night cycles, animated buildings, and ambient sounds, creating a unique skyline that reflects the user’s focus habits. The app saves progress locally, letting users watch their personal city grow as they stay productive.",
    backgroundClass: "bg-zinc-500",
  },  
  {
    category: "In production",
    title: "Campus Hangout",
    subtitle: "A campus-based social platform that helps students create and discover real-world hangouts within their university. Users can host or join hangouts based on type, location, and time, with a minimum of five participants required to activate a hangout. Students sign up using their university ID or mobile number and earn scores for hosting or attending hangouts based on participation and engagement, leading to separate leaderboards for hosts and attendees. The platform also enables users to connect with friends, receive notifications about ongoing hangouts, and build active campus communities.",
    backgroundClass: "bg-zinc-300",
  },  
  {
    category: "In production",
    title: "Web Games",
    subtitle: "A group of Web games to pass your time",
    backgroundClass: "bg-zinc-400",
  }
];

const HorizontalScroll = () => {
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
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            category={feature.category}
            title={feature.title}
            subtitle={feature.subtitle}
            backgroundClass={feature.backgroundClass}
          />
        ))}
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

export default HorizontalScroll;
