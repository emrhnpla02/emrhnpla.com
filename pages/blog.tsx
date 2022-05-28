import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <section className="grid place-content-center h-screen">
      <Head>
        <title>Emirhan P. | Blog</title>
      </Head>
      <p className="font-bold text-nord0 dark:text-nord5">Currently there is nothing here 🥺.</p>
    </section>
  );
};

export default Blog;
