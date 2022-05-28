import { FC, useState } from "react";
import { motion } from "framer-motion";
import TitleBar from "./Terminal/TitleBar";
import Shell from "./Terminal/Shell";
import TerminalDecoration from "./Terminal/TerminalDecoration";

const Terminal: FC = () => {
  const [highlightButton, setHighlightButton] = useState(false);

  const variants = {
    hidden: {
      x: -1500,
      transition: {
        duration: 1,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="relative w-7/12 min-h-[40rem] ml-5"
    >
      <TitleBar highlightButton={highlightButton} />
      <Shell setHighlightButton={setHighlightButton} />
      <TerminalDecoration />
    </motion.div>
  );
};

export default Terminal;
