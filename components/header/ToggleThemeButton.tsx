import { FC, useState, useEffect } from "react";
import LightmodeIcon from "../icons/lightmodeIcon";
import DarkmodeIcon from "../icons/darkmodeIcon";
import { useTheme } from "next-themes";

const ToggleThemeButton: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <button
      className="relative flex justify-center items-center gap-3 p-1 border rounded-2xl border-nord10 animate__animated animate__fadeInRight"
      onClick={switchTheme}
    >
      <LightmodeIcon />
      <DarkmodeIcon />
      <div className="absolute transition-[left] left-0 dark:left-1/2 -z-10 w-1/2 h-full rounded-full bg-nord10"></div>
    </button>
  );
};

export default ToggleThemeButton;
