// server/api/posts/create.ts
import {prisma} from '~/server/lib/client';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {desc, userId} = body;

  try {
    const post = await prisma.post.create({
      data: {
        desc,
        userId,
      },
    });
    return post;
  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Failed to create post'};
  }
});