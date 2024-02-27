import Stack from "@/components/layouts/Stack";

const Intro = () => {
  return (
    <Stack
      direction="col"
      align="center"
      className="bg-slate-900 dark:bg-background w-full"
      gap={20}
    >
      <h1 className="md:text-2xl text-3xl lg:text-3xl m-6 font-bold text-center text-white relative z-20">
        Experienced software engineer specialising in{" "}
        <strong className="font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Typescript
        </strong>
        .
      </h1>
    </Stack>
  );
};

export default Intro;
