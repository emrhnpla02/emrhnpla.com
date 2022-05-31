import type { NextPage } from "next";
import Head from "next/head";
import {
  type ReactNode,
  type Ref,
  createContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}

interface IAppContext {
  parallaxContainerRef: Ref<HTMLDivElement>;
  scrollFarFromTop: boolean;
  scrollTo: (page: number) => void;
}

export const AppContext = createContext<Partial<IAppContext>>({});

const Layout: NextPage<IProps> = ({ children }) => {
  const [scrollFarFromTop, setScrollFarFromTop] = useState(false);
  const parallaxContainerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <main className="relative h-full bg-nord5 dark:bg-nord16 font-rubik">
      <Head>
        <title>Emirhan P.</title>
      </Head>
      <AppContext.Provider
        value={{
          parallaxContainerRef,
          scrollFarFromTop,
          scrollTo,
        }}
      >
        <Header />
        {children}
      </AppContext.Provider>
    </main>
  );
};

export default Layout;
