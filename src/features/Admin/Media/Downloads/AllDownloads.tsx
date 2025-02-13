"use client";


import { FullPageLoader } from "@/components/loaders/Loading";
import useMyDownloadsMedia from "./useMyDownloadsMedia";
import MediaList from "./MediaList";

const AllDownloads = () => {
  const { data, isLoading } = useMyDownloadsMedia();

  return isLoading && data ? <FullPageLoader /> : <MediaList files={data} />;
};

export default AllDownloads;
