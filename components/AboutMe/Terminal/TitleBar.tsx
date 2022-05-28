import { Icon } from "@iconify/react";
import { FC, useContext } from "react";
import { AboutMeContext } from "../../AboutMe";

interface IProps {
  highlightButton: boolean;
}

const TitleBar: FC<IProps> = ({ highlightButton }) => {
  const { setShowAlternate, setShowLinks } = useContext(AboutMeContext);

  return (
    <div className="grid grid-cols-3 place-content-center w-full h-10 px-5 rounded-t-lg bg-nord1 dark:bg-nord3 dark:bg-opacity-50 shadow-sm shadow-nord5 dark:shadow-nord0">
      <div className="place-self-start flex items-center gap-2">
        <Icon icon="fa6-solid:terminal" className="w-5 h-5 text-nord5" />
        <div className="w-5 h-5 mr-2 rounded-full border border-black bg-[#D8DEE9]"></div>
      </div>
      <span className="place-self-center font-bold text-sm text-nord5">
        About Me
      </span>
      <div className="place-self-end flex items-center gap-2">
        <div className="w-5 h-5 rounded-full border border-black bg-[#D8DEE9]"></div>
        <div className="w-5 h-5 rounded-full border border-black bg-[#D8DEE9]"></div>
        <button
          className={`w-5 h-5 cursor-pointer rounded-full border border-black duration-300 ${
            !highlightButton
              ? "bg-[#D8DEE9] hover:bg-[#B15D66]"
              : "bg-[#B15D66] hover:bg-[#91464D]"
          }`}
          onClick={() => {
            setShowAlternate && setShowAlternate(true);
            setShowLinks && setShowLinks(false);
          }}
        />
      </div>
    </div>
  );
};

export default TitleBar;
