import { resError500, resErrorUnauthorized } from "./responses.js";

export function commonErrorHandler(error, res) {
  if (error.status == 401) return resErrorUnauthorized(res);
  if (error.status >= 400 && error.status <= 499)
    return resJSON(res, res.status, res.data);
  return resError500(res);
}
