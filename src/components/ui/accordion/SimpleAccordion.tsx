"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export type AccordionContent = {
  title: string;
  description: string;
};

interface SimpleAccordionProps {
  type: "single" | "multiple";
  content: AccordionContent[];
}

const SimpleAccordion = ({ type, content }: SimpleAccordionProps) => {
  return (
    <Accordion type={type} collapsible>
      {content.map((item, index) => (
        <AccordionItem
          key={`${item.title}_${index}`}
          value={`${item.title}_${index}`}
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SimpleAccordion;
