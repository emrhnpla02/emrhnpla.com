import type { FC } from "react";
import SkillCategory from "./Skills/SkillCategory";
import SectionHeader from "./Section/SectionHeader";
import skills from "../public/json/skills.json";

const Skills: FC = () => {
  return (
    <section className="space-y-10 xl:space-y-0 pt-3">
      <SectionHeader>Skills</SectionHeader>
      <article className="grid grid-rows-1 grid-cols-1 sk-md:grid-cols-2 sk-lg:!grid-cols-3 place-items-center gap-y-10 w-full">
        <SkillCategory
          categoryName="Languages"
          skills={skills.languages}
          description="Languages I prefer to speak"
        />
        <SkillCategory
          categoryName="Frontend"
          skills={skills.frontend}
          description="Frontend Techs I prefer to work with"
        />
        <SkillCategory
          categoryName="Backend"
          skills={skills.backend}
          description="Backend Techs I prefer to work with"
        />
        <SkillCategory
          categoryName="Development Environment"
          skills={skills.devEnv}
          description="Tools I use for web development"
        />
      </article>
    </section>
  );
};

export default Skills;
