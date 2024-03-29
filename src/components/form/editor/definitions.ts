import { GenericJsxEditor, JsxComponentDescriptor } from "@mdxeditor/editor";
import { ReactNode } from "react";

const genericProps = {
  Editor: GenericJsxEditor,
};

const MDX_COMPONENTS: JsxComponentDescriptor[] = [
  {
    name: "Callout",
    kind: "flow", // 'text' for inline, 'flow' for block
    // the source field is used to construct the import statement at the top of the markdown document.
    // it won't be actually sourced.
    source: "@/components/mdx/Callout",
    // Used to construct the property popover of the generic editor
    props: [
      { name: "type", type: "string" },
      {
        name: "emoji",
        type: "string",
      },
    ],
    hasChildren: true,
    ...genericProps,
  },
  {
    name: "Accordion",
    kind: "flow",
    source: "@/components/mdx/Accordion",
    props: [
      {
        name: "type",
        type: "string",
        required: true,
      },
      {
        name: "content",
        type: "expression",
        required: true,
      },
    ],
    hasChildren: false,
    ...genericProps,
  },
];

export default MDX_COMPONENTS;
