import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect, useContext } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppContext } from "../components/Layout";
const AboutMe = dynamic(() => import("../components/AboutMe"), { ssr: false });
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  const [showScrollbar, setShowScrollbar] = useState(false);
  const { scrollFarFromTop, parallaxContainerRef } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => setShowScrollbar(true), 2000);
  }, []);

  return (
    <section
      className={`fixed transition-[top,background-color,color] ${
        scrollFarFromTop
          ? "top-12 h-[calc(100%-3rem)]"
          : "top-16 h-[calc(100%-4rem)]"
      } grid grid-cols-1 gap-y-[40rem] w-full xl:w-[calc(100%-7rem)] ${
        showScrollbar ? "overflow-y-scroll" : "overflow-y-hidden"
      } scroll-smooth scrollbar-thin scrollbar-thumb-nord1 hover:scrollbar-thumb-nord0 scrollbar-track-nord10`}
      id="parallax"
      ref={parallaxContainerRef}
    >
      <ParallaxProvider
        scrollContainer={parallaxContainerRef?.current}
        scrollAxis="vertical"
      >
        <AboutMe />
        <Skills />
        <Projects />
        <section>Contact</section>
      </ParallaxProvider>
      <Sidebar />
    </section>
  );
};

export default Home;
