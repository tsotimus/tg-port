import {CustomOl, CustomUl, CustomLink, CustomBlockquote} from "./CustomElements";
import AccordionMdx from "./AccordionMdx";
import { Callout } from "./Callout";
import { FlexCol, FlexRow } from "./FlexBox";
import { CloudImage } from "./CloudImage";

const useMDXComponents = () => {
    return {
        a: CustomLink,
        // li: CustomLi,
        blockquote: CustomBlockquote,
        ol: CustomOl,
        ul: CustomUl,
        Callout: Callout,
        FlexRow: FlexRow,
        FlexCol: FlexCol, 
        Accordion: AccordionMdx,
        CloudImage: CloudImage
    }
}

export default useMDXComponents;