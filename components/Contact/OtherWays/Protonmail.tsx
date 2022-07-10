import type { FC } from "react";
import WayHeader from "./WayHeader";

const Protonmail: FC = () => {
  return (
    <section className="flex flex-col gap-y-5 pt-10">
      <WayHeader
        name="Protonmail"
        color="text-protonmail"
        icon="simple-icons:protonmail"
        href="https://proton.me/mail"
      />
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
    </section>
  );
};

export default Protonmail;
