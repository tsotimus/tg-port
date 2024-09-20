import { FormLayout } from "@/components/form/FormLayout";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProjectForm from "./ProjectForm";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import axios from "axios";
import { FormSchema, projectValidation } from "@/types/project";
import { useRouter } from "next/router";

const CreateProject = () => {
  const router = useRouter();
  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(projectValidation),
  });

  const onSubmit = (data: FormSchema) => {
    axios
      .post("/api/admin/v1/projects", data)
      .then((res) => {
        console.log(res);
        const id = res.data.id;
        router.push(`/admin/projects/${id}`);
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
