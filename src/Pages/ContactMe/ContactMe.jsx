import React from "react";
import OrbitingCircles from "./comps/OrbitingCircles/OrbitingCircles";
import SendMail from "./comps/SendMail/SendMail";

export default function ContactMe() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row md:gap-0 gap-[5vh] bg-zinc-200">

      <div className="w-full md:w-1/2 h-[30%] md:h-screen flex flex-col justify-center">

        <div
          className="w-[80%] h-auto mx-auto mt-[clamp(2%,8vh,10%)] mb-[clamp(2%,8vh,10%)]
          md:mt-[clamp(2%,8vh,10%)] md:mb-[clamp(2%,8vh,10%)]
          rounded-[clamp(1rem,2vw,2rem)] flex flex-col items-start justify-center"
        >
          <h1
            className="relative left-[5%] 
            text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.2] 
            mb-[clamp(0.5rem,2vh,1rem)]"
          >
            Let's Connect
          </h1>

          <p
            className="relative left-[5%] 
            text-[clamp(1rem,2.5vw,1.5rem)] 
            mb-[clamp(1rem,3vh,2rem)] 
            max-w-[clamp(20rem,70%,32rem)] leading-[1.6]"
          >
            I'd love to hear about your project and explore how we can work together.
          </p>
        </div>

        <div className="hidden md:block w-full h-[60%]">
          <OrbitingCircles />
        </div>
      </div>

      <div
        className="w-full md:w-1/2 
        h-[70%] md:h-screen 
        flex justify-center items-center relative md:top-0 top-[-5%]"
      >
        <SendMail />
      </div>
    </div>
  );
}
