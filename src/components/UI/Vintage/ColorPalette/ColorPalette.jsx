import React, { useState } from "react";

const ColorPalette = ({colors, selectedColorIndex, setSelectedColorIndex}) => {
  const selectedColor = colors[selectedColorIndex] ?? "#C0C0C0";
  const totalSlots = 28;

  return (

      <div className="flex gap-4 w-[50.5vh] h-[7vh] bg-[#bfbfbf] border-2 border-solid border-t-[#ffffff] border-r-[#808080] border-b-[#808080] border-l-[#ffffff] p-2">
        
        {/* Display current selected color */}
        <div className="flex gap-2 items-center">
          <div
            className="w-8 h-8 border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff]"
            style={{ backgroundColor: selectedColor }}
          />
          <div className="text-xs text-black font-mono mt-1">{selectedColor}</div>
        </div>

        {/* Grid of colors */}
        <div className="w-[40vh] grid grid-cols-14 gap-2 justify-center content-center bg-[#d9d9d9] border-2 border-[#808080]">
          {Array.from({ length: totalSlots }).map((_, index) => {
            const color = colors[index] ?? "#C0C0C0";
            return (
              <div
                key={index}
                className={`w-4 h-4 border border-[#404040] cursor-pointer hover:border-black ${
                  index === selectedColorIndex ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColorIndex(index)}
              />
            );
          })}
        </div>
      </div>
  );
};

export default ColorPalette;
