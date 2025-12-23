import Button from "./UI/Buttons/Button";

const FeatureCard = ({
  category,
  title,
  subtitle,
  backgroundClass,
  image,
}) => {
  return (
    <div
      className="perspective-[1000px] relative flex flex-shrink-0 w-[420px] h-[600px] rounded-[2rem] overflow-hidden 
      group relative pt-[50px] border-[3px] border-white 
      transform-style-preserve-3d 
      bg-[linear-gradient(135deg,#0000_18.75%,#f3f3f3_0_31.25%,#0000_0),repeating-linear-gradient(45deg,#f3f3f3_-6.25%_6.25%,#ffffff_0_18.75%)] 
      bg-[length:60px_60px] bg-[#f0f0f0] shadow-[rgba(142,142,142,0.3)_0px_30px_30px_-10px] 
      transition-all duration-500 ease-in-out hover:bg-[-100px_100px,-100px_100px] hover:[transform:rotate3d(0.5,1,0,30deg)]"
    >

      <div
        className={`w-full h-full
                    p-[60px_25px_25px_25px]
                    transform-style-preserve-3d
                    transition-all duration-500 ease-in-out
                    ${backgroundClass}`}
      >
        <span
          className="inline-block text-zinc-900 text-[25px] 
                     transition-all duration-500
                     translate-z-[50px]
                     hover:translate-z-[60px]"
        >
          {title}
        </span>

        <p
          className="mt-2.5 text-[16px] font-bold text-zinc-900
                     transition-all duration-500
                     translate-z-[30px]
                     hover:translate-z-[60px]"
        >
          {subtitle}
        </p>

        <span
          className="inline-block mt-4 cursor-pointer
                     text-[9px] font-black uppercase
                     text-zinc-900
                     bg-white px-[0.7rem] py-[0.5rem]
                     transition-all duration-500
                     translate-z-[20px]
                     hover:translate-z-[60px]"
        >
          See More
        </span>

        <div
          class="absolute top-[30px] right-[30px] p-[10px]
                bg-white border border-zinc-900
                translate-z-[80px]
                shadow-[rgba(100,100,111,0.2)_0px_17px_10px_-10px]"
        >
          <span class="block text-center text-[20px] font-black text-zinc-500">
            {category}
          </span>
        </div>

      </div>
    </div>
  );
};

export default FeatureCard;


