import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function ProjectSection({ projects }: Props) {
  return (
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
      id="project-section"
      className="max-w-7xl mx-auto flex-col sm:max-h-screen flex py-20 px-10 2xl:px-0 snap-center"
    >
      <h1 className="mb-10 text-4xl underline font-extrabold">
        Library of Personal Works
      </h1>

      <div className="bg-slate-100 sm:p-10 shadow-xl shadow-blue-300/40 sm:overflow-y-scroll sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-300">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl::grid-cols-4">
          {projects.map((project, i) => (
            <Link
              key={project?._id}
              href={project?.linkToBuild}
              target="_blank"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105 p-5 bg-my-skyblue/20 m-5 rounded-lg">
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-mine p-2"
                >
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src={urlFor(project?.image).url()}
                    alt={project?.title}
                    height={250}
                    width={250}
                  />
                </motion.div>
                <div className="pt">
                  <h2 className="text-3xl ">{project?.title}</h2>
                  <p className="mt-2 text-sm ">{project?.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
