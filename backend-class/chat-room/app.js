require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var chatRouter = require("./routes/chat");

const { connectToMongo, setupMongo } = require("./config/mongoose");

connectToMongo();
setupMongo();

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/chat", chatRouter);

module.exports = app;
