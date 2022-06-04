import { FC, useId } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import ErrorText from "./ErrorText";

const MailForm: FC = () => {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .trim("Cannot include leading and trailing spaces")
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        email: Yup.string()
          .trim("Cannot include leading and trailing spaces")
          .email("Invalid email address")
          .required("Required"),

        subject: Yup.string()
          .trim("Cannot include leading and trailing spaces")
          .min(10, "Must be 15-55 characters")
          .max(55, "Must be 15-55 characters")
          .required("Required"),

        message: Yup.string()
          .trim("Cannot include leading and trailing spaces")
          .min(55, "Must be 55-255 characters")
          .max(255, "Must be 55-255 characters")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const emailReq = axios({
          method: "post",
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
          headers: {
            "Content-type": "application/json",
          },
          data: values,
        });

        toast.promise(emailReq, {
          pending: "Sending email",
          success: "Email sent successfuly.",
          error:
            "Oops... A problem has occurred while sending email. Please try later again. 🙁",
        });
        setSubmitting(false);
      }}
    >
      <Form className="flex flex-col gap-y-10 c-md:gap-y-3 w-full c-md:w-7/12 group">
        <h4 className="text-center c-md:text-left w-full c-md:pl-3 pb-3 text-5xl transition-[color] duration-200 text-nord5 dark:text-nord5 group-hover:text-nord8 dark:group-hover:text-nord10 animate__border group-hover:animate__borderFromLeft">
          <span className="align-middle">
            <span className="text-2xl transition-[color] duration-200 text-nord7 group-hover:text-nord8 dark:group-hover:text-nord10">
              via
            </span>
            <span className="pl-3 pr-2">Gmail</span>
          </span>
          <Icon icon="logos:google-gmail" className="inline w-10 h-10" />
        </h4>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col c-sm:flex-row gap-x-5 gap-y-10 c-sm:gap-y-0">
            <div className="w-full c-sm:w-1/2">
              <label
                htmlFor={"name" + nameId}
                className="flex justify-between items-center pl-2 pb-3 text-2xl text-nord5"
              >
                Name:
                <ErrorText className="hidden c-lg:block">
                  <ErrorMessage name="name" />
                </ErrorText>
              </label>
              <Field
                id={"name" + nameId}
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2 dark:bg-nord16 border border-nord focus:border-nord10 focus:ring-nord10"
              />
              <ErrorText className="block c-lg:hidden">
                <ErrorMessage name="name" />
              </ErrorText>
            </div>
            <div className="w-full c-sm:w-1/2">
              <label
                htmlFor={"email" + emailId}
                className="flex justify-between items-center pl-2 pb-3 text-2xl text-nord5"
              >
                Email:
                <ErrorText className="hidden c-lg:block">
                  <ErrorMessage name="email" />
                </ErrorText>
              </label>
              <Field
                id={"email" + emailId}
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 dark:bg-nord16 border border-nord focus:border-nord10 focus:ring-nord10"
              />
              <ErrorText className="block c-lg:hidden">
                <ErrorMessage name="email" />
              </ErrorText>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor={"subject" + subjectId}
              className="flex justify-between items-center pl-2 pb-3 text-2xl text-nord5"
            >
              Subject:
              <ErrorText className="hidden c-lg:block">
                <ErrorMessage name="subject" />
              </ErrorText>
            </label>
            <Field
              id={"subject" + subjectId}
              name="subject"
              type="text"
              placeholder="Subject of the email"
              className="w-full px-3 py-2 dark:bg-nord16 border border-nord focus:border-nord10 focus:ring-nord10"
            />
            <ErrorText className="block c-lg:hidden">
              <ErrorMessage name="subject" />
            </ErrorText>
          </div>
          <div className="w-full">
            <label
              htmlFor={"message" + messageId}
              className="flex justify-between items-center pl-2 pb-3 text-2xl text-nord5"
            >
              Message:
              <ErrorText className="hidden c-lg:block">
                <ErrorMessage name="message" />
              </ErrorText>
            </label>
            <Field
              id={"message" + messageId}
              name="message"
              type="text"
              as="textarea"
              placeholder="Your message is here..."
              className="w-full h-60 px-3 py-2 dark:bg-nord16 border border-nord focus:border-nord10 focus:ring-nord10"
            />
            <ErrorText className="block c-lg:hidden">
              <ErrorMessage name="message" />
            </ErrorText>
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-3 transition-[color,border-color] duration-300 text-nord5 hover:text-nord1 dark:hover:text-nord10 border border-nord5 hover:border-nord10"
        >
          Send!
        </button>
      </Form>
    </Formik>
  );
};

export default MailForm;
