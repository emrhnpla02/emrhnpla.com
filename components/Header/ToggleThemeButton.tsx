import { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ToggleThemeButton: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  const switchTheme = () =>
    isMounted && setTheme(theme === "light" ? "dark" : "light");

  return (
    <motion.button
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className="relative flex justify-center items-center gap-x-3 p-1 border rounded-2xl border-nord10 animate__animated animate__fadeInRight"
      onClick={switchTheme}
    >
      <Icon icon="akar-icons:sun-fill" className="w-6 h-6" />
      <Icon icon="akar-icons:moon-fill" className="w-6 h-6" />
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
