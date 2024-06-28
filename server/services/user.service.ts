import {prisma} from '~/lib/client';
import httpResponse from '~/utils/httpResponse';

export const findUserByUsername = async (params: any) => {
  const {username} = params as {username: string;};
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
      return httpResponse.NOT_FOUND(`User not found`);
    }
    return httpResponse.OK(user);
  } catch (err) {
    return httpResponse.INTERNAL('Error while fetching user');
  }
};

export const followRequest = async (params: any) => {

  const {currentUserId, userId} = params as {currentUserId: string, userId: string;};

  try {
    const res = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: userId
      },
    });
    return httpResponse.OK({isBlocked: Boolean(res)});
  } catch (err) {
    return httpResponse.INTERNAL('Error while fetching user');
  }
};

export const follower = async (params: any) => {

  const {currentUserId, userId} = params as {currentUserId: string, userId: string;};

  try {
    const res = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId
      },
    });
    return httpResponse.OK({isBlocked: Boolean(res)});
  } catch (err) {
    return httpResponse.INTERNAL('Error while fetching user');
  }
};

export const isBlocked = async (params: any) => {

  const {blockerId, blockedId} = params as {blockerId: string, blockedId: string;};

  try {
    const res = await prisma.block.findFirst({
      where: {
        blockerId,
        blockedId
      },
    });
    return httpResponse.OK({isBlocked: Boolean(res)});
  } catch (err) {
    return httpResponse.INTERNAL('Error while fetching user');
  }
};

export const switchBlock = async (params: any) => {

  const {currentUserId, userId} = params as {currentUserId: string, userId: string;};

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
      blocked = false;
    } else {
      await prisma.block.create({
        data: {
          blockedId: currentUserId,
          blockerId: userId
        }
      });
      blocked = true;
    }

    return httpResponse.OK({blocked});

  } catch (err) {
    return httpResponse.INTERNAL('Error while fetching user');
  }
};
export const switchFollow = async (params: any) => {

  const {currentUserId, userId} = params as {currentUserId: string, userId: string;};

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

    return httpResponse.OK(result);
  } catch (err) {
    return httpResponse.INTERNAL('Error while fetching user');
  }
};

export const postsWithMedia = async (params: any) => {
  const {userId} = params as {userId: string;};
  try {
    const posts = await prisma.post.findMany({
      where: {
        userId,
        img: {
          not: null
        }
      },
      take: 8,
      orderBy: {
        createdAt: "desc"
      }
    });
    return httpResponse.OK(posts);
  } catch (error) {
    return httpResponse.INTERNAL('Error while fetching user medias');
  }
};

export const requests = async (params: any) => {

  const {userId} = params as {userId: string;};

  try {
    const res = await prisma.followRequest.findMany({
      where: {
        receiverId: userId
      },
      include: {
        sender: true
      }
    });
    return httpResponse.OK(res);
  } catch (err) {
    return httpResponse.INTERNAL('Error while fetching user');
  }
};


export const userServiceActions = {
  findUserByUsername,
  followRequest,
  follower,
  isBlocked,
  switchBlock,
  switchFollow,
  postsWithMedia,
  requests
};