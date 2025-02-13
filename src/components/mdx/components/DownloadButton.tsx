import { Button, ButtonProps } from "@/components/ui/button"
import Link from "next/link"

interface DownloadButtonProps {
    href: string;
    text: string;
    variant: ButtonProps["variant"];
}
const DownloadButton = ({href, variant, text}:DownloadButtonProps) => {
    return (
        <Button asChild variant={variant}>
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