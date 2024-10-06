import { MDXRemote } from "next-mdx-remote/rsc";
import CustomLink from "../CustomLink";
import AccordionMdx from "./AccordionMdx";
import { Callout } from "./Callout";

const components = {
  a: CustomLink,
  Callout: Callout,
  Accordion: AccordionMdx,
};

 const CustomMDX = (props: any) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

export default CustomMDX;
