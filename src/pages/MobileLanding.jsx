import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";

import BMC from '../assets/Icons/BMC.avif'
import Github from '../assets/Icons/github.png';
import Instagram from '../assets/Icons/Instagram.webp';
import Youtube from '../assets/Icons/Youtube.png';

import { Link } from 'react-router-dom';

const MobileLanding = () => {
  return (
    <div className="min-h-screen bg-zinc-200 p-4 flex flex-col justify-around">

        <div className="space-y-3">
            <div
              className={"bg-zinc-300 rounded-3xl p-6 relative overflow-hidden"}
            >
                <div className='w-full flex flex-col'>
                    <p className='text-[clamp(3rem,15vw,13.5rem)]'
                    style={{fontFamily:"Bebas Neue", fontWeight:"500"}}
                    >What Portfolio</p>   
                    
                    <p className='text-[clamp(0.5rem,2.5vw,2rem)]'
                    style={{fontFamily:"Michroma", fontWeight:"500"}}
                    >do you want to view??</p>
                </div>
            </div>
        </div>

        <div className='h-[200px] flex justify-center gap-2'>

            <Link to="/zero">
            <div className="bg-white rounded-3xl p-4 flex">
                <div className='w-full flex flex-col gap-2'>
                    <p className='text-[clamp(1rem,5vw,4.5rem)]'
                    style={{fontFamily:"Bebas Neue", fontWeight:"500"}}
                    >Tech Portfolio</p> 
                    <p className="text-[clamp(0.5rem,2.5vw,2rem)]">
                    I build functional, responsive web applications and analyze data to solve real-world problems.
                    My projects focus on clean design, efficient code, and practical use cases.
                    </p>  
                    <ChevronRight className="w-5 h-5 text-gray-600 bottom-0" />
                </div>
            </div>  
            </Link>  

            <Link to="/one">
                <div className="bg-white rounded-3xl p-4 flex">
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-[clamp(1rem,5vw,4.5rem)]'
                        style={{fontFamily:"Bebas Neue", fontWeight:"500"}}
                        >Creative Portfolio</p> 
                        <p className="text-[clamp(0.5rem,2.5vw,2rem)]">
                        I create cinematic visuals through video editing, color grading, and storytelling.
                        From social content to music videos, I craft engaging stories that connect with audiences.
                        </p>  
                        <ChevronRight className="w-5 h-5 text-gray-600 bottom-0" /> 
                    </div>
                </div>                                 
            </Link>      
        </div>

        <div className='w-full flex flex-col justify-end items-center'>
            <div class="w-[250px] text-center text-gray-600">

              <a href="https://buymeacoffee.com/whoislakshyaaanyways" target="_blank">
                <div class="w-7 h-7 mx-auto mb-3 rounded-full overflow-hidden">
                  <img
                    src={BMC}
                    alt="logo"
                    class="w-full h-full object-cover"
                  />
                </div>
              </a>

              <h1 class="text-lg font-medium">Buy me a coffee? :3</h1>

              <div class="w-16 h-[2px] bg-gray-300 mx-auto my-3"></div>

              <div class="flex justify-between px-10 grayscale-75">
                <a href="https://github.com/whoislakshyaanyways" target="_blank">
                  <div class="w-8 h-8">
                    <img
                      src={Github}
                      alt="icon"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </a>

                <a href="https://www.instagram.com/whoislakshyaanyways?igsh=MTB4bTdlZnpkYWpjeg==" target="_blank">
                  <div class="w-8 h-8">
                    <img
                      src={Instagram}
                      alt="icon"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </a>

                <a href="https://www.youtube.com/@WhoisLakshyaanyways" target="_blank">
                  <div class="w-8 h-8">
                    <img
                      src={Youtube}
                      alt="icon"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>
            </div>
        </div>
    </div>  
)}

export default MobileLanding


