import { FC, createContext, useState, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { AppContext } from "./Layout";
import NavigationLink from "./Header/NavigationLink";
import SectionLinks from "./Header/SectionLinks";
import ToggleThemeButton from "./Header/ToggleThemeButton";
import MobileNavbar from "./Header/MobileNavbar";

interface IHeaderContext {
  setShowMobileNavbar: (state: boolean) => void;
}

export const HeaderContext = createContext<Partial<IHeaderContext>>({});

const Header: FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const { scrollFarFromTop } = useContext(AppContext);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[height,background-color,color] ${
        scrollFarFromTop ? "h-12" : "h-16"
      } flex justify-between items-center px-5 bg-nord5 dark:bg-nord16 shadow shadow-nord0`}
    >
      <NavigationLink />
      <SectionLinks
        showMobileNavbar={showMobileNavbar}
        setShowMobileNavbar={setShowMobileNavbar}
      />
      <HeaderContext.Provider value={{ setShowMobileNavbar }}>
        <AnimatePresence>
          {showMobileNavbar && <MobileNavbar />}
        </AnimatePresence>
      </HeaderContext.Provider>
      <ToggleThemeButton />
    </header>
  );
};

export default Header;
