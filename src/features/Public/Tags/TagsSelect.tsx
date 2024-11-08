"use client";

import { useGetTagsInfinite } from "./useGetTags"
import { useMemo } from "react"
import ScrollableMultiSelect from "@/components/form/inputs/ScrollableMulitSelect";
import { RegisterOptions } from "react-hook-form";


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
        <ScrollableMultiSelect name={name} label={label} options={options} isLoading={isLoading} onScroll={handleScroll}/>
    )
}

export default TagsSelect