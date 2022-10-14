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
      className="relative border-[3px] border-my-yellow h-[200px] w-[200px] rounded-full sm:h-[300px] sm:w-[300px] Infinity, md:mt-20 md:h-[500px] md:w-[500px]"
    ></motion.div>
  );
}
