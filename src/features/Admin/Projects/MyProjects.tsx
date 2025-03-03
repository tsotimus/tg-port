"use client";

import { FullPageLoader } from "@/components/loaders/Loading";
import useGetProjects from "./useGetProjects";
import { DataTable } from "@/components/tables/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import ButtonLink from "@/components/ButtonLink";
import { type ProjectDisplay } from "@/types/project";
import { GenericPaginatedApiResponse } from "@/types/api";
import { useRouter } from "next/navigation";
import Typography from "@/components/Typography";
import { formatDate } from "@/utils/client/dates";

const COLUMNS: ColumnDef<ProjectDisplay, string>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Date Created",
    accessorKey: "createdAt",
    cell: (cell) => {
      return (
        <Typography>
          {formatDate(cell.getValue())}
        </Typography>
      );
    },
  },
  {
    header: "Project Date",
    accessorKey: "projectDate",
    cell: (cell) => {
      return (
        <Typography>
          {formatDate(cell.getValue())}
        </Typography>
      );
    },
  },
  {
    header: "Date Updated",
    accessorKey: "updatedAt",
    cell: (cell) => {
      return (
        <Typography>
          {formatDate(cell.getValue())}
        </Typography>
      );
    },
  },
  {
    header: "View",
    cell: (cell) => {
      return (
        <ButtonLink href={`/projects/${cell.row.original.slug}`}>
          View
        </ButtonLink>
      );
    },
  },
  {
    header: "Edit",
    cell: (cell) => {
      return (
        <ButtonLink href={`/admin/projects/edit/${cell.row.original.id}`}>
          Edit
        </ButtonLink>
      );
    },
  },
  // {
  //   header: "Delete",
  //   cell: (cell) => (
  //     <ButtonLink href={`/admin/projects/delete/${cell.row.getValue("_id")}`}>
  //       Delete
  //     </ButtonLink>
  //   ),
  // },
];


interface MyProjectsProps {
  initialProjectsData: GenericPaginatedApiResponse<ProjectDisplay>;
  page: number
}

const MyProjects = ({initialProjectsData, page}: MyProjectsProps) => {

  const router = useRouter()

  const { projects, isLoading, meta, } = useGetProjects({page: page, limit: 5, fallbackData: initialProjectsData});

  const handleSetPage = async(num: number) => {
    router.push(`${num}`)
}

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <div className="px-40 w-full mt-20">
      <DataTable columns={COLUMNS} data={projects} pagination={{
        page,
        setPage: handleSetPage,
        totalPages: meta?.totalPages ?? 1
      }}  />
    </div>
  );
};

export default MyProjects;
