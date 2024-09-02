import Image from "next/image";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact/>
    </main>
  );
}
