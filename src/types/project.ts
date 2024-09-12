import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const projectValidation = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  type: z.enum(["SHOWCASE", "LINK"]),
  mdxContent: z.string(),
  featured: z.boolean(),
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

export type FormSchema = z.infer<typeof projectValidation>;

export type ProjectModel = {
  title: string;
  description: string;
  slug: string;
  mdxContent: string;
  type: "SHOWCASE" | "LINK";
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  coverImage: string;
  publishedAt?: Date;
};

export type ProjectContent = ProjectModel & {
  _id: string;
};
