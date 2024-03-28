import Editor from "@/components/form/editor/Editor";
import { FormRow } from "@/components/form/FormLayout";
import { FileInput, SelectInput, TextInput } from "@/components/form/Inputs";
// import MdxEditor from "@/components/form/MDXEditor";
import Stack from "@/components/layouts/Stack";

const ProjectForm = () => {
  return (
    <Stack gap={8}>
      <FormRow>
        <TextInput name="title" label="Title" />
      </FormRow>
      <FormRow>
        <SelectInput
          name="projectType"
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
      </FormRow>
      <FormRow>
        <FileInput name="mainImage" label="Main Image" />
      </FormRow>
      <Editor name="content" />
    </Stack>
  );
};

export default ProjectForm;
