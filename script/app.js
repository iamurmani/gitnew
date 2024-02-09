function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Check if the current element is a number
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  return sum;
}

const mixedArray = [1, 2, "hello", 4, "world", 6];
const total = calculateSum(mixedArray);
console.log(total);
