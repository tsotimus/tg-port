"use client";

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MyLocation from './AboutMeSections/MyLocation'
import { Link } from '@/components/Link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from "@/utils/client/cn";
import MyStacks from './AboutMeSections/MyStacks'
import FavouriteX from './AboutMeSections/FavouriteX'
import Connect from './AboutMeSections/Connect'
import { SiMongodb, SiNextdotjs } from '@icons-pack/react-simple-icons'


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

const AboutMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative my-24'
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
        About Me
      </motion.h2>
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
        <div className='grid gap-4'>
          <MyLocation />
          <MyStacks />
        </div>
        <div className='grid gap-4'>
          <Connect />
          <div className='grid gap-4 [@media(min-width:450px)]:grid-cols-2'>
            <FavouriteX subject='Database' icon={<SiMongodb size={80} className='text-zinc-800 dark:text-zinc-200' />} />
            <FavouriteX subject='Framework' icon={<SiNextdotjs size={80} className='text-zinc-800 dark:text-zinc-200' />} />
          </div>
        </div>
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link href='/about' className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}>
          Learn more about me
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe
