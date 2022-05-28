import type { NextPage } from "next";
import Head from "next/head";
import {
  type ReactNode,
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  Ref,
} from "react";
import { IParallax } from "@react-spring/parallax";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}

interface IAppContext {
  parallaxRef: Ref<IParallax>;
  scrollFarFromTop: boolean;
  scrollTo: (page: number) => void;
}

export const AppContext = createContext<Partial<IAppContext>>({
  scrollFarFromTop: false,
});

const Layout: NextPage<IProps> = ({ children }) => {
  const [scrollFarFromTop, setScrollFarFromTop] = useState(false);
  const parallaxRef = useRef<IParallax>(null);

  const scrollTo = (page: number) => parallaxRef?.current?.scrollTo(page);

  const handleScroll = useCallback(
    (parallax: Element) => setScrollFarFromTop(parallax.scrollTop > 0),
    [setScrollFarFromTop]
  );

  useEffect(() => {
    const parallax = parallaxRef?.current?.container.current;
    parallax?.addEventListener("scroll", () => handleScroll(parallax));
    return () =>
      parallax?.removeEventListener("scroll", () => handleScroll(parallax));
  }, []);

  return (
    <main className="bg-nord5 dark:bg-nord16 font-rubik">
      <Head>
        <title>Emirhan P.</title>
      </Head>
      <AppContext.Provider value={{ parallaxRef, scrollFarFromTop, scrollTo }}>
        <Header />
        <section
          className={`transition-[top,background-color,color] ${
            scrollFarFromTop ? "top-12" : "top-16"
          } h-full`}
        >
          {children}
        </section>
      </AppContext.Provider>
    </main>
  );
};

export default Layout;
