import React, { Component } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { motion } from "framer-motion";
import { motionLeft, motionTop, upDown } from "../../constants/motion";
let technologiesData = [
  {
    Component: RiReactjsLine,
    tailwandCilor: "text-[#087A9F]",
    name: "react.js",
  },
  {
    Component: TbBrandNextjs,
    tailwandCilor: "text-white",
    name: "next.js",
  },
  {
    Component: RiTailwindCssFill,
    tailwandCilor: "text-[#38BDF8]",
    name: "tailwind",
  },
  {
    Component: FaBootstrap,
    tailwandCilor: "text-[#7209F5]",
    name: "bootstrap",
  },
  {
    Component: FaHtml5,
    tailwandCilor: "text-[#E96228]",
    name: "html5",
  },
  {
    Component: FaCss3Alt,
    tailwandCilor: "text-[#2862E9]",
    name: "css3",
  },
  {
    Component: IoLogoJavascript,
    tailwandCilor: "text-[#EFD81D]",
    name: "Javascript",
  },
  {
    Component: TbBrandTypescript,
    tailwandCilor: "text-[#2F74C0]",
    name: "Typescript",
  },
  {
    Component: SiRedux,
    tailwandCilor: "text-[#7248B6]",
    name: "redux",
  },
  {
    Component: DiJqueryLogo,
    tailwandCilor: "text-[#74CCF3]",
    name: "jquery",
  },
  {
    Component: SiMui,
    tailwandCilor: "text-[#3498FD]",
    name: "material ui",
  },
];

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        variants={motionTop(0, 0.5)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-3  ">
        {technologiesData.map((i) => {
          return (
            <motion.div
              variants={motionLeft(Math.random())}
              initial="hidden"
              whileInView="visible"
              className=" w-1/3 md:w-auto"
            >
              <motion.div
                variants={upDown(Math.random() * 1.5, Math.random() * 1.3 + 2)}
                initial="hidden"
                whileInView="visible"
                className="rounded-2xl relative flex justify-center items-center group border-4 p-4 border-neutral-800"
              >
                <i.Component
                  className={`md:text-7xl text-6xl ${i.tailwandCilor} group-hover:opacity-0 group-hover:invisible transition-all duration-500`}
                />
                <p
                  className={`text-xl cursor-default capitalize text-center w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${i.tailwandCilor} group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all duration-500`}
                >
                  {i.name}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
