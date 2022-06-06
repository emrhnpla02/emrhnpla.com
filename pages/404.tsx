import { NextPage } from "next";
import ErrorPage from "../components/ErrorPage";

const Custom404: NextPage = () => {
  return (
    <ErrorPage errorCode={404}>
      Seems like the page you're looking for doesn't exist.
    </ErrorPage>
  );
};

export default Custom404;
