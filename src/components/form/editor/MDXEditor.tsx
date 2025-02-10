// You can use this code in a separate component that's imported in your pages.
import type { CodeBlockEditorDescriptor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
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
  jsxPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  CodeToggle,
  ListsToggle,
  CreateLink,
  BlockTypeSelect,
  Separator,
  imagePlugin
} from "@mdxeditor/editor";
import { Controller, type RegisterOptions, useFormContext } from "react-hook-form";
import SelectComponent from "./SelectComponent";

const ImportedEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

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
const MDXEditor = ({ name, rules, defaultValue }: EditorProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue ?? ""}
      render={({ field: { value, onChange } }) => {
        return (
          <ImportedEditor
            className="w-full h-[1000px] overflow-auto bg-white border border-gray-200 rounded-md p-4"
            contentEditableClassName="prose h-[1000px]"
            onChange={onChange}
            markdown={value as string}
            plugins={[
              codeBlockPlugin({
                codeBlockEditorDescriptors: [PlainTextCodeEditorDescriptor],
              }),
              headingsPlugin(),
              listsPlugin(),
              linkPlugin(),
              quotePlugin(),
              imagePlugin(),
              markdownShortcutPlugin(),
              diffSourcePlugin({
                viewMode: "source",
              }),
              jsxPlugin({ jsxComponentDescriptors: MDX_COMPONENTS }),
              toolbarPlugin({
                toolbarContents: () => (
                  <>
                    <UndoRedo/>
                    <BlockTypeSelect/>
                    <BoldItalicUnderlineToggles/>
                    <Separator/>
                    <CreateLink/>
                    <ListsToggle/>
                    <Separator/>
                    <CodeToggle/>
                    <Separator/>
                    <SelectComponent/>
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

export default MDXEditor;
