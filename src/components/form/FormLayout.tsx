"use client";
import { type PropsWithChildren } from "react";
import { type FieldValues, useFormContext } from "react-hook-form";

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
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
    </form>
  );
};

export const FormRow = ({ children }: PropsWithChildren<{}>) => {
  return <div className="w-[280px] flex flex-col gap-4">{children}</div>;
};
