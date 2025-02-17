"use client";


import { FullPageLoader } from "@/components/loaders/Loading";
import useMyLargeMedia from "./useMyLargeMedia";
import LargeMediaList from "./LargeMediaList";

const AllLargeMedia = () => {
  const { data, isLoading } = useMyLargeMedia();

  return isLoading && data ? <FullPageLoader /> : <LargeMediaList files={data} />;
};

export default AllLargeMedia;
