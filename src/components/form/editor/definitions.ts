import { GenericJsxEditor, JsxComponentDescriptor } from "@mdxeditor/editor";

const MDX_COMPONENTS: JsxComponentDescriptor[] = [
  {
    name: "MyTest",
    kind: "text", // 'text' for inline, 'flow' for block
    // the source field is used to construct the import statement at the top of the markdown document.
    // it won't be actually sourced.
    source: "@components/mdx/TestComponent",
    // Used to construct the property popover of the generic editor
    props: [{ name: "name", type: "string", required: true }],
    // whether the component has children or not
    hasChildren: true,
    Editor: GenericJsxEditor,
  },
];

export default MDX_COMPONENTS;
