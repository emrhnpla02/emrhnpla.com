import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../ProfilePicture";
import OutputItem from "./OutputItem";

interface IProps {
  afterMounted: () => void;
}

const FetchOutput: FC<IProps> = ({ afterMounted }) => {
  useEffect(() => {
    setTimeout(() => afterMounted(), 500);
  }, [afterMounted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center t-xl:flex-row t-xl:items-start gap-x-3 gap-y-5"
    >
      <ProfilePicture />
      <div>
        <p className="text-nord9">
          ┌──────────────
          <span className="text-nord0 dark:text-nord5">
            {" "}
            Emirhan Pala - Web Developer{" "}
          </span>
          ──────────────┐
        </p>
        <p className="text-nord9 mt-3">
          ├────────────────────
          <span className="text-nord10"> Basic Information </span>
          ───────────────────┤
        </p>
        <div className="leading-5 ml-2 my-1">
          <OutputItem title="OS" text="Human" />
          <OutputItem title="Host" text="Earth/Turkey" />
          <OutputItem title="Kernel" text="0.0.1-male" />
          <OutputItem title="Uptime" text="16 years" />
          <OutputItem title="Locales" text="en_US.UTF-8, tr_TR.UTF-8" />
        </div>
        <p className="text-nord9">
          ├────────────────────
          <span className="text-nord10"> Skill Information </span>
          ───────────────────┤
        </p>
        <div className="leading-5 ml-2 my-1">
          <OutputItem
            title="Languages"
            text="Html, Css, Javascript, Typescript, C#"
          />
          <OutputItem title="Frontend" text="Tailwindcss, React, NextJS" />
          <OutputItem title="Backend" text="NodeJS, PostgreSQL, Redis" />
        </div>
        <p className="text-nord9">
          ├──────────────────
          <span className="text-nord10"> Personal Information </span>
          ──────────────────┤
        </p>
        <div className="flex flex-col leading-5 ml-2 my-1">
          <div className="text-nord0 dark:text-nord5">
            <p>
              A{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                teenager
              </span>{" "}
              who lives in Turkey.
            </p>
            <p>
              A{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                Web Developer
              </span>{" "}
              who codes for fun.
            </p>
            <p>
              A{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                Linux Elitist
              </span>{" "}
              who cares about freedom.
            </p>
            <p>
              A{" "}
              <span className="duration-75 hover:bg-nord9 hover:bg-opacity-50 selection:hover:bg-nord9 selection:hover:bg-opacity-50">
                feller
              </span>{" "}
              who's interested in philosophy, music and nature.
            </p>
          </div>
        </div>
        <p className="text-nord9">
          └──────────────────────────────────────────────────────────┘
        </p>
      </div>
    </motion.div>
  );
};

export default FetchOutput;
