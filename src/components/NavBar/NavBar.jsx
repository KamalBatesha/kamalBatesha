import React from "react";
import { motionLeft, motionTop, motionRight } from "../../constants/motion";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav
      variants={motionTop(0, 0.5)}
      initial="hidden"
      whileInView="visible"
      className="mb-10 py-6 px-3 "
    >
      <div className="container px-3 flex justify-between items-center mx-auto">
        <h2 className="flex items-center uppercase text-4xl">KB</h2>
        <div className="flex items-center justify-center gap-4 text-2xl m-4">
          <a
            href="https://www.linkedin.com/in/kamal-batesha-02169826b"
            target="_blank"
            className=" transition-all duration-300 hover:text-gray-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/KamalBatesha"
            target="_blank"
            className=" transition-all duration-300 hover:text-gray-400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/eng.kamal.batesha"
            target="_blank"
            className=" transition-all duration-300 hover:text-gray-400"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/kamal_batisha/"
            target="_blank"
            className=" transition-all duration-300 hover:text-gray-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
