import type { FC } from "react";
import Session from "./OtherWays/Session";
import Matrix from "./OtherWays/Matrix";
import Protonmail from "./OtherWays/Protonmail";

const OtherWays: FC = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full c-md:w-5/12 group">
      <h4 className="c-md:pl-3 pb-3 text-5xl text-center c-md:text-left transition-[color] duration-200 text-nord5 dark:text-nord5 group-hover:text-nord8 dark:group-hover:text-nord10 animate__border group-hover:animate__borderFromRight">
        Other Ways
      </h4>
      <div className="flex flex-col gap-y-10">
        <Session />
        <div className="w-full border-b border-nord5" />
        <Matrix />
        <div className="w-full border-b border-nord5" />
        <Protonmail />
      </div>
    </div>
  );
};

export default OtherWays;
