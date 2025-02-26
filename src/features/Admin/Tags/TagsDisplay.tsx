"use client";

import Stack from "@/components/layouts/Stack";
import CreateTagForm from "./CreateTagForm";
import { Button } from "@/components/ui/button";
import { type TagDisplay } from "@/types/tag";
import { DataTable } from "@/components/tables/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import { parseAsBoolean, useQueryState } from "nuqs";
import { type GenericPaginatedApiResponse } from "@/types/api";
import useGetTechTags from "@/features/Public/Tags/useGetTags";
import { useRouter } from "next/navigation";

interface TagDisplayProps {
    initialTagData: GenericPaginatedApiResponse<TagDisplay>;
    page: number
}

const COLUMNS: ColumnDef<TagDisplay, string | number>[] = [
    {
      header: "name",
      accessorKey: "name",
    },
    {
        header: "slug",
        accessorKey: "slug",
        size: 12
    },
    {
      header: "Date Created",
      accessorKey: "createdAt",
      id: "createdAt",
      cell: (cell) => {
        return new Date(cell.row.original.createdAt).toLocaleDateString();
      },
    },
    {
        header: "Date Updated",
        accessorKey: "updatedAt",
        cell: (cell) => {
            return new Date(cell.row.original.updatedAt).toLocaleDateString();
        },    
    },
];


const TagsDisplay = ({initialTagData, page}:TagDisplayProps) => {
    const [createTag, setShowCreateTag] = useQueryState("createTag", parseAsBoolean.withDefault(false));
    const router = useRouter()

    const {tags} = useGetTechTags({page: page, limit: 5, fallbackData: initialTagData})

    const handleSetPage = async(num: number) => {
        router.push(`${num}`)
    }

    return (
        <Stack gap={8}>
            {!createTag && (
                <div>
                    <Button onClick={() => setShowCreateTag(true)}>
                        Create Tag
                    </Button>
                </div>
            )}
            {createTag && <CreateTagForm afterSubmit={() => setShowCreateTag(false)} />}
            <DataTable columns={COLUMNS} data={tags} pagination={{
                page: page,
                totalPages: initialTagData.meta.totalPages,
                setPage: handleSetPage
            }}/>
        </Stack>
    );
};

export default TagsDisplay;