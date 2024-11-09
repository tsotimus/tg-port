import Typography from "@/components/Typography";
import { PublishedBlogPost } from "@/types/blogpost";
import { ReactNode } from "react";

interface BlogArticleProps {
    post: PublishedBlogPost;
    mdxContent: ReactNode;
}
const BlogArticle = ({post, mdxContent}: BlogArticleProps) => {
    return (
        <div>
            <Typography variant="h1">{post.title}</Typography>
            <div>
                {mdxContent}
            </div>
        </div>
    )
};

export default BlogArticle