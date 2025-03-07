import { HeadingSection } from "../heading-section";
import { ProjectCard } from "../project-card";
import RandomStars from "../random-star";

import { projects } from "@/config/site";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0 bg-cyber-grid from-white/80 to-kitty-blue/10 bg-[size:50px_50px] dark:bg-cyber-grid-dark dark:from-kitty-dark/80 dark:to-kitty-darker/80" />

      <RandomStars count={8} />

      <div className="container relative z-10 mx-auto px-4">
        <HeadingSection
          title="My Purrjects"
          subtitle="Check out some of my recent work"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
