import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode, createContext, useState, useEffect } from "react";
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

  useEffect(() => {
    document.querySelector("#parallax")?.addEventListener("scroll", () => {
      setScrollTop(document.querySelector("#parallax")?.scrollTop ?? 0);
    });
  });

  return (
    <main className="bg-nord5 dark:bg-nord0 font-rubik text-nord0 dark:text-nord5">
      <Head>
        <title>Emirhan P.</title>
      </Head>
      <AppContext.Provider value={{ scrollTop }}>
        <Header />
        <section
          className={`relative transition-[top,background-color,color] ${
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
