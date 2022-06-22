import { type FC, createContext, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useWidth } from "../hooks/useWidth";
import links from "../public/json/links.json";
import Terminal from "./AboutMe/Terminal";
import Links from "./AboutMe/Links";
import Alternate from "./AboutMe/Alternate";

export interface ILink {
  id: number;
  name: string;
  username: string;
  icon: string;
  href: string;
}

interface IAboutMeContext {
  setShowAlternate: (state: boolean) => void;
  setShowLinks: (state: boolean) => void;
  links: ILink[];
}

export const AboutMeContext = createContext<Partial<IAboutMeContext>>({});

const AboutMe: FC = () => {
  const [showAlternate, setShowAlternate] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const width = useWidth();
  const LAYOUT_SCREEN_MEDIUM = 768;

  useEffect(() => {
    if (width < LAYOUT_SCREEN_MEDIUM) setShowAlternate(true);
    else setShowAlternate(false);
  }, [width]);

  return (
    <section className="flex flex-row pt-12 pb-3">
      <AboutMeContext.Provider
        value={{ setShowAlternate, setShowLinks, links }}
      >
        <AnimatePresence exitBeforeEnter>
          {!showAlternate ? (
            <>
              <Terminal key="terminal" />
              {showLinks && <Links key="links" />}
            </>
          ) : (
            <Alternate key="alternate" />
          )}
        </AnimatePresence>
      </AboutMeContext.Provider>
    </section>
  );
};

export default AboutMe;
