import type { NextPage } from "next";
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import("../components/AboutMe"), { ssr: false });
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <AboutMe />
      <Skills />
      <Projects />
      <section>Contact</section>
    </>
  );
};

export default Home;
