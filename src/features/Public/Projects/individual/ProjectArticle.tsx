"use client";

import { BlurImage } from "@/components/BlurImage";
import { ProjectDisplayWithTags } from "@/types/project";
import { ReactNode } from "react";
import ArticleHeader from "./ProjectArticleHeader";
import "@/styles/article.css";

interface ProjectArticleProps {
    mdxContent: ReactNode;
    project: ProjectDisplayWithTags
}

const ProjectArticle = ({mdxContent, project}: ProjectArticleProps) => {


    return (
        <article className="mx-auto max-w-3xl">
           <ArticleHeader project={project} />
            <BlurImage
                src={project.coverImage}
                width={768}
                height={458}
                alt={project.title}
                className="my-12 rounded-lg"
                lazy={false}
            />
            <div className="py-4 space-y-4 article">
                {mdxContent}
            </div>
        </article>
    );
}

export default ProjectArticle;