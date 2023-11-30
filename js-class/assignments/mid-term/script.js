for (let number = 1; number <= 100; number++) {
  const isNumberFizz = number % 3 === 0;
  const isNumberBuzz = number % 5 === 0;
  const isNumberFizzBuzz = isNumberFizz && isNumberBuzz;

  if (isNumberFizzBuzz) {
    output = "FizzBuzz";
  } else if (isNumberFizz) {
    output = "Fizz";
  } else if (isNumberBuzz) {
    output = "Buzz";
  } else {
    output = number;
  }

  console.log(output);
}
