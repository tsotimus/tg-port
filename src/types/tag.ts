import { z } from "zod";

export const TagSchema = z.object({
  name: z.string().min(1).max(60),
  slug: z.string().min(1),
});

export type FormSchema = z.infer<typeof TagSchema>;

export type TagModel = {
  name: string;
  slug: string;
};

export type TagDisplay = {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}