import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { AppContext } from "../Layout";
import { HeaderContext } from "../Header";
import MobileSectionLink from "./MobileSectionLink";
import MobileNavLink from "./MobileNavLink";

const MobileNavbar: FC = () => {
  const { scrollFarFromTop } = useContext(AppContext);
  const { setShowMobileNavbar } = useContext(HeaderContext);
  const { route } = useRouter();
  const isOnHomepage = route === "/";

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isOnHomepage ? "16rem" : "5rem" }}
      exit={{ height: 0, transition: { delay: 0.3 } }}
      transition={{ duration: 0.3 }}
      className={`absolute transition-[top,background-color,color] ${
        scrollFarFromTop ? "top-12" : "top-16"
      } left-0 flex h-xl:hidden flex-col justify-around w-screen px-5 bg-nord5 dark:bg-nord16 shadow-sm shadow-nord0`}
    >
      {isOnHomepage && (
        <>
          <MobileSectionLink page={0} icon="akar-icons:person">
            About Me
          </MobileSectionLink>
          <MobileSectionLink page={1} icon="carbon:skill-level">
            Skills
          </MobileSectionLink>
          <MobileSectionLink page={2} icon="la:project-diagram">
            Projects
          </MobileSectionLink>
          <MobileSectionLink page={3} icon="simple-icons:protonmail">
            Contact
          </MobileSectionLink>
        </>
      )}
      <MobileNavLink
        isOnHomepage={isOnHomepage}
        setShowMobileNavbar={setShowMobileNavbar}
      />
    </motion.div>
  );
};

export default MobileNavbar;
