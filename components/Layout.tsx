import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: NextPage<IProps> = ({ children }) => {
  return (
    <main className="bg-nord5 dark:bg-nord0 font-rubik text-nord0 dark:text-nord5">
      <Head>
        <title>Emirhan P.</title>
      </Head>
      <section>{children}</section>
    </main>
  );
};

export default Layout;
