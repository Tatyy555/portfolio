import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.3, 0.5, 0.8, 0.5, 0.3],
        borderRadius: ["10%", "50%", "50%", "10%"],
        rotate: [0, 270, 0, 0, -270],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute border border-my-yellow h-[300px] w-[300px] rounded-full md:mt-20 md:h-[500px] md:w-[500px]"
    ></motion.div>
  );
}
