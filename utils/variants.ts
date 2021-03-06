import { Variants } from "framer-motion";

export const slide: Variants = {
  hidden: {
    opacity: 0,
  },
  left: {
    x: -300,
    opacity: 0,
    skewX: 60,
  },
  right: {
    x: 300,
    opacity: 0,
    skewX: -60,
  },
  top: {
    y: -300,
    opacity: 0,
  },
  bottom: {
    y: 300,
    opacity: 0,
  },
  horizontalIn: {
    x: 0,
    opacity: 1,
    skewX: 0,
  },
  verticalIn: {
    y: 0,
    opacity: 1,
  },
};

export const slideTransition = {
  type: "spring",
  stiffness: 1000,
  damping: 300,
};
