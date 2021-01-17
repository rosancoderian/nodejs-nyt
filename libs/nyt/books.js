import createApi from "./createApi.js";

const api = createApi("books/v3/");

function getList(params) {
  return api.get("lists.json", {
    params,
  });
}

function getListByDate(params) {
  const { date, list, ...qParams } = params;
  return api.get(`lists/${date}/${list}.json`, {
    params: qParams,
  });
}

function getListHistory(params) {
  return api.get(`lists/best-sellers/history.json`, {
    params,
  });
}

function getListNames(params) {
  return api.get(`lists/names.json`, {
    params,
  });
}

function getListOverview(params) {
  return api.get(`lists/overview.json`, {
    params,
  });
}

function getReviews(params) {
  return api.get("reviews.json", {
    params,
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
