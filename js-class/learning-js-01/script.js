// let age = prompt("How old are you?");
// const isAdult = age > 18 ? true : false;
// alert("Is adult? " + isAdult);

// const thomasAge = 31;
// let guess = prompt("Guess Thomas age");

// const isCorrect = guess == thomasAge ? true : false;
// alert("Correct? " + isCorrect);

// let answer = "ECMAScript";
// guess = prompt("What's the 'official' name of JavaScript?");

// let output = guess === answer ? "Right!" : `You don't know? '${answer}'`;
// alert(output);

// const number = prompt("Input a number");
// if (number > 0) {
//   output = 1;
// } else if (number < 0) {
//   output = -1;
// } else {
//   output = 0;
// }
// alert(output);

// const a = 1;
// const b = 3;

// const result = a + b < 4 ? "Below" : "Over";
// alert(result);

function checkUserName(userName) {
  if (!userName) {
    alert("Canceled!");
    return false;
  }

  const isAdmin = userName.toLowerCase() === "admin" ? true : false;
  if (!isAdmin) {
    alert("I don't know you!");
    return false;
  }

  const password = prompt("Password?");
  if (!password) {
    alert("Canceled!");
    return false;
  }

  const correctPassword = password === "TheMaster" ? true : false;
  if (correctPassword) {
    alert("Welcome!");
    return true;
  } else {
    alert("Wrong password!");
    return false;
  }
}

// const userName = prompt("Who's there?");
// checkUserName(userName);

let output;
let userInput = prompt("Insert something");

if (userInput / 1 == userInput) {
  output = userInput;
} else if (!userInput) {
  output = "Okay.";
} else {
  output = "string";
}

alert(output);
