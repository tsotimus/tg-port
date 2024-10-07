import * as z from "zod";

//Used for creating a new project
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  featured: z.boolean(),
  coverImage: z.string(),
});

const showcaseSchema = baseSchema.extend({
  type: z.literal("SHOWCASE"),
  mdxContent: z.string(),
  link: z.undefined(),
});

const linkSchema = baseSchema.extend({
  type: z.literal("LINK"),
  link: z.string(),
  mdxContent: z.undefined(),
});

export const projectValidation = z.discriminatedUnion("type", [
  showcaseSchema,
  linkSchema,
]);

export type FormSchema = z.infer<typeof projectValidation>;

export type ProjectModel = {
  title: string;
  description: string;
  slug: string;
  type: "SHOWCASE" | "LINK";
  techStack: string[];
  mdxContent?: string;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  coverImage: string;
  publishedAt?: Date;
};

//Not sure what this is used for
export type ProjectContentDisplay = ProjectLinkDisplay | ProjectShowcaseDisplay;

export type ProjectCommonDisplay = {
  id: string;
  title: string;
  description: string;
  slug: string;
  featured: boolean;
  coverImage: string;
  techStack: string[];
};

export type ProjectLinkDisplay = {
  type: "LINK";
  link: string;
} & ProjectCommonDisplay;

export type ProjectShowcaseDisplay = {
  type: "SHOWCASE";
  mdxContent: string;
} & ProjectCommonDisplay;

export type ProjectShowcaseDisplayNoMDX = Omit<
  ProjectShowcaseDisplay,
  "mdxContent"
>;
