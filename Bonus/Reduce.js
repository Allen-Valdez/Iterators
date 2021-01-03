const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  let acc = accumulator;
  let curr = currentValue;
  console.log(`The value of accumulator: ${acc}`);
  console.log(`The value of currentValue: ${curr}`);
  return accumulator + currentValue
}, 10);

console.log(`The new number in the array is now: ${newSum}`)