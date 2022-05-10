import type { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
  return (
    <>
      <Parallax
        className="!top-12 !w-[calc(100%-7rem)]"
        id="parallax"
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
    </>
  );
};

export default Home;
