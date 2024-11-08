"use client"

import { FormLayout, FormRow } from "@/components/form/FormLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { type FormSchema, ProjectSchema } from "@/types/project";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import BlogPostForm from "./BlogPostForm";
import { Button } from "@/components/ui/button";

const CreateBlogPost = () => {

    const router = useRouter();
    const methods = useForm<FormSchema>({
        mode: "onChange",
        resolver: zodResolver(ProjectSchema),
    });

    const { formState: {isValid} } = methods;

    const onSubmit = (data: FormSchema) => {
        axios
        .post("/api/admin/v1/blog", data)
        .then((res) => {
            const id = res.data.data.id;
            router.push(`/admin/blog/${id}`);
        })
        .catch((err) => {
            console.error(err);
        });
    };
    return (
      <FormProvider {...methods}>
        <FormLayout onSubmit={onSubmit}>
          <Stack gap={8}>
            <Typography variant="h1">Create Blog Post</Typography>
            <BlogPostForm />
            <FormRow>
              <Button type="submit" disabled={!isValid}>Create</Button>
            </FormRow>
          </Stack>
        </FormLayout>
      </FormProvider>
    )
}

export default CreateBlogPost