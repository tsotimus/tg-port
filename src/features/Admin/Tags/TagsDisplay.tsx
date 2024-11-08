"use client";

import Stack from "@/components/layouts/Stack";
import CreateTagForm from "./CreateTagForm";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { type TagDisplay } from "@/types/tag";
import { DataTable } from "@/components/tables/DataTable";
import { type ColumnDef } from "@tanstack/react-table";

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
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const showCreateTag = searchParams?.has("createTag");

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams?.toString());
            if (value === "false") {
                params.delete(name);
            } else {
                params.set(name, value);
            }
            return params.toString();
        },
        [searchParams]
    );

    const showCreateTagForm = () => {
        router.push(pathname + '?' + createQueryString('createTag', 'true'));
    };

    const hideCreateTagForm = () => {
        router.push(pathname + '?' + createQueryString('createTag', 'false'));
    };

    return (
        <Stack gap={8}>
            {!showCreateTag && (
                <div>
                    <Button onClick={showCreateTagForm}>
                        Create Tag
                    </Button>
                </div>
            )}
            {showCreateTag && <CreateTagForm afterSubmit={hideCreateTagForm} />}
            <DataTable columns={COLUMNS} data={tags} />
        </Stack>
    );
};

export default TagsDisplay;