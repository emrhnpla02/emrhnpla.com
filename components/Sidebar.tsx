import { type FC, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "./Layout";
import SidebarItem from "./Sidebar/SidebarItem";

const Sidebar: FC = () => {
  const { scrollFarFromTop } = useContext(AppContext);

  const variants = {
    hidden: {
      translateX: 200,
      transition: {
        duration: 1,
      },
    },
    visible: {
      translateX: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.7,
      },
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      className={`fixed transition-[top,height,padding-bottom] ${
        scrollFarFromTop ? "top-12 pb-12" : "top-16 pb-16"
      } right-0 hidden xl:flex flex-col justify-between items-center z-10 w-28 h-full bg-nord10 shadow-xl shadow-nord0 dark:shadow-nord10`}
    >
      <SidebarItem page={0} icon="akar-icons:person">
        About Me
      </SidebarItem>
      <SidebarItem page={1} icon="carbon:skill-level">
        Skills
      </SidebarItem>
      <SidebarItem page={2} icon="la:project-diagram">
        Projects
      </SidebarItem>
      <SidebarItem page={3} icon="simple-icons:protonmail">
        Contact
      </SidebarItem>
    </motion.nav>
  );
};
export default Sidebar;
