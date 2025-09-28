import React from 'react'
import MsButton from '../../Buttons/MsButton.jsx'
import git from '../../../../assets/Icons/github.png'
import insta from '../../../../assets/Icons/Instagram.webp'
import x from '../../../../assets/Icons/x.webp'
import Linkden from '../../../../assets/Icons/linkedin.webp'


const Toolbar = ({ devInfo }) => {

  return (
    <div className="bg-[#bfbfbf] w-[8.5vh] h-[42vh] flex flex-col justify-between border-[0.125rem] border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]">
    
      
      <div style={{ fontFamily: '"Doto", sans-serif' }} className=" flex justify-center items-center font-bold bg-[#bfbfbf] h-[4vh] border-[0.125rem] border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]">
        {devInfo.name}
      </div>

      <div className="flex flex-wrap justify-center content-start gap-[.5rem] p-[.5rem] flex-1 overflow-y-auto">
        <MsButton 
        Text="zoom_in"/>
        <MsButton 
        Text="zoom_out"/>
        <MsButton
        Text="rotate_90_degrees_ccw"/>
        <MsButton 
        Text="rotate_90_degrees_cw"/> 
       
        <MsButton Image={git} Link={devInfo.git}
        />
        <MsButton Image={insta} Link={devInfo.insta} Style={{ transform: "scale(0.7)" , filter:"grayscale(100%)" }}
        />
        <MsButton Image={x} Link={devInfo.x}
        />
        <MsButton Image={Linkden} Link={devInfo.linkedin} Style={{ transform: "scale(1.2)" , filter:"grayscale(100%)"}}
        />
      </div>

      <div className="bg-[#bfbfbf] h-[4vh] border-[0.125rem] border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]"></div>
    </div>
  )
}

export default Toolbar