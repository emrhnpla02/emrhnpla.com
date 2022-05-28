import { FC } from "react";
import { Icon } from "@iconify/react";
import SectionLink from "./SectionLink";

interface IProps {
  showMobileNavbar: boolean;
  setShowMobileNavbar: (state: boolean) => void;
}

const SectionLinks: FC<IProps> = ({
  showMobileNavbar,
  setShowMobileNavbar,
}) => {
  const toggleMobileNavbar = () => setShowMobileNavbar(!showMobileNavbar);

  return (
    <div className="h-xl:w-1/2 flex justify-center">
      <Icon
        icon="fluent:navigation-16-filled"
        className="block h-xl:hidden w-10 h-10 cursor-pointer"
        onClick={toggleMobileNavbar}
      />
      <div className="hidden h-xl:flex xl:!hidden justify-evenly items-center w-full">
        <SectionLink page={0} icon="akar-icons:person">
          About Me
        </SectionLink>
        <SectionLink page={1} icon="carbon:skill-level">
          Skills
        </SectionLink>
        <SectionLink page={2} icon="la:project-diagram">
          Projects
        </SectionLink>
        <SectionLink page={3} icon="simple-icons:protonmail">
          Contact
        </SectionLink>
      </div>
    </div>
  );
};

export default SectionLinks;
