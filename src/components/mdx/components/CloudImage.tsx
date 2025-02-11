"use client"

import { BlurImage } from "@/components/BlurImage";
import { match } from "ts-pattern";

interface CloudImageProps {
  src: string;
  alt?: string;
  size?: "small" | "normal";
}

export const CloudImage = ({ src, alt, size }: CloudImageProps) => {
  return match(size)
    .with("normal", () => (
      <BlurImage
        src={src}
        width={1280}
        height={832}
        alt={alt ?? ""}
        className="my-12 rounded-lg w-full"
      />
    ))
    .with("small", () => (
      <BlurImage
        src={src}
        width={300}
        height={200}
        alt={alt ?? ""}
        className="my-12 rounded-lg w-full"
      />
    ))
    .otherwise(() => (
      <BlurImage
        src={src}
        width={1280} // Default size
        height={832}
        alt={alt ?? ""}
        className="my-12 rounded-lg w-full"
      />
    ));
};