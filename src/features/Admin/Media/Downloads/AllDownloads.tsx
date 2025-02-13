"use client";


// import { FullPageLoader } from "@/components/loaders/Loading";
import useMyDownloadsMedia from "./useMyDownloadsMedia";
// import MediaGrid from "./MediaGrid";

const AllDownloads = () => {
  const { data, isLoading } = useMyDownloadsMedia();

//   return isLoading && data ? <FullPageLoader /> : <MediaGrid data={data} />;
return <>Here</>
};

export default AllDownloads;
