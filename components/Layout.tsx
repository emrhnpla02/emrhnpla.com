import type { NextPage } from "next";
import Head from "next/head";
import {
  type ReactNode,
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
  scrollFarFromTop: boolean;
}

export const AppContext = createContext<Partial<IAppContext>>({
  scrollFarFromTop: false,
});

const Layout: NextPage<IProps> = ({ children }) => {
  const [scrollFarFromTop, setScrollFarFromTop] = useState(false);

  const handleScroll = useCallback(
    (parallax: Element) => setScrollFarFromTop(parallax.scrollTop > 0),
    [setScrollFarFromTop]
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
      <AppContext.Provider value={{ scrollFarFromTop }}>
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
