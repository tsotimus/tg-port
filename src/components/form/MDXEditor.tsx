import dynamic from "next/dynamic";
import { useState } from "react";
import remarkMdx from "remark-mdx";
import { remark } from "remark";

// Dynamically import react-simplemde-editor to avoid issues with SSR
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function MdxEditor() {
  const [value, setValue] = useState("");

  return (
    <SimpleMDE
      className="w-full"
      value={value}
      onChange={setValue}
      options={{
        toolbarButtonClassPrefix: "mx-4 px-2 border border-gray-200 rounded-md",
        // toolbar:
        autoDownloadFontAwesome: true,
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true,
        },
        previewRender: (plainText) => {
          // Use remarkMdx to render MDX

          const result = remark()
            .use(remarkMdx)
            .processSync(plainText)
            .toString();

          return result;
          //   return remarkMdx.processSync(plainText).toString();
        },
      }}
    />
  );
}
