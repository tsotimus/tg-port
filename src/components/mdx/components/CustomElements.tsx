"use client";

import { type PropsWithChildren, type AnchorHTMLAttributes, type HTMLAttributes } from "react";

export const CustomLink = ({ children, href, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    <a className="text-blue-500" href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export const CustomUl = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => {
  return (
    <ul className="list-disc pl-5" {...props}>
      {children}
    </ul>
  );
};

export const CustomOl = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLOListElement>>) => {
  return (
    <ol className="list-decimal pl-5" {...props}>
      {children}
    </ol>
  );
};

export const CustomBlockquote = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLQuoteElement>>) => {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic  dark:text-muted-foreground" {...props}>
      {children}
    </blockquote>
  );
};