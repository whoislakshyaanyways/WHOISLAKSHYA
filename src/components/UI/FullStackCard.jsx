import React from 'react'

const Card = ({ color, label }) => {
  return (
    <div
      className="rounded-lg flex-1 flex items-center justify-center text-white font-semibold tracking-wide
                 transition-all duration-100 hover:flex-[2]
                 hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]
                 group"
      style={{ backgroundColor: color }}
    >
      <span className="opacity-0 transition-opacity duration-100 group-hover:opacity-100">
        {label}
      </span>
    </div>
  )
}

export default Card;
