import { FC, useContext } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { AboutMeContext } from "../AboutMe";
import type { ILink } from "../../pages/api/links";
import { slide, slideTransition } from "../../utils/variants";

const Links: FC = () => {
  const { links } = useContext(AboutMeContext);

  return (
    <div className="w-5/12 flex flex-col justify-center items-center gap-y-5">
      {links?.map(({ id, href, icon, name, username }: ILink) => (
        <motion.a
          variants={slide}
          initial="right"
          animate="horizontalIn"
          exit="right"
          transition={slideTransition}
          key={id}
          href={href}
          target="_blank"
          className="flex items-center gap-x-3 w-4/6 p-3 rounded-lg bg-nord4 dark:bg-nord0 border border-nord0 dark:border-nord1 hover:!border-nord10 group"
        >
          <Icon icon={icon} className="grow-0 w-8 h-8" />
          <p className="grow flex flex-col l-xl:flex-row justify-center items-center gap-x-1 transition-[color] duration-200 text-nord0 dark:text-nord5 group-hover:text-nord10">
            <span>
              <span className="font-semibold">{name}</span>
              <span className="text-nord14"> ➜</span>
            </span>
            <span>{username}</span>
          </p>
        </motion.a>
      ))}
    </div>
  );
};

export default Links;
