import { motion } from "framer-motion";
import Link from "next/link";
import type { FC } from "react";

interface IProps {
  children: string;
  errorCode: number;
}

const ErrorPage: FC<IProps> = ({ children, errorCode }) => {
  return (
    <motion.section
      animate={{ opacity: [0, 1], rotate: [-70, 0], scale: [0.3, 1] }}
      transition={{ duration: 1 }}
      className="flex flex-col sm:flex-row place-self-center gap-x-20 box-content w-4/5 xl:w-3/5 min-h-[24rem] pl-10 pr-3 py-20 bg-gradient-to-br from-nord5 dark:from-nord1 via-nord7 to-nord10 border rounded-3xl border-nord0 dark:border-nord5"
    >
      <img src="/sadpepe.svg" className="max-h-60 lg:max-h-96" />
      <div className="space-y-10 w-full">
        <div className="text-center sm:text-left space-y-3 sm:space-y-0 pt-3 sm:pt-0">
          <h2 className="font-bold text-8xl sm:text-7xl text-[#5B8B3B]">
            Shit.
          </h2>
          <h3 className="text-4xl text-nord1 dark:text-nord5">
            Error - {errorCode}
          </h3>
        </div>
        <div className="space-y-2">
          <p className="text-nord1 dark:text-nord6">{children}</p>
          <p className="text-nord3 dark:text-nord4">
            You can go to home page or visit my blog via buttons on down.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row space-y-3 xl:space-y-0 xl:space-x-2 w-full">
          <Link href="/">
            <a className="xl:w-2/4 px-3 py-2 transition-[color,background-color,border-color] duration-200 text-center text-nord5 bg-transparent hover:bg-nord5 hover:text-nord0 border border-nord5 hover:border-nord0">
              Home Page
            </a>
          </Link>
          <Link href="/blog">
            <a className="xl:w-2/4 px-3 py-2 transition-[color,background-color,border-color] duration-200 text-center text-nord5 bg-transparent hover:bg-nord5 hover:text-nord0 border border-nord5 hover:border-nord0">
              Blog
            </a>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ErrorPage;
