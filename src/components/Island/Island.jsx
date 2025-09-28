import React, { useState } from "react";
import Hamburger from "../UI/Buttons/Hamburger";
import { motion, AnimatePresence } from "framer-motion";

import './Island.css'

function Island() {
  const [menuOpen, setMenuOpen] = useState(false);
  const AbtMe = ["Web Developer", "Video Editor", "Cinematographer", "Public Speaker"];

  return (
    <div className="fixed bottom-0 p-5 w-full flex justify-center z-50">
      <div className="relative w-1/2">
        
        {/* Expanding Menu */}
        <AnimatePresence>
          {menuOpen && (
            <div className="absolute bottom-full w-full rounded-t-2xl shadow-lg overflow-hidden">
              <motion.div
                initial={{ y: 100}}
                animate={{ y: 0}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-neutral-900 p-6 text-white rounded-t-2xl"
              >
                <ul className="space-y-4 text-xl font-bold">
                  <li className="hover:underline cursor-pointer">Home</li>
                  <li className="hover:underline cursor-pointer">Projects</li>
                  <li className="hover:underline cursor-pointer">About</li>
                  <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Island Bar */}
        <div
          className={`bg-black h-[10vh] flex items-center gap-6 p-3 ${
            menuOpen ? "rounded-b-2xl" : "rounded-2xl"
          }`}
        >
          {/* Avatar */}
          <div className="w-20 h-20 rounded-lg overflow-hidden bg-white border border-neutral-800">
            <img />
          </div>

          {/* Text */}
          <div className="w-[75%] flex flex-col gap-2 overflow-hidden">
            <h1
              className="text-3xl font-bold tracking-wide text-neutral-50"
              style={{ fontFamily: "Jockey One" }}
            >
              Lakshya Sharma
            </h1>

            <div className="relative overflow-hidden text-neutral-400">
              <div className="text-slider relative w-full h-6 overflow-hidden ">
                {AbtMe.map((text, index) => (
                  <div
                    key={index}
                    className="text-item absolute whitespace-nowrap"
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

          {/* Hamburger */}
          <div>
            <Hamburger checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Island;
