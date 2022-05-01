import { FC, useContext } from "react";
import { AppContext } from "./Layout";
import NavigationLink from "./header/NavigationLink";
import MediaLinks from "./header/MediaLinks";
import ToggleThemeButton from "./header/ToggleThemeButton";

const Header: FC = () => {
  const { scrollTop } = useContext(AppContext);

  return (
    <header
      className={`fixed top-0 z-10 w-full  transition-[height,background-color,color] ${
        scrollTop <= 0 ? " h-16" : "h-12"
      } flex justify-between items-center px-3 bg-nord5 dark:bg-nord16`}
    >
      <NavigationLink />
      <MediaLinks />
      <ToggleThemeButton />
    </header>
  );
};

export default Header;
