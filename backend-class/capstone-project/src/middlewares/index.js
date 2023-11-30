const { get, merge } = require("lodash");
const { getUserBySessionToken } = require("../models/user");

const isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id");

    if (!currentUserId) {
      return res.sendStatus(403);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const isAuthenticaded = async (req, res, next) => {
  console.log(req.cookies);
  try {
    const sessionToken = req.cookies["EPILEF-AUTH"];
    console.log("Session token", sessionToken);
    if (!sessionToken) {
      return res.status(403).json({ message: "Session token is required" });
    }

    const existingUser = await getUserBySessionToken(sessionToken);
    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });
    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

module.exports = {
  isAuthenticaded,
  isOwner,
};
