// server/api/posts/create.ts
import {prisma} from '~/lib/client';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);


  const {userId, currentUserId} = body;

  if (!currentUserId) {
    event.node.res.statusCode = 400;
    return {error: 'User is not authenticated!'};
  }

  const result = {
    following: false,
    request: false
  };

  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId as unknown as string,
        followingId: userId
      }
    });

    if (existingFollow) {

      result.following = true;

      await prisma.follower.delete({
        where: {
          id: existingFollow.id
        }
      });
      result.following = false;
      result.request = false;
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId
        }
      });

      if (existingFollowRequest) {


        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id
          }
        });
        result.following = false;
        result.request = false;
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId
          }
        });
        result.following = false;
        result.request = true;
      }
    }

    return result;
  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Failed to create post'};
  }
});