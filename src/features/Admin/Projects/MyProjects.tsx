import { FullPageLoader } from "@/components/loaders/Loading";
import useGetProjects from "./useGetProjects";

const MyProjects = () => {
  const { allProjects } = useGetProjects();

  return <FullPageLoader />;
};

export default MyProjects;
