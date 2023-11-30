function calculateTemperature(currentTemperature) {
  console.log(`currentTemperature: ${currentTemperature}`);

  const tempDiff = 2;
  const tempMax = 50;
  const tempMin = 10;

  let temperature;
  if (currentTemperature < tempMin) {
    for (let temp = currentTemperature; temp < tempMin; temp += tempDiff) {
      console.log(`Incrementing temperature: ${temp}`);
      temperature = temp;
    }
  } else if (currentTemperature > tempMax) {
    while (currentTemperature > tempMax) {
      console.log(`Decrementing temperature: ${currentTemperature}`);
      temperature -= tempDiff;
    }
  }

  return temperature;
}

const tests = [-23, 71, 45];
for (const test of tests) {
  const temperature = calculateTemperature(test);
  console.log(`temperature: ${temperature}`);
}
