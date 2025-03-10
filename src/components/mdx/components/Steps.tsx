"use client";

import cn from "clsx";
import type { ComponentProps } from "react";

export function Steps({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "nextra-steps nx-ml-4 nx-mb-12 nx-border-l nx-border-gray-200 nx-pl-6",
        "dark:nx-border-neutral-800 [counter-reset:step]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
