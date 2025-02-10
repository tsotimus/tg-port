"use client"
import { type PropsWithChildren, type AnchorHTMLAttributes } from "react";

const CustomLink = ({ children, href, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    <a className="text-blue-500" href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  );
};

export default CustomLink;
