"use client";

import { type FormSchema, type ProjectDisplay, ProjectSchema } from "@/types/project";
import { FormProvider, useForm } from "react-hook-form";
import ProjectForm from "./ProjectForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteFetcher, updateFetcher } from "@/utils/client/genericFetchers";
import { useRouter } from "next/navigation";
import { FormLayout } from "@/components/form/FormLayout";
import { toast } from "sonner";
import useSWRMutation from 'swr/mutation';
import useGetTechTags from "../Tags/useGetTechTags";

interface EditProjectProps {
  project: ProjectDisplay;
}

const EditProject = ({ project }: EditProjectProps) => {
  const router = useRouter();
  const projectUrl = `/api/admin/v1/projects/${project.id}`;

  const {tagOptions} = useGetTechTags()



  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchema),
    defaultValues: project,
  });

  const { trigger: triggerUpdate } = useSWRMutation(projectUrl, updateFetcher);
  const { trigger: triggerDelete } = useSWRMutation(projectUrl, deleteFetcher);

  const handleUpdate = async(data: FormSchema) => {
    try {
      await triggerUpdate({ data }).then(() => {
        toast.success("Project updated successfully");
        router.push("/projects");
      });
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Failed to update project: ");
    }
  };

  const handleDelete = async () => {
    try {
      await triggerDelete();
      toast.success("Project deleted successfully");
      router.push("/projects");
    } catch (error) {
      console.error("Delete failed", error);
      toast.error("Failed to delete project: ");
    }
  };


  return (
    <FormProvider {...methods}>
      <FormLayout onSubmit={handleUpdate}>
        <ProjectForm isEditing handleDelete={handleDelete} techTagOptions={tagOptions}/>
      </FormLayout>
    </FormProvider>
  );
};

export default EditProject;