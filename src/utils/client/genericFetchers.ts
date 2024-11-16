/* eslint-disable @typescript-eslint/no-unsafe-return */
// These functions should not be used without SWR, to provide full type safety

import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const deleteFetcher = (url: string) =>
  axios.delete(url).then((res) => res.data);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateFetcher(url: string, { arg }: { arg: { data: any }}) {
  const response = await axios.patch(url,arg.data);
  return response.data;
}
