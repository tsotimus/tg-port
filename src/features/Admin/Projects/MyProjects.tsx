import { FullPageLoader } from "@/components/loaders/Loading";
import useGetProjects from "./useGetProjects";
import { DataTable } from "@/components/tables/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Project } from "@/types/project";

const COLUMNS: ColumnDef<Project, string | number>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Date Created",
  },
  {
    header: "Date Posted",
  },
  {
    header: "Date Updated",
  },
  {
    header: "View",
  },
];

const MyProjects = () => {
  const { allProjects, isLoading } = useGetProjects();

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <div className="px-40 w-full mt-20">
      <DataTable columns={COLUMNS} data={allProjects} />
    </div>
  );
};

export default MyProjects;
