// server/api/posts/create.ts
import {prisma} from '~/lib/client';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {username} = body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
      include: {
        _count: {
          select: {
            followers: true,
            followings: true,
            posts: true
          },
        },
      },
    });
    if (!user) {
      event.node.res.statusCode = 404;
      return;
    }
    return user;
  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Failed to create post'};
  }
});