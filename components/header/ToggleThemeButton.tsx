import { FC, useState, useEffect } from "react";
import LightmodeIcon from "../icons/lightmodeIcon";
import DarkmodeIcon from "../icons/darkmodeIcon";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ToggleThemeButton: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className="relative flex justify-center items-center gap-3 p-1 border rounded-2xl border-nord10 animate__animated animate__fadeInRight"
      onClick={switchTheme}
    >
      <LightmodeIcon />
      <DarkmodeIcon />
      <motion.div
        initial={{ left: "0%" }}
        animate={theme === "light" ? { left: "0%" } : { left: "50%" }}
        transition={{ type: "spring", stiffness: 70 }}
        className="absolute -z-10 w-1/2 h-full rounded-full bg-nord10"
      ></motion.div>
    </motion.button>
  );
};

export default ToggleThemeButton;
