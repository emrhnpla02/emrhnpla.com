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
        data?.map(({ id, href, src, name, username }: ILink) => (
          <div key={id} className="relative flex justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-content-center animate__animated animate__fadeInDown"
            >
              <img src={src} alt={name} title={username} className="w-6 h-6" />
            </a>
          </div>
        ))}
    </section>
  );
};

export default MediaLinks;
