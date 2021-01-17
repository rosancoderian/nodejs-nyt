import createApi from "./createApi.js";

const api = createApi("search/v2/articlesearch.json");

function search(params) {
  return api.get("", {
    params,
  });
}

export default {
  api,
  search,
};
