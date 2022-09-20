import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
    initial={{
    scale:1.5,
    opacity: 0,
  }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-my-yellow h-[300px] w-[300px] rounded-full animate-pulse mt-40 md:mt-56 md:h-[500px] md:w-[500px]"></div>
    </motion.div>
  );
}
