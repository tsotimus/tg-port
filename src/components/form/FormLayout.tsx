import { PropsWithChildren } from "react";
import { FieldValues, useFormContext } from "react-hook-form";

type FormLayoutProps<T extends FieldValues> = {
  onSubmit: (data: T) => void;
};

export const FormLayout = <T extends FieldValues>({
  children,
  onSubmit,
}: PropsWithChildren<FormLayoutProps<T>>) => {
  const { handleSubmit } = useFormContext<T>();
  return (
    <form
      className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
    </form>
  );
};

export const FormRow = ({ children }: PropsWithChildren<{}>) => {
  return <div className="w-[280px]">{children}</div>;
};
