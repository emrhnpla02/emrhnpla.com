import type { FC } from "react";
import { motion } from "framer-motion";

const ShellMessage: FC = () => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="z-10 text-nord0 dark:text-nord5"
    >
      {"Aren't"} you a big fan of terminal? Why {"don't"} you close it with the
      red button on the title bar and look at the other variation of AboutMe?
    </motion.p>
  );
};
export default ShellMessage;
