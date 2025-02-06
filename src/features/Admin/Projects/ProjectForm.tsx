"use client";

import MDXEditor from "@/components/form/editor/MDXEditor";
import { FormRow } from "@/components/form/FormLayout";
import { CheckBoxInput, TextInput , MultiSelectInput } from "@/components/form/Inputs";
import Stack from "@/components/layouts/Stack";
import { Button } from "@/components/ui/button";
import { type Option } from "@/types/options";
import { useFormContext } from "react-hook-form";


interface ProjectFormProps {
  isEditing?: boolean;
  handleDelete?: () => void;
  techTagOptions: Option[]
}

const ProjectForm = ({ isEditing = false, handleDelete }: ProjectFormProps) => {
  const {
    formState: { isValid, isDirty },
  } = useFormContext();

  return (
    <Stack gap={8}>
      <TextInput name="title" label="Title" rules={{ required: true }} />
      <TextInput
        name="description"
        label="Description"
        rules={{ required: true }}
      />
      <TextInput name="slug" label="URL Slug" rules={{ required: true }} />
      <TextInput
        name="coverImage"
        label="Cover Image URL"
        rules={{ required: true }}
      />
      <CheckBoxInput name="featured" label="Is this Project Featured?" />
      <TextInput name="link" label="Link URL" />
      <TextInput name="github" label="GitHub URL" />
      <MultiSelectInput name="techStack" label="Tech Stack Tags" rules={{required: true}} options={[{value: "iasjkhdkjahsd", label: "react"}]} />
      <MDXEditor name="mdxContent" rules={{ required: true }} />
      <FormRow>
        {isEditing ? (
          <Button type="submit" disabled={!isValid || !isDirty}>
            Save
          </Button>
        ) : (
          <Button type="submit" disabled={!isValid}>
            Create
          </Button>
        )}
      </FormRow>
      {isEditing && (
        <FormRow>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </FormRow>
      )}
    </Stack>
  );
};

export default ProjectForm;
