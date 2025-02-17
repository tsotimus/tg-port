"use client"

import MDXEditor from "@/components/form/editor/MDXEditor"
import { FormRow } from "@/components/form/FormLayout"
import { SelectInput, TextInput } from "@/components/form/Inputs"
import Stack from "@/components/layouts/Stack"
import TagsSelect from "@/features/Public/Tags/TagsSelect"
import { BLOG_STATUS_OPTIONS } from "./constants"

const BlogPostForm = () => {

    return (
        <Stack>
            <FormRow>
                <TextInput name="title" label="Title" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <TextInput name="slug" label="Slug" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <TextInput name="summary" label="Summary" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <TextInput name="coverImage" label="Image Link" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <TagsSelect name="tags" label="Tags" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <SelectInput options={BLOG_STATUS_OPTIONS} name="status" label="Status" rules={{required: true}}/>
            </FormRow>
            <div className="pt-10">
                <MDXEditor name="mdxContent" rules={{required: true}}/>
            </div>
        </Stack>
    )
}

export default BlogPostForm