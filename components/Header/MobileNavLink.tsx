import Link from "next/link";
import type { FC } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface IMobileNavLinkProps {
  isOnHomepage: any;
  setShowMobileNavbar: any;
}

const MobileNavLink: FC<IMobileNavLinkProps> = ({
  isOnHomepage,
  setShowMobileNavbar,
}) => {
  return (
    <Link href={isOnHomepage ? "/blog" : "/"} passHref>
      <motion.a
        href="/blog"
        initial={{ x: -30, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        exit={{ x: -30, opacity: 0, transition: { duration: 0.2, delay: 0 } }}
        transition={{ type: "spring", duration: 1 }}
        onClick={() => setShowMobileNavbar && setShowMobileNavbar(false)}
        className="flex items-center gap-x-5 cursor-pointer group"
      >
        <Icon
          icon="carbon:blog"
          className="grow-0 w-10 h-10 transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:!text-nord10 dark:group-hover:!text-nord8"
        />
        <span className="grow font-bold text-2xl transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:!text-nord10 dark:group-hover:!text-nord8 animate__border group-hover:animate__borderFromLeft">
          {isOnHomepage ? "Blog" : "Home"}
        </span>
      </motion.a>
    </Link>
  );
};
export default MobileNavLink;
