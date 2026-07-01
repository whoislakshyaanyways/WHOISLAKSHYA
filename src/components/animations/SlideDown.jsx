import { motion } from "framer-motion";

const SlideDown = ({ startY ="-100%", children, delay = 0, duration = 0.7 }) => {
  return (
    <motion.div
      initial={{ y: startY }}
      animate={{ y: 1 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideDown;
