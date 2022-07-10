import type { FC } from "react";
import SectionHeader from "./Section/SectionHeader";
import Project from "./Projects/Project";
import projects from "../public/json/projects.json";

const Projects: FC = () => {
  return (
    <section className="space-y-10 xl:space-y-0 pt-3">
      <SectionHeader>Projects</SectionHeader>
      <article className="flex flex-col items-center gap-y-40">
        {projects.map((project, index) => (
          <Project project={project} index={index} key={project.id} />
        ))}
        <Project />
      </article>
    </section>
  );
};

export default Projects;
