import { motion } from "framer-motion";

const SlideUp = ({ startY ="100%", children, delay = 0, duration = 0.7 }) => {
  return (
    <motion.div
      initial={{ y: startY }}
      animate={{ y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
