import type { NextPage } from "next";
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import("../components/AboutMe"), { ssr: false });
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
