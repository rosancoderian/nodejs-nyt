export function resJSON(res, code, body) {
  return res.status(code).json(body);
}

export function resError500(res) {
  return resJSON(res, 500, { error: "Unexpected error." });
}

export function resErrorUnauthorized(res) {
  return resJSON(res, 401, { error: "Client is unauthorized." });
}

export function resErrorInvalidRequest(res, details) {
  return resJSON(res, 400, { error: "Invalid request.", details });
}

export function resArticlesNotFound(res) {
  return resJSON(res, 404, { error: "Articles not found." });
}
