import React from 'react'

const MsButton =({Image,Style,Link}) => {
const handleClick = () => {
  console.log("handleClick called with Link:", Link);
  if (Link) {
    window.open(Link, "_blank", "noopener,noreferrer");
  }
};


  
  return (
    <button 
      onClick={handleClick} 
      className="w-[2.5vw] h-[2.5vw] flex justify-center items-center cursor-pointer 
      bg-[#bfbfbf] border-[0.125rem] border-solid border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] 
      hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff]"
    >
      <img 
      src={Image} 
      style={Style}>
      </img>
    </button>
  )
}

export default MsButton

