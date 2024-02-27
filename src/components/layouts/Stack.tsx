import { PropsWithChildren, ReactNode } from "react";

interface StackProps {
  direction?: "row" | "column";
  gap?: number;
  justify?: "start" | "end" | "center" | "between" | "around";
  classNames?: string;
  children: ReactNode;
}

const Stack = ({
  direction = "column",
  gap = 2,
  justify,
  classNames,
  children,
}: PropsWithChildren<StackProps>) => {
  const gapClass = direction === "row" ? `space-x-${gap}` : `space-y-${gap}`;
  const justifyClass = justify ? `justify-${justify}` : "";
  return (
    <div
      className={`flex flex-${direction} ${gapClass} ${justifyClass} ${classNames} `}
    >
      {children}
    </div>
  );
};

export default Stack;
