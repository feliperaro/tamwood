const {
  getMessages,
  createMessage,
} = require("../controllers/chat");

const router = require("express").Router();
router.route("/").get(getMessages).post(createMessage);

module.exports = router;
