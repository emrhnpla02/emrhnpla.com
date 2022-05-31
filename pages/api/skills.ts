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
  color?: string;
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
      },
      {
        id: 2,
        name: "Css",
        icon: "vscode-icons:file-type-css",
      },
      {
        id: 3,
        name: "Javascript",
        icon: "vscode-icons:file-type-js-official",
      },
      {
        id: 4,
        name: "Typescript",
        icon: "vscode-icons:file-type-typescript-official",
      },
      {
        id: 5,
        name: "C#",
        icon: "logos:c-sharp",
      },
    ],
    frontend: [
      {
        id: 1,
        name: "Tailwindcss",
        icon: "logos:tailwindcss-icon",
      },
      {
        id: 2,
        name: "React",
        icon: "vscode-icons:file-type-reactjs",
      },
      {
        id: 3,
        name: "Nextjs",
        icon: "logos:nextjs-icon",
      },
    ],
    backend: [
      {
        id: 1,
        name: "Nodejs",
        icon: "logos:nodejs-icon",
      },
      {
        id: 2,
        name: "Postgresql",
        icon: "logos:postgresql",
      },
      {
        id: 3,
        name: "Redis",
        icon: "logos:redis",
      },
    ],
    devEnv: [
      {
        id: 1,
        name: "Git",
        icon: "logos:git-icon",
      },
      {
        id: 2,
        name: "GitHub",
        icon: "logos:github-icon",
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
      },
      {
        id: 5,
        name: "Arch",
        icon: "logos:archlinux",
      },
    ],
  });
}
