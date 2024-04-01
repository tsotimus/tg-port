import React from "react";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

const Typography = ({ variant, children, className = "" }: TypographyProps) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return <h5 className={`text-lg ${className}`}>{children}</h5>;
    case "h6":
      return <h6 className={`text-base ${className}`}>{children}</h6>;
    default:
      return (
        <p className={`leading-7 [&:not(:first-child)]:mt-6`}>{children}</p>
      );
  }
};

export default Typography;
