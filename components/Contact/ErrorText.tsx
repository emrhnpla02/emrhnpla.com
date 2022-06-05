import type { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const ErrorText: FC<IProps> = ({ children, className }) => {
  return (
    <p
      className={`${className} pt-2 text-base text-red-600 dark:text-nord11`}
    >
      {children}
    </p>
  );
};

export default ErrorText;
