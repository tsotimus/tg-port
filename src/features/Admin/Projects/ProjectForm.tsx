import { FormRow } from "@/components/form/FormLayout";
import { FileInput, SelectInput, TextInput } from "@/components/form/Inputs";
import Stack from "@/components/layouts/Stack";

const ProjectForm = () => {
  return (
    <Stack>
      <FormRow>
        <TextInput name="title" label="Title" />
        <SelectInput name="projectType" label="Project Type" options={[]} />
        <FileInput name="mainImage" label="Main Image" />
      </FormRow>
    </Stack>
  );
};

export default ProjectForm;
