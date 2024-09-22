'use client'

import { Marquee } from '@/components/ui/marquee'
import {
  SiCss3,
  SiSupabase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPhp,
  SiMongodb,
  SiAmazonwebservices,
  SiVercel,
  SiDigitalocean,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiD3dotjs,
  SiTurborepo,
  SiNx,
  SiExpress,
  SiUnity,
  SiKnative,
  SiExpo,
  SiExcalidraw,
} from '@icons-pack/react-simple-icons'
import { ZapIcon } from 'lucide-react'

const MyStacks = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>Stack</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiHtml5 className='size-10' />
        <SiCss3 className='size-10' />
        <SiExpo className='size-10' />
        <SiUnity className='size-10' />
        <SiJavascript className='size-10' />
        <SiExpress className='size-10' />
        <SiTypescript className='size-10' />
        <SiPython className='size-10' />
        <SiPhp className='size-10' />
        <SiNextdotjs className='size-10' />
        <SiReact className='size-10' />
        <SiTailwindcss className='size-10' />
        <SiNodedotjs className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiPrisma className='size-10' />
        <SiMysql className='size-10' />
        <SiPostgresql className='size-10' />
        <SiMongodb className='size-10' />
        <SiSupabase className='size-10' />
        <SiGit className='size-10' />
        <SiVite className='size-10' />
        <SiAmazonwebservices className='size-10' />
        <SiVercel className='size-10' />
        <SiDigitalocean className='size-10' />
        <SiMarkdown className='size-10' />
        <SiJest className='size-10' />
        <SiD3dotjs className='size-10' />
        <SiTurborepo className='size-10' />
        <SiNx className='size-10' />
        <SiKnative className='size-10' />
        <SiExcalidraw className='size-10' />
      </Marquee>
    </div>
  )
}

export default MyStacks