"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
    const { ref } = useSectionInView("About");


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I’m Natalie Chan, a former{" "}
        <span className="font-medium">Physiotherapist</span> turned{" "}
        <span className="font-medium">full-stack developer</span>. My journey
        into tech began early, from customizing{" "}
        <span className="font-medium">Neopets</span> pages with{" "}
        <span className="font-medium">HTML</span> and{" "}
        <span className="font-medium">CSS</span>, to later reigniting my passion
        through <span className="font-medium">Harvard’s CS50</span> course.
        After moving to the UK, I completed the{" "}
        <span className="font-medium">Northcoders bootcamp</span>, where I honed
        my skills in <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Node.js</span>, and more. I’m driven by
        problem-solving and eager to continue growing in a full-time{" "}
        <span className="font-medium">software developer</span> role.
      </p>
      <p>
        {" "}
        Outside of coding, I love cooking healthy meals, working out, and
        playing with my cats.
      </p>
    </motion.section>
  );
}
