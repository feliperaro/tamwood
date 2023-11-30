const crypto = require("crypto");
const SECRET = "my-secret-key";

const random = () => crypto.randomBytes(128).toString("base64");
const authentication = (salt, password) => {
  if (salt === null || password === null) {
    return null;
  }
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};

const isValidEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

const isValidUsername = (username) => {
  const minLength = 3;
  const maxLength = 20;

  if (username.length < minLength || username.length > maxLength) {
    return false;
  }

  return true;
};

const isValidPassword = (password) => {
  const minLength = 4;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (password.length < minLength) {
    return false;
  }

  if (!(hasUppercase && hasLowercase && hasNumber)) {
    return false;
  }

  return true;
};

const isValidProduct = (product) => {
  const requiredFields = ["name", "description", "price", "inStock"];
  for (let field of requiredFields) {
    if (product[field] === undefined) {
      return {
        isValid: false,
        message: `missing required field. ${field}`,
      };
    }
  }

  if (typeof product.price !== "number" || product.price <= 0) {
    return {
      isValid: false,
      message: "product price is not valid",
    };
  }
  if (typeof product.inStock !== "number") {
    return {
      isValid: false,
      message: "product inStock is not valid",
    };
  }

  return {
    isValid: true,
    message: "product is valid",
  };
};

module.exports = {
  authentication,
  random,
  isValidEmail,
  isValidUsername,
  isValidPassword,
  isValidProduct,
};
