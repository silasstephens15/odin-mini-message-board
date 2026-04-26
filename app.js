const express = require("express");
const { indexRouter } = require("./routes/index.js");
const newRouter = require("./routes/new.js");
const path = require("node:path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT);
