"use client";
import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 leading-8 sm:mb-40 scroll-mt-28 flex flex-col px-2 text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex md:flex-row flex-col gap-20 items-center">
        <div>
          <Image
            src="/portrait2.png"
            alt="portrait"
            width={250}
            height={250}
            className="z-30"
          />
        </div>
        <div className="max-w-[35rem] text-lg flex flex-col gap-5">
          <p>
            Hi, I'm a former physiotherapist turned full-stack developer with a
            passion for problem-solving. After five years of helping patients
            regain mobility, I found my love for coding through Harvard's CS50
            course. Now, I combine my technical skills with the communication
            and teamwork I honed in healthcare to create solutions that are both
            functional and creative.
          </p>
          <p>
            When I'm not coding, you'll find me sweating it out at the gym,
            playing with cats, or whipping up nutritious meals in the kitchen.
            I'm currently on the lookout for my first software developer role
            and can't wait to bring my unique background and enthusiasm to an
            exciting project.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
