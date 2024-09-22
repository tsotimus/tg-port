import { HeartIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface FavouriteXProps {
    subject: string,
    icon: ReactNode
}
const FavouriteX = ({subject, icon}:FavouriteXProps) => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <HeartIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>{`Fav. ${subject}`}</h2>
      </div>
      <div className='flex items-center justify-center'>
        {icon}
      </div>
    </div>
  )
}

export default FavouriteX
