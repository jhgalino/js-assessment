// 8
function sanitize (string) {
  return string.replaceAll(' ', '');
}

// console.log(sanitize('    Hello World     '));
// console.log(sanitize('Hello'));
// console.log(sanitize('               '));

// 9
function isAnagram (firstStr, secondStr) {
  firstStr = sanitize(firstStr);
  secondStr = sanitize(secondStr);

  // if lengths are not equal, then it's not an anagram
  if (firstStr.length !== secondStr.length) {
    return false;
  } else {
    const letters = new Map();

    firstStr.split('').forEach(letter => {
      if (letters.has(letter)) {
        letters.set(letter, letters.get(letter) + 1);
      } else {
        letters.set(letter, 1);
      }
    });

    secondStr.split('').forEach(letter => {
      if (letters.has(letter)) {
        letters.set(letter, letters.get(letter) - 1);
      } else {
        /* if the second string has a letter not in first string, then its not
        an anagram */
        return false;
      }
    });

    return [...letters.values()].every(num => num === 0);
  }
}

// console.log(isAnagram('anagram', 'nag a ram'));
// console.log(isAnagram('anagram', 'bnagram'));
// console.log(isAnagram('anagram', 'b'));

// 10
function isPalindrome (str) {
  str = sanitize(str.toLowerCase());
  return str === [...str].reverse().join('');
}

// console.log(isPalindrome('racecar'));
