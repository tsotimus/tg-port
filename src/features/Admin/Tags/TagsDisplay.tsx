"use client";

import Stack from "@/components/layouts/Stack";
import CreateTagForm from "./CreateTagForm";
import { Button } from "@/components/ui/button";
import { type TagDisplay } from "@/types/tag";
import { DataTable } from "@/components/tables/DataTable";
import { type ColumnDef } from "@tanstack/react-table";
import { parseAsBoolean, useQueryState } from "nuqs";

interface TagDisplayProps {
    tags: TagDisplay[];
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


const TagsDisplay = ({tags}:TagDisplayProps) => {
    const [createTag, setShowCreateTag] = useQueryState("createTag", parseAsBoolean.withDefault(false));

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
            <DataTable columns={COLUMNS} data={tags} />
        </Stack>
    );
};

export default TagsDisplay;