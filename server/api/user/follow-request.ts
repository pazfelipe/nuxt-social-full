// server/api/posts/create.ts
import {prisma} from '~/lib/client';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {currentUserId, userId} = body;

  try {
    const res = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: userId
      },
    });
    return {isBlocked: Boolean(res)};
  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Failed to create post'};
  }
});