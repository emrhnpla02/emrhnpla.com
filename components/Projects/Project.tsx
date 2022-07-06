import dynamic from "next/dynamic";
import type { FC } from "react";
import { useParallaxController } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ProjectLink from ".././Projects/ProjectLink";
const BlankText = dynamic(() => import("./BlankText"), { ssr: false });

interface IProject {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  tools: ITool[];
}

interface ITool {
  name: string;
  icon: string;
}

interface IProps {
  project?: IProject;
  index?: number;
}

const Project: FC<IProps> = ({ project }, index) => {
  const parallaxController = useParallaxController();

  const emptyTools: ITool[] = [
    {
      icon: "simple-icons:thealgorithms",
      name: "",
    },
    {
      icon: "ic:outline-design-services",
      name: "",
    },
    {
      icon: "bi:code-slash",
      name: "",
    },
  ];

  const renderTools = (
    { name: toolName, icon: toolIcon }: ITool,
    toolsIndex: number
  ) => (
    <div
      key={toolName}
      className={`${
        toolsIndex % 2 === 0
          ? "last:col-span-2 p-sm:last:col-span-1 p-xl:last:!col-span-2"
          : ""
      } flex flex-col items-center gap-y-3`}
    >
      <Icon icon={toolIcon} className="w-12 h-12" />
      <span className="text-lg">
        {toolName !== "" ? (
          toolName
        ) : (
          <BlankText wordCount={1} minWordLength={3} maxWordLength={5} />
        )}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col p-lg:odd:flex-row p-lg:even:flex-row-reverse items-center p-lg:items-start p-lg:gap-x-20 w-10/12 min-h-[30rem] p-5 bg-nord4 dark:bg-nord0 border border-nord0 dark:border-nord1 shadow-sm shadow-nord0 group"
    >
      <div className="relative w-full p-md:w-7/12 h-max p-md:aspect-video shadow-inner shadow-nord0 dark:shadow-transparent">
        <div className="absolute top-0 left-0 hidden p-sm:block w-4/6 h-1/2 border-t-2 border-l-2 border-nord10 dark:border-nord8"></div>{" "}
        <img
          onLoad={() => parallaxController?.update()}
          src={project ? project.imageUrl : "/projects/blank.jpg"}
          alt={project ? project.name : "Blank"}
          className="relative z-10 w-full h-full px-1 p-sm:px-7 p-lg:!px-14 py-1 p-sm:py-4 p-lg:!py-7"
        />
        <div className="absolute bottom-0 right-0 hidden p-sm:block w-4/6 h-1/2 border-b-2 border-r-2 border-nord10 dark:border-nord8"></div>
      </div>
      <div className="w-full p-lg:w-5/12 h-max mt-10 p-lg:mt-0">
        <div className="mb-10">
          <h3
            className={`${
              !project ? "space-x-3" : ""
            } text-center p-lg:text-left text-3xl p-sm:text-5xl transition-[color] text-nord0 dark:text-nord5 group-hover:text-nord10 dark:group-hover:text-nord8  ${
              project
                ? "animate__border group-odd:group-hover:animate__borderFromRight group-even:group-hover:animate__borderFromLeft"
                : ""
            }`}
          >
            {project ? (
              project.name
            ) : (
              <BlankText
                wordCount={3}
                minWordLength={7}
                maxWordLength={12}
                height={2}
              />
            )}
          </h3>
          <p
            className={`${
              !project ? "space-x-3" : ""
            } pt-10 text-center p-md:text-left p-md:indent-5`}
          >
            {project ? (
              project.description
            ) : (
              <BlankText wordCount={18} minWordLength={3} maxWordLength={5} />
            )}
          </p>
        </div>
        <div
          className={`flex flex-col p-xl:flex-row ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          } justify-between items-center w-full gap-x-10`}
        >
          <div className="grid grid-cols-2 p-sm:grid-cols-3 p-xl:!grid-cols-2 grid-rows-2 p-sm:grid-rows-1 p-xl:!grid-rows-2 p-xl:gap-x-16 gap-y-10 p-sm:gap-y-0 p-xl:!gap-y-10 w-full p-xl:w-1/2 mb-10 p-xl:mb-0">
            {project
              ? project.tools.map(renderTools)
              : emptyTools.map(renderTools)}
          </div>
          <div className="h-full border-r border-nord0 dark:border-nord8"></div>
          <div className="flex flex-col gap-y-5 w-full p-xl:w-1/2">
            <ProjectLink url={project ? project.githubUrl : "https://github.com/emrhnpla02"}>
              {project ? "See on GitHub" : "See all projects"}
            </ProjectLink>
            {project && project.liveUrl && (
              <ProjectLink url={project.liveUrl}>See on live</ProjectLink>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
