import apiArticles from "../../libs/nyt/articles.js";
import { resArticlesNotFound, resJSON } from "../../libs/responses.js";
import { commonErrorHandler } from "../../libs/utils.js";

export async function searchArticles(req, res) {
  try {
    const result = await apiArticles.search(req.params);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    if (error.status == 404) return resArticlesNotFound(res);
    return commonErrorHandler(error, res);
  }
}
