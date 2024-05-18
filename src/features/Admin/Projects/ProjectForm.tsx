import MDXEditor from "@/components/form/editor/MDXEditor";
import { FormRow } from "@/components/form/FormLayout";
import {
  FileInput,
  SelectInput,
  SwitchInput,
  TextInput,
} from "@/components/form/Inputs";
import Stack from "@/components/layouts/Stack";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

interface ProjectFormProps {
  isEditing?: boolean;
  handleDelete?: () => void;
}

const ProjectForm = ({ isEditing, handleDelete }: ProjectFormProps) => {
  const {
    formState: { isValid, isDirty },
  } = useFormContext();

  return (
    <Stack gap={8}>
      <TextInput name="title" label="Title" />
      <TextInput name="description" label="Description" />
      <TextInput name="slug" label="URL Slug" />
      <SelectInput
        name="type"
        label="Project Type"
        options={[
          {
            label: "Showcase",
            value: "SHOWCASE",
          },
          {
            label: "Link",
            value: "LINK",
          },
        ]}
      />
      <SwitchInput name="featured" label="Featured" />
      <MDXEditor name="mdxContent" rules={{ required: true }} />
      <FormRow>
        <Button type="submit" disabled={!isValid || !isDirty}>
          {isEditing ? "Save" : "Create"}
        </Button>
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
