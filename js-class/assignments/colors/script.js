const changeColorButton = document.querySelector(".change-color-button");

changeColorButton.addEventListener("click", (e) => {
  const squares = document.getElementsByClassName("square");
  for (const square in squares) {
    const squareElement = squares[square];

    let squareColor;
    try {
      squareColor = squareElement.style.backgroundColor;
    } catch (e) {
      continue;
    }

    if (square == 0) {
      squareColor = squareColor == "red" ? "yellow" : "red";
    } else if (square == 1) {
      squareColor = squareColor == "blue" ? "red" : "blue";
    } else if (square == 2) {
      squareColor = squareColor == "yellow" ? "blue" : "yellow";
    } else {
      continue;
    }

    squareElement.style.backgroundColor = squareColor;
  }
});

let students = ["Felipe", "Gabriel", "Jane", "Yesong"];
console.log("students", students);

// let output = "";
// for (const student of students) {
//   output += student + " ";
// }
// console.log(output);

let newStudents = ["Karen", "Kevin", "Raymund"];
console.log("newStudents", newStudents);

for (const newStudent of newStudents) {
  students.push(newStudent);
}
console.log("students", students);

const studentsLength = students.length;
for (let i = 0; i < studentsLength; i++) {
  students.pop();
}
console.log("students", students);

newStudents = ["Sarah", "Diana"];
console.log("newStudents", newStudents);

for (const newStudent of newStudents) {
  students.push(newStudent);
}
console.log("students", students);

const correctNumber = 30;
let isCorrect = false;

while (!isCorrect) {
  let numberGuessed = prompt("Guess a number");

  let numberElement = document.createElement("p");
  numberElement.innerHTML = numberGuessed;
  document.querySelector(".guesses").appendChild(numberElement);

  isCorrect = numberGuessed == correctNumber;
}

// let styles = ["Jazz", "Blues"];
let styles = ["Jazz", "Blues", "Funk", "Samba"];
console.log("styles", styles);

styles.push("Rock-n-Roll");
console.log("styles", styles);

const middle = Math.floor(styles.length / 2);
console.log(middle);

let middleStyle = styles[middle];
console.log(middleStyle);

styles[middle] = "Classics";
console.log("styles", styles);

styles.shift();
console.log("styles", styles);
styles.unshift("Reggae");
console.log("styles", styles);
styles.unshift("Rap");
console.log("styles", styles);
styles.unshift("Funk");
console.log("styles", styles);

function isNumber(n) {
  return !isNaN(n) && isFinite(n);
}

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("A number please?", 0);
    if (value === "" || value === null || !isNumber(value)) break;
    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());
