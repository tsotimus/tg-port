"use client"

import { FormLayout } from "@/components/form/FormLayout";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import { FormSchema, ProjectSchema } from "@/types/project";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import ProjectForm from "../Projects/ProjectForm";

const CreateBlogPost = () => {

    const router = useRouter();
    const methods = useForm<FormSchema>({
        mode: "onChange",
        resolver: zodResolver(ProjectSchema),
    });

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
            <ProjectForm />
          </Stack>
        </FormLayout>
      </FormProvider>
    )
}

export default CreateBlogPost