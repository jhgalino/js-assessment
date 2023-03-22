// 2
/* this function creates an array of random integers from the min to max - 1 */
function generateRandom (n) {
  const arr = new Array(n);
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
  return arr.reduce((prev, curr) => {
    if (typeof prev !== 'number' || typeof curr !== 'number') {
      throw Error('array has non-number element');
    }
    return prev + curr;
  }, 0);
}

// 4
function reverseArray (arr) {
  return arr.slice().reverse();
}

// 5
function sortLowToHigh (arr) {
  if (arr.some(item => typeof item !== 'number')) {
    throw Error('argument has non-number element');
  }
  const sorted = arr.slice();
  return sorted.sort((a, b) => a - b);
}

// 6
function filterNegative (arr) {
  return arr.filter(num => {
    if (typeof num !== 'number') {
      throw Error('array has non-number element')
    }
    return num > 0;
  });
}

// const test = generateRandom(25);
// console.log(`test array: ${test}`);
// console.log(`array sum: ${arraySum(test)}`);
// console.log(`reverse array: ${reverseArray(test)}`);
// console.log(`sort low to high: ${sortLowToHigh(test)}`);
// console.log(`filter negative: ${filterNegative(test)}`);
