require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const router = require("./src/router");
const passport = require("passport");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { connectToMongo } = require("./src/config/mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

const expressSession = session({
  secret: process.env.SESSION_SECRET,
  name: "user",
  resave: false,
  saveUninitialized: true,
  cookie: {
    sessionToken: null,
    expires: null,
  },
});

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession);
app.use(passport.authenticate("session"));

app.use(function (req, res, next) {
  var msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !!msgs.length;
  req.session.messages = [];
  next();
});

app.use("/", router);

// catch 404 and forward to error handler
app.use(function (_, _, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error("err" + err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");

  next();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  // connectToMongo();
});
