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
  const gapClass = direction === "row" ? `space-x-${gap}` : `space-y-${gap}`;
  const justifyClass = justify ? `justify-${justify}` : "";
  const alignClass = align ? `items-${align}` : "";
  return (
    <div
      className={`flex flex-${direction} ${gapClass} ${alignClass} ${justifyClass} ${className} w-full `}
    >
      {children}
    </div>
  );
};

export default Stack;
