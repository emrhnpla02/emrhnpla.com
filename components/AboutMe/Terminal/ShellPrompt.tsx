import { FC, useState } from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";

interface IProps {
  text?: string;
  speed?: number;
  delay?: number;
  isStatic?: boolean;
  afterTyped?: () => void;
}

const ShellPrompt: FC<IProps> = ({
  text,
  speed = 100,
  delay,
  afterTyped,
  isStatic = false,
}) => {
  const [isBlinking, setIsBlinking] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-1 z-10"
    >
      <div>
        <span className="text-nord10">[</span>
        <span className="text-nord0 dark:text-nord5">emrhnpla</span>
        <span className="text-nord11">@</span>
        <span className="text-nord0 dark:text-nord5">archbtw</span>
        <span className="text-nord10">]</span>
      </div>
      <div className="flex gap-1">
        <span className="text-lg text-nord14">➜</span>
        <span className="text-xl text-nord10">~</span>
      </div>
      {!isStatic && (
        <Typed
          strings={[text ?? ""]}
          typeSpeed={speed}
          startDelay={delay}
          showCursor={false}
          preStringTyped={() => setIsBlinking(false)}
          onComplete={() => {
            setShowCursor(false);
            setIsBlinking(false);
            afterTyped && afterTyped();
          }}
          className="typed-component"
        />
      )}
      {showCursor && (
        <span
          className={`${isStatic ? "ml-1" : "-ml-1"} ${
            isBlinking ? "cursor animate__cursor" : "cursor"
          } bg-nord16 dark:bg-nord5`}
        ></span>
      )}
    </motion.div>
  );
};

export default ShellPrompt;
