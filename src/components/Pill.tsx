interface PillProps {
  text: string;
}

const Pill = ({ text }: PillProps) => {
  return (
    <div className="rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900">
      {text}
    </div>
  );
};

export default Pill;
