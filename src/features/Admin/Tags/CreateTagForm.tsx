"use client";

import { FormLayout, FormRow } from "@/components/form/FormLayout";
import CheckBoxInput from "@/components/form/inputs/CheckBoxInput";
import { TextInput } from "@/components/form/inputs/TextInput";
import Stack from "@/components/layouts/Stack";
import { Button } from "@/components/ui/button";
import { type FormSchema, TagSchema } from "@/types/tag";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {  FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { mutate } from "swr";



interface CreateTagFormProps {
    afterSubmit: () => void;
}


const CreateTagForm = ({afterSubmit}:CreateTagFormProps) => {
    const finder = (key:string) => typeof key === "string" && key.startsWith("/api/public/tags/v1")

    const methods = useForm<FormSchema>({
        mode: "onChange",
        resolver: zodResolver(TagSchema),
    });

    const {formState: {isValid}} = methods;

    const onSubmit = async (data: FormSchema) => {

        await axios.post('/api/admin/v1/tags', data).then(() => {
            toast.success("Tag created successfully");
            afterSubmit();
        }).catch((error) => {
            toast.error("Failed to create tag");
            console.error(error);
        })

        await mutate(finder,null, {
            revalidate: true
        })
    }

    return (
        <FormProvider {...methods}>
            <FormLayout onSubmit={onSubmit}>
                <Stack gap={8}>
                    <TextInput
                        name="name"
                        label="name"
                        rules={{ required: true }}
                    />
                    <TextInput
                        name="slug"
                        label="slug"
                        rules={{ required: true }}
                    />
                    <CheckBoxInput label="Is this a piece of technology? e.g. React" name="isTech"/>
                    <FormRow>
                        <Button type="submit" disabled={!isValid}>Create</Button>
                        <Button type="button" onClick={afterSubmit}>Cancel</Button>
                    </FormRow>
                </Stack>
            </FormLayout>
        </FormProvider>
    )
}

export default CreateTagForm;