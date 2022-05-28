import { FC } from "react";

const ProfilePicture: FC = () => {
  return (
    <img
      src="/pp.jpg"
      alt="Emirhan Pala"
      className="w-80 h-88 t-xl:w-52 t-xl:h-64 2xl:!w-80 2xl:!h-88 border rounded-3xl border-nord0 dark:border-nord10"
    />
  );
};

export default ProfilePicture;
