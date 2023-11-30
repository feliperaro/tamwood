const { register } = require("../controllers/authentication");
const { authentication, random } = require("../helpers/");
const express = require("express");
const passport = require("passport");

const LocalStrategy = require("passport-local");
const { getUserByUsername } = require("../models/user");

passport.use(
  new LocalStrategy(async function (username, password, done) {
    const user = await getUserByUsername(username).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) {
      return done(null, false);
    }
    const expectedPassword = authentication(user.authentication.salt, password);
    if (user.authentication.password !== expectedPassword) {
      return done(null, false);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();
    return done(null, user);
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

const router = express.Router();

router.get("/login", (_, res) => {
  res.render("login");
});

router.post(
  "/login/password",
  passport.authenticate("local", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/auth/login",
    failureMessage: true,
  })
);

router.use("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.get("/signup", function (_, res) {
  res.render("signup");
});
router.post("/signup", register);

module.exports = router;
