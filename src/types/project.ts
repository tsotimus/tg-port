import { ProjectModel } from "@/models/Project";

export type Project = ProjectModel & {
  _id: string;
};
