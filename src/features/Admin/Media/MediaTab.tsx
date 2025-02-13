'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import useTabValue from "./useTabValue";


const MediaTab = ({children}:PropsWithChildren) => {
    const router = useRouter()
    const tab = useTabValue()


    return (
        <Tabs defaultValue={"general"} value={tab ?? "general"} className="w-full" onValueChange={(v) => router.push(`/admin/media/${v}`)}>
            <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>
            {children}
        </Tabs>
    )
}

export default MediaTab