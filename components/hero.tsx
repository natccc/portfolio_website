"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Spline from "@splinetool/react-spline";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BoxesCore } from "./ui/background-boxes";

export default function Hero() {
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mt-20 h-screen relative w-full overflow-hidden "
    >
      <BoxesCore className="opacity-20" />

      <div className="flex flex-col sm:flex-row h-5/6 items-center justify-evenly  flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col gap-2    ">
          <h1 className="text-gray-500 text-lg ">{`Hi, I'm`}</h1>
          <h2 className="font-bold capitalize text-6xl sm:text-7xl  ">
            Natalie Chan.
          </h2>
          <h3 className="font-medium capitalize text-5xl sm:text-3xl bg-gradient-to-r from-indigo-300 to-pink-300  bg-clip-text text-transparent tracking-tight">
            Software Developer
          </h3>
          <p className="text-gray-900 font-medium text-xl">
            I turn ideas into functional and beautiful web solutions.
          </p>
        </div>

        <div className="z-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-96 sm:h-96 w-72 h-72 object-cover border-4  rounded-full z-20 border-gray-200 shadow-lg  "
          >
            <source src="emojivid2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* <Image src="/portrait.png" alt="emoji" width={400} height={500} className="z-20 object-cover" /> */}
      </div>
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium z-[20] absolute bottom-10 left-1/2 -translate-x-1/2"
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="https://bit.ly/nataliechan-cv"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/nataliechc/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/natccc"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
