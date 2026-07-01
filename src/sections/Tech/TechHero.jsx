import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import img from "../../assets/image.png"

import FollowMouseX from "../../components/animations/FollowMouseX";

function TechHero(){

    const containerRef = useRef(null);
    const imgRef = useRef(null);

    return(
        <div className="h-screen bg-black flex flex-col justify-between">

            <div className="w-full flex flex-col items-center justify-center leading-none overflow-hidden font-bebas text-white text-[clamp(5.5rem,21vw,19rem)] max-md:text-[clamp(5.4rem,20.25vw,18.9rem)] max-md:p-5">         
                WHOISLAKSHYA
            </div>

            <div className="bg-white p-5 m-5 rounded-t-2xl my-0 flex-1 flex flex-col gap-20">
                <div className="flex items-center justify-between"
                    style={{ fontFamily: "Michroma", fontWeight: "999" }}>
                    
                    <div className="overflow-hidden">          
                        <span className="block text-zinc-950 text-[clamp(0.7rem,1vw,1rem)]">
                            Chd based
                        </span>
                        <span className="block text-zinc-500 text-[clamp(0.6rem,0.9vw,0.9rem)]">
                            working globally
                        </span>
                    </div>

                    <div className="overflow-hidden">
                        <span className="block text-zinc-950 text-[clamp(0.7rem,1vw,1rem)]">
                            Freelancing availability
                        </span>
                        <span className="block text-zinc-500 text-[clamp(0.6rem,0.9vw,0.9rem)]">
                            January 2025
                        </span>      
                    </div>
                </div>

                <div
                ref={containerRef}
                className="h-5/7 relative overflow-hidden"
                >
                    <FollowMouseX
                    containerRef={containerRef}
                    imgRef={imgRef}
                    src={img}
                    style={{}}
                    />

                </div>
                <div className="flex items-center justify-between">
                    
                    <div className="overflow-hidden">          
                        <span 
                        style={{ fontFamily: "Michroma", fontWeight: "999" }}
                        className="block text-zinc-500 text-[clamp(0.9rem,1.4vw,1.4rem)]">
                                [Scroll down]
                        </span>
                    </div>

                    <div className="overflow-hidden">
                        <span 
                        style={{ fontFamily: "Michroma", fontWeight: "999" }}
                        className="block text-black text-[clamp(0.7rem,1vw,1rem)]">
                            Driven by obsession, Centered on Craft
                        </span>                            
                        <span 
                        style={{ fontFamily: "Michroma", fontWeight: "999" }}
                        className="block tect-black text-[clamp(0.7rem,1vw,1rem)]">
                            Embracing Culture
                        </span>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechHero;
