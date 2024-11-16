"use client";

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PublishedBlogPostDisplay } from '@/types/blogpost'
import BlogGrid from './BlogGrid'

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
  posts: PublishedBlogPostDisplay[]
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
      <BlogGrid posts={posts} displayLink emptyPageSize='sm'/>
    </motion.div>
  )
}


export default RecentPosts
