import type {HttpMethod} from 'svix/dist/openapi';
import {useFetch} from "@vueuse/core";

export const fetchData = async (path: string, method: HttpMethod, body: Record<any, any>): Promise<{data: any;}> => {
  const {data, error} = await useFetch(`/api/${path}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).json();
  if (error.value) {
    return Promise.reject(error.value);
  }
  return Promise.resolve({data});
};