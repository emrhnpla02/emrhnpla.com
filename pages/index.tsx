import type { NextPage } from "next";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
  return (
    <Parallax id="parallax" pages={5}>
      <ParallaxLayer offset={0} speed={1.5}>
        <div>Home</div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
