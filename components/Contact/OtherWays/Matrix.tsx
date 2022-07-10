import type { FC } from "react";
import WayHeader from "./WayHeader";

const Matrix: FC = () => {
  return (
    <section className="flex flex-col gap-y-5 py-10">
      <WayHeader name="Matrix" icon="cib:matrix" href="https://matrix.org/" />
      <div className="flex flex-col c-xl:flex-row justify-between items-center gap-y-5 c-xl:gap-y-0 text-center text-nord5">
        <span className="w-full c-xl:w-5/12 break-all text-lg">
          @emrhnpla02:matrix.org
        </span>
        <a
          href="https://matrix.to/#/@emrhnpla02:matrix.org"
          target="_blank"
          rel="noreferrer"
          className="w-full c-xl:w-6/12 px-5 py-3 font-bold transition-[color,border-color] duration-300 text-nord5 hover:text-nord0 dark:hover:text-nord10 border border-nord5 dark:border-nord5 hover:border-nord0 dark:hover:border-nord10"
        >
          Go to link
        </a>
      </div>
    </section>
  );
};

export default Matrix;
