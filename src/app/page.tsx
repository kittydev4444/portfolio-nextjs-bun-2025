import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skill from "@/components/sections/skill";

export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="absolute inset-0 z-0 bg-cyber-grid-dark bg-[size:10px_50px]" />
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
