import type { NextPage } from "next";
import Head from "next/head";
import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}

interface IAppContext {
  scrollTop: number;
}

export const AppContext = createContext<IAppContext>({ scrollTop: 0 });

const Layout: NextPage<IProps> = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(
    (parallax: Element) => setScrollTop(parallax.scrollTop),
    [setScrollTop]
  );

  useEffect(() => {
    const parallax = document.querySelector("#parallax");
    parallax?.addEventListener("scroll", () => handleScroll(parallax));
    return () =>
      parallax?.removeEventListener("scroll", () => handleScroll(parallax));
  }, []);

  return (
    <main className="bg-nord5 dark:bg-nord16 font-rubik">
      <Head>
        <title>Emirhan P.</title>
      </Head>
      <AppContext.Provider value={{ scrollTop }}>
        <Header />
        <section
          className={`transition-[top,background-color,color] ${
            scrollTop <= 0 ? " top-16" : "top-12"
          } h-full`}
        >
          {children}
        </section>
      </AppContext.Provider>
    </main>
  );
};

export default Layout;
