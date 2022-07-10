import type { FC } from "react";
import { toast } from "react-toastify";
import WayHeader from "./WayHeader";

const Session: FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Id copied to clipboard successfuly."))
      .catch(() => toast.error("Id couldn't copied to clipboard."));
  };

  return (
    <section className="flex flex-col gap-y-5 pb-10">
      <WayHeader
        name="Session"
        color="text-session"
        icon="arcticons:session"
        href="https://getsession.org/"
      />
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
    </section>
  );
};

export default Session;
