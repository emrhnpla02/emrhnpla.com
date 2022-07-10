import type { NextPage } from "next";
import Head from "next/head";
import {
  type ReactNode,
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "react-toastify/dist/ReactToastify.min.css";

interface IProps {
  children: ReactNode;
}

export interface IAppContext {
  scrollFarFromTop: boolean;
  scrollTo: (page: number) => void;
}

export const AppContext = createContext<Partial<IAppContext>>({});

const Layout: NextPage<IProps> = ({ children }) => {
  const [scrollFarFromTop, setScrollFarFromTop] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [parallaxContainer, setParallaxContainer] = useState<HTMLElement>();
  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setShowScrollbar(true), 2000);
  }, []);

  useEffect(() => {
    if (parallaxContainerRef.current !== null)
      setParallaxContainer(parallaxContainerRef.current);
  }, []);

  const scrollTo = useCallback(
    (section: number) =>
      parallaxContainerRef.current?.children[section].scrollIntoView(),
    [parallaxContainerRef]
  );

  const handleScroll = useCallback(
    () =>
      setScrollFarFromTop((parallaxContainerRef.current?.scrollTop ?? 0) > 0),
    [parallaxContainerRef, setScrollFarFromTop]
  );

  useEffect(() => {
    const parallaxContainer = parallaxContainerRef.current;
    parallaxContainer?.addEventListener("scroll", () => handleScroll());
    return () =>
      parallaxContainer?.removeEventListener("scroll", () => handleScroll());
  }, [handleScroll]);

  const providerValue = useMemo(
    () => ({ scrollFarFromTop, scrollTo }),
    [scrollFarFromTop, scrollTo]
  );

  return (
    <main className="relative h-full bg-nord5 dark:bg-nord16 font-rubik">
      <Head>
        <title>Emirhan P.</title>
        <link rel="icon" href="/favicon.ico" />

        {/* SEO Optimization */}
        <meta name="author" content="Emirhan Pala" />
        <meta
          name="keywords"
          content="Emirhan Pala, Web Developer, Front-end Developer, Blogging"
        />
        <meta
          name="description"
          content="Emirhan Pala's personal website for portfolio and blogging"
        />

        {/* OG Meta Tags */}
        <meta
          property="og:title"
          content="Emirhan Pala | Portfolio & Blogging"
        />
        <meta
          property="og:description"
          content="Emirhan Pala's personal website for portfolio and blogging"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/emrhnpla-com.jpg" />
      </Head>
      <AppContext.Provider value={providerValue}>
        <Header />
        <div
          className={`fixed transition-[top,background-color,color] ${
            scrollFarFromTop
              ? "top-12 h-[calc(100%-3rem)]"
              : "top-16 h-[calc(100%-4rem)]"
          } grid grid-cols-1 gap-y-[30rem] w-full xl:w-[calc(100%-7rem)] ${
            showScrollbar ? "overflow-y-scroll" : "overflow-y-hidden"
          } scroll-smooth scrollbar-thin scrollbar-thumb-nord1 hover:scrollbar-thumb-nord0 scrollbar-track-nord10`}
          id="parallax"
          ref={parallaxContainerRef}
        >
          {/* @ts-ignore */}
          <ParallaxProvider
            scrollContainer={parallaxContainer}
            scrollAxis="vertical"
          >
            {children}
          </ParallaxProvider>
        </div>
        <Sidebar />
      </AppContext.Provider>
    </main>
  );
};

export default Layout;
