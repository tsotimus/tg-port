
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PublishedBlogPost } from '@/types/blogpost'
import { Link } from '@/components/Link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from "@/utils/client/cn";
import BlogCard from './BlogCard'
import EmptyPage from '@/components/layouts/EmptyPage'
import Typography from '@/components/Typography'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

interface RecentPostsProps {
  posts: PublishedBlogPost[]
}

const RecentPosts = ({posts}: RecentPostsProps) => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5
      }}
      className='my-24'
    >
      <motion.h2
        className='font-title text-center text-3xl font-bold sm:text-4xl'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        Latest Posts
      </motion.h2>
      {
        posts.length === 0 ? (
            <EmptyPage size="sm">
              <div className='text-center text-muted-foreground dark:text-muted-foreground-dark'>
                <Typography>No posts to display</Typography>
              </div>
            </EmptyPage>
        ) : (
            <>
                <motion.div
                    className='mt-12 grid gap-4 md:grid-cols-2'
                    initial={{
                    y: 40,
                    opacity: 0
                    }}
                    animate={{
                    y: 0,
                    opacity: 1
                    }}
                    transition={{
                    duration: 0.3
                    }}
                >
                    {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                    ))}
                </motion.div>
                <div className='my-8 flex items-center justify-center'>
                    <Link
                    href='/blog'
                    className={cn(
                        buttonVariants({
                        variant: 'outline'
                        }),
                        'rounded-xl'
                    )}
                    >
                    See all posts
                    </Link>
                </div>
            </>
        )
      }
    </motion.div>
  )
}


export default RecentPosts
