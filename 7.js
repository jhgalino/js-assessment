function isDivisibleBy10 (num) {
  if (typeof num !== 'number') {
    throw Error('function only accepts a number');
  }
  return num % 10 === 0;
}

console.log(isDivisibleBy10(30));
console.log(isDivisibleBy10(25));
console.log(isDivisibleBy10(23.4));
console.log(isDivisibleBy10('10'));
