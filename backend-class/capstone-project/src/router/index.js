const router = require("express").Router();
const authentication = require("./authentication");
const users = require("./users");
const products = require("./products");
const categories = require("./categories");

router.get(
  "/",
  (req, res, next) => {
    if (!req.user) {
      return res.render("home");
    }
    next();
  },
  function (req, res, next) {
    res.locals.filter = null;
    res.render("index", { user: req.user });
  }
);

router.use("/auth", authentication);
router.use("/categories", categories);
router.use("/users", users);
router.use("/products", products);

module.exports = router;
