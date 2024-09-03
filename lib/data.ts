import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ncNewsWeb from "@/public/ncnewsweb.png";
import ncNewsApi2 from "@/public/ncnewsapi2.png";
import doggo from "@/public/doggo3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Trainee Software Developer",
    location: "Northcoders",
    description:
      "During the 13-week software engineering bootcamp, I gained experience in full-stack development using JavaScript, with a focus on industry best practices like Test-Driven Development (TDD), Agile methodologies, version control with Git/GitHub, and pair programming for collaborative problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2024 - Jun 2024",
  },
  {
    title: "Physiotherapist",
    location: "Hospital Authority, Hong Kong",
    description:
      "I developed and implemented personalized treatment plans for patients across five hospital settings, utilizing strong problem-solving skills to diagnose and address complex cases. I also communicated effectively with a diverse range of population, including patients (and their relatives), doctors, nurses and colleagues, honing my ability to collaborate, adapt, and convey complex information clearly.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "NC News Web",
    description:
      "A Reddit-like social news aggregation platform. It offers an intuitive interface to interact seamlessly with the NC News API, enabling users to browse, post, and engage with articles and comments.",
    github: "https://github.com/natccc/be-news_api",
    live: "https://natalie-nc-news.netlify.app/",
    tags: ["React", "TailwindCSS", "TailWindUI"],
    imageUrl: ncNewsWeb,
  },
  {
    title: "NC News API",
    description:
      "This RESTful API provides comprehensive CRUD functionality for managing news content. Users can access, post, update, and delete news articles and comments. Additionally, the API supports updating vote counts on articles.",
    github: "https://github.com/natccc/fe-nc-news",
    live: "",
    tags: ["Node.JS", "Express", "PostgreSQL"],
    imageUrl: ncNewsApi2,
  },
  {
    title: "Doggo",
    description:
      "A travel planning app for dog owners, providing detailed information on dog-friendly accommodations, places to visit, and airline policies. Users can browse listings, save trips, and add reviews. Accommodation listings are user-generated, while other place details are sourced from the Google Places API.",
    github: "https://github.com/natccc/doggo",
    live: "",
    tags: ["React Native (Expo)", "Supabase"],
    imageUrl: doggo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Jest"
] as const;
