import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

interface StackProps {
  direction?: "row" | "col";
  gap?: number;
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "between" | "around";
  className?: string;
  children: ReactNode;
}

const Stack = ({
  direction = "col",
  gap = 2,
  justify,
  className = "",
  align,
  children,
}: PropsWithChildren<StackProps>) => {
  const justifyClass = justify ? `justify-${justify}` : "";
  const alignClass = align ? `items-${align}` : "";
  return (
    <div
      className={cn(
        `flex flex-${direction} ${alignClass} ${justifyClass} w-full gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
