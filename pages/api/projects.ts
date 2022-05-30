import type { NextApiRequest, NextApiResponse } from "next";

export interface IProject {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  tools: ITool[];
}

export interface ITool {
  name: string;
  icon: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: "emrhnpla.com",
      description: "My portfolio website (still in developement).",
      imageUrl: "/projects/emrhnpla-com.png",
      githubUrl: "https://github.com/emrhnpla02/emrhnpla.com",
      liveUrl: "https://www.emrhnpla.com",
      tools: [
        {
          name: "Tailwindcss",
          icon: "logos:tailwindcss-icon",
        },
        {
          name: "Typescript",
          icon: "vscode-icons:file-type-typescript-official",
        },
        {
          name: "Next.js",
          icon: "logos:nextjs-icon",
        },
      ],
    },
    {
      id: 2,
      name: ".dotfiles",
      description:
        "My .dotfiles which made on archlinux/kde that includes my development environment and tons of customization stuff.",
      imageUrl: "/projects/dotfiles.png",
      githubUrl: "https://github.com/emrhnpla02/.dotfiles",
      tools: [
        {
          name: "Linux",
          icon: "flat-color-icons:linux",
        },
        {
          name: "Arch",
          icon: "logos:archlinux",
        },
        {
          name: "Kde",
          icon: "logos:kde",
        },
      ],
    },
  ]);
}
