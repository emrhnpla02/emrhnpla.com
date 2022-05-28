import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect, useContext } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AppContext } from "../components/Layout";
const AboutMe = dynamic(() => import("../components/AboutMe"), { ssr: false });
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const { parallaxRef } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => setShowScrollbar(true), 2000);
  }, []);

  return (
    <>
      <Parallax
        className={`!top-12 !w-full xl:!w-[calc(100%-7rem)] ${
          !showScrollbar && "!overflow-y-hidden"
        } scrollbar-thin scrollbar-thumb-nord1 hover:scrollbar-thumb-nord0 scrollbar-track-nord10`}
        id="parallax"
        ref={parallaxRef}
        pages={4}
      >
        <ParallaxLayer offset={0} speed={1}>
          <AboutMe />
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
      <Sidebar />
    </>
  );
};

export default Home;
