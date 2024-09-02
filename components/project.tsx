"use client";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  github,
  live,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className=" group mb-5 sm:mb-12 last:mb-0 overflow-hidden"
    >
      <section className="hover:bg-gray-200 transition  relative bg-gray-100 max-w-[60rem] border border-black/5 rounded-lg  sm:pr-8  sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 md:max-w-[50%] flex flex-col h-full md:group-even:ml-[28rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex gap-4 mt-4 ">
           {live && <a
              className="linkButton"
              href={github}
              target="_blank"
            >
              View it here
            </a>} 
            <a
              className="linkButton"
              href={github}
              target="_blank"
            >
              View Github Repo
            </a>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="py-1 bg-black/[0.7] px-3 text-[0.7rem] uppercase text-white tracking-wider rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>{" "}
        </div>
        <div className=" w-30">
          <Image
            className="absolute hidden md:block top-3 -right-2  md:w-[20rem] lg:w-[28rem] rounded-lg shadow-2xl group-even:right-[initial] group-even:-left-2
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04]
            
        group-even:group-hover:translate-x-3  group-even:group-hover:translate-y-3  group-even:group-hover:rotate-2 "
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
          ></Image>
        </div>
      </section>
    </motion.div>
  );
}
