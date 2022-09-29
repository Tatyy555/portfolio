import { motion } from "framer-motion";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { Skill } from "../typing";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";

type Props = {
  skills: Skill[];
};

export default function WelcomeSection({ skills }: Props) {
  const [text] = useTypewriter({
    words: [
      "Nice to meet you!",
      "I'm Tatsuya Yamaguchi",
      "Guy-who-loves-Manga.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      id="welcome-section"
      className="flex flex-col text-center h-screen bg-mine justify-center w-screen items-center  z-0 snap-center"
    >
      <motion.div
        initial={{
          y: -20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 3,
        }}
        viewport={{
          once: true,
        }}
        className=" flex items-center justify-center relative "
      >
        <BackgroundCircle />
        <div className="absolute flex flex-col w-screen ">
          <h1 className=" text-white text-3xl md:font-bold sm:text-5xl md:text-6xl lg:text-7xl font-Arial leading-relaxed lg:pb-8 lg:leading-loose">
            <span className="mr-3 overflow-hidden text-ellipsis">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <p className="text-yellow-400 text-3xl italic lg:text-5xl font-bold font-Arial mt-2">
            a web developer
          </p>
          {/* <div className="mt-3 flex space-x-2 flex-wrap max-w-xs sm:max-w-sm mx-auto justify-center">
          {skills?.map((skill) => (
            <div key={skill?._id} >
              <Image
                height={40}
                width={40}
                className="object-contain rounded-full bg-my-white"
                src={urlFor(skill?.image).url()}
              />
            </div>
          ))}
          </div> */}
        </div>
        <div className="w-screen absolute  bg-my-yellow/10  h-[400px] -skew-y-12"></div>
      </motion.div>
    </div>
  );
}
