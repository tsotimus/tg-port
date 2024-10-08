"use client";
import MyLogo from '@/components/MyLogo'
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const TEXTS = [
  {
    text: 'beautiful',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#3782D1] to-[#8248C9]'
  },
  {
    text: 'efficient',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#FF6347] to-[#FFD700]'
  },
  {
    text: 'reliable',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#FF4DA6] to-[#FF7F24]'
  },
  {
    text: 'beautiful',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#3782D1] to-[#8248C9]'
  }
]


const Hero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    void animate(
      [
        [scope.current, { y: '0%' }, { duration: 0 }],
        [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate, scope])

  return (
    <div className='my-16 space-y-6'>
      <div className='flex justify-between gap-8'>
        <motion.div
          className='flex flex-col gap-4 md:max-w-xl'
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          <h1 className='font-title bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70'>
            I'm Tsotne, a Software Engineer creating{' '}
            <div className='inline-grid h-9 overflow-hidden sm:h-14'>
              <div ref={scope}>
                {TEXTS.map(({ text, className }, i) => (
                  <div className={className} key={i}>
                    {text}
                  </div>
                ))}
              </div>
            </div>{' '}
            apps using Typescript.
          </h1>
          <div className='text-muted-foreground text-sm'>London</div>
        </motion.div>
        <motion.div
          className='relative hidden size-48 md:flex items-center justify-center'
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          <MyLogo width={150} height={150} />
          <div className='absolute inset-0 -z-10 bg-custom-gradient-all opacity-30 blur-2xl' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
