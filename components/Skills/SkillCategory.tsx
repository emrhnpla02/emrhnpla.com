import type { FC } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface ISkill {
  id: number;
  name: string;
  icon: string;
  color?: string;
}

interface IProps {
  categoryName: string;
  description: string;
  skills: ISkill[];
}

const SkillCategory: FC<IProps> = ({ categoryName, description, skills }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="sk-lg:last:col-span-3 last:order-none sk-md:last:-order-1 sk-lg:last:!order-none flex flex-col items-center justify-between gap-y-10 w-11/12 sk-xl:w-8/12 h-full py-4 bg-nord4 dark:bg-nord0 border rounded-lg border-nord0 dark:border-nord1 hover:!border-nord10 shadow-sm shadow-nord0 group"
    >
      <h2 className="px-7 font-bold text-center text-3xl transition-[color] text-nord0 dark:text-nord5 group-hover:text-nord10 group-hover:dark:text-nord8 animate__border group-hover:animate__borderDefault">
        {categoryName}
      </h2>
      <ul className="grid grid-cols-2 sk-lg:group-last:grid-flow-col gap-10 px-7">
        {skills?.map(({ id, name, icon, color }) => (
          <li
            key={id}
            className={`${
              skills.length % 2 === 1 && "last:col-span-2"
            } flex flex-col items-center gap-y-2`}
          >
            <Icon icon={icon} className="w-12 h-12" color={color} />
            <span className="text-lg text-nord0 dark:text-nord5">{name}</span>
          </li>
        ))}
      </ul>
      <footer className="w-full pt-4 text-center text-nord0 dark:text-nord5 border-t border-nord0 dark:border-nord5 group-hover:!border-nord10">
        {description}
      </footer>
    </motion.section>
  );
};

export default SkillCategory;
