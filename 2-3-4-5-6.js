// 2
/* this function creates an array of random integers from the min to max - 1 */
function generateRandom (n) {
  const arr = [];
  arr.length = n;
  return arr.fill(0).map(() => {
    const max = 100;
    const min = -100;
    const coeff = Math.random() < 0.5 ? 1 : -1;
    const randFloat = Math.random() * (max - min) + min;
    return Math.floor(randFloat) * coeff;
  });
}

// 3
/* returns the sum of all the numbers in an array. return NaN if
not all elements are numbers */
function arraySum (arr) {
  return arr.every(val => typeof val === 'number')
    ? arr.reduce((prev, curr) => prev + curr)
    : NaN;
}

// 4
function reverseArray (arr) {
  return [...arr].reverse();
}

// 5
function sortLowToHigh (arr) {
  if (arr.every(item => typeof item === 'number')) {
    const sorted = [...arr];
    return sorted.sort((a, b) => a - b);
  } else {
    throw Error('function only accepts an array of numbers');
  }
}

// 6
function filterNegative (arr) {
  if (arr.every(item => typeof item === 'number')) {
    return arr.filter(num => num > 0);
  } else {
    throw Error('function only accepts array of numbers');
  }
}

const test = generateRandom(25);
console.log(`test array: ${test}`);
console.log(`array sum: ${arraySum(test)}`);
console.log(`reverse array: ${reverseArray(test)}`);
console.log(`sort low to high: ${sortLowToHigh(test)}`);
console.log(`filter negative: ${filterNegative(test)}`);
