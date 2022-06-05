import type { FC } from "react";
import { motion } from "framer-motion";

interface IProps {
  children: string;
}

const SectionHeader: FC<IProps> = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onViewportEnter={(e: IntersectionObserverEntry | null) =>
        setTimeout(
          () => e?.target.classList.add("animate__borderDefault"),
          1000
        )
      }
      onViewportLeave={(e: IntersectionObserverEntry | null) =>
        e?.target.classList.remove("animate__borderDefault")
      }
      className="block xl:hidden px-10 tracking-wider text-center text-5xl xs:text-7xl text-nord11 animate__border"
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeader;
