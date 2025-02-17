import { createApiResponse, formatZodErrors } from '@/utils/server/createApiResponse';
import { BLOB_LOCATION } from '@/utils/server/files/constants';
import { list } from '@vercel/blob';
import { z } from 'zod';

const PaginationSchema = z.object({
    limit: z.string().transform((val) => parseInt(val, 10)),
    nextToken: z.string().optional().nullable()
})

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    
    const params = PaginationSchema.safeParse({
        limit: searchParams.get('limit'),
        nextToken: searchParams.get('nextToken')
    });

    if (!params.success) {
        return Response.json(
            createApiResponse(null, formatZodErrors(params.error.errors)),
            { status: 400 }
        );
    }

    const { blobs } = await list({
        prefix: BLOB_LOCATION,
        limit: params.data.limit,
        cursor: params.data.nextToken ?? undefined
    });
    
    return Response.json(createApiResponse(blobs));
}