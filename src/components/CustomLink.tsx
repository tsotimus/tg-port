"use client"
import { type PropsWithChildren, type AnchorHTMLAttributes } from "react";

const CustomLink = ({ children, href, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="text-blue-500" href={href} {...props}>{children}</a>
  );
};

export default CustomLink;
