import Typography from "@/components/Typography";
import { FormLayout } from "@/components/form/FormLayout";
import Stack from "@/components/layouts/Stack";
import { FormSchema, Project, projectValidation } from "@/types/project";
import { FormProvider, useForm } from "react-hook-form";
import ProjectForm from "./ProjectForm";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

interface EditProjectProps {
  project: Project;
}

const EditProject = ({ project }: EditProjectProps) => {
  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(projectValidation),
    defaultValues: project,
  });

  const onSubmit = (data: FormSchema) => {
    axios
      .post("/api/admin/v1/projects", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <FormProvider {...methods}>
      <FormLayout onSubmit={onSubmit}>
        <Stack gap={12}>
          <Typography variant="h1">Edit Project</Typography>
          <ProjectForm />
        </Stack>
      </FormLayout>
    </FormProvider>
  );
};

export default EditProject;
