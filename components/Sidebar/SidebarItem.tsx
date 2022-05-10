import { Icon } from "@iconify/react";
import { FC, useContext } from "react";
import { SidebarContext } from "../../pages";

interface IProps {
  page: number;
  icon: string;
  children: string;
}

const SidebarItem: FC<IProps> = ({ children, page, icon }) => {
  const { handleScroll } = useContext(SidebarContext);

  return (
    <div
      className="flex flex-col items-center gap-y-2 cursor-pointer group"
      onClick={() => handleScroll && handleScroll(page)}
    >
      <Icon
        icon={icon}
        className="w-10 h-10 text-nord0 dark:text-nord5 group-hover:!text-nord5 dark:group-hover:!text-nord8"
      />
      <span className="font-bold text-nord0 dark:text-nord5 group-hover:!text-nord5 dark:group-hover:!text-nord8 animate__border group-hover:animate__borderDefault">
        {children}
      </span>
    </div>
  );
};
export default SidebarItem;
