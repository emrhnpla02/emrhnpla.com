import type { FC } from "react";
import { motion } from "framer-motion";
import MailForm from "./Contact/MailForm";
import OtherWays from "./Contact/OtherWays";
import SectionHeader from "./Section/SectionHeader";

const Contact: FC = () => {
  return (
    <section className="space-y-10 xl:space-y-0">
      <SectionHeader>Contact</SectionHeader>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col c-md:flex-row gap-y-10 c-md:gap-y-0 h-fit c-md:h-full px-5 c-md:px-20 py-10 bg-nord10 dark:bg-nord0 c-md:divide-x divide-nord5"
      >
        <MailForm />
        <OtherWays />
      </motion.div>
    </section>
  );
};

export default Contact;
