import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedCarouselCard = ({ children, index, selectedIndex }) => {
  const isActive = selectedIndex === index;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.6,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedCarouselCard;