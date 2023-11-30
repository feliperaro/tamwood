const { Message } = require("../models/message");

const getMessages = async (_, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 }).limit(20);
    res.render("chat", { messages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createMessage = async (req, res) => {
  try {
    let { username, message } = req.body;
    if (!message || message.trim() === "") {
      return res.status(400).send("Message is required");
    }
    if (!username || username.trim() === "") {
      username = "Anonymous";
    }

    const newMessage = new Message({ username, message });
    await newMessage.save();

    res.redirect("/chat");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getMessages, createMessage };
