import { resError500, resErrorUnauthorized, resJSON } from "./responses.js";

export function commonErrorHandler(error, res) {
  if (error.response) {
    if (error.response.status == 401) return resErrorUnauthorized(res);
    if (error.response.status >= 400 && error.response.status <= 499)
      return resJSON(res, error.response.status, error.response.data);
  }
  return resError500(res);
}
