import { FC, useContext, useState } from "react";
import { AboutMeContext } from "../../AboutMe";
import FetchOutput from "./FetchOutput";
import ShellMessage from "./ShellMessage";
import ShellPrompt from "./ShellPrompt";

interface IProps {
  setHighlightButton: (state: boolean) => void;
}

const Shell: FC<IProps> = ({ setHighlightButton }) => {
  const [showOutput, setShowOutput] = useState(false);
  const [showSecondPrompt, setShowSecondPrompt] = useState(false);
  const [showLastPrompt, setShowLastPrompt] = useState(false);
  const [showThirdPrompt, setShowThirdPrompt] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { setShowLinks } = useContext(AboutMeContext);

  return (
    <div className="flex flex-col gap-1 w-full h-[calc(100%-2.5rem)] p-3 font-firacode font-bold text-xs rounded-b-lg bg-nord4 dark:bg-nord0 border border-nord0 dark:border-nord2 shadow-sm shadow-nord5 dark:shadow-nord0">
      <ShellPrompt
        text="./epfetch.sh"
        delay={3000}
        afterTyped={() => setShowOutput(true)}
      />
      {showOutput && (
        <FetchOutput afterMounted={() => setShowSecondPrompt(true)} />
      )}
      {showSecondPrompt && (
        <ShellPrompt
          text="./getLinks.sh"
          delay={2000}
          afterTyped={() => {
            setShowLinks && setShowLinks(true);
            setTimeout(() => setShowThirdPrompt(true), 500);
          }}
        />
      )}
      {showThirdPrompt && (
        <ShellPrompt
          text="cat message.txt"
          delay={2000}
          afterTyped={() => {
            setShowMessage(true);
            setTimeout(() => {
              setHighlightButton(true);
              setShowLastPrompt(true);
            }, 500);
          }}
        />
      )}
      {showMessage && <ShellMessage />}
      {showLastPrompt && <ShellPrompt isStatic={true} />}
    </div>
  );
};

export default Shell;
