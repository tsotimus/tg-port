"use client";

import { FullPageLoader } from "@/components/loaders/Loading";
import { DataTable } from "@/components/tables/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
// import { useRouter } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import useGetPosts from "./useGetPosts";
import {type BlogPostDisplay } from "@/types/blogpost";
import { formatDate } from "@/utils/client/dates";
//TODO: Use ts pattern match
const COLUMNS: ColumnDef<BlogPostDisplay, string>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Status",
    accessorKey: "status"
  },
  {
    header: "Date Created",
    accessorKey: "createdAt",
    cell: (cell) => {
      return formatDate(cell.getValue())
    }
  },
  {
    header: "Date Posted",
    accessorKey: "publishedAt",
    cell: (cell) => {
      if(cell.getValue()){
        return formatDate(cell.getValue())
      } else {
        return "N/A"
      }
    }
  },
  {
    header: "Date Updated",
    accessorKey: "updatedAt",
    cell: (cell) => {
      return formatDate(cell.getValue())
    }
  },
  {
    header: "View",
    cell: (cell) => {
      if(cell.row.original.status === "PUBLISHED"){
        return (
          <ButtonLink href={`/blog/${cell.row.original.slug}`}>View</ButtonLink>
        )
      } else {
        return (
          <ButtonLink href={`/admin/blog/${cell.row.original.id}/preview`}>Preview</ButtonLink>
        )
      }
    }
  },
  {
    header: "Edit",
    cell: (cell) => {
      return (
        <ButtonLink href={`/admin/blog/${cell.row.original.id}`}>
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

const MyBlogPosts = () => {
  const { allProjects, isLoading } = useGetPosts();
  // const router = useRouter();

  return isLoading ? (
    <FullPageLoader />
  ) : (
    <div className="px-20 w-full mt-20">
      <DataTable columns={COLUMNS} data={allProjects} />
    </div>
  );
};

export default MyBlogPosts;
