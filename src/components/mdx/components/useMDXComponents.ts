import CustomLink from "./CustomLink";
import AccordionMdx from "./AccordionMdx";
import { Callout } from "./Callout";
import { FlexCol, FlexRow } from "./FlexBox";

const useMDXComponents = () => {
    return {
        a: CustomLink,
        Callout: Callout,
        FlexRow: FlexRow,
        FlexCol: FlexCol, 
        Accordion: AccordionMdx,
    }
}

export default useMDXComponents;