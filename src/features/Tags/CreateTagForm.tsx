"use client";

import { FormLayout, FormRow } from "@/components/form/FormLayout";
import { TextInput } from "@/components/form/Inputs";
import Stack from "@/components/layouts/Stack";
import { Button } from "@/components/ui/button";
import { FormSchema, TagSchema } from "@/types/tag";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import {  FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

interface CreateTagFormProps {
    afterSubmit: () => void;
}

const CreateTagForm = ({afterSubmit}:CreateTagFormProps) => {
    const router = useRouter();
    const methods = useForm<FormSchema>({
        mode: "onChange",
        resolver: zodResolver(TagSchema),
    });

    const {formState: {isValid}} = methods;

    const onSubmit = (data: FormSchema) => {
        axios.post("/api/admin/v1/tags", data).then(() => {
            afterSubmit();
            router.refresh();
        }).catch((error) => {
            toast.error("Failed to create tag");
            console.error(error);
        });
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