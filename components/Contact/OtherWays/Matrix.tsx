import type { FC } from "react";
import { Icon } from "@iconify/react";

const Matrix: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h5 className="flex justify-center c-md:justify-start items-center text-4xl text-nord5">
        <span className="self-end text-2xl text-nord7">via</span>
        <a href="https://matrix.org/" target="_blank" className="text-nord4">
          <span className="align-middle pl-3 pr-2">Matrix</span>
          <Icon
            icon="cib:matrix"
            strokeWidth="2"
            className="inline w-10 h-10"
          />
        </a>
      </h5>
      <div className="flex flex-col c-xl:flex-row justify-between items-center gap-y-5 c-xl:gap-y-0 text-center text-nord5">
        <span className="w-full c-xl:w-5/12 break-all text-lg">
          @emrhnpla02:matrix.org
        </span>
        <a
          href="https://matrix.to/#/@emrhnpla02:matrix.org"
          target="_blank"
          className="w-full c-xl:w-6/12 px-5 py-3 font-bold transition-[color,border-color] duration-300 text-nord5 hover:text-nord0 dark:hover:text-nord10 border border-nord5 dark:border-nord5 hover:border-nord0 dark:hover:border-nord10"
        >
          Go to link
        </a>
      </div>
    </div>
  );
};

export default Matrix;
