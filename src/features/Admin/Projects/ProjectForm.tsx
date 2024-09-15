import MDXEditor from "@/components/form/editor/MDXEditor";
import { FormRow } from "@/components/form/FormLayout";
import {
  CheckBoxInput,
  SelectInput,
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
    formState: { isValid, isDirty, errors },
    watch,
    control,
  } = useFormContext();

  const currentType = watch("type");

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
      <SelectInput
        name="type"
        label="Project Type"
        rules={{ required: true }}
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

      <CheckBoxInput name="featured" label="Featured" />
      {currentType === "SHOWCASE" && (
        <MDXEditor name="mdxContent" rules={{ required: true }} />
      )}
      {currentType === "LINK" && (
        <TextInput name="link" label="Link URL" rules={{ required: true }} />
      )}
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
