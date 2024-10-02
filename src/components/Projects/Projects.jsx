import React from "react";
import { PROJECTS } from "../../constants";
import { motionLeft, motionTop, motionRight } from "../../constants/motion";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        variants={motionTop(0, 0.5)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl capitalize"
      >
        projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="flex flex-wrap lg:justify-center mb-8">
              <motion.div
                variants={motionLeft(0)}
                initial="hidden"
                whileInView="visible"
                className="w-full lg:w-1/4 mb-5 lg:mb-0"
              >
                <a
                  target="_blank"
                  href={project.link}
                  className="overflow-hidden rounded block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded hover:scale-125 transition-all duration-200"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={motionRight(0)}
                initial="hidden"
                whileInView="visible"
                className="w-full lg:w-3/4 max-w-xl pl-0 lg:pl-16"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
