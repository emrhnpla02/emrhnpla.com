import axios from "axios";

export const fetcher = (url: string) =>
  axios({
    method: "get",
    url,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => (res.status === 200 ? res.data : res.status))
    .catch((err) => err);
