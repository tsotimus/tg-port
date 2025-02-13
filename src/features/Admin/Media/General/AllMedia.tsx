"use client";


import { FullPageLoader } from "@/components/loaders/Loading";
import MediaGrid from "./MediaGrid";
import useMyGeneralMedia from "./useMyGeneralMedia";

const AllMedia = () => {
  const { data, isLoading } = useMyGeneralMedia();

  return isLoading && data ? <FullPageLoader /> : <MediaGrid data={data} />;
};

export default AllMedia;
