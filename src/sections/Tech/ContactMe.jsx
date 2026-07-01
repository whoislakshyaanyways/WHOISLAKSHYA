import React, { useEffect, useRef } from "react";
import SendMail from "../../components/SendMail";

export default function ContactMe() {
  const canvasRef2 = useRef(null);
  const canvasRef3 = useRef(null);

  useEffect(() => {
    const canvases = [ canvasRef2.current, canvasRef3.current];
    const contexts = canvases.map(c => c ? c.getContext("2d") : null);
    
    const textToRepeat = "  WHOISLAKSHYA • CONTACT ME • ";
    
    const speedRow1 = 1.0;
    const speedRow2 = -0.8; 
    const speedRow3 = 1.4;
    
    let textPositions = [0, -350, -100]; 
    let animationFrameId;

    const resizeCanvases = () => {
      const scale = window.devicePixelRatio || 1;
      canvases.forEach((canvas, idx) => {
        if (!canvas || !contexts[idx]) return;
        const ctx = contexts[idx];
        const displayWidth = canvas.parentElement.clientWidth;
        const displayHeight = canvas.parentElement.clientHeight;

        canvas.width = displayWidth * scale;
        canvas.height = displayHeight * scale;
        ctx.scale(scale, scale);
      });
    };

    resizeCanvases();
    window.addEventListener("resize", resizeCanvases);

    const animate = () => {
      canvases.forEach((canvas, idx) => {
        if (!canvas || !contexts[idx]) return;
        const ctx = contexts[idx];
        const scale = window.devicePixelRatio || 1;
        const displayWidth = canvas.width / scale;
        const displayHeight = canvas.height / scale;

        ctx.clearRect(0, 0, displayWidth, displayHeight);

        ctx.fillStyle = "#101010"; 
        // ctx.fillStyle = "#cccccc"; 
        ctx.fillRect(0, 0, displayWidth, displayHeight);

        ctx.font = `italic 900 ${displayHeight * 0.7}px "Arial Black", Impact, sans-serif`;
        ctx.fillStyle = "#cccccc"; 
        // ctx.fillStyle = "#101010"; 
        ctx.textBaseline = "middle";

        const textWidth = ctx.measureText(textToRepeat).width;

        if (idx === 0) textPositions[0] -= speedRow1;
        if (idx === 1) textPositions[1] -= speedRow2;
        if (idx === 2) textPositions[2] -= speedRow3;

        if (textPositions[idx] <= -textWidth) {
          textPositions[idx] += textWidth;
        } else if (textPositions[idx] > 0) {
          textPositions[idx] -= textWidth;
        }

        let currentX = textPositions[idx];
        while (currentX < displayWidth + textWidth) {
          ctx.fillText(textToRepeat, currentX, displayHeight / 2);
          currentX += textWidth;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvases);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black px-5 overflow-hidden">
      <div className="w-full bg-white text-white font-sans overflow-hidden relative flex flex-col justify-between rounded-lg border border-white/10">
        <div className="w-full relative overflow-visible pt-10">
          <div className="w-[140%] h-24 md:h-36 flex items-center overflow-hidden absolute left-[-20%] top-24 transform rotate-[3deg] z-20 opacity-75 origin-center border-b border-white/10">
            <canvas ref={canvasRef2} className="w-full h-full block pointer-events-none" />
          </div>

          <div className="w-[140%] h-28 md:h-40 flex items-center overflow-hidden absolute left-[-20%] top-44 transform -rotate-[2deg] z-30 shadow-[0_15px_40px_rgba(0,0,0,0.7)] origin-center">
            <canvas ref={canvasRef3} className="w-full h-full block pointer-events-none" />
          </div>
        </div>

        <div className="pt-[35vh] mb-[10vh] w-full flex justify-center items-center relative">
          <SendMail />
        </div>
      </div>
    </div>
  );
}