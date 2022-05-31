import { FC } from "react";
import { useParallaxController } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { slide, slideTransition } from "../../utils/variants";
import AlternatePP from "./AlternatePP";
import Links from "./Alternate/Links";

const Alternate: FC = () => {
  const parallaxController = useParallaxController();

  return (
    <div className="relative flex flex-col items-center gap-y-14 w-full h-[50rem] mt-5">
      <AlternatePP />
      <Links />
      <div className="flex flex-col gap-y-3 alt-md:gap-y-0 items-center">
        <motion.h1
          variants={slide}
          initial="left"
          animate="horizontalIn"
          exit="hidden"
          transition={{ delay: 0.5, ...slideTransition }}
          className="flex items-center font-iflower font-bold text-4xl alt-md:text-6xl alt-xl:!text-9xl text-nord10 dark:text-nord8"
        >
          Emirhan Pala
        </motion.h1>
        <motion.h4
          variants={slide}
          initial="left"
          animate="horizontalIn"
          exit="hidden"
          transition={{ delay: 1, ...slideTransition }}
          className="flex items-center font-iflower text-2xl alt-xl:text-4xl text-nord0 dark:text-nord5"
        >
          <img
            onLoad={() => parallaxController?.update()}
            src="/catprogramming.gif"
            className="w-12 h-12 alt-xl:w-20 alt-xl:h-20 mr-3"
          />
          <span>Web Developer</span>
          <span className="mx-3 text-nord8">•</span>
          <span>Linux Elitist</span>
          <img
            onLoad={() => parallaxController?.update()}
            src="/tux.gif"
            className="w-8 h-8 alt-xl:w-12 alt-xl:h-12 alt-md:ml-3"
          />
        </motion.h4>
      </div>
      <motion.div
        variants={slide}
        initial="bottom"
        animate="verticalIn"
        exit="hidden"
        transition={{ delay: 1.5, ...slideTransition }}
        className="relative shadow-inner shadow-nord0 dark:shadow-transparent mx-3"
      >
        <div className="absolute top-0 left-0 w-4/6 h-1/2 border-t-2 border-l-2 border-nord10 dark:border-nord8"></div>
        <div className="relative z-10 flex flex-col alt-xl:flex-row alt-xl:items-center gap-x-5 px-7 alt-xl:px-14 py-3 alt-xl:py-7">
          <p className="font-bold text-8xl alt-xl:text-9xl text-nord10 dark:text-nord8">
            I'm
          </p>
          <div className="text-sm alt-lg:text-base text-nord0 dark:text-nord5">
            <p className="indent-3 alt-xl:indent-0">
              a{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                teenager
              </span>{" "}
              who lives in Turkey.
            </p>
            <p className="indent-3 alt-xl:indent-0">
              a{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                Web Developer
              </span>{" "}
              who codes for fun.
            </p>
            <p className="indent-3 alt-xl:indent-0">
              a{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                Linux Elitist
              </span>{" "}
              who cares about freedom.
            </p>
            <p className="indent-3 alt-xl:indent-0">
              a{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                feller
              </span>{" "}
              who's interested in philosophy, music and nature.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-4/6 h-1/2 border-b-2 border-r-2 border-nord10 dark:border-nord8"></div>
      </motion.div>
    </div>
  );
};

export default Alternate;
