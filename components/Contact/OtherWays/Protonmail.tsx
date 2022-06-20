import type { FC } from "react";
import { Icon } from "@iconify/react";

const Protonmail: FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h5 className="flex justify-center c-md:justify-start items-center text-4xl text-nord5">
        <span className="justify-center c-md:justify-start items-center self-end text-2xl text-nord7">
          via
        </span>
        <a
          href="https://proton.me/mail"
          target="_blank"
          rel="noreferrer"
          className="text-protonmail"
        >
          <span className="align-middle pl-3 pr-2">Protonmail</span>
          <Icon
            icon="simple-icons:protonmail"
            strokeWidth="2"
            className="inline w-10 h-10"
          />
        </a>
      </h5>
      <div className="flex flex-col c-xl:flex-row justify-between items-center gap-y-5 c-xl:gap-y-0 text-nord5 text-center">
        <p className="w-full c-xl:w-5/12 break-all text-lg">
          emrhnpla02@proton.me
        </p>
        <a
          className="w-full c-xl:w-6/12 px-5 py-3 font-bold transition-[color,border-color] duration-300 text-nord5 hover:text-protonmail border border-nord5 dark:border-nord5 hover:border-protonmail dark:hover:border-protonmail"
          href="mailto:emrhnpla02@proton.me"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default Protonmail;
