"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { type PropsWithChildren } from "react";

interface ButtonLinkProps {
  href: string;
  className?: string;
  external?: boolean;
}

const ButtonLink = ({
  href,
  children,
  className,
  external,
}: PropsWithChildren<ButtonLinkProps>) => {
  return (
    <Button asChild className={className}>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    </Button>
  );
};

export default ButtonLink;
