const { Router } = require("express");
const { insertMessage } = require("../models/query");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  insertMessage(req.body.text, req.body.user).then(() => {
    res.redirect("/");
  });
});

module.exports = newRouter;
