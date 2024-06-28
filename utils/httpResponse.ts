import {StatusCodes} from 'http-status-codes';

const OK = (data: any): {data: any, status: StatusCodes;} => ({
  data, status: StatusCodes.OK
});

const NOT_FOUND = (msg: string): {error: any, status: StatusCodes;} => ({
  error: msg, status: StatusCodes.NOT_FOUND
});

const BAD = (msg: string): {error: any, status: StatusCodes;} => ({
  error: msg, status: StatusCodes.BAD_REQUEST
});

const INTERNAL = (msg: string): {error: any, status: StatusCodes;} => ({
  error: msg, status: StatusCodes.INTERNAL_SERVER_ERROR
});

export default {
  OK,
  NOT_FOUND,
  BAD,
  INTERNAL
};
