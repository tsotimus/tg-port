import { Link } from "@/components/Link"
import { ArrowUpRightIcon, LightbulbIcon } from "lucide-react"
import { BlurImage } from "@/components/BlurImage"
import { ProjectContentDisplay } from "@/types/project"

interface CardProps {
    project: ProjectContentDisplay
}

const Card = ({project}: CardProps) => {
    const { slug, title, description } = project
  
    return (
      <Link
        key={slug}
        href={`/projects/${slug}`}
        className='shadow-feature-card dark:shadow-feature-card-dark group relative rounded-xl p-2'
      >
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center gap-3'>
            <LightbulbIcon className='size-[18px]' />
            <h2 className='font-light'>Project</h2>
          </div>
          <ArrowUpRightIcon className='size-[18px] opacity-0 transition-opacity group-hover:opacity-100' />
        </div>
        <BlurImage
          width={1280}
          height={832}
          src={`/images/projects/${slug}/cover.png`}
          alt={description}
          className='rounded-lg'
        />
        <div className='absolute bottom-6 left-7 flex flex-col transition-[left] ease-out group-hover:left-[30px]'>
          <h3 className='font-title text-2xl font-bold text-white'>{title}</h3>
          <p className='dark:text-muted-foreground mt-2 text-zinc-100'>{description}</p>
        </div>
      </Link>
    )
  }

  export default Card