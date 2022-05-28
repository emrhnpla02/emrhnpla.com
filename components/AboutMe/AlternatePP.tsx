import { FC } from "react";
import { motion } from "framer-motion";

const AlternatePP: FC = () => {
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.img
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ ease: "linear", duration: 1 }}
      src="/pp.jpg"
      alt="Emirhan Pala"
      className="w-40 h-40 alt-xl:w-60 alt-xl:h-60 border-2 rounded-full border-nord0 dark:border-nord8"
    />
  );
};

export default AlternatePP;
