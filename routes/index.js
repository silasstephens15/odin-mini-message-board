const { Router } = require("express");
const { getAllMessages } = require("../models/query");

const indexRouter = Router();
let messages = [];

indexRouter.get("/", (req, res) => {
  getAllMessages().then((messages) => {
    messages = messages;
    res.render("index", { messages });
  });
});

module.exports = { indexRouter, messages };
