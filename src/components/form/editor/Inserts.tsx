import { usePublisher, insertJsx$, Button } from "@mdxeditor/editor";

// a toolbar button that will insert a JSX element into the editor.
export const InsertCallout = () => {
  const insertJsx = usePublisher(insertJsx$);

  return (
    <Button
      onClick={() =>
        insertJsx({
          name: "Callout",
          kind: "flow",
          props: {},
        })
      }
    >
      Callout
    </Button>
  );
};

export const InsertAccordion = () => {
  const insertJsx = usePublisher(insertJsx$);
  return (
    <Button
      onClick={() =>
        insertJsx({
          name: "Accordion",
          kind: "flow",
          props: {
            name: "single",
            content: {
              type: "expression",
              value: `() => ([{ title: "Title", description: "Description" }])`,
            },
          },
        })
      }
    >
      Accordion
    </Button>
  );
};
