"use client";

import { GenericJsxEditor, type JsxComponentDescriptor } from "@mdxeditor/editor";

const genericProps = {
  Editor: GenericJsxEditor,
};

const MDX_COMPONENTS: JsxComponentDescriptor[] = [
  {
    name: "Callout",
    kind: "flow", // 'text' for inline, 'flow' for block
    // the source field is used to construct the import statement at the top of the markdown document.
    // it won't be actually sourced.
    source: "@/components/mdx/components/Callout",
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
    source: "@/components/mdx/components/Accordion",
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
  {
    name: "FlexRow",
    kind: "flow",
    source: "@/components/mdx/components/FlexRow",
    props: [],
    hasChildren: true,
    ...genericProps,
  },
  {
    name: "FlexCol",
    kind: "flow",
    source: "@/components/mdx/components/FlexCol",
    props: [],
    hasChildren: true,
    ...genericProps,
  },
  {
    name: "CloudImage",
    kind: "flow",
    source: "@/components/mdx/components/CloudImage",
    props: [
      {
        name: "src",
        type: "string",
        required: true
      },
      {
        name: "alt",
        type: "string",
        required: false
      },
    ],
    hasChildren: false,
    ...genericProps
  }
];

export default MDX_COMPONENTS;
