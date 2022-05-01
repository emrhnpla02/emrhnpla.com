import type { NextApiRequest, NextApiResponse } from "next";

type Data = ILink[];

export interface ILink {
  id: number;
  name: string;
  username: string;
  src: string;
  href: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      id: 1,
      name: "Reddit",
      username: "emrhnpla",
      src: "/icons/reddit.svg",
      href: "https://www.reddit.com/user/emrhnpla",
    },
    {
      id: 2,
      name: "Github",
      username: "emrhnpla02",
      src: "/icons/github.svg",
      href: "https://github.com/emrhnpla02",
    },
    {
      id: 3,
      name: "Mastodon",
      username: "@emrhnpla02@mastodon.social",
      src: "/icons/mastodon.svg",
      href: "https://mastodon.social/web/@emrhnpla02",
    },
  ]);
}
