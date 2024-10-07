import z from "zod";

//Used for creating a new project
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  featured: z.boolean(),
  coverImage: z.string(),
  type: z.literal("SHOWCASE"),
  mdxContent: z.string(),
  link: z.string().optional(),
  github: z.string().optional(),
});

export type FormSchema = z.infer<typeof baseSchema>;

export type ProjectModel = {
  title: string;
  description: string;
  slug: string;
  techStack: string[];
  mdxContent: string;
  link?: string;
  github?: string;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
  coverImage: string;
  publishedAt?: Date;
};

export type ProjectDisplay = {
  id: string;
  title: string;
  description: string;
  slug: string;
  featured: boolean;
  coverImage: string;
  techStack: string[];
  mdxContent: string;
  link?: string;
  github?: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
};

export type ProjectShowcaseDisplayNoMDX = Omit<ProjectDisplay, "mdxContent">;
