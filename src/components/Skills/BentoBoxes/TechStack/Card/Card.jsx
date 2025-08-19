import { motion } from "framer-motion";
import './Cards.css';

function Card({ Style, Text, Image, containerRef }) {
    return Image && !Text ? (
        <motion.img
            className="img"
            src={Image}
            style={Style}
            whileHover={{scale:1.1}}
            drag
            dragConstraints={containerRef}
        />
    ) : (
        <motion.div
            className="card-container" 
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
