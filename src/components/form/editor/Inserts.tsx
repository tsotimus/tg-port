"use client";

import { type JsxProperties } from "@mdxeditor/editor";


type InsertProps = {
    kind: "text";
    name: string;
    props: JsxProperties;
    children?: undefined;
} | {
    kind: "flow";
    name: string;
    props: JsxProperties;
    children?: undefined;
}

export const ALL_MDX_INSERTS: Record<string, InsertProps> = {
  "Accordion": {
    name: "Accordion",
    kind: "flow",
    props: {
      name: "single",
      content: {
        type: "expression",
        value: `() => ([{ title: "Title", description: "Description" }])`,
      },
    },
  },
  "Callout": {
    name: 'Callout',
    kind: 'text',
    props: { type: 'default' },
  },
  "FlexRow": {
    name: "FlexRow",
    kind: "flow",
    props: {
      //No props
    },
  },
  "FlexCol": {
    name: "FlexCol",
    kind: "flow",
    props: {
      //No props
    },
  },
  "CloudImage": {
    name: "CloudImage",
    kind: "flow",
    props: {
      src: "/image/src",
      alt: "Image Alt"
    },
  },
}