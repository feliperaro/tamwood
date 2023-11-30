const mongoose = require("mongoose");
const fs = require("fs");
const { Message } = require("../models/message.js");

const connectToMongo = () => {
  try {
    console.log("Connecting to MongoDB...");
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
};

const setupMongo = async () => {
  console.log("Setting up MongoDB...");
  const messages = await Message.countDocuments({}).exec();
  if (messages > 0) {
    return;
  }

  const mockJsonFile = "./src/config/messages.json";
  try {
    fs.readFile(mockJsonFile, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading JSON file:", err);
        return;
      }

      const messagesData = JSON.parse(data);
      Message.insertMany(messagesData.messages);
    });
  } catch (error) {
    console.error("error setupMongo()", error);
  }
};

module.exports = { connectToMongo, setupMongo };
