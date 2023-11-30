"use scrict";

function verifyUsername(username) {
  if (username.length < 3 || username.length > 8) {
    alert("Error: Invalid username");
    return false;
  } else if (username != "admin") {
    alert(`Error: I don't know ${username}`);
    return false;
  } else {
    alert("Success: Access granted");
    return true;
  }
}

// const username = prompt("Username:");
// verifyUsername(username);

function showComputer(computerName) {
  return !computerName ? "<h1>My Computer</h1>" : `<h1>${computerName}</h1>`;
}

document.body.innerHTML = showComputer("Apple");
// const element = document.createElement("div");
const element = document.body.appendChild(document.createElement("div"));
element.innerHTML = showComputer();

function checkAge(age) {
  return age > 18 ? true : "under 18";
}

// console.log(checkAge(15));
// console.log(checkAge(20));

function checkAge(age) {
  return age > 18 || "under 18";
}

// console.log(checkAge(15));
// console.log(checkAge(20));

function min(a, b) {
  return a < b ? a : b;
}

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

function pow(x, n) {
  return Math.pow(x, n);
}

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

function pow(x, n) {
  return n === 0 ? 1 : x ** n;
}

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

function incrementTemperature(temperature, increment = 2) {
  const tempMin = 10;
  while (temperature < tempMin) {
    temperature += increment;
  }
  return temperature;
}

function calculateTemperature(currentTemperature, incrementTemperature) {
  console.log(`currentTemperature: ${currentTemperature}`);

  const tempMax = 50;
  const tempMin = 10;

  let temperature = currentTemperature;
  if (currentTemperature < tempMin) {
    temperature = incrementTemperature(currentTemperature, 3);
  } else if (currentTemperature > tempMax) {
    while (temperature > tempMax) {
      temperature -= 2;
    }
  }

  return temperature;
}

const tests = [-2, 60, 33];
for (const test of tests) {
  console.log(`test: ${test}`);
  const temperature = calculateTemperature(test, incrementTemperature);
  console.log(`temperature: ${temperature}`);
}
