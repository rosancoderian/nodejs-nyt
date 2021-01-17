import createApi from "./createApi.js";

const api = createApi("search/v2/articlesearch.json");

function search(query) {
  return api.get("", {
    params: query,
  });
}

export default {
  api,
  search,
};
