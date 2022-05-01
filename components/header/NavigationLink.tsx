import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";

const NavigationLink: FC = () => {
  const { route } = useRouter();
  const isOnHomepage = route !== "/";

  return (
    <Link href={isOnHomepage ? "/" : "/blog"}>
      <a className="font-bold tracking-wide text-2xl animate__animated animate__fadeInLeft animate__border hover:animate__borderFromLeft">
        {isOnHomepage ? "Home" : "My Blog"}
      </a>
    </Link>
  );
};

export default NavigationLink;
