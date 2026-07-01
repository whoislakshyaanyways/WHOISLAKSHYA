import React, { useState } from 'react'
import git from '../assets/Icons/github.png'
import insta from '../assets/Icons/Instagram.webp'
import x from '../assets/Icons/x.webp'
import Linkden from '../assets/Icons/linkedin.webp'

// ─── MsButton ───────────────────────────────────────────────
const MsButton = ({ Text, Image, Style, Link }) => {
  const handleClick = () => {
    if (Link) window.open(Link, '_blank', 'noopener,noreferrer')
  }

  return Text && !Image ? (
    <button
      style={Style}
      onClick={handleClick}
      className="material-symbols-outlined w-[2.5vw] h-[2.5vw] flex justify-center items-center cursor-pointer
      bg-[#bfbfbf] border-[0.125rem] border-solid border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]
      hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff]"
    >
      {Text}
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="w-[2.5vw] h-[2.5vw] flex justify-center items-center cursor-pointer
      bg-[#bfbfbf] border-[0.125rem] border-solid border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]
      hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff]"
    >
      <img src={Image} style={Style} />
    </button>
  )
}

// ─── Toolbar ────────────────────────────────────────────────
const Toolbar = ({ devInfo }) => (
  <div className="bg-[#bfbfbf] w-[8.5vh] h-[42vh] flex flex-col justify-between border-[0.125rem] border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]">
    <div style={{ fontFamily: '"Doto", sans-serif' }} className="flex justify-center items-center font-bold bg-[#bfbfbf] h-[4vh] border-[0.125rem] border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]">
      {devInfo.name}
    </div>

    <div className="flex flex-wrap justify-center content-start gap-[.5rem] p-[.5rem] flex-1 overflow-y-auto">
      <MsButton Text="zoom_in" />
      <MsButton Text="zoom_out" />
      <MsButton Text="rotate_90_degrees_ccw" />
      <MsButton Text="rotate_90_degrees_cw" />
      <MsButton Image={git} Link={devInfo.git} />
      <MsButton Image={insta} Link={devInfo.insta} Style={{ transform: 'scale(0.7)', filter: 'grayscale(100%)' }} />
      <MsButton Image={x} Link={devInfo.x} />
      <MsButton Image={Linkden} Link={devInfo.linkedin} Style={{ transform: 'scale(1.2)', filter: 'grayscale(100%)' }} />
    </div>

    <div className="bg-[#bfbfbf] h-[4vh] border-[0.125rem] border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]" />
  </div>
)

// ─── Canvas ─────────────────────────────────────────────────
const Canvas = ({ color }) => (
  <div className="grid grid-cols-[max-content_max-content] grid-rows-[max-content_max-content] w-fit">
    {/* Viewport */}
    <div className="relative w-[40vh] h-[40vh] overflow-hidden bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-[#bfbfbf] border-b-[#bfbfbf]">
      <div className="absolute bg-white w-[40vh] h-[40vh]">
        <div
          className="w-[40vh] h-[40vh] opacity-10"
          style={{
            backgroundColor: color,
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    </div>

    {/* Vertical Scrollbar */}
    <div className="flex flex-col w-[2vh] bg-[#bfbfbf]">
      <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
        <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[4px] border-l-transparent border-r-transparent border-b-black" />
      </button>
      <div className="flex-1 bg-[#d9d9d9] border border-[#808080] relative">
        <div className="absolute w-full h-[20%] top-0 bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]" />
      </div>
      <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
        <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-black" />
      </button>
    </div>

    {/* Horizontal Scrollbar */}
    <div className="flex h-[2vh] bg-[#bfbfbf] col-span-1 row-start-2">
      <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
        <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-r-[4px] border-t-transparent border-b-transparent border-r-black" />
      </button>
      <div className="flex-1 bg-[#d9d9d9] border border-[#808080] relative">
        <div className="absolute h-full w-1/2 left-0 bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]" />
      </div>
      <button className="h-[2vh] w-[2vh] bg-[#bfbfbf] border border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] flex items-center justify-center hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#ffffff] hover:border-b-[#ffffff] cursor-pointer">
        <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[4px] border-t-transparent border-b-transparent border-l-black" />
      </button>
    </div>

    {/* Corner */}
    <div className="w-[2vh] h-[2vh] bg-[#bfbfbf] border border-[#808080]" />
  </div>
)

// ─── ColorPalette ───────────────────────────────────────────
const ColorPalette = ({ colors, selectedColorIndex, setSelectedColorIndex }) => {
  const selectedColor = colors[selectedColorIndex] ?? '#C0C0C0'
  const totalSlots = 28

  return (
    <div className="flex gap-4 w-[50.5vh] h-[7vh] bg-[#bfbfbf] border-2 border-solid border-t-[#ffffff] border-r-[#808080] border-b-[#808080] border-l-[#ffffff] p-2">
      <div className="flex gap-2 items-center">
        <div
          className="w-8 h-8 border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff]"
          style={{ backgroundColor: selectedColor }}
        />
        <div className="text-xs text-black font-mono mt-1">{selectedColor}</div>
      </div>

      <div className="w-[40vh] grid grid-cols-14 gap-2 justify-center content-center bg-[#d9d9d9] border-2 border-[#808080]">
        {Array.from({ length: totalSlots }).map((_, index) => {
          const color = colors[index] ?? '#C0C0C0'
          return (
            <div
              key={index}
              className={`w-4 h-4 border border-[#404040] cursor-pointer hover:border-black ${
                index === selectedColorIndex ? 'border-2 border-black' : ''
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColorIndex(index)}
            />
          )
        })}
      </div>
    </div>
  )
}

// ─── Mspaint (main) ─────────────────────────────────────────
const colors = [
  '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080',
  '#808040', '#004040', '#0080FF', '#004080', '#8000FF', '#804000', '#FF8040', '#FFFFFF',
  '#C0C0C0', '#FF0000', '#00FF00', '#FFFF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF80',
  '#80FF80', '#80FFFF', '#8080FF', '#FF80C0', '#FF8080', '#000000', '#808080', '#FFFFFF',
]

const Mspaint = ({ devInfo }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const selectedColor = colors[selectedColorIndex] ?? '#C0C0C0'

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Toolbar devInfo={devInfo} />
        <Canvas color={selectedColor} />
      </div>
      <ColorPalette
        colors={colors}
        selectedColorIndex={selectedColorIndex}
        setSelectedColorIndex={setSelectedColorIndex}
      />
    </div>
  )
}

export default Mspaint