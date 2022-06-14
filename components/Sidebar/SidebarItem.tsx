import { type FC, useContext } from "react";
import { Icon } from "@iconify/react";
import { AppContext } from "../Layout";

interface IProps {
  page: number;
  icon: string;
  children: string;
}

const SidebarItem: FC<IProps> = ({ children, page, icon }) => {
  const { scrollTo } = useContext(AppContext);

  return (
    <div
      className="flex flex-col items-center gap-y-2 cursor-pointer group first:pt-10 last:pb-10"
      onClick={() => scrollTo && scrollTo(page)}
    >
      <Icon
        icon={icon}
        className="w-10 h-10 transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:!text-nord5 dark:group-hover:!text-nord8"
      />
      <span className="font-bold transition-[color] duration-300 text-nord0 dark:text-nord5 group-hover:!text-nord5 dark:group-hover:!text-nord8 animate__border group-hover:animate__borderDefault">
        {children}
      </span>
    </div>
  );
};

export default SidebarItem;
