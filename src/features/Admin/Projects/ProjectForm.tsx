import { FormRow } from "@/components/form/FormLayout";
import { FileInput, SelectInput, TextInput } from "@/components/form/Inputs";
import Stack from "@/components/layouts/Stack";

const ProjectForm = () => {
  return (
    <Stack gap={4}>
      <FormRow>
        <TextInput name="title" label="Title" />
      </FormRow>
      <FormRow>
        <SelectInput name="projectType" label="Project Type" options={[]} />
      </FormRow>
      <FormRow>
        <FileInput name="mainImage" label="Main Image" />
      </FormRow>
    </Stack>
  );
};

export default ProjectForm;
