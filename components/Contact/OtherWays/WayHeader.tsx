import type { FC } from "react";
import { Icon } from "@iconify/react";

interface IProps {
  name: string;
  color?: string;
  icon: string;
  href: string;
}

const WayHeader: FC<IProps> = ({ name, color, icon, href }) => {
  return (
    <header className="flex justify-center c-md:justify-start items-center text-4xl text-nord5">
      <span className="self-end text-2xl text-nord7">via</span>
      <a href={href} target="_blank" rel="noreferrer" className={color}>
        <h5 className="inline-block align-middle pl-3 pr-2">{name}</h5>
        <Icon icon={icon} strokeWidth="2" className="inline w-10 h-10" />
      </a>
    </header>
  );
};

export default WayHeader;
