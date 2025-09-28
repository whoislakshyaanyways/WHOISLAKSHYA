import React,{ useState } from 'react'
import Toolbar from '../toolbar/Toolbar'
import Canvas from '../canvas/Canvas'
import ColorPalette from '../ColorPalette/ColorPalette'


const Mspaint = ({ devInfo }) => {
  const colors = [
    "#000000", "#808080", "#800000", "#808000", "#008000", "#008080", "#000080", "#800080",
    "#808040", "#004040", "#0080FF", "#004080", "#8000FF", "#804000", "#FF8040", "#FFFFFF",
    "#C0C0C0", "#FF0000", "#00FF00", "#FFFF00", "#0000FF", "#FF00FF", "#00FFFF", "#FFFF80",
    "#80FF80", "#80FFFF", "#8080FF", "#FF80C0", "#FF8080", "#000000", "#808080", "#FFFFFF"
  ];

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const selectedColor = colors[selectedColorIndex] ?? "#C0C0C0";


  return (
      <div className="flex flex-col">
        <div className="flex">
          <Toolbar devInfo={devInfo}
          />
          <Canvas 
            color={selectedColor}/>
        </div>
        <ColorPalette 
          colors={colors}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={setSelectedColorIndex}/>
      </div>
  )
}

export default Mspaint