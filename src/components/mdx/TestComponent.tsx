type TestComponentProps = {
  name: string;
};
const TestComponent = ({ name }: TestComponentProps) => {
  return <div className="p-12 text-red">{name}</div>;
};

export default TestComponent;
