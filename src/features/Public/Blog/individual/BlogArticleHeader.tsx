import Pill from "@/components/Pill";
import { PublishedBlogPostDisplay } from "@/types/blogpost";
import { motion } from "framer-motion"

const animation = {
    hide: {
      x: -30,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1
    }
  }

  interface BlogArticleHeaderProps {
      post: PublishedBlogPostDisplay
  } 

const BlogArticleHeader = ({post}:BlogArticleHeaderProps) => {
    return (
      <div className='space-y-8 pt-10'>
        <motion.div
          className='flex items-center gap-3'
          initial={animation.hide}
          animate={animation.show}
        >
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <div className="w-fit flex flex-wrap gap-2 ">
              {post.tags.map((tag) => (
                  <Pill text={tag.name} key={tag.id} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    )
}

export default BlogArticleHeader