"use client"

import MDXEditor from "@/components/form/editor/MDXEditor"
import { FormRow } from "@/components/form/FormLayout"
import { TextInput } from "@/components/form/Inputs"
import Stack from "@/components/layouts/Stack"
import { Button } from "@/components/ui/button"
import TagsSelect from "@/features/Public/Tags/TagsSelect"

const BlogPostForm = () => {
    return (
        <Stack>
            <FormRow>
                <TextInput name="title" label="Title" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <TextInput name="summary" label="Summary" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <TextInput name="slug" label="Slug" rules={{required: true}} />
            </FormRow>
            <FormRow>
                <TagsSelect name="tags" label="Tags" rules={{required: true}} />
            </FormRow>
            <div className="pt-10">
                <MDXEditor name="mdxContent" rules={{required: true}}/>
            </div>
            <FormRow>
                <Button type="submit">Save</Button>
            </FormRow>
        </Stack>
    )
}

export default BlogPostForm