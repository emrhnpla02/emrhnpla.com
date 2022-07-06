import type { FC, ReactNode } from "react";
import _ from "lodash";

interface IProps {
  wordCount: number;
  minWordLength: number;
  maxWordLength: number;
  height?: number;
}

const BlankText: FC<IProps> = ({
  wordCount,
  minWordLength,
  maxWordLength,
  height,
}) => {
  const words: ReactNode[] = [];

  for (let i = 0; i < wordCount; i++) {
    words.push(
      <span
        key={"word-" + i}
        className="inline-block opacity-20 dark:opacity-70 bg-nord3 dark:bg-nord5 rounded-xl shadow-sm shadow-nord3"
        style={{
          width: _.random(minWordLength, maxWordLength) + "rem",
          height: height ? height + "rem" : "1rem",
        }}
      ></span>
    );
  }

  return <>{words.map((word) => word)}</>;
};

export default BlankText;
