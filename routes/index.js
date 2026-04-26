const { Router } = require("express");

const indexRouter = Router();
const messages = [
  {
    text: "Hello there.",
    user: "Ben K.",
    added: new Date(),
  },
  {
    text: "General Kenobi.",
    user: "Grievous",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

module.exports = { indexRouter, messages };
