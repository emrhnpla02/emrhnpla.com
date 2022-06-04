import { FC } from "react";
import MailForm from "./Contact/MailForm";
import OtherWays from "./Contact/OtherWays";

const Contact: FC = () => {
  return (
    <section className="flex flex-col c-md:flex-row gap-x-0 c-md:gap-x-16 gap-y-10 c-md:gap-y-0 px-5 c-md:px-20 py-10 bg-nord10 dark:bg-nord0">
      <MailForm />
      <div className="hidden c-md:block h-full border-r border-nord5" />
      <OtherWays />
    </section>
  );
};

export default Contact;
