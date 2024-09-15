import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const deleteFetcher = (url: string) =>
  axios.delete(url).then((res) => res.data);

export const updateFetcher = async (url: string, data: any) => {
  const response = await axios.patch(url, data);
  return response.data;
};
