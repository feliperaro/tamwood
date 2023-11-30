const { createUser, getUserByEmail, getUserByUsername } = require("../models/user");
const {
  authentication,
  random,
  isValidEmail,
  isValidUsername,
  isValidPassword,
} = require("../helpers");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      let msgError = "username and password are required";
      return res.status(400).json({ error: msgError });
    }

    const user = await getUserByUsername(username).select(
      "+authentication.salt +authentication.password"
    );
    
    console.log("user", user);
    if (!user) {
      let msgError = "User not found";
      return res.status(400).json({ error: msgError });
    }
    
    const expectedPassword = authentication(user.authentication.salt, password);
    if (user.authentication.password !== expectedPassword) {
      let msgError = "Incorrect password";
      return res.status(403).json({ error: msgError });
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();
    res.cookie("sessionToken", user.authentication.sessionToken, {
      domain: "localhost",
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!isValidUsername(username)) {
      return res.status(400).json({ error: "Invalid username, try again!" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email, try again!" });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({ error: "Invalid password, try again!" });
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    req.login(user, function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login,
  register: signup,
};
