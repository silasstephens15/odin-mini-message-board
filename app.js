const express = require("express");
const { indexRouter } = require("./routes/index.js");
const newRouter = require("./routes/new.js");
const path = require("node:path");
const NotFoundError = require("./errors/NotFoundError.js");

const app = express();
const assetsPath = path.join(__dirname, "public");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use((req, res) => {
  throw new NotFoundError();
  Next();
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT);
