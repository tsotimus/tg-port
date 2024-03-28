// You can use this code in a separate component that's imported in your pages.
import type { CodeBlockEditorDescriptor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import MDX_COMPONENTS from "./definitions";

import {
  codeBlockPlugin,
  headingsPlugin,
  listsPlugin,
  linkPlugin,
  quotePlugin,
  markdownShortcutPlugin,
  useCodeBlockEditorContext,
  diffSourcePlugin,
  toolbarPlugin,
  DiffSourceToggleWrapper,
  UndoRedo,
  jsxPlugin,
  usePublisher,
  insertJsx$,
  Button,
} from "@mdxeditor/editor";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

// a toolbar button that will insert a JSX element into the editor.
const InsertMyLeaf = () => {
  const insertJsx = usePublisher(insertJsx$);
  return (
    <Button
      onClick={() =>
        insertJsx({
          name: "MyTest",
          kind: "text",
          props: {
            name: "Tsot and Becca",
          },
        })
      }
    >
      Leaf
    </Button>
  );
};

const PlainTextCodeEditorDescriptor: CodeBlockEditorDescriptor = {
  match: () => true,
  priority: 0,
  Editor: (props) => {
    const cb = useCodeBlockEditorContext();
    return (
      <div onKeyDown={(e) => e.nativeEvent.stopImmediatePropagation()}>
        <textarea
          rows={3}
          cols={20}
          defaultValue={props.code}
          onChange={(e) => cb.setCode(e.target.value)}
        />
      </div>
    );
  },
};

interface EditorProps {
  name: string;
  rules?: RegisterOptions;
  defaultValue?: string;
}
const Editor = ({ name, rules, defaultValue }: EditorProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue || ""}
      render={({ field: { value, onChange } }) => {
        return (
          <MDXEditor
            className="w-full h-96 bg-white border border-gray-200 rounded-md p-4"
            onChange={onChange}
            markdown={value}
            plugins={[
              codeBlockPlugin({
                codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor],
              }),
              diffSourcePlugin({
                viewMode: "rich-text",
              }),
              headingsPlugin(),
              listsPlugin(),
              linkPlugin(),
              quotePlugin(),
              markdownShortcutPlugin(),
              jsxPlugin({ jsxComponentDescriptors: MDX_COMPONENTS }),
              toolbarPlugin({
                toolbarContents: () => (
                  <>
                    <DiffSourceToggleWrapper>
                      <UndoRedo />
                    </DiffSourceToggleWrapper>
                    <InsertMyLeaf />
                  </>
                ),
              }),
            ]}
          />
        );
      }}
    />
  );
};

export default Editor;
