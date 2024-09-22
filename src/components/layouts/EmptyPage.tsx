import { PropsWithChildren } from "react";

interface EmptyPageProps {
  size?: "sm" | "md" | "lg";
}

const EmptyPage = ({
  children,
  size = "md",
}: PropsWithChildren<EmptyPageProps>) => {
  const styles = "flex items-center justify-center";

  if (size === "sm") {
    return <div className={`${styles} min-h-1/4`}>{children}</div>;
  } else if (size === "lg") {
    return <div className={`${styles} min-h-3/4`}>{children}</div>;
  } else {
    return <div className={`${styles} min-h-1/2`}>{children}</div>;
  }
};

export default EmptyPage;
