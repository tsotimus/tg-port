import { BlurImage } from "@/components/BlurImage"

interface CloudImageProps {
    src: string
    alt?: string
}
export const CloudImage = ({src, alt}:CloudImageProps) => {
    return (
        <BlurImage
        src={src}
        width={1280}
        height={832}
        alt={alt ?? ""}
        className="my-12 rounded-lg w-full"
    />
    )
}