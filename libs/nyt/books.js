import createApi from "./createApi.js";

const api = createApi("books/v3/");

function getList(query) {
  return api.get("lists.json", {
    params: query,
  });
}

function getListByDate(params, query) {
  const { date, list } = params;
  return api.get(`lists/${date}/${list}.json`, {
    params: query,
  });
}

function getListHistory(query) {
  return api.get(`lists/best-sellers/history.json`, {
    params: query,
  });
}

function getListNames(query) {
  return api.get(`lists/names.json`, {
    params: query,
  });
}

function getListOverview(params) {
  return api.get(`lists/overview.json`, {
    params,
  });
}

function getReviews(query) {
  return api.get("reviews.json", {
    params: query,
  });
}

export default {
  api,
  getList,
  getListByDate,
  getListHistory,
  getListNames,
  getListOverview,
  getReviews,
};
