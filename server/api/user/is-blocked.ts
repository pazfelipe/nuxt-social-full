// server/api/posts/create.ts
import {prisma} from '~/lib/client';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {blockerId, blockedId} = body;

  try {
    const res = await prisma.block.findFirst({
      where: {
        blockerId,
        blockedId
      },
    });
    return {isBlocked: Boolean(res)};
  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Failed to create post'};
  }
});