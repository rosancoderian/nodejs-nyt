import express from "express";
import { searchArticles } from "./controllers.js";

const articlesRouter = express.Router();

articlesRouter.get("/", searchArticles);

export default articlesRouter;
