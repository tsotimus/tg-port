import { z } from "zod";

export const TagSchema = z.object({
  name: z.string().min(1).max(60),
  slug: z.string().min(1),
  isTech: z.boolean()
});

export type FormSchema = z.infer<typeof TagSchema>;

export type TagModel = {
  name: string;
  slug: string;
  isTech: boolean
};

export type TagDisplay = {
  id: string;
  name: string;
  slug: string;
  isTech: boolean;
  createdAt: Date;
  updatedAt: Date;
}