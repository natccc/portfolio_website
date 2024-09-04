"use client";
import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mt-20 md:mt-0 mb-28 leading-8 sm:mb-40 scroll-mt-28 flex flex-col px-2 text-lg"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex md:flex-row flex-col gap-20 items-center">
        <div className="shadow-md rounded-lg">
          <Image
            src="/portrait1.png"
            alt="portrait"
            width={250}
            height={250}
            className="rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg dark:opacity-85"
          />
        </div>
        <div className="max-w-[35rem] text-lg flex flex-col gap-5 dark:text-white/80">
          <p>
            Hi, I'm a former physiotherapist turned full-stack developer with a
            passion for problem-solving. After five years of helping patients
            regain mobility, I found my love for coding through Harvard's CS50
            course and hence completing a coding bootcamp at Northcoders. Now, I
            combine my technical skills with the communication and teamwork I
            honed in healthcare to create solutions that are both
            <span className="inline-flex items-center -mb-1 ml-1  ">
              <svg
                className="w-4 h-4 text-yellow-500 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2l1.09 4.26L17 9.27l-3.91 2.71L13.09 16.5 12 12.5 10.91 16.5l-.18-4.52L7 9.27l3.91-2.71L12 2z"
                />
              </svg>
              functional and creative
              <svg
                className="w-4 h-4 text-yellow-500 -mb-1 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2l1.09 4.26L17 9.27l-3.91 2.71L13.09 16.5 12 12.5 10.91 16.5l-.18-4.52L7 9.27l3.91-2.71L12 2z"
                />
              </svg>
              .
            </span>
          </p>
          <p>
            I'm currently on the lookout for my first software developer role
            and can't wait to bring my unique background and enthusiasm to an
            exciting project.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
