import Typography from "@/components/Typography";
import { FormLayout } from "@/components/form/FormLayout";
import Stack from "@/components/layouts/Stack";
import {
  FormSchema,
  ProjectContentDisplay,
  ProjectLinkDisplay,
  ProjectShowcaseDisplay,
  projectValidation,
} from "@/types/project";
import { FormProvider, useForm } from "react-hook-form";
import ProjectForm from "./ProjectForm";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { deleteFetcher, updateFetcher } from "@/utils/client/genericFetchers";

interface EditProjectProps {
  project: ProjectLinkDisplay | ProjectShowcaseDisplay;
}

const EditProject = ({ project }: EditProjectProps) => {
  const { trigger: triggerUpdate } = useSWRMutation(
    `/api/admin/v1/projects/${project._id}`,
    updateFetcher
  );

  const { trigger: triggerDelete } = useSWRMutation(
    `/api/admin/v1/projects/${project._id}`,
    deleteFetcher
  );

  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(projectValidation),
    defaultValues: project,
  });

  const onSubmit = (data: FormSchema) => {
    triggerUpdate(data);
  };

  const handleDelete = () => {
    triggerDelete();
  };

  return (
    <FormProvider {...methods}>
      <FormLayout onSubmit={onSubmit}>
        <Stack gap={12}>
          <Typography variant="h1">Edit Project</Typography>
          <ProjectForm isEditing handleDelete={handleDelete} />
        </Stack>
      </FormLayout>
    </FormProvider>
  );
};

export default EditProject;
