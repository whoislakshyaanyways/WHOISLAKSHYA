import './Hero.css'
import head from '../../assets/head.jpg'; 
import SlideUp from '../UI/Animations/SlideUp';

import { motion } from "framer-motion"

function Hero(){
    return(
        <div className="h-screen pt-[10vh]">
            <div className="left h-[50vh] ">
                <div className="Hero-pic w-full transform rounded-lg">
                <img 
                    src={head} 
                    alt="Hero" 
                    className="w-full h-full scale-150 object-contain" 
                />
                </div>

                <div 
                style={{fontFamily:"Jockey One"}}
                className="full-name bg-zinc-300 w-[60%] h-[100%] translate-x-[100%] absolute flex justify-center items-center m-2 text-[2vh] rounded-2xl shadow-md">
                    Lakshya Sharma
                </div>

                <div 
                style={{fontFamily:"Jockey One"}}
                className="dob bg-zinc-300 w-[60%] h-[100%] translate-x-[-50%] absolute flex justify-center items-center m-2 text-[2vh] rounded-2xl shadow-md">
                    9th Sept 2006
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full">
                    <div className="w-[95vw] translate-y-[50%] overflow-hidden">
                        <SlideUp delay={0.4}>
                            <div className="w-[95vw] flex justify-between"
                            style={{fontFamily:"Michroma", fontWeight:"900"}}>
                                <div >CREATED</div>
                                <div>TO</div>
                                <div>CREATE</div>
                            </div>
                        </SlideUp>
                    </div>

                <div className="w-full h-[25vh] flex items-start justify-center leading-none text-[30vh] overflow-hidden"
                    style={{fontFamily:"Bebas Neue", fontWeight:"500"}}
                >
                <SlideUp delay={0.1}>
                    WHOISLAKSHYA
                </SlideUp>
                </div>
            </div>
        </div>
    );
}

export default Hero;


<SlideUp delay={0.1}>
    
</SlideUp>

