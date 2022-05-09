import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { FC } from "react";
import useSWR from "swr";
import type { ILink } from "../../pages/api/links";

const MediaLinks: FC = () => {
  const fetcher = (endpoint: string) =>
    fetch(endpoint).then((res) => res.json());
  const { data, error } = useSWR("/api/links", fetcher);

  return (
    <section className="hidden xs:flex gap-x-10 justify-self-end">
      {!error &&
        data?.map(({ id, href, icon }: ILink) => (
          <div key={id} className="relative flex justify-center">
            <motion.a
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 1,
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
    </section>
  );
};

export default MediaLinks;
