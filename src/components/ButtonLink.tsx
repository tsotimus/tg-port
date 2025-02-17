"use client";

import Link from "next/link";
import { Button, type ButtonProps } from "./ui/button";
import { type PropsWithChildren } from "react";

interface ButtonLinkProps {
  href: string;
  variant?: ButtonProps["variant"]
  className?: string;
  external?: boolean;
}

const ButtonLink = ({
  href,
  children,
  className,
  external,
  variant,
}: PropsWithChildren<ButtonLinkProps>) => {
  return (
    <Button asChild variant={variant} className={className}>
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
