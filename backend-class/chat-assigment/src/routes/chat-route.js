const {
  getMessages,
  createMessage,
} = require("../controllers/chat-controller");

const chatRouter = require("express").Router();
chatRouter.route("/").get(getMessages).post(createMessage);

module.exports = { chatRouter };
