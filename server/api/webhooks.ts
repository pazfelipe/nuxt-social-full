// server/api/webhook.js
import {Webhook} from 'svix';
import {defineEventHandler, readBody, getHeader} from 'h3';
import {prisma} from '~/lib/client';

export default defineEventHandler(async (event) => {
  const secret = process.env.WEBHOOK_SECRET as string;

  if (!secret) {
    throw new Error('WEBHOOK_SECRET is not defined');
  }

  const body = await readBody(event);
  const headers = {
    'svix-id': getHeader(event, 'svix-id') as string,
    'svix-signature': getHeader(event, 'svix-signature') as string,
    'svix-timestamp': getHeader(event, 'svix-timestamp') as string,
  };

  const webhook = new Webhook(secret);

  try {
    const payload = webhook.verify(JSON.stringify(body), headers) as any;
    const {data, type} = payload;

    if (type === "user.created") {
      try {
        await prisma.user.create({
          data: {
            id: data.id,
            username: data.username || data.email_addresses[0].email_address,
            name: data.first_name,
            surname: data.last_name,
            avatar: data.image_url || "/noAvatar.png",
            cover: "/noCover.png"
          }
        });
        return {status: 200, message: 'User created successfuly'};
      } catch (err) {
        return {status: 500, message: 'Error while creating user'};
      }
    }
    if (type === "user.updated") {
      try {
        await prisma.user.update({
          where: {
            id: data.id
          },
          data: {
            username: data.username || data.email_addresses[0].email_address,
            name: data.first_name,
            surname: data.last_name,
            avatar: data.image_url || "/noAvatar.png",
            cover: "/noCover.png"
          }
        });
        return {status: 200, message: 'User updated successfuly'};
      } catch (error) {
        return {status: 500, message: 'Error while updating user'};
      }
    }

  } catch (err) {
    console.error('Webhook verification failed:', err);
    return {status: 400, message: 'Invalid signature'};
  }
});