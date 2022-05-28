import { FC } from "react";

interface IProps {
  title: string;
  text: string;
}

const OutputItem: FC<IProps> = ({ title, text }) => (
  <p>
    <span className="text-nord10">{title}</span>
    <span className="text-nord14"> -{">"} </span>
    <span className="text-nord0 dark:text-nord5">{text}</span>
  </p>
);

export default OutputItem;
