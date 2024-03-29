import { FormLayout } from "@/components/form/FormLayout";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ProjectForm from "./ProjectForm";
import Stack from "@/components/layouts/Stack";
import Typography from "@/components/typography/Typography";
import axios from "axios";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  title: z.string(),
  slug: z.string(),
  type: z.enum(["SHOWCASE", "LINK"]),
  mdxContent: z.string(),
  // file: z
  //   .any()
  //   .refine((files) => files?.length == 1, "Image is required.")
  //   .refine(
  //     (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //     `Max file size is 5MB.`
  //   )
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //     ".jpg, .jpeg, .png and .webp files are accepted."
  //   ),
});

type Schema = z.infer<typeof schema>;

const CreateProject = () => {
  const methods = useForm<Schema>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
    axios
      .post("/api/admin/v1/projects", data)
      .then((res) => {
        console.log(res);
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
