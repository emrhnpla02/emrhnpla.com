import type { NextApiRequest, NextApiResponse } from "next";

export interface ILink {
  id: number;
  name: string;
  username: string;
  icon: string;
  href: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILink[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: "Github",
      username: "emrhnpla02",
      icon: "logos:github-icon",
      href: "https://github.com/emrhnpla02",
    },
    {
      id: 2,
      name: "Twitter",
      username: "@emrhnpla02",
      icon: "logos:twitter",
      href: "https://twitter.com/emrhnpla02",
    },
    {
      id: 3,
      name: "Matrix",
      username: "@emrhnpla02",
      icon: "cib:matrix",
      href: "https://matrix.to/#/@emrhnpla02:matrix.org",
    },
    {
      id: 4,
      name: "Reddit",
      username: "u/emrhnpla",
      icon: "logos:reddit-icon",
      href: "https://reddit.com/user/emrhnpla",
    },
    {
      id: 5,
      name: "Pixelfed",
      username: "@emrhnpla",
      icon: "openmoji:pixelfed",
      href: "https://pixelfed.social/emrhnpla",
    },
    {
      id: 6,
      name: "Spotify",
      username: "emrhnpla02",
      icon: "logos:spotify-icon",
      href: "https://open.spotify.com/user/8s8mxqnkzgqak32l7tcnuzhs2",
    },
  ]);
}
