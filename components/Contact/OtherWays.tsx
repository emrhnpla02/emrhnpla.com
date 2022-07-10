import type { FC } from "react";
import Session from "./OtherWays/Session";
import Matrix from "./OtherWays/Matrix";
import Protonmail from "./OtherWays/Protonmail";

const OtherWays: FC = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full c-md:w-5/12 c-md:pl-10 group">
      <h4 className="c-md:pl-3 pb-3 text-5xl text-center c-md:text-left transition-[color] duration-200 text-nord5 dark:text-nord5 group-hover:text-nord8 dark:group-hover:text-nord10 animate__border group-hover:animate__borderFromRight">
        Other Ways
      </h4>
      <article className="flex flex-col divide-y">
        <Session />
        <Matrix />
        <Protonmail />
      </article>
    </div>
  );
};

export default OtherWays;
