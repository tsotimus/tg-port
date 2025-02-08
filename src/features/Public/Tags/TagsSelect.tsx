"use client";

import { useGetTagsInfinite } from "./useGetTags"
import { useMemo } from "react"
import { RegisterOptions } from "react-hook-form";
import { MultiSelectInput } from "@/components/form/Inputs";


interface TagsSelectProps {
    name: string;
    label: string;
    rules?: RegisterOptions 
}

const TagsSelect = ({name, label}: TagsSelectProps) => {

    const { tags, isLoading, setSize, size, meta  } = useGetTagsInfinite()

    const handleScroll = () => {
        if(meta && size < meta.totalPages && !isLoading) {
            setSize(size + 1)
        }
    }


    const options = useMemo(() => {
        return tags.map(tag => ({
            value: tag.id,
            label: tag.name
        }))
    }, [tags])


    return (
        <MultiSelectInput name={name} label={label} options={options} onScroll={handleScroll} isLoading={isLoading} />
    )
}

export default TagsSelect