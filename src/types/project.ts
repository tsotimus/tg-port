import z from "zod";
import { type TagDisplay } from "./tag";
import { type Types } from 'mongoose';

//Used for creating a new project
export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  featured: z.boolean(),
  coverImage: z.string(),
  techStack: z.array(z.string()),
  projectDate: z.union([z.date(), z.string().transform((dateString) => new Date(dateString))]),
  mdxContent: z.string(),
  link: z.string().optional(),
  github: z.string().optional(),
});

export type FormSchema = z.infer<typeof ProjectSchema>;

export type ProjectModel = {
  title: string;
  description: string;
  slug: string;
  techStack: Types.ObjectId[];
  mdxContent: string;
  link?: string;
  github?: string;
  featured: boolean;
  coverImage: string;
  projectDate: Date;
  createdAt: Date;
  updatedAt: Date;
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

