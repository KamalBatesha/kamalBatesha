import React, { useState } from "react";
import { ABOUT_DATA, ABOUT_TEXT } from "../../constants";
import { motion } from "framer-motion";
import { motionLeft, motionRight, motionTop } from "../../constants/motion";

export default function AboutMe() {
  let [showData, setShowData] = useState(false);
  return (
    <div className=" border-b border-neutral-900 pb-4 mb-11">
      <motion.h2
        variants={motionTop(0, 0.5)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        About <span className=" text-neutral-500">Me</span>{" "}
      </motion.h2>
      <div className="flex flex-wrap items-center">
        <motion.div
          variants={motionLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-2/5 items-center justify-center lg:p-8"
        >
          <i className="fas fa-question text-[200px] text-white block text-center"></i>
        </motion.div>
        <motion.div
          variants={motionRight(0.5)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-3/5 relative"
        >
          <div
            className={`${
              showData ? "opacity-0 invisible" : "opacity-100"
            } flex justify-center  lg:justify-start transition-all duration-300`}
          >
            <p className="max-w-xl my-2 py-6 ">{ABOUT_TEXT}</p>
          </div>
          <div
            className={` ${
              showData ? "opacity-100" : "opacity-0 invisible"
            } absolute top-1/2 left-5  -translate-y-1/2 flex flex-wrap justify-between items-center w-full transition-all duration-300 `}
          >
            {ABOUT_DATA.map((i) => {
              return (
                <p className="text-neutral-500 lg:w-1/2 my-3 capitalize w-full">
                  {i.title}:<span className="text-white ml-2">{i.data}</span>
                </p>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-3 mt-3">
            <span
              onClick={() => {
                setShowData(false);
              }}
              className={`w-2 h-2 rounded-full ${
                showData ? "bg-gray-400" : "bg-white"
              } cursor-pointer hover:bg-white`}
            ></span>
            <span
              onClick={() => {
                setShowData(true);
              }}
              className={`w-2 h-2 rounded-full ${
                showData ? "bg-white" : "bg-gray-400"
              }  cursor-pointer hover:bg-white`}
            ></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
