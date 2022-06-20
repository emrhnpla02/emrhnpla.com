import type { FC } from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

const Session: FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Id copied to clipboard successfuly."))
      .catch(() => toast.error("Id couldn't copied to clipboard."));
  };

  return (
    <div className="flex flex-col gap-y-5">
      <h5 className="flex justify-center c-md:justify-start items-center text-4xl text-nord5">
        <span className="self-end text-2xl text-nord7">via</span>
        <a
          href="https://getsession.org/"
          target="_blank"
          rel="noreferrer"
          className="text-session"
        >
          <span className="align-middle pl-3 pr-2">Session</span>
          <Icon
            icon="arcticons:session"
            strokeWidth="2"
            className="inline w-10 h-10"
          />
        </a>
      </h5>
      <div className="flex flex-col items-center gap-y-3">
        <span className="break-all text-center text-nord5">
          055ac28844e54d8c051faa94e366581c7567a5999efee60c30779a709314cf9941
        </span>
        <button
          type="button"
          onClick={() =>
            copyToClipboard(
              "055ac28844e54d8c051faa94e366581c7567a5999efee60c30779a709314cf9941"
            )
          }
          className="w-full px-5 py-3 font-bold transition-[color,border-color] duration-300 text-nord5 hover:text-session border border-nord5 dark:border-nord5 hover:border-session dark:hover:border-session"
        >
          Copy id to clipboard
        </button>
      </div>
    </div>
  );
};

export default Session;
