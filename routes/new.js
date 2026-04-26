const { Router } = require("express");
const { messages } = require("./index.js");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newRouter;
