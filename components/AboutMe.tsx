import { FC, useState, createContext, useEffect } from "react";
import useSWR from "swr";
import { AnimatePresence } from "framer-motion";
import { fetcher } from "../utils/fetcher";
import { useWidth } from "../hooks/useWidth";
import type { ILink } from "../pages/api/links";
import Terminal from "./AboutMe/Terminal";
import Links from "./AboutMe/Links";
import Alternate from "./AboutMe/Alternate";

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

  const { data } = useSWR("/api/links", fetcher);

  useEffect(() => {
    if (width < LAYOUT_SCREEN_MEDIUM) setShowAlternate(true);
    else setShowAlternate(false);
  }, [window.innerWidth]);

  return (
    <section className="flex flex-row pt-16 pb-3">
      <AboutMeContext.Provider
        value={{ setShowAlternate, setShowLinks, links: data }}
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
