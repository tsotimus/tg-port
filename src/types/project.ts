import z from "zod";
import { type TagDisplay } from "./tag";

//Used for creating a new project
export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  featured: z.boolean(),
  coverImage: z.string(),
  techStack: z.array(z.string()),
  mdxContent: z.string(),
  link: z.string().optional(),
  github: z.string().optional(),
});

export type FormSchema = z.infer<typeof ProjectSchema>;

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

export type ProjectDisplayWithTags = Omit<ProjectDisplay, "techStack"> & {
  techStack: TagDisplay[]
}

