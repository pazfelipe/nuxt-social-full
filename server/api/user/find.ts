// server/api/posts/create.ts
import {prisma} from '~/lib/client';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {userId} = body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        _count: {
          select: {
            followers: true,
          },
        },
      },
    });
    return user;
  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Failed to create post'};
  }
});