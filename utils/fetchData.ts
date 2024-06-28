import type {HttpMethod} from 'svix/dist/openapi';
import {useFetch} from "@vueuse/core";
import type {SERVER_USER_ACTIONS} from '~/utils/enums';

type TBodySchema = {
  action: SERVER_USER_ACTIONS,
  params: Record<any, any>;
};

export const fetchData = async (path: string, method: HttpMethod, body: TBodySchema): Promise<{data: any;}> => {

  const {data, error, statusCode} = await useFetch(`/api/${path}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).json();

  if (error.value) {
    return Promise.reject({error: error.value, status: statusCode.value});
  }
  return Promise.resolve({data});
};