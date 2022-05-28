export const fetcher = (endpoint: string) =>
  fetch(endpoint).then((res) => res.json());
