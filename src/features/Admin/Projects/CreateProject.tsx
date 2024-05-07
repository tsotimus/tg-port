import { FormLayout } from "@/components/form/FormLayout";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ProjectForm from "./ProjectForm";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import axios from "axios";
import { FormSchema, projectValidation } from "@/types/project";

const CreateProject = () => {
  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(projectValidation),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
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
          <Typography variant="h1">Create Project</Typography>
          <ProjectForm />
        </Stack>
      </FormLayout>
    </FormProvider>
  );
};

export default CreateProject;
