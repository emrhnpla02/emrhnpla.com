import { FC, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { AppContext } from "../Layout";

interface IProps {
  page: number;
  icon: string;
  children: string;
}

const SectionLink: FC<IProps> = ({ children, page, icon }) => {
  const { scrollFarFromTop, scrollTo } = useContext(AppContext);

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className="flex xl:hidden flex-col items-center gap-y-2 cursor-pointer group"
      onClick={() => scrollTo && scrollTo(page)}
    >
      <Icon
        icon={icon}
        className={`${
          scrollFarFromTop ? "w-5 h-5" : "w-8 h-8"
        } transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:!text-nord10 dark:group-hover:!text-nord8`}
      />
      <AnimatePresence exitBeforeEnter>
        {scrollFarFromTop && (
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-bold text-sm transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:!text-nord10 dark:group-hover:!text-nord8 animate__border group-hover:animate__borderDefault"
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SectionLink;
