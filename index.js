import express from "express";
import dotenv from "dotenv";

import articlesRouter from "./modules/articles/router.js";
import booksRouter from "./modules/books/router.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/articles", articlesRouter);
app.use("/books", booksRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
