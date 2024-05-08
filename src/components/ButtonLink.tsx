import Link from "next/link";
import { Button } from "./ui/button";
import { PropsWithChildren } from "react";

interface ButtonLinkProps {
  href: string;
  className?: string;
}

const ButtonLink = ({
  href,
  children,
  className,
}: PropsWithChildren<ButtonLinkProps>) => {
  return (
    <Button asChild className={className}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
export default ButtonLink;
