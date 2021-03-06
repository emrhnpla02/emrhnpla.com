import type { FC } from "react";

const TerminalDecoration: FC = () => {
  return (
    <svg
      className="absolute bottom-0 opacity-60 rounded-b-lg fill-nord10 dark:fill-nord1"
      viewBox="0 0 1920 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0c62.028 23.301 207.726 31.062 355.345 10.956 194.93-26.548 329.274 58.551 412.36 95.275 113.991 50.379 161.026 36.177 242.491 47.604 81.464 11.428 80.28 30.32 167.409 35.339 99.802 5.746 258.527-51.115 385.457-10.565 156.954 50.136 300.814-6.06 356.938 1.225V240H0V0z"></path>
    </svg>
  );
};

export default TerminalDecoration;
