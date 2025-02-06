import React from "react";
import Typography from "@/components/Typography";

interface ListItem {
  id: string;
  decorative?: React.ReactNode;
  component: React.ReactNode;
}

interface ListProps {
  items: ListItem[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map(({ id, decorative = "•", component }) => (
        <li
          key={id}
          className="flex flex-row space-x-4 justify-start"
        >
          {typeof decorative === "string" ? (
            <Typography>{decorative}</Typography>
          ) : (
            decorative
          )}
          {component}
        </li>
      ))}
    </ul>
  );
};

export default List;
