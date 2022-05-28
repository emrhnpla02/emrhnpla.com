export const slide = {
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
  transition: {
    type: "spring",
    stiffness: 1000,
    damping: 300,
  },
};
