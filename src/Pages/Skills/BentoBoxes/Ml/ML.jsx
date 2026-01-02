import React from "react";


const ML = () => {
  return (
    <div class="relative w-full h-full max-w-2xl mx-auto bg-stone-300 rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-110 hover:shadow-lg group">

      <div className="flex flex-col justify-center items-center">
        <span class="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
          Machine Learning
        </span>
        <span class="text-sm text-gray-500 italic">
          (hover to know more)
        </span>
      </div>

      <div class="absolute top-1/2 left-1/2 w-full h-full p-5 bg-stone-200 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-0 group-hover:opacity-100">
        <h2 class="text-2xl font-bold text-[#333] m-0">Machine learning</h2>
        <p class="text-sm text-[#777] mt-2 leading-[1.4]">
          Currently building strong foundations in Python, data analysis, and core ML algorithms through hands-on projects and structured courses. Learning to design, evaluate, and deploy machine learning models, with practical experience in FastAPI and data visualization.
        </p>
      </div>
    </div>
 
  );
};

export default ML;
