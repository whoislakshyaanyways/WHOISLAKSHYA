import { motion } from "framer-motion";

function Card({ Style, Text, Image, containerRef }) {
    return Image && !Text ? (
        <motion.img
            className="absolute cursor-grab border-none block w-[clamp(3.5rem,5vw,4rem)]
            max-md:w-[clamp(3.5rem,7vw,4.5rem)]"
            src={Image}
            style={Style}
            whileHover={{scale:1.1}}
            drag
            dragConstraints={containerRef}
        />
    ) : (
        <motion.div
            className="absolute pl-[clamp(0.5rem,1vw,1rem)] pr-[clamp(0.5rem,1vw,1rem)] pt-[clamp(0.4rem,0.8vh,0.7rem)] pb-[clamp(0.4rem,0.8vh,0.7rem)] text-[clamp(1.8rem,2cqb,3rem)] text-center rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-[var(--text)] font-extralight font-['Bebas Neue'] bg-[rgba(255,255,255,0.05)] backdrop-blur-[5.1px] backdrop-saturate-100 border border-[rgba(255,255,255,0.10)] w-[clamp(15rem,22.5vw,20rem)] h-[clamp(3rem,3.33vw,3.5rem)] cursor-grab flex items-center justify-center
            max-md:w-[clamp(7.5rem,16.5vw,22.5rem)] 
            max-md:h-[clamp(1.2rem,2.7vw,1.5rem)] 
            max-md:text-[clamp(0.7rem,1.5cqb,1.4rem)]" 
            style={Style}
            whileHover={{scale:1.1}}
            drag
            dragConstraints={containerRef}
        >
           {Text}
        </motion.div>
    );
}

export default Card;
