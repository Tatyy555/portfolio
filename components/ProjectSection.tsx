import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

export default function ProjectSection({ projects }: Props) {
  return (
    <div
      id="project-section"
      className="max-w-7xl mx-auto h-screen flex flex-col pt-20 px-10 2xl:px-0 bg-my-white "
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
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col h-[95%]"
      >
        <h1 className=" text-4xl underline font-extrabold h-[10%]">
          Library of My Works
        </h1>

        <div className="bg-my-skyblue/30 shadow-xl shadow-blue-300/40  overflow-x-scroll overflow-y-hidden  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-300 items-center flex snap-x snap-mandatory h-[90%]">
          {projects.map((project, i) => (
            <div
              key={project._id}
              className=" w-full h-full flex-shrink-0 snap-center flex flex-col items-center justify-center   lg:grid lg:grid-cols-10 p-20 lg:space-x-20 "
            >
              {/* // Left */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="justify-center items-center object-center lg:col-span-5  max-w-[400px]"
              >
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    src={urlFor(project.image).url()}
                    height={500}
                    width={700}
                    objectFit="contain"
                    className=""
                  />{" "}
                </div>
              </motion.div>
              {/* Right */}
              <div
                className="max-w-[400px] lg:col-span-5 " 
              >
                <h4 className="text-3xl md:text-4xl font-semibold text-center lg:space-y-10">
                  <span className=" underline decoration-yellow-300/50 ">
                    Case {1 + i} of {projects.length}
                  </span>{" "}
                  <h4>
                  {project?.title}
                  </h4>
                </h4>
                <div className="flex items-center space-x-2 justify-center mt-5 lg:mt-10 lg:mb-5">
                  {project?.technologies.map((technology) => (
                    <img
                      className="h-10 w-10 object-cover rounded-full"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                    />
                  ))}
                </div>
                <p className="text-lg text-center">
                  {project?.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
