import { PropsWithChildren } from "react";

const CustomLink = ({ children }: PropsWithChildren) => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="text-blue-500">{children}</a>
  );
};

export default CustomLink;
