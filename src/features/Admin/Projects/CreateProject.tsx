"use client";

import { FormLayout } from "@/components/form/FormLayout";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProjectForm from "./ProjectForm";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import axios from "axios";
import { type FormSchema, ProjectSchema } from "@/types/project";
// import { useRouter } from "next/navigation";
import useGetTechTags from "../Tags/useGetTechTags";
import { toast } from "sonner";

const CreateProject = () => {
  // const router = useRouter();
  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchema),
  });

  const {tagOptions} = useGetTechTags()

  const onSubmit = (data: FormSchema) => {
    //TODO: Implement Type safe API call 
    axios
      .post("/api/admin/v1/projects", data)
      .then((res) => {
        // const id = res.data.data.id;
        toast.success("It worked!")
        // router.push(`/admin/projects/${id}`);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error:" + err)
      });
  };



  return (
    <FormProvider {...methods}>
      <FormLayout onSubmit={onSubmit}>
        <Stack gap={8}>
          <Typography variant="h1">Create Project</Typography>
          <ProjectForm techTagOptions={tagOptions} />
        </Stack>
      </FormLayout>
    </FormProvider>
  );
};

export default CreateProject;
