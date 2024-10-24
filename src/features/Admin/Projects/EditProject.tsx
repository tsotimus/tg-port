"use client";

import { FormSchema, ProjectDisplay, ProjectSchema } from "@/types/project";
import { FormProvider, useForm } from "react-hook-form";
import ProjectForm from "./ProjectForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteFetcher, updateFetcher } from "@/utils/client/genericFetchers";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { FormLayout } from "@/components/form/FormLayout";
import { toast } from "sonner";

interface EditProjectProps {
  project: ProjectDisplay;
}

const EditProject = ({ project }: EditProjectProps) => {
  const router = useRouter();
  const projectUrl = `/api/admin/v1/projects/${project.id}`;

  // Define the mutation functions
  const updateProject = async (data: ProjectDisplay) => {
    return updateFetcher(projectUrl, data);
  };

  const deleteProject = async () => {
    return deleteFetcher(projectUrl);
  };

  // Use the mutation hooks
  const updateMutation = useMutation({
    mutationFn: updateProject,
    mutationKey: [projectUrl, "update"],
    onSuccess: () => {
      // Handle success, e.g., navigate to another page
      toast.success("Project updated successfully");
      router.push("/projects");
    },
    onError: (error) => {
      // Handle error
      console.error("Update failed", error);
      toast.error("Failed to update project: " + error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProject,
    mutationKey: [projectUrl, "delete"],
    onSuccess: () => {
      // Handle success, e.g., navigate to another page
      toast.success("Project deleted successfully");
      router.push("/projects");
    },
    onError: (error) => {
      // Handle error
      toast.error("Failed to delete project: " + error.message);
    },
  });

  const methods = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(ProjectSchema),
    defaultValues: project,
  });

  const handleUpdate = (data: ProjectDisplay) => {
    updateMutation.mutate(data);
  };

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  return (
    <FormProvider {...methods}>
      <FormLayout onSubmit={handleUpdate}>
        <ProjectForm isEditing handleDelete={handleDelete} />
      </FormLayout>
    </FormProvider>
  );
};

export default EditProject;
