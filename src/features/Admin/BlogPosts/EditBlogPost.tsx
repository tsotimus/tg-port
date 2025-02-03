"use client";

import { FormLayout, FormRow } from "@/components/form/FormLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { type BlogPostDisplay, CreateBlogPostSchema } from "@/types/blogpost";
import { type FormSchema } from "@/types/project";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
// import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import BlogPostForm from "./BlogPostForm";
import { Button } from "@/components/ui/button";

interface EditBlogPostProps {
    id: string;
    post: BlogPostDisplay;
}

const EditBlogPost = ({id, post}: EditBlogPostProps) => {
    // const router = useRouter();

    const defaultPost = {
        ...post,
        tags: post.tags.map((tag) => tag.id),
    }

    const methods = useForm<FormSchema>({
        mode: "onChange",
        defaultValues: defaultPost,
        resolver: zodResolver(CreateBlogPostSchema),
    });

    const { formState: {isValid} } = methods;

    const onSubmit = (data: FormSchema) => {
      //TODO: Implement Type safe API call 
        axios
        .patch(`/api/admin/v1/blog/${id}`, data)
        .then((res) => {
            const id = res.data.data.id;
            // router.push(`/admin/blog/${id}`);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    return (
      <FormProvider {...methods}>
        <FormLayout onSubmit={onSubmit}>
          <Stack gap={8}>
            <Typography variant="h1">Edit Blog Post</Typography>
            <BlogPostForm />
            <FormRow>
              <Button type="submit" disabled={!isValid}>Save</Button>
            </FormRow>
          </Stack>
        </FormLayout>
      </FormProvider>
    )
};

export default EditBlogPost