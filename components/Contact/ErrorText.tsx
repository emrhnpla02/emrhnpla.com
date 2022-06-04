import type { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const ErrorText: FC<IProps> = ({ children, className }) => {
  return (
    <p
      className={`${className} pr-3 pt-2 text-base text-nord5 dark:text-nord11`}
    >
      {children}
    </p>
  );
};

export default ErrorText;
