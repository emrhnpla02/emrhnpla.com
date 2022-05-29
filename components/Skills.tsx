import type { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import type { ISkills } from "../pages/api/skills";
import SkillCategory from "./Skills/SkillCategory";

const Skills: FC = () => {
  const { data, error } = useSWR<ISkills>("/api/skills", fetcher);

  return (
    <section className="grid grid-rows-1 grid-cols-1 sk-md:grid-cols-2 sk-lg:!grid-cols-3 place-items-center gap-y-10 pt-3">
      {!error && (
        <>
          <SkillCategory
            categoryName="Languages"
            skills={data?.languages}
            description="Languages I prefer to speak"
          />
          <SkillCategory
            categoryName="Frontend"
            skills={data?.frontend}
            description="Frontend Techs I prefer to work with"
          />
          <SkillCategory
            categoryName="Backend"
            skills={data?.backend}
            description="Backend Techs I prefer to work with"
          />
          <SkillCategory
            categoryName="Developement Environment"
            skills={data?.devEnv}
            description="Tools I use for web development"
          />
        </>
      )}
    </section>
  );
};

export default Skills;
