import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";

const NavigationLink: FC = () => {
  const { route } = useRouter();
  const isOnHomepage = route === "/";

  return (
    <Link href={isOnHomepage ? "/blog" : "/"}>
      <motion.a
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="hidden h-xl:inline cursor-pointer font-bold whitespace-nowrap tracking-wide text-2xl text-nord0 dark:text-nord5 animate__border hover:animate__borderFromLeft"
        role="link"
        tabIndex={0}
      >
        {isOnHomepage ? "My Blog" : "Home"}
      </motion.a>
    </Link>
  );
};

export default NavigationLink;
