import apiBooks from "../../libs/nyt/books.js";
import { resJSON } from "../../libs/responses.js";
import { commonErrorHandler } from "../../libs/utils.js";

export async function getBookList(req, res) {
  try {
    const result = await apiBooks.getList(req.params, req.query);
    return resJSON(res, result.status, result.data);
  } catch (error) {
    return commonErrorHandler(error, res);
  }
}

export async function getBookListByDate(req, res) {
  try {
    const result = await apiBooks.getListByDate(req.query);
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
