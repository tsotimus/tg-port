"use client";

import React, { type ReactNode, type AnchorHTMLAttributes } from "react";

interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string
}

const IconLink: React.FC<IconLinkProps> = ({ children, href, ...props }) => {
  const commonProps = {
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    ...props,
  };

  return (
    <a href={href} {...commonProps}>
      {children}
    </a>
  );
};

export default IconLink; 