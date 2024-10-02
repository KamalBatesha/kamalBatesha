import React from "react";
import { HERO_CONTENT } from "../../constants";
import heroImage from "../../assets/formal.png";
import { motion } from "framer-motion";
import { motionLeft, motionRight } from "../../constants/motion";

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-32">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={motionLeft(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl pb-16 lg:text-8xl font-thin tracking-tight lg:mt-16 capitalize"
            >
              kamal batesha
            </motion.h1>
            <motion.span
              variants={motionLeft(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent capitalize"
            >
              front-end developer
            </motion.span>
            <motion.p
              variants={motionLeft(1)}
              initial="hidden"
              animate="visible"
              className="mt-2 max-w-xl py-6 font-light "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center items-start">
            <motion.img
              variants={motionRight(1.2)}
              initial="hidden"
              animate="visible"
              src={heroImage}
              alt="kamal batesha"
              className="w-3/4 shadow-[5px_5px_#fff]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
