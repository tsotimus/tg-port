"use client";

import { FullPageLoader } from "@/components/loaders/Loading";
import useGetProjects from "./useGetProjects";
import { DataTable } from "@/components/tables/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import ButtonLink from "@/components/ButtonLink";
import { type ProjectDisplay } from "@/types/project";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

const COLUMNS: ColumnDef<ProjectDisplay, string | number>[] = [
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
        <ButtonLink href={`/admin/projects/${cell.row.original.id}`}>
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

const MyProjects = () => {

  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1),
  );

  const { currentPageData, isLoading, meta, setSize } = useGetProjects();

  useEffect(() => {
    const updateSize = async() => {
      await setSize(page)
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    updateSize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])

  // const handlePageChange = async(newPage: number) => {
  //   await setSize(newPage)
  //   await setPage(newPage)
  // }
  

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <div className="px-40 w-full mt-20">
      <DataTable columns={COLUMNS} data={currentPageData} pagination={{
        page,
        setPage: setPage,
        totalPages: meta?.totalPages ?? 1
      }}  />
    </div>
  );
};

export default MyProjects;
