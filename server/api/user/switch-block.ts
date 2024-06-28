// server/api/posts/create.ts
import {prisma} from '~/lib/client';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const {userId, currentUserId} = body;

  let blocked = false;

  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockedId: currentUserId,
        blockerId: userId
      }
    });

    blocked = true;

    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id
        }
      });
      blocked = false
    } else {
      await prisma.block.create({
        data: {
          blockedId: currentUserId,
          blockerId: userId
        }
      });
      blocked = true;
    }

    return {blocked};

  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Failed to block user'};
  }
});