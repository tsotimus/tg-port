import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"


const ArticleHeader = () => {
    return (
        <div className='space-y-8 pt-10'>
            <Skeleton className='h-8 w-full rounded-lg' />
            <div className='flex items-center gap-3'>
                <Skeleton className='h-6 w-1/2 rounded-lg' />
                <div className='flex flex-col gap-3'>
                    <Skeleton className='h-4 w-[250px]' />
                    <Skeleton className='h-4 w-[200px]' />
                    <Skeleton className='h-4 w-[300px]' />
                </div>
            </div>
        </div>
    )
}

export const ArticleLoading = () => {
    return (
        <div className="mx-auto max-w-3xl">
            <ArticleHeader/>
            <Skeleton className="h-[500px] w-full rounded-lg my-12" />
            <div className="py-4 space-y-4">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[300px]" />
            </div>
        </div>
    )
}

