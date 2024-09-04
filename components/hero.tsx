"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

import { TextEffect } from "./text-effect";

export default function Hero() {
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  const { ref } = useSectionInView("Home");
  return (
    <BackgroundGradientAnimation className="absolute inset-0 ">
      <section
        ref={ref}
        id="home"
        className="z-20 relative scroll-mt-[100rem] text-center md:text-left mt-8 mb-32 sm:mb-0  md:h-screen min-h-screen  w-full flex flex-col-reverse justify-center md:flex-row overflow-auto"
      >
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-2  justify-center md:mx-6 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-gray-600 text-lg dark:text-white/70  ">{`👋 Hi there, I'm`}</h1>
          <h2 className="font-bold capitalize text-5xl sm:text-7xl text-gray-900 dark:text-white/95 ">
            Natalie Chan.
          </h2>
          <h3 className="mx-3 md:mx-0 font-medium capitalize text-3xl sm:text-3xl bg-gradient-to-r dark:from-indigo-200 dark:to-pink-500 from-indigo-400 to-pink-500  md:mt-3  bg-clip-text text-transparent tracking-tight">
            Software Developer
          </h3>
          <TextEffect className=" text-lg md:text-2xl mt-1 md:mt-9 pr-6 text-gray-600 dark:text-white/90">
            I'm passionate about building user friendly web applications.
          </TextEffect>

          <motion.div
            className="flex flex-col md:flex-row md:mt-20  mt-6 md:gap-5 text-lg z-20 font-medium justify-center items-center md:justify-normal "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex gap-3 ">
              <Link
                href="#contact"
                className="group  bg-gray-900 text-white px-6 py-2 md:px-7 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Hire Me
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                href="https://bit.ly/nataliechan-cv"
                download
                className="group  bg-white  px-6 py-2 md:px-7 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </a>
            </div>

            <div className="flex md:gap-4 items-center gap-8 justify-center mt-3 md:mt-0">
              <a
                className=" bg-white p-3 md:p-4 text-gray-700 flex items-center rounded-full text-[1.6rem] focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/nataliechc/"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className=" bg-white p-3 md:p-4 text-gray-700 flex items-center  rounded-full text-[1.8rem] focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/natccc"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="z-20 flex justify-center items-center  "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="lg:w-[32rem] lg:h-[32rem] md:w-[20rem] md:h-[20rem] w-72 h-72 object-cover border-4  rounded-full z-20 border-gray-200 shadow-lg  dark:opacity-85 mt-6 mb-6 md:mt-0 md:mb-0"
          >
            <source src="emojivid2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>
    </BackgroundGradientAnimation>
  );
}
