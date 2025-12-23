import React, { useState } from "react";
import Hamburger from "../UI/Buttons/Hamburger";
import { motion, AnimatePresence } from "framer-motion";

import './Island.css'


function Island() {
  const [menuOpen, setMenuOpen] = useState(false);
  const AbtMe = ["Web Developer", "Video Editor", "Cinematographer", "Public Speaker"];

  return (
    <div className="fixed bottom-0 p-[clamp(0.5rem,2vw,1.5rem)] w-full flex justify-center z-50">
      <div className="relative w-[clamp(80vw,50vw,40vw)] max-md:w-[90vw]">

        {/* DROPDOWN MENU */}
        <AnimatePresence>
          {menuOpen && (
            <div className="absolute bottom-full w-full rounded-t-2xl overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-neutral-900 p-[clamp(1rem,3vw,2rem)] text-white rounded-t-2xl"
              >
                <ul className="space-y-[clamp(0.5rem,1.5vw,1rem)] text-[clamp(1rem,2vw,1.4rem)] font-bold">
                  <li>
                    <a href="#hero" className="hover:underline cursor-pointer">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#projects" className="hover:underline cursor-pointer">
                      Projects
                    </a>
                  </li>

                  <li>
                    <a href="#skills" className="hover:underline cursor-pointer">
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#contactMe" className="hover:underline cursor-pointer">
                      Contact
                    </a>
                  </li>
                </ul>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ISLAND BAR */}
        <div
          className={`
            bg-black 
            flex items-center gap-[clamp(0.5rem,1.5vw,2rem)]
            p-[clamp(0.5rem,2vw,1rem)]
            h-[clamp(8vh,10vh,12vh)]
            transition-all
            ${menuOpen ? "rounded-b-2xl" : "rounded-2xl"}
            max-md:h-[clamp(7vh,9vh,10vh)]
          `}
        >

          {/* TEXT AREA */}
          <div className="flex flex-col gap-[clamp(0.2rem,1vw,0.6rem)] overflow-hidden w-full">

            {/* NAME */}
            <h1
              className="
                text-neutral-50 tracking-wide font-bold
                text-[clamp(1.2rem,2.4vw,2rem)]
                max-md:text-[clamp(1rem,4vw,1.5rem)]
              "
              style={{ fontFamily: "Jockey One" }}
            >
              Lakshya Sharma
            </h1>

            {/* SLIDER TEXT */}
            <div className="relative overflow-hidden text-neutral-400">
              <div className="text-slider relative w-full h-[clamp(1rem,2.5vw,1.5rem)] overflow-hidden">
                {AbtMe.map((text, index) => (
                  <div
                    key={index}
                    className="text-item absolute whitespace-nowrap text-[clamp(0.8rem,1.8vw,1.2rem)]
                               max-md:text-[clamp(0.7rem,3vw,1rem)]"
                    style={{
                      '--position': index + 1,
                      '--quant': AbtMe.length,
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* HAMBURGER */}
          <Hamburger
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />

        </div>
      </div>
    </div>
  );
}

export default Island;