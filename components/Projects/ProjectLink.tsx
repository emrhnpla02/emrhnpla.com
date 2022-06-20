import type { FC } from "react";

interface IProjectLinkProps {
  children: string;
  url: string;
}

const ProjectLink: FC<IProjectLinkProps> = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-full p-3 text-center transition-[background-color,color] text-nord0 dark:text-nord5 hover:text-nord0 dark:hover:text-nord8 border rounded-sm border-nord0 dark:border-nord1 hover:border-nord10 dark:hover:border-nord10 bg-nord6 dark:bg-nord16 hover:bg-transparent dark:hover:bg-transparent"
    >
      {children}
    </a>
  );
};
export default ProjectLink;
