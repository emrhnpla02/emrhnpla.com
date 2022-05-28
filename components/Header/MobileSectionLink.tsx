import { FC, useContext } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { AppContext } from "../Layout";
import { HeaderContext } from "../Header";

interface IProps {
  page: number;
  icon: string;
  children: string;
}

const MobileSectionLink: FC<IProps> = ({ children, page, icon }) => {
  const { scrollTo } = useContext(AppContext);
  const { setShowMobileNavbar } = useContext(HeaderContext);

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      exit={{ x: -30, opacity: 0, transition: { duration: 0.2, delay: 0 } }}
      transition={{ type: "spring", duration: 1 }}
      className="flex items-center gap-x-5 cursor-pointer group"
      onClick={() => {
        scrollTo && scrollTo(page);
        setShowMobileNavbar && setShowMobileNavbar(false);
      }}
    >
      <Icon
        icon={icon}
        className="grow-0 w-10 h-10 transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:text-nord10 dark:group-hover:text-nord8"
      />
      <span className="grow font-bold text-2xl transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:text-nord10 dark:group-hover:text-nord8 animate__border group-hover:animate__borderFromLeft">
        {children}
      </span>
    </motion.div>
  );
};

export default MobileSectionLink;
