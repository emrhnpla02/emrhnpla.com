import type { NextPage } from "next";
import ErrorPage from "../components/ErrorPage";

const Custom500: NextPage = () => {
  return (
    <ErrorPage errorCode={500}>
      Seems like an error occured on server.
    </ErrorPage>
  );
};

export default Custom500;
