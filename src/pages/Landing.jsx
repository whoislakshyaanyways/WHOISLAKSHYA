import React from "react";
import { Link } from "react-router-dom";

import MobileLanding from "./MobileLanding";
import useIsMobile from "../hooks/useIsMobile";

import BMC from "../assets/Icons/BMC.avif";
import Github from "../assets/Icons/github.png";
import Instagram from "../assets/Icons/Instagram.webp";
import Youtube from "../assets/Icons/Youtube.png";

const Landing = () => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileLanding />;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-zinc-200">
      <div className="relative z-10 h-full flex flex-col">

        {/* Header */}
        <header className="py-10 text-center">
          <p
            className="text-[clamp(1.5rem,5vw,4.5rem)]"
            style={{ fontFamily: "Bebas Neue" }}
          >
            What Portfolio
          </p>
          <p
            className="text-[clamp(0.8rem,2.5vw,2rem)]"
            style={{ fontFamily: "Michroma" }}
          >
            do you want to view??
          </p>
        </header>

        {/* Main Section */}
        <main className="flex-1 grid grid-cols-[auto_1fr_auto] items-center">

          {/* Left Vertical Text */}
          <div
            className="text-[clamp(0.8rem,2vw,1.8rem)] tracking-[0.6rem]"
            style={{
              fontFamily: "Bebas Neue",
              writingMode: "vertical-rl",
            }}
          >
            Tech Stuff
          </div>
          
            {/* Center Buttons */}
            <div className="flex flex-col items-center justify-between h-full py-10 z-10">

              <Link to="/zero">
                <button className="px-8 py-4 rounded-3xl bg-zinc-700 text-white font-semibold hover:bg-opacity-70 transition shadow-md">
                  Tech Portfolio
                </button>
              </Link>

              <div className="text-center max-w-xs space-y-2">
                <h1 className="text-xl font-bold text-gray-900">
                  Lakshya Sharma
                </h1>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Created to Create
                </p>
                <p className="text-base text-gray-600">
                  A collection of my skills, work and things that get me going.
                </p>
              </div>

              <Link to="/one">
                <button className="px-8 py-4 rounded-3xl bg-zinc-700 text-white font-semibold hover:bg-opacity-70 transition shadow-md">
                  Creative Portfolio
                </button>
              </Link>
            </div>


          {/* Right Vertical Text */}
          <div
            className="text-[clamp(0.8rem,2vw,1.8rem)] tracking-[0.6rem]"
            style={{
              fontFamily: "Bebas Neue",
              writingMode: "vertical-rl",
            }}
          >
            Creative Stuff
          </div>
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-center pb-10">
          <div className="w-[320px] text-center text-gray-600">

            <a
              href="https://buymeacoffee.com/whoislakshyaaanyways"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full overflow-hidden">
                <img src={BMC} alt="logo" className="w-full h-full object-cover" />
              </div>
            </a>

            <h1 className="text-lg font-medium">Buy me a coffee? :3</h1>

            <div className="w-16 h-[2px] bg-gray-300 mx-auto my-4" />

            <div className="flex justify-between px-10 grayscale">
              <a href="https://github.com/whoislakshyaanyways" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="icon" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/whoislakshyaanyways" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="icon" className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/@WhoisLakshyaanyways" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="icon" className="w-8 h-8" />
              </a>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
