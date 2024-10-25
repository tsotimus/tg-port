import Stack from "@/components/layouts/Stack";
import Typography from "@/components/Typography";
import TagsDisplay from "@/features/Tags/TagsDisplay";
import dbConnect from "@/lib/dbConnect";
import Tag from "@/models/Tag";
import { z } from "zod";

const getTags = async (page: number) => {
    const limit = 25;
    const skip = page * limit; // Adjusted for 0-based page index
    await dbConnect();
    const tags = await Tag.find({}).skip(skip).limit(limit);

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
    console.log(tags)

    // Fetch tags and other logic can go here

    return (
        <Stack>
            <Typography variant="h1">Manage Tags</Typography>
            <Typography>Page: {page}</Typography>
            <TagsDisplay />
        </Stack>
    );
}

export default TagsPage;