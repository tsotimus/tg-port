import Stack from "@/components/layouts/Stack";
import { CldImage } from "next-cloudinary";
import useMyMedia from "./useMyMedia";
import { FullPageLoader } from "@/components/loaders/Loading";
import MediaGrid from "./MediaGrid";

const AllMedia = () => {
  const { data, isLoading } = useMyMedia();

  return isLoading && data ? <FullPageLoader /> : <MediaGrid data={data} />;
};

export default AllMedia;
