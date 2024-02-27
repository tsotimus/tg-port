import { FC, ReactNode } from "react";

interface StackProps {
  direction?: "row" | "column";
  gap?: number;
  children: ReactNode;
}

const Stack: FC<StackProps> = ({ direction = "column", gap = 2, children }) => {
  const gapClass = direction === "row" ? `space-x-${gap}` : `space-y-${gap}`;

  return <div className={`flex flex-${direction} ${gapClass}`}>{children}</div>;
};

export default Stack;
