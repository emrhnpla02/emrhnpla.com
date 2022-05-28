import type { NextApiRequest, NextApiResponse } from "next";

export interface ISkills {
  languages: ISkill[];
  frontend: ISkill[];
  backend: ISkill[];
  devEnv: ISkill[];
}

export interface ISkill {
  id: number;
  name: string;
  icon: string;
  color: string | undefined;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISkills>
) {
  res.status(200).json({
    languages: [
      {
        id: 1,
        name: "Html",
        icon: "vscode-icons:file-type-html",
        color: undefined,
      },
      {
        id: 2,
        name: "Css",
        icon: "vscode-icons:file-type-css",
        color: undefined,
      },
      {
        id: 3,
        name: "Javascript",
        icon: "vscode-icons:file-type-js-official",
        color: undefined,
      },
      {
        id: 4,
        name: "Typescript",
        icon: "vscode-icons:file-type-typescript-official",
        color: undefined,
      },
      {
        id: 5,
        name: "C#",
        icon: "logos:c-sharp",
        color: undefined,
      },
    ],
    frontend: [
      {
        id: 1,
        name: "Tailwindcss",
        icon: "logos:tailwindcss-icon",
        color: undefined,
      },
      {
        id: 2,
        name: "React",
        icon: "vscode-icons:file-type-reactjs",
        color: undefined,
      },
      {
        id: 3,
        name: "Nextjs",
        icon: "logos:nextjs-icon",
        color: undefined,
      },
    ],
    backend: [
      {
        id: 1,
        name: "Nodejs",
        icon: "logos:nodejs-icon",
        color: undefined,
      },
      {
        id: 2,
        name: "Postgresql",
        icon: "logos:postgresql",
        color: undefined,
      },
      {
        id: 3,
        name: "Redis",
        icon: "logos:redis",
        color: undefined,
      },
    ],
    devEnv: [
      {
        id: 1,
        name: "Git",
        icon: "logos:git-icon",
        color: undefined,
      },
      {
        id: 2,
        name: "GitHub",
        icon: "logos:github-icon",
        color: undefined,
      },
      {
        id: 3,
        name: "Neovim",
        icon: "simple-icons:neovim",
        color: "#4c8938",
      },
      {
        id: 4,
        name: "Linux",
        icon: "logos:linux-tux",
        color: undefined,
      },
      {
        id: 5,
        name: "Arch",
        icon: "logos:archlinux",
        color: undefined,
      },
    ],
  });
}
