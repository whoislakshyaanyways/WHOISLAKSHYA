import React from 'react'
import { motion } from "framer-motion";

const TextSliderItem = ({ children, delay = 0, duration = 10 }) => {
  return (
    <motion.div
      className="absolute top-0 left-0"
      style={{ whiteSpace: "nowrap", minWidth: "100%" }}
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextSliderItem;