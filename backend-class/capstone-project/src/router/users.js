const { getAllUsers } = require("../controllers/users");
const router = require("express").Router();

var ensureLogIn = require("connect-ensure-login").ensureLoggedIn;
var ensureLoggedIn = ensureLogIn("/");

router.get("/", ensureLoggedIn, getAllUsers);

module.exports = router;
