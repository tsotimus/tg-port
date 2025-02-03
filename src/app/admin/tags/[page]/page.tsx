import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import TagsDisplay from "@/features/Admin/Tags/TagsDisplay";
import dbConnect from "@/lib/dbConnect";
import Tag from "@/models/Tag";
import { type TagDisplay } from "@/types/tag";
import { type HydratedDocument } from "mongoose";
import { z } from "zod";

const getTags = async (page: number) => {
    const limit = 25;
    const skip = page * limit; // Adjusted for 0-based page index
    await dbConnect();
    const tags = await Tag.find<HydratedDocument<TagDisplay>>({}).skip(skip).limit(limit);

    const currentTags = tags.map((tag) => tag.toJSON());

    return currentTags;
};

const TagsPage = async({params}: {params: {page: string}}) => {
    const pageSchema = z.coerce.number().int().nonnegative();
    const result = pageSchema.safeParse(params.page);

    if (!result.success) {
        return (
            <Stack>
                <Typography variant="h1">Invalid page number</Typography>
            </Stack>
        );
    }

    const page = result.data;

    const tags = await getTags(page);
    return (
        <Stack gap={8}>
            <Typography variant="h1">Manage Tags</Typography>
            <TagsDisplay tags={tags} />
        </Stack>
    );
}

export default TagsPage;