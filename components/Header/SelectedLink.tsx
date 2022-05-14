import type { FC } from "react";
import { AnimationControls, motion } from "framer-motion";
import { ISelectedLink } from "./MediaLinks";

interface IProps {
  selectedLink: Partial<ISelectedLink>;
  selectedLinkAnim: AnimationControls;
}

const SelectedLink: FC<IProps> = ({ selectedLink, selectedLinkAnim }) => {
  const selectedLinkVariants = {
    hidden: { opacity: 0, y: 55 },
    visible: { opacity: 1, y: 50 },
  };

  return (
    <motion.p
      variants={selectedLinkVariants}
      initial="hidden"
      animate={selectedLinkAnim}
      transition={{ duration: 0.3 }}
      key="selectedLink"
      className="absolute text-nord0 dark:text-nord5"
    >
      {selectedLink.name}
      <span className="text-nord14"> ➜ </span>
      {selectedLink.username}
    </motion.p>
  );
};
export default SelectedLink;
