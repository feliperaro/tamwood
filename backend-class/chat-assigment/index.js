require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const { chatRouter } = require("./src/routes/chat-route");
const { connectToMongo, setupMongo } = require("./src/config/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/chat", chatRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectToMongo();
  setupMongo();
});
