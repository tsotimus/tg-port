import Typography from "@/components/Typography";
import { PublishedBlogPostDisplay } from "@/types/blogpost";
import { ReactNode } from "react";
import { readingTime } from 'reading-time-estimator'

interface BlogArticleProps {
    post: PublishedBlogPostDisplay;
    mdxContent: ReactNode;
    estimatedReadingTime: string;
}
const BlogArticle = ({post, mdxContent, estimatedReadingTime}: BlogArticleProps) => {
    return (
        <div className="py-8">
            <Typography variant="h1">{post.title}</Typography>

            <div className="py-4 space-y-4">
                {mdxContent}
            </div>
        </div>
    )
};

export default BlogArticle