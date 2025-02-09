import CustomLink from "../CustomLink";
import AccordionMdx from "./AccordionMdx";
import { Callout } from "./Callout";

const useMDXComponents = () => {
    return {
        a: CustomLink,
        Callout: Callout,
        Accordion: AccordionMdx,
    }
}

export default useMDXComponents;