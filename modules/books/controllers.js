import apiBooks from "../../libs/nyt/books.js";
import { resErrorInvalidRequest, resJSON } from "../../libs/responses.js";
import { commonErrorHandler } from "../../libs/utils.js";
import { QueryGetBookList } from "./schemas.js";

export async function getBookList(req, res) {
  try {
    const joiQuery = QueryGetBookList.validate(req.query);
    if (joiQuery.error)
      return resErrorInvalidRequest(res, joiQuery.error.details);
    const result = await apiBooks.getList(joiQuery.value);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    return commonErrorHandler(error, res);
  }
}

export async function getBookListByDate(req, res) {
  try {
    const result = await apiBooks.getListByDate(req.params);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    return commonErrorHandler(error, res);
  }
}

export async function getBookListHistory(req, res) {
  try {
    const result = await apiBooks.getListHistory(req.query);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    return commonErrorHandler(error, res);
  }
}

export async function getBookListNames(req, res) {
  try {
    const result = await apiBooks.getListNames(req.query);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    return commonErrorHandler(error, res);
  }
}

export async function getBookListOverview(req, res) {
  try {
    const result = await apiBooks.getListOverview(req.query);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    return commonErrorHandler(error, res);
  }
}

export async function getBookReviews(req, res) {
  try {
    const result = await apiBooks.getReviews(req.query);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    return commonErrorHandler(error, res);
  }
}
