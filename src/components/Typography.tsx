import React from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

const Typography = ({ variant, children }: TypographyProps) => {
  switch (variant) {
    case "h1":
      return <h1 className="text-4xl font-bold">{children}</h1>;
    case "h2":
      return <h2 className="text-3xl font-semibold">{children}</h2>;
    case "h3":
      return <h3 className="text-2xl font-medium">{children}</h3>;
    case "h4":
      return <h4 className="text-xl font-normal">{children}</h4>;
    case "h5":
      return <h5 className="text-lg">{children}</h5>;
    case "h6":
      return <h6 className="text-base">{children}</h6>;
    default:
      return <p className="text-base">{children}</p>;
  }
};

export default Typography;
