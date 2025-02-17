"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useTrackEvent } from "@/hooks/usePosthog";
import Link from "next/link"

interface DownloadButtonProps {
    href: string;
    text: string;
    variant: ButtonProps["variant"];
    eventName: string;
}
const DownloadButton = ({href, variant, text, eventName}:DownloadButtonProps) => {

    const track = useTrackEvent();
    
    return (
        <Button asChild variant={variant} onClick={() => track({name:eventName, type: "Download Button Click"})}>
            <Link
                href={href}
                target={"_blank"}
            >
                {text}
            </Link>
        </Button>
    )
}

export default DownloadButton