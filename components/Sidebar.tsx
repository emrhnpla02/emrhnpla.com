import { FC, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "./Layout";
import SidebarItem from "./Sidebar/SidebarItem";

const Sidebar: FC = () => {
  const { scrollTop } = useContext(AppContext);

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
    <motion.aside
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`fixed transition-[top,height,padding-bottom] ${
        scrollTop <= 0 ? "top-16 pb-16" : "top-12 pb-12"
      } right-0 flex flex-col justify-center items-center gap-y-40 w-28 h-full bg-nord10 shadow-xl shadow-nord0 dark:shadow-nord10`}
    >
      <SidebarItem page={0} icon="akar-icons:person">
        About Me
      </SidebarItem>
      <SidebarItem page={1} icon="carbon:skill-level">
        Skills
      </SidebarItem>
      <SidebarItem page={2} icon="la:project-diagram">
        My Projects
      </SidebarItem>
      <SidebarItem page={3} icon="simple-icons:protonmail">
        Contact
      </SidebarItem>
    </motion.aside>
  );
};
export default Sidebar;