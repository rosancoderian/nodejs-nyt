import express from "express";
import {
  getBookList,
  getBookListByDate,
  getBookListHistory,
  getBookListNames,
  getBookListOverview,
  getBookReviews,
} from "./controllers.js";

const booksRouter = express.Router();

booksRouter.get("/lists", getBookList);
booksRouter.get("/lists/:date/:list", getBookListByDate);
booksRouter.get("/lists/best-sellers/history", getBookListHistory);
booksRouter.get("/lists/names", getBookListNames);
booksRouter.get("/lists/overview", getBookListOverview);
booksRouter.get("/reviews", getBookReviews);

export default booksRouter;
