import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import TagsDisplay from "@/features/Admin/Tags/TagsDisplay";
import dbConnect from "@/lib/dbConnect";
import Tag from "@/models/Tag";
import { type TagDisplay } from "@/types/tag";
import { createPaginatedApiResponse } from "@/utils/server/createApiResponse";
import { type HydratedDocument } from "mongoose";
import { type Metadata } from "next";
import { z } from "zod";

export const metadata: Metadata = {
    title: "My Tags"
  };

const getInitialTags = async (page: number) => {
    const limit = 5;
    const skip = page * limit; // Adjusted for 0-based page index
    await dbConnect();
    const count = await Tag.find().estimatedDocumentCount().exec()
    const tags = await Tag.find<HydratedDocument<TagDisplay>>({}).sort({createdAt: -1}).skip(skip).limit(limit);

    const currentTags = tags.map((tag) => tag.toJSON());

    const meta = {
        totalCount: count,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        pageSize: limit
    }

    return createPaginatedApiResponse<TagDisplay>(currentTags, meta);
};

const TagsPage = async (props: {params: Promise<{page: string}>}) => {
    const params = await props.params;
    const pageSchema = z.coerce.number().int().nonnegative();
    const result = pageSchema.safeParse(params.page);

    if (!result.success) {
        return (
            <Stack>
                <Typography variant="h1">Invalid page number</Typography>
            </Stack>
        );
    }

    const page = result.data - 1;

    const tags = await getInitialTags(page);
    return (
        <Stack gap={8}>
            <Typography variant="h1">Manage Tags</Typography>
            <TagsDisplay initialTagData={tags} page={result.data} />
        </Stack>
    );
}

export default TagsPage;