import React from "react";

const Canvas = ({color}) => {
  return (
    <div className="grid grid-cols-[max-content_max-content] grid-rows-[max-content_max-content] w-fit">
      {/* Viewport */}
      <div className="relative w-[40vh] h-[40vh] overflow-hidden bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-[#bfbfbf] border-b-[#bfbfbf]">
        <div className="absolute bg-white w-[40vh] h-[40vh]">
          <div
            className="w-[40vh] h-[40vh] opacity-10 "

            style={{
              backgroundColor: color,
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </div>

      {/* Vertical Scrollbar */}
      <div className="flex flex-col w-[2vh] bg-[#bfbfbf]">
        {/* Up Button */}
        <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-black"></div>
        </button>

        {/* Track */}
        <div className="flex-1 bg-[#d9d9d9] border border-[#808080] relative">
          <div className="absolute w-full h-[20%] top-0 bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]"></div>
        </div>

        {/* Down Button */}
        <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-black"></div>
        </button>
      </div>

      {/* Horizontal Scrollbar */}
      <div className="flex h-[2vh] bg-[#bfbfbf] col-span-1 row-start-2">
        {/* Left Button */}
        <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
          <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-r-[4px] border-t-transparent border-b-transparent border-r-black"></div>
        </button>

        {/* Track */}
        <div className="flex-1 bg-[#d9d9d9] border border-[#808080] relative">
          <div className="absolute h-full w-1/2 left-0 bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]"></div>
        </div>

        {/* Right Button */}
        <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
          <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[4px] border-t-transparent border-b-transparent border-l-black"></div>
        </button>
      </div>

      {/* Scrollbar Corner */}
      <div className="w-[2vh] h-[2vh] bg-[#bfbfbf] border border-[#808080]"></div>
    </div>
  );
};

export default Canvas;
