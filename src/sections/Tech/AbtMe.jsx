import { useRef } from "react";
import MoveX from "../../components/animations/MoveX";
import ImgStick from "../../components/animations/ImgStick";
import img from "../../assets/image.png";

const AbtMe = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <div className="bg-black px-5">
      <div className="bg-white flex flex-col">

        {/* HEADING */}
        <div className="w-full flex items-end px-8 pt-16 pb-6 border-b border-neutral-200">
          <div className="flex justify-end w-full leading-none font-bebas text-black text-[clamp(2.5rem,10vw,9rem)] overflow-hidden">
            <MoveX xTo="-25vw" start="top bottom" end="top top">[</MoveX>
          </div>
          <div className="w-full flex items-center justify-center leading-none font-bebas text-black text-[clamp(2.5rem,10vw,9rem)]">
            Abt Me
          </div>
          <div className="flex justify-start w-full leading-none font-bebas text-black text-[clamp(2.5rem,10vw,9rem)] overflow-hidden">
            <MoveX xTo="25vw" start="top bottom" end="top top">]</MoveX>
          </div>
        </div>

        {/* CONTENT */}
        <div
          ref={sectionRef}
          className="w-full flex flex-row items-start max-md:flex-col"
        >
          {/* LEFT TEXT — 50% */}
          <div className="w-1/2 flex flex-col px-12 py-16 border-r border-neutral-100 max-md:w-full max-md:border-r-0 max-md:border-b max-md:px-6">
            <span className="text-[11px] tracking-widest text-neutral-400 uppercase mb-8">
              Myself
            </span>
            <div className="flex flex-col text-[clamp(1.6rem,3.5vw,3rem)] font-normal leading-snug tracking-tight text-black">
              <p>
                Passionate about
                <br />
                merging{" "}
                <em className="not-italic text-neutral-400">design</em>
                <br />
                and{" "}
                <em className="not-italic text-neutral-400">engineering,</em>
              </p>
              <hr className="w-6 border-neutral-200 my-6" />
              <p>
                I craft smooth,
                <br />
                interactive
                <br />
                experiences.
              </p>
              <hr className="w-6 border-neutral-200 my-6" />
              <p>
                I help bring products
                <br />
                to life for
                <br />
                forward-thinking brands
                <br />
                <span className="text-neutral-300">around the world.</span>
              </p>
            </div>
          </div>

          <div className="w-1/2 flex items-start justify-center self-stretch px-12 py-16 max-md:w-full max-md:px-6 max-md:py-10">
            <ImgStick containerRef={sectionRef}>
              <img
                src={img}
                ref={imageRef}
                className="w-[110%] object-contain overflow-hidden rounded-xl sticky top-16"  
              />
            </ImgStick>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AbtMe;