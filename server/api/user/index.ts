// server/api/user.ts
import {defineEventHandler, readBody} from 'h3';
import {userServiceActions} from '~/server/services/user.service';
import {SERVER_USER_ACTIONS} from '~/utils/enums';
import {StatusCodes} from 'http-status-codes';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {action, params} = body;

  
  const serviceFunction = userServiceActions[action as SERVER_USER_ACTIONS];
  
  if (!serviceFunction) {
    event.node.res.statusCode = 400;
    return {error: 'Invalid action'};
  }
  
  try {
    const result = await serviceFunction(params) as {data: any; status: StatusCodes;};
    event.node.res.statusCode = result.status;
    return result.data;
  } catch (err) {
    event.node.res.statusCode = 500;
    return {error: 'Internal server error'};
  }
});