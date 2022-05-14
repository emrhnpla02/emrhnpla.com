import { FC, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useSWR from "swr";
import { Icon } from "@iconify/react";
import type { ILink } from "../../pages/api/links";
import SelectedLink from "./SelectedLink";

export interface ISelectedLink {
  name: string;
  username: string;
}

const MediaLinks: FC = () => {
  const [selectedLink, setSelectedLink] = useState<Partial<ISelectedLink>>({});
  const selectedLinkAnim = useAnimation();

  const fetcher = (endpoint: string) =>
    fetch(endpoint).then((res) => res.json());
  const { data, error } = useSWR("/api/links", fetcher);

  return (
    <section className="hidden xs:flex flex-col items-center">
      <div className="flex gap-x-10 justify-self-end">
        {!error &&
          data?.map(({ id, href, icon, name, username }: ILink) => (
            <div key={id} className="relative flex justify-center">
              <motion.a
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  duration: 1,
                }}
                onMouseEnter={() => {
                  setSelectedLink({ name, username });
                  selectedLinkAnim.start("visible");
                }}
                onMouseLeave={async () => {
                  await selectedLinkAnim.start("hidden");
                  setSelectedLink({});
                }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-content-center"
              >
                <Icon icon={icon} className="w-6 h-6" />
              </motion.a>
            </div>
          ))}
      </div>
      <SelectedLink
        selectedLink={selectedLink}
        selectedLinkAnim={selectedLinkAnim}
      />
    </section>
  );
};

export default MediaLinks;
