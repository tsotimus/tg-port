"use client";

import Stack from "@/components/layouts/Stack";
import CreateTagForm from "./CreateTagForm";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const TagsDisplay = () => {
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
        <Stack>
            {!showCreateTag && (
                <Button onClick={showCreateTagForm}>
                    Create Tag
                </Button>
            )}
            {showCreateTag && <CreateTagForm afterSubmit={hideCreateTagForm} />}
        </Stack>
    );
};

export default TagsDisplay;