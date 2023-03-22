// 8
function sanitize (string) {
  if (typeof string !== 'string') {
    throw Error('argument must be string');
  }
  return string.replaceAll(' ', '');
}

// console.log(sanitize('    Hello World     '));
// console.log(sanitize('Hello'));
// console.log(sanitize('               '));

// 9
function isAnagram (firstStr, secondStr) {
  firstStr = sanitize(firstStr.toLowerCase());
  secondStr = sanitize(secondStr.toLowerCase());

  // if lengths are not equal, then it's not an anagram
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  const letters = new Map();

  Array.from(firstStr).forEach(letter => {
    if (letters.has(letter)) {
      letters.set(letter, letters.get(letter) + 1);
    } else {
      letters.set(letter, 1);
    }
  });

  Array.from(secondStr).forEach(letter => {
    if (letters.has(letter)) {
      const letterCount = letters.get(letter) - 1;
      if (letterCount === 0) {
        letters.delete(letter);
      } else {
        letters.set(letter, letterCount);
      }
    } else {
      /* if the second string has a letter not in first string, then its not
      an anagram */
      return false;
    }
  });

  return letters.size === 0;
}

// console.log(isAnagram('anagram', 'nag a ram'));
// console.log(isAnagram('anagram', 'bnagram'));
// console.log(isAnagram('anagram', 'b'));

// 10
function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw Error('argument must be string');
  }
  str = sanitize(str.toLowerCase());
  const lowerHalf = str.slice(0, Math.floor(str.length / 2));
  return str.endsWith(lowerHalf.reverse());
}

// console.log(isPalindrome('racecar'));
