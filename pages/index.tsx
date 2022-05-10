import type { NextPage } from "next";
import { useRef, createContext, useState, useEffect } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Sidebar from "../components/Sidebar";

interface ISidebarContext {
  handleScroll: (page: number) => void;
}

export const SidebarContext = createContext<Partial<ISidebarContext>>({});

const Home: NextPage = () => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const parallaxRef = useRef<IParallax>(null);

  useEffect(() => {
    setTimeout(() => setShowScrollbar(true), 2000);
  }, []);

  const handleScroll = (page: number) => parallaxRef?.current?.scrollTo(page);

  return (
    <>
      <Parallax
        className={`!top-12 !w-[calc(100%-7rem)] ${
          !showScrollbar && "!overflow-y-hidden"
        } scrollbar-thin scrollbar-thumb-nord1 hover:scrollbar-thumb-nord0 scrollbar-track-nord10`}
        id="parallax"
        ref={parallaxRef}
        pages={4}
      >
        <ParallaxLayer offset={0} speed={1}>
          <p>About Me</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <p>Skills</p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <p>My Projects</p>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1}>
          <p>Contact</p>
        </ParallaxLayer>
      </Parallax>
      <SidebarContext.Provider value={{ handleScroll }}>
        <Sidebar />
      </SidebarContext.Provider>
    </>
  );
};

export default Home;
