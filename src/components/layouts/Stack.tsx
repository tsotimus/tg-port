"use client";

import { cn } from "@/utils/client/cn";
import { type PropsWithChildren, type ReactNode, type ElementType } from "react";

interface StackProps {
  direction?: "row" | "col";
  gap?: number;
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "between" | "around";
  className?: string;
  component?: ElementType;
  children: ReactNode;
}

const Stack = ({
  direction = "col",
  gap = 2,
  justify,
  className = "",
  align,
  component: Component = "div",
  children,
}: PropsWithChildren<StackProps>) => {
  const justifyClass = justify ? `justify-${justify}` : "";
  const alignClass = align ? `items-${align}` : "";
  const layoutClass =
    direction === "col" ? `flex flex-${direction}` : `grid grid-flow-col`;
  const computedCname = cn(
    `${layoutClass} ${alignClass} ${justifyClass} w-full gap-${gap}`,
    className
  );

  return <Component className={computedCname}>{children}</Component>;
};

export default Stack;
