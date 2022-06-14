import { type FC, type ReactNode, useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { AboutMeContext } from "../../AboutMe";
import type { ILink } from "../../../pages/api/links";

const Links: FC = () => {
  const { links } = useContext(AboutMeContext);

  const renderLinkItems = ({ id, href, icon, username }: ILink): ReactNode => {
    const [selectedLink, setSelectedLink] = useState<Partial<ILink>>({});
    const selectedLinkEmpty = Object.keys(selectedLink).length <= 0;
    const isPositionLeft = id % 2 === 1;
    const positions = [
      "right-20 alt-md:right-24 alt-xl:!right-32",
      "left-20 alt-md:left-24 alt-xl:!left-32",
      "right-24 alt-md:right-32 alt-xl:!right-44",
      "left-24 alt-md:left-32 alt-xl:!left-44",
      "right-20 alt-md:right-24 alt-xl:!right-32",
      "left-20 alt-md:left-24 alt-xl:!left-32",
    ];
    const positionClass = positions[id - 1];

    const iconAnim = {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1, delay: 2 },
      },
      hovered: {
        scale: 1.2,
        transition: { duration: 0.3, delay: 0 },
      },
      tapped: {
        scale: 1.1,
        transition: { duration: 0.3, delay: 0 },
      },
    };
    const selectedLinkAnim = {
      hidden: {
        x: isPositionLeft ? -90 : 90,
        opacity: 0,
      },
      left: {
        x: -130,
        opacity: 1,
        transition: { type: "spring", stiffness: 2000, damping: 300 },
      },
      right: {
        x: 130,
        opacity: 1,
        transition: { type: "spring", stiffness: 2000, damping: 300 },
      },
    };

    return (
      <div
        key={id}
        className={`relative ${positionClass} flex ${
          isPositionLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <AnimatePresence exitBeforeEnter>
          {!selectedLinkEmpty && (
            <motion.p
              variants={selectedLinkAnim}
              initial="hidden"
              animate={isPositionLeft ? "left" : "right"}
              exit="hidden"
              className="hidden alt-lg:inline absolute top-3 font-bold text-nord0 dark:text-nord5"
            >
              {selectedLink.username}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.a
          href={href}
          variants={iconAnim}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover="hovered"
          whileTap="tapped"
          onMouseEnter={() => setSelectedLink({ username })}
          onMouseLeave={() => setSelectedLink({})}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={icon} className="w-10 h-10 alt-xl:w-12 alt-xl:h-12" />
        </motion.a>
      </div>
    );
  };

  return (
    <div className="absolute grid grid-cols-2 place-items-center gap-y-6 alt-xl:gap-y-12 rounded-full group">
      {links?.map(renderLinkItems)}
    </div>
  );
};

export default Links;
